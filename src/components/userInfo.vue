<template>
  <div class="userInformation">
    <header_/>
    <el-card class="userInfo_card">
      <div class="userInfo">
        <img
            src="https://thecomputer-1308737201.cos.ap-shanghai.myqcloud.com/UserAvatar/10759616-a3aa-4032-bd4f-5cebe1c8c2f3.png">
        <div class="username">
          <span>可乐画心 <el-icon style="vertical-align: middle;color: hotpink"><Female/></el-icon></span>
        </div>

        <el-button class="editInfo" type="primary">编辑资料</el-button>
        <el-button class="toIndex" @click="$router.push('/detail')">首页</el-button>
      </div>

    </el-card>

    <div style="display: flex;width: 1000px">
      <el-card class="order_card">
        <template #header>
          <div class="card-header">
            <span>我的订单</span>
          </div>
        </template>
      </el-card>
      <el-card class="realUsers">
        <template #header>
          <div class="card-header">
            <span>绑定的入住人</span>
            <el-button @click="dialogVisible_AddRealInfo=true" round type="primary" style="margin-left: 150px">添加入住人信息
            </el-button>
          </div>
        </template>

        <el-table :data="realUsers">
          <el-table-column label="姓名" prop="realname"></el-table-column>
          <el-table-column label="性别" prop="gender"></el-table-column>
          <el-table-column label="操作">
            <el-button type="danger" round size="small">移除</el-button>
          </el-table-column>
        </el-table>
      </el-card>
    </div>
    <el-dialog
        v-model="dialogVisible_AddRealInfo"
        title="添加入住人信息"
        width="25%"
        :before-close="handleClose"
    >
      <el-form :model="addRealUserData"
               label-width="80px"
               label-position="left"

      >
        <el-form-item label="姓名">

          <el-input v-model="addRealUserData.realname"></el-input>
        </el-form-item>

        <el-form-item label="性别">
          <el-select
              v-model="addRealUserData.gender"
              placeholder="选择性别"
          >
            <el-option
                v-for="item in gender"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="addRealUserData.age"></el-input>
        </el-form-item>
        <el-form-item label="身份证">
          <el-input v-model="addRealUserData.identificationnumber"></el-input>
        </el-form-item>
        <el-form-item label="电话号码">
          <el-input v-model="addRealUserData.phone"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible_AddRealInfo = false">取消</el-button>
        <el-button type="primary" @click="addRealUser()"
        >添加</el-button
        >
      </span>
      </template>
    </el-dialog>
  </div>
</template>
<script>
import header_ from "@/components/header";
import realUserAPI from "@/api/realUser";
import cookie from "@/utils/cookie";

export default {
  name: 'Information',
  components: {header_},
  data() {
    return {
      realUsers: [
        {
          realname: "黄某某",
          gender: "男",
        }
      ],
      dialogVisible_AddRealInfo: false,
      gender: [
        {
          value: '男',
          label: '男'
        }, {
          value: '女',
          label: '女'
        },
      ],
      addRealUserData: {
        realname: "",
        gender: "",
        age: null,
        identificationnumber: "",
        phone: ""
      },
      query: {
        userId: cookie.getTokenByName("userId")
      }
    }
  },
  created() {
    this.findPage()

  },
  methods: {
    addRealUser() {
      realUserAPI.addRealUser(this.addRealUserData).then(res => {

      })
    },
    findPage() {
      realUserAPI.findRealPage(this.query).then(res => {
        this.realUsers = res.data
      })
    }


  }
}
</script>
<style lang="scss">
.userInformation {
  display: flex;
  flex-direction: column;
  align-items: center;

  .userInfo_card {
    margin-top: 25px;
    height: 200px;
    width: 1000px;

    .userInfo {
      position: relative;
      display: flex;
      margin-top: 50px;

      .editInfo {
        position: absolute;
        bottom: 20px;
        right: 80px;
      }

      .toIndex {
        position: absolute;
        top: -55px;
        right: 0px;
      }
    }

    img {
      width: 100px;
    }

    .username {
      font-size: 20px;
      margin-top: 50px;
      margin-left: 10px;
    }

  }

  .order_card {
    width: 550px;
    margin-top: 20px;

    .card-header {
      font-size: 20px;

    }
  }

  .realUsers {
    margin-top: 20px;
    margin-left: 20px;
    width: 430px;
  }
}
</style>