<template>
  <div>
    <Head title="购物车" :show="true"></Head>
    <!-- 已登录 -->
    <div v-if="username">
      <div class="dangdang">
        <i class="iconfont icon-lingquan"></i>
        <span>当当网</span>
        <span style="float:right">已免运费</span>
      </div>
      <div class="list" v-for="(item,i) in result" :key="i">
        <div class="image">
          <img :src="item.image" alt>
        </div>
        <div class="right">
          <p>{{item.name}}</p>
          <div class="price">
            <span>￥{{item.price}}</span>
            <span>小计:{{(item.price*item.num).toFixed(2)}}</span>
            <div>
              <span @click="reduce(item)">-</span>
              <input type="number" v-model="item.num" style="width:20px">
              <span @click="add(item)">+</span>
            </div>
          </div>
        </div>
      </div>
      <!-- <p>{{username}}</p> -->
    </div>
    <!-- 未登录 -->
    <div class="nologin" v-else>
      <div class="nologin_top">
        <img src="http://121.196.222.17/imgs/timg.gif" alt>
        <p>您还没有登陆，请先登录再查看购物车信息</p>
        <!-- <mt-button type="default">default</mt-button> -->
        <mt-button id="btn" type="primary" @click="login">马上登录</mt-button>
        <mt-button id="btn" type="danger" @click="register">立即注册</mt-button>
      </div>
      <div>
        <p class="title">
          <i class="iconfont icon-aixin-yixuanzhong"></i>
          <span>猜您可能喜欢</span>
          <span></span>
        </p>
        <ul class="books">
          <li v-for="(item,i) in list" :key="i">
            <img v-lazy="item.image_url" alt>
            <p>{{item.name}}</p>
            <p>{{item.price}}</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- footer -->
    <div class="footer">
      <!-- <input type="checkbox"> -->
      <!-- <span>全选</span> -->
      <span style="color:#ff2832">合计：￥{{total}}</span>
      <span class="jiesuan" @click="commit">结算</span>
    </div>
  </div>
</template>
<script>
import { media } from "../../tools/toolVue";
export default {
  data() {
    return {
      list: [],
      result: [],
      username: ""
    };
  },
  computed: {
    total: {
      get() {
        var total = 0;
        this.result.map(item => {
          total += item.price * item.num;
        });
        return total.toFixed(2);
      }
    }
  },
  created() {
    this.username = localStorage.username;
    // console.log(this.username);
    this.$http.get("http://59.110.241.166:1810/vue/list").then(res => {
      this.list = res.data.result.slice(0, 6);
      // console.log(localStorage.username);
    });
    this.$http
      .get("http://59.110.241.166:1810/vue/shopcar", {
        params: {
          username: this.username
        }
      })
      .then(res => {
        this.result = res.data.result;
        console.log(this.result);
      });
  },
  mounted() {
    console.log("shopcar", this.$route.name);
    setTimeout(() => {
      media.$emit("loadHome", this.$route.name);
    }, 50);
  },
  methods: {
    commit() {
      this.$router.push({ name: "commit" });
    },
    reduce(item) {
      item.num <= 1 ? item.num : item.num--;
      this.$http
        .get("http://59.110.241.166:1810/vue/shopcarReduce", {
          params: {
            id: item._id,
            num: item.num
          }
        })
        .then(res => {
          console.log(res.data);
        });
    },
    add(item) {
      item.num++;
      this.$http
        .get("http://59.110.241.166:1810/vue/shopcarAdd", {
          params: {
            id: item._id,
            num: item.num
          }
        })
        .then(res => {
          console.log(res.data);
        });
    },
    login() {
      this.$router.push({ name: "login" });
    },
    register() {
      this.$router.push({ name: "register" });
    }
  }
};
</script>
<style>
.nologin_top {
  text-align: center;
  background-color: #fff;
}
img {
  width: 70%;
  margin: auto;
}
.nologin_top p {
  line-height: 0.5rem;
  color: #777;
  font-size: 0.4rem;
  padding: 0 0.2rem;
}

/* p {
  text-align: center;
} */
#btn {
  margin: 30px;
}
.title {
  height: 0.6rem;
  line-height: 0.6rem;
  width: 85%;
  margin: 0.3rem auto;
  text-align: center;
  position: relative;
}
.title > i:nth-child(1) {
  color: red;
}
.title > span:nth-child(3) {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0;
  border-top: 0.02rem solid #d4d3d3;
  z-index: -1;
}
.books {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.books li {
  width: 32%;
  margin-bottom: 0.18rem;
  margin-right: 2%;
  background: #fff;
}
.books li:nth-child(3n) {
  margin-right: 0;
}
.books li > p:nth-child(2) {
  height: 0.7rem;
  line-height: 0.38rem;
  overflow: hidden;
}
.books li > p:nth-child(3) {
  color: #e53e30;
}
.list {
  display: flex;
  background: #fff;
  padding: 0.2rem;
  margin-top: 10px;
  -webkit-animation: bounceInRight 0.8s;
  animation: bounceInRight 0.8s;
}
.list .image {
  width: 20%;
}
.list img {
  width: 100%;
}
.list .right {
  width: 80%;
}
.list .right p {
  line-height: 0.3rem;
  height: 0.55rem;
  overflow: hidden;
  color: #777;
  margin-right: 0.3rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 360px;
}
.list .right .price > span {
  color: #ff2832;
  margin-right: 0.2rem;
}
.list .right .price {
  width: 100%;
  margin: 0.2rem 0.2rem 0.2rem 0;
  padding-right: 0.2rem;
  line-height: 0.5rem;
  display: flex;
  justify-content: space-between;
}
.iconfont {
  color: red;
}
.dangdang {
  /* display: flex; */
  padding: 0.3rem 0.3rem;
  justify-content: space-between;
  font-size: 0.3rem;
  color: #787878;
  line-height: 0.6rem;
  border-bottom: 0.01rem solid #e6e6e6;
}
.price input {
  width: 20px;
}
.footer {
  position: fixed;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  border-top: 0.01rem solid #e3e3e3;
  bottom: 100px;
  left: 0;
  background-color: #fff;
}
.footer input {
  margin: 40px 0 0 40px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
}
.footer span {
  margin-left: 30px;
}
.footer .jiesuan {
  background-color: #fb4741;
  color: #fff;
  width: 130px;
  display: block;
  text-align: center;
  float: right;
}
</style>

