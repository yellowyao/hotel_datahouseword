<template>
  <div class="header ">
    <el-row>
      <el-col :offset="1" :span="8">
        <div class="centerAndFlex">
          <el-avatar :size="50"
                     src="https://thecomputer-1308737201.cos.ap-shanghai.myqcloud.com/UserAvatar/10759616-a3aa-4032-bd4f-5cebe1c8c2f3.png"/>
          <span class="title" @click="$router.push('/')"> 上电力国际连锁酒店(临港总店)</span>
        </div>
      </el-col>
      <el-col :offset="10" :span="4">


        <div v-if="isLogin" class="centerAndFlex ">
          <el-avatar :size="50"
                     :src="user.url"/>
          <el-popover
              v-model:visible="visible"
              placement="bottom"
              trigger="click"
          >

            <template #reference>
              <span class="user">{{ user.name }}</span>
            </template>
            <div style="display: flex; flex-direction: column;
              align-items: center;">
              <el-button @click="toInformation()" style="margin: 0 0 10px;">主页信息</el-button>
              <el-button @click="loginOut()" style="margin: 0 ">退出
              </el-button>
            </div>
          </el-popover>


          <el-tag class="ml-2" style="margin-left: 10px;" type="success">VIP {{ parseInt(user.vip / 100) }}</el-tag>


        </div>
        <div v-else class="centerAndFlex">
          <el-button round @click="toLogin()">登录</el-button>
          <el-button round @click="toRegister()">注册</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import cookie from "@/utils/cookie";

export default {
  name: "header",
  data() {
    return {
      isLogin: false,
      user: {
        name: "",
        url: "",
        vip: 0,
      }
    }
  },
  created() {
    if (cookie.getTokenByName("user")) {
      this.isLogin = true
      this.user.name = cookie.getTokenByName("userName")
      this.user.url = cookie.getTokenByName("userUrl")
      this.user.vip = cookie.getTokenByName("userVip")
    }
  },
  methods: {
    toLogin() {
      this.$router.push('login')
    },
    loginOut() {
      this.isLogin = false
      cookie.removeTokenByName("user")
      this.$router.push('/detail')
    },
    toRegister() {
      this.$router.push('/register')
    },
    toInformation() {
      this.$router.push('/userInfo')
    }
  }
}
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 60px;
  background: #fff;
  box-shadow: rgb(83, 140, 140) 0px 10px 10px -10px;

  .el-row {
    height: 100%;

    .title {
      font-size: 25px;
      cursor: pointer;
      margin-left: 5px;
    }

    .user {

      font-size: 18px;
      margin-left: 10px;
      cursor: pointer;
    }


    .operate {
      position: absolute;
      top: 45px;
      right: 52px;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #f6f6f6;


      .el-button {
        margin: 0 0 10px;
        width: 100%;
        background: none;
        color: black;
      }

      .el-button:hover {
        transform: scale(1.05);
      }
    }

    .centerAndFlex {
      display: flex;
      height: 100%;
      align-items: center;
    }

  }


}
</style>