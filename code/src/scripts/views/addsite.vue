<template>
  <div>
    <Head id="head" title="添加收货地址" :show="true"></Head>
    <div class="box">
      <mt-field label="收货人" placeholder="请输入收货人" v-model="name"></mt-field>
      <mt-field label="手机号码" placeholder="请输入手机号码" type="email" v-model="usertel"></mt-field>

      <mt-field label="详细地址" placeholder="请输入详细地址" type="text" v-model="site"></mt-field>
      <br>
      <mt-button type="danger" size="large" @click="addsite">确认添加</mt-button>
    </div>
  </div>
</template>
<script>
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      name: "",
      usertel: "",
      site: "",
      username: ""
    };
  },
  methods: {
    addsite() {
      this.$http
        .post("http://59.110.241.166:1810/vue/addsite", {
          params: {
            consignee: this.name,
            usertel: this.usertel,
            site: this.site,
            username: localStorage.username
          }
        })
        .then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
            MessageBox("提示", "添加地址成功");
            this.$router.push({ name: "commit" });
          } else {
            MessageBox("提示", "添加地址失败");
          }
        });
    }
  }
};
</script>
