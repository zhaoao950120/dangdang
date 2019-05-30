<template>
  <div>
    <Head title="登录" :show="true"></Head>
    <div class="box">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username" class="searth"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password" class="searth"></mt-field>
      <mt-button type="primary" size="large" id="btn" @click="login">登陆</mt-button>
      <mt-button type="default" size="large" id="btn" @click="register">注册</mt-button>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$http
        .post("http://59.110.241.166:1810/vue/login", {
          params: {
            username: this.username,
            password: this.password
          }
        })
        .then(res => {
          console.log(res);
          if (res.data.code == 200) {
            Toast({
              message: res.data.msg,
              position: "middle",
              duration: 2000
            });
            localStorage.username = this.username;
            this.$router.push({ name: "home" });
          } else {
            Toast({
              message: res.data.msg,
              position: "middle",
              duration: 2000
            });
          }
        });
    },
    register() {
      this.$router.push({ name: "register" });
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

