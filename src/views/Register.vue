<template>
  <el-card class="panel">
    <div class="top">
      <router-link to="/login">
        <el-button size="mini" class="login-btn" icon="el-icon-caret-left">登录</el-button>
      </router-link>
      <span class="title">注册</span>
    </div>
    <el-col :span="8">
      <img src="../assets/logo_.png" />
    </el-col>
    <el-col :span="16">
      <el-form ref="form" :model="form" label-width="80px" label-position="left">
        <el-form-item
          label="用户名："
          prop="username"
          :rules="[
                    {required: true, message: '用户名不能为空!'},
                ]"
        >
          <el-input prefix-icon="el-icon-user" type="username" v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item
          label="密  码："
          prop="password"
          :rules="[
                    {required: true, message: '密码不能为空!'},
                ]"
        >
          <el-input prefix-icon="el-icon-lock" v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item
          label="验证码："
          prop="code"
          :rules="[
                    {required: true, message: '验证码不能为空!'},
                ]"
        >
          <el-input prefix-icon="el-icon-notebook-1" v-model="form.code" type="code" >
            <el-button slot="append">OA5DH</el-button>
          </el-input>
          
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form')" :loading="loading">注册</el-button>
          <el-button @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-card> 
</template>


<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        code: ""
      },
      loading: false
    };
  },
  methods: {
    reset() {
      this.form.username = "";
      this.form.password = "";
      this.form.code = "";
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true;
          console.log("succeed submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
