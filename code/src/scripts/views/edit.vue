<template>
  <div>
    <Head id="head" title="收货地址" :show="true"></Head>
    <div class="box" v-for="(item,i) in list" :key="i">
      <div class="box_top">
        <p>
          <span>{{item.consignee}}</span>
          <span>{{item.usertel}}</span>
        </p>
        <p>{{item.site}}</p>
      </div>
      <div class="box_bottom">
        <input type="checkbox">
        <p>
          <span>设置为默认地址</span>
          <span style="margin-left:15px" @click="del(item._id)">删除</span>
          <span>编辑</span>
        </p>
      </div>
    </div>
    <footer @click="addsite">
      <p>
        <i class="iconfont icon-ziyuan"></i>
        <span>添加新地址</span>
      </p>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    addsite() {
      this.$router.push({ name: "addsite" });
    },
    del(id) {
      this.$http
        .get("http://59.110.241.166:1810/vue/delsite", {
          params: {
            id: id
          }
        })
        .then(res => {
          console.log(res.data);
          window.location.reload();
        });
    }
  },
  created() {
    this.$http
      .get("http://59.110.241.166:1810/vue/site", {
        params: {
          username: localStorage.username
        }
      })
      .then(res => {
        this.list = res.data.result;
        // console.log(res.data.result);
      });
  }
};
</script>

<style>
.box {
  border-top: 1px solid rgb(221, 221, 221);
  border-bottom: 1px solid rgb(221, 221, 221);
  margin-bottom: 20px;
  padding: 20px;
  background: rgb(255, 255, 255);
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  line-height: 100px;
  background-color: #fff;
}
.iconfont {
  color: #ec701d;
}
.box_top p {
  padding: 20px 0;
}
.box_bottom {
  color: rgb(160, 160, 160);
  border-top: 1px solid rgb(221, 221, 221);
  line-height: 60px;
}
.box_bottom input {
  float: left;
  margin-top: 20px;
}
.box_bottom p > span:nth-child(2) {
  float: right;
}
.box_bottom p > span:nth-child(3) {
  float: right;
}
</style>

