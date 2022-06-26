<template>
  <div class="login">
    <el-card>
      <h1>登录</h1>
      <span class="register" @click="toRegister()">没有账号？立即注册！</span>
      <el-form
          size="large"
          label-position="top"
          label-width="60px
      "
      >
        <el-form-item label="邮箱:">
          <el-input v-model="user.email"></el-input>
        </el-form-item>
        <el-form-item label="密码:">
          <el-input v-model="user.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" round size="large" @click="login()"
          >登录
          </el-button>
          <el-button round size="large" @click="toFrom()">取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import userApi from '../api/user'
import cookie from "@/utils/cookie";

export default {
  data() {
    return {
      user: {
        email: "369770384@qq.com",
        password: "123456",
      },
    };
  },
  methods: {
    toFrom() {
      this.$router.push('/detail')
    },
    toRegister() {
      this.$router.push('/register')
    },
    login() {
      userApi.login(this.user).then(res => {
        console.log(res.data)
        cookie.setTokenByName("user", res.data.user)
        cookie.setTokenByName("userName", res.data.user.name)
        cookie.setTokenByName("userUrl", res.data.user.avatar)
        cookie.setTokenByName("userId", res.data.user.id)
        this.$router.go(-1)
      })
    }

  }
};
</script>

<style lang='scss'>
.login {
  width: 520px;
  margin: 130px auto 0;
  height: 380px;

  .el-card {
    position: relative;
    height: 100%;
    border-radius: 50px;

    .register {
      position: absolute;
      right: 20px;
      top: 30px;
      color: #fff;
      font-size: 14px;
      background: #ff4500;
      padding: 5px 10px;
      border-radius: 50px;
      cursor: pointer;
    }

    h1 {
      font-size: 40px;
      text-align: center;
      margin-bottom: 20px;
    }

    .el-form {
      width: 60%;
      margin: 0 auto;

      .el-form-item {
        margin-bottom: 30px;
      }

      .el-form-item__label {
        font-size: 22px;
      }

      .el-button {
        margin: auto;
        width: 130px;
      }
    }
  }
}
</style>
