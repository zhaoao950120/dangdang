<template>
  <div>
    <Head title="搜索" :show="true"></Head>
    <div class="search">
      <input type="text" v-model="value">
      <mt-button type="primary" size="small" @click="search">搜索书名</mt-button>
    </div>
  </div>
</template>
<style>
.search input {
  margin-top: 30px;
  width: 75%;
  z-index: 2;
  /* opacity: 0; */
  text-align: left;
  color: #000;
  height: 50px;
  font-size: 25px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      value: "",
      list: [],
      ative: ""
    };
  },
  methods: {
    search() {
      // console.log(this.value);
      this.$http
        .post("http://59.110.241.166:1810/vue/search", {
          params: {
            name: this.value
          }
        })
        .then(res => {
          if (res.data.code == 200) {
            Toast({
              message: res.data.msg,
              position: "middle",
              duration: 2000
            });
            this.$router.push({
              name: "classify",
              params: { result: res.data.result, flag: true }
            });
            console.log(res.data.result);
            this.list = res.data.result;
          } else {
            Toast({
              message: res.data.msg,
              position: "middle",
              duration: 2000
            });
          }
        });
    }
  }
};
</script>


