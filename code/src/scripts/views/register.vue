<template>
  <div>
    <Head title="注册" :show="true"></Head>
    <div class="box">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username" class="searth"></mt-field>
      <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email" class="searth"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password" class="searth"></mt-field>
      <mt-field label="确认密码" placeholder="请输入密码" type="password" v-model="password1" class="searth"></mt-field>
      <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone" class="searth"></mt-field>
      <mt-button type="danger" size="large" id="btn" @click="register">注册</mt-button>
      <mt-button type="primary" size="large" id="btn" @click="login">登录</mt-button>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      password1: "",
      phone: ""
    };
  },
  created() {},
  methods: {
    register() {
      this.$http
        .post("http://59.110.241.166:1810/vue/register", {
          params: {
            username: this.username,
            email: this.email,
            password: this.password,
            password1: this.password1,
            phone: this.phone
          }
        })
        .then(res => {
          if (res.data.code == 200) {
            // Toast({
            //   message: res.data.msg,
            //   position: "middle",
            //   duration: 2000
            // });
            MessageBox("提示", "注册成功");
            this.$router.push({ name: "login" });
          } else {
            Toast({
              message: res.data.msg,
              position: "middle",
              duration: 2000
            });
          }
        });
    },
    login() {
      this.$router.push({ name: "login" });
    }
  }
};
</script>


<style>
.box {
  box-sizing: border-box;
  padding: 0 20px;
}
.searth {
  margin: 20px 0;
}
#btn {
  margin: 30px 0;
}
</style>
