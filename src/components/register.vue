<template>
  <div class="register_">
    <el-card>
      <h1>注册</h1>
      <el-form
          ref="registerForm"
          :model="user"
          :rules="rules"
          label-width="80px"
          size="large"
      >

        <el-form-item label="头像:">
          <el-upload
              :action="uploadUrl"
              :before-upload="beforeAvatarUpload"
              :on-success="handleAvatarSuccess"
              :show-file-list="false"
              class="avatar-uploader"
          >
            <img v-if="user.userUrl" :src="user.userUrl" class="avatar"/>
            <el-icon v-else class="avatar-uploader-icon">
              <Plus/>
            </el-icon>
          </el-upload>
        </el-form-item>
        <el-form-item label="名称:" prop="name">
          <el-input v-model="user.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱:" prop="email">
          <el-input v-model="user.email"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <div class="code">
            <el-button :disabled="isHasSend" @click="getCode()">{{
                codeText
              }}
            </el-button>
            <el-input v-model="user.code" class="codeInput"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input v-model="user.password"></el-input>
        </el-form-item>
        <el-form-item class="button_">
          <el-button
              round
              size="large"
              type="primary"
              @click="register('registerForm')"
          >注册
          </el-button
          >
          <el-button round size="large" @click="toFrom()">取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>

export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      codeText: "获取验证码",
      //头像上传路径
      uploadUrl: "",
      isHasSend: false,
      //表单校验规则
      rules: {
        email: [
          {required: true, message: "请输入邮箱", trigger: "blur"},
          {type: "email", message: "请输入正确的邮箱", trigger: "blur"},
        ],
        password: [
          {required: true, message: "请输入密码", trigger: "blur"},
          {
            min: 6,
            max: 12,
            message: "密码长度在6到12个字符",
            trigger: "blur",
          },
        ],
        code: [
          {required: true, message: "请输入验证码", trigger: "blur"},
          {min: 4, max: 4, message: "请输入4位验证码", trigger: "blur"},
        ],
        name: [
          {required: true, message: "请输入名称", trigger: "blur"},
          {min: 2, max: 5, message: "请输入2到5位名称", trigger: "blur"},
        ],
      },
    };
  },
  methods: {
    //验证码倒计时
    countDown() {
      let time = 60;
      this.isHasSend = true;
      let timer = setInterval(() => {
        time--;
        if (time <= 0) {
          clearInterval(timer);
          this.codeText = "重新发送";
          this.isHasSend = false;
        } else {
          this.codeText = time + "s";
        }
      }, 1000);
    },
    toFrom() {
      this.$router.go(-1)
    }

  },
};
</script>

<style lang="scss">
.register_ {
  width: 550px;
  margin: 5vh auto 0;
  height: 580px;

  .el-card {
    height: 100%;
    border-radius: 50px;

    h1 {
      font-size: 40px;
      text-align: center;
      margin-bottom: 20px;
    }

    .el-form {
      width: 70%;
      margin: 30px 60px 60px;

      .el-form-item {
        margin-bottom: 20px;

        .code {
          margin-top: 10px;
          width: 100%;

          .el-button {
            float: right;
          }

          .codeInput {
            float: right;
            width: 45%;
            border-radius: 20px;
            padding: 0 10px;
          }
        }

        .avatar {
          width: 100px;
          height: 100px;
        }

        .avatar-uploader .el-upload {
          border: 1px dashed var(--el-border-color);
          border-radius: 6px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: var(--el-transition-duration-fast);
        }

        .avatar-uploader .el-upload:hover {
          border-color: var(--el-color-primary);
        }

        .el-icon.avatar-uploader-icon {
          font-size: 28px;
          color: #8c939d;
          width: 100px;
          height: 100px;
          text-align: center;
        }
      }

      .el-form-item__label {
        font-size: 22px;
      }

      .el-button {
        margin: auto;
        width: 130px;
      }

      .button_ {
        margin-top: 30px;
      }
    }
  }
}
</style>