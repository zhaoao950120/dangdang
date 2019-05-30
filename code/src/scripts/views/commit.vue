<template>
  <div>
    <Head id="head" title="订单结算" :show="true"></Head>
    <!-- 地址信息 -->
    <div class="site" v-for="(item,i) in list" :key="i">
      <p>
        <span>{{item.consignee}}</span>
        <span>{{item.usertel}}</span>
      </p>
      <p>
        <i class="iconfont icon-shouhuodizhi" style></i>
        <span>{{item.site}}</span>
        <span id="edit" @click="edit">
          <i class="iconfont icon-qianmingshezhi"></i> 编辑
        </span>
      </p>
    </div>
    <div class="addsite">
      <i class="iconfont icon-tubiaozhizuomoban-copy" style="color:red"></i>
      <span @click="addsite">添加地址信息</span>
    </div>
    <p class="from">
      <i class="iconfont icon-lingquan" style="color:red"></i>
      <span>当当网</span>
    </p>
    <!-- 商品信息 -->
    <div class="booksinfo" v-for="(item,i) in goods" :key="i+1">
      <div class="left">
        <img :src="item.image">
        <p id="bookname">{{item.name}}</p>
      </div>
      <div class="right">
        <p>￥{{item.price}}</p>
        <p>数量：{{item.num}}</p>
      </div>
    </div>
    <div class="moneybox">
      <p class="money">
        <span>商品金额</span>
        <span>￥{{total}}</span>
      </p>
      <p class="money">
        <span>配送费</span>
        <span>￥6.00</span>
      </p>
    </div>
    <footer>
      <span>实付：</span>
      <span>￥{{(total*1+6).toFixed(2)}}</span>
      <span @click="pay">去支付</span>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    pay() {
      this.$router.push({ name: "pay" });
    },
    edit() {
      this.$router.push({ name: "edit" });
    },
    addsite() {
      this.$router.push({ name: "addsite" });
    }
  },
  data() {
    return {
      list: [],
      goods: []
    };
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
    this.$http
      .get("http://59.110.241.166:1810/vue/shopcar", {
        params: {
          username: localStorage.username
        }
      })
      .then(res => {
        // console.log(res.data.result);
        this.goods = res.data.result;
      });
  },
  computed: {
    total: {
      get() {
        var total = 0;
        this.goods.map(item => {
          total += item.price * item.num;
        });
        return total.toFixed(2);
      }
    }
  }
};
</script>


<style>
.site {
  width: 100%;
  overflow: hidden;
  position: relative;
  background: #fff;
  padding-bottom: 0.2rem;
  font-size: 0.3rem;
  border-top: 0.01rem solid #e3e3e3;
  padding: 30px;
  box-sizing: border-box;
}
.site p {
  margin-top: 30px;
}
.site p #edit {
  position: absolute;
  right: 30px;
  bottom: 30px;
}
.from {
  font-size: 35px;
  padding: 9px 15px;
  background-color: #fff;
  margin: 3px 0;
}
.booksinfo {
  padding: 30px 30px 12px;
  background-color: #fff;
  overflow: hidden;
  margin-bottom: 1px;
}
.booksinfo .left {
  float: left;
}
.booksinfo .right {
  float: right;
}
.booksinfo .right p {
  line-height: 46px;
}
.left img {
  height: 1rem;
  width: 100px;
  float: left;
}
footer {
  position: fixed;
  background: #fff;
  bottom: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  font-size: 0.3rem;
  border-top: 0.01rem solid #e3e3e3;
}
footer > span:nth-child(1) {
  float: left;
  margin-left: 30px;
}
footer > span:nth-child(2) {
  color: #ff2832;
  margin-right: 0.5rem;
  float: left;
}
footer > span:nth-child(3) {
  width: 30%;
  background: #ff2832;
  color: #fff;
  display: block;
  float: right;
}
.moneybox {
  margin-top: 10px;
}
.money {
  padding: 20px;
  background-color: #fff;
}
.money span:nth-child(2) {
  float: right;
}
#bookname {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 360px;
}
.addsite {
  padding: 20px;
  background-color: #fff;
  margin-top: 5px;
}
</style>

