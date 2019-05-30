<template>
  <div style="width:100%">
    <Head title="首页" :show="false"></Head>
    <div style="height:150px">
      <!-- 轮播图 -->
      <mt-swipe :auto="3000">
        <mt-swipe-item>
          <img
            src="http://img61.ddimg.cn/upload_img/00087/geq/750x315_dl_0318-1552964951.jpg"
            style="width:100%"
          >
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="http://img50.ddimg.cn/9004720084231620.jpg" style="width:100%">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="http://img55.ddimg.cn/9003330054813025.jpg" style="width:100%">
        </mt-swipe-item>
        <mt-swipe-item>
          <img
            src="http://img61.ddimg.cn/topic_img/gys_0014951/3.1_3.4_750_315.jpg"
            style="width:100%"
          >
        </mt-swipe-item>
        <mt-swipe-item>
          <img
            src="http://img63.ddimg.cn/upload_img/00767/a/fhc750x315-wenyishenghuo-1551699487.jpg"
            style="width:100%"
          >
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 头部导航 -->
    <ul class="ul1">
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-paihangbang"></use>
        </svg>
        <p>图书排行榜</p>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-lingquan"></use>
        </svg>
        <p>1元砍价</p>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-miaoshadingdan-biaoshi"></use>
        </svg>
        <p>即刻秒杀</p>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cuxiaohuodong"></use>
        </svg>
        <p>今日促销</p>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-icon_pintuan"></use>
        </svg>
        <p>拼团</p>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-songliwu"></use>
        </svg>
        <p>送礼物</p>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-lingquan"></use>
        </svg>
        <p>领券中心</p>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yuangou-jiuban"></use>
        </svg>
        <p>0元领物</p>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cash3"></use>
        </svg>
        <p>领打卡金</p>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jiubaoyou"></use>
        </svg>
        <p>9.9包邮</p>
      </li>
    </ul>
    <div class="huise"></div>
    <div class="booknav">
      <img src="http://img61.ddimg.cn/upload_img/00705/yhj/tslc-bt.jpg" alt>
      <img src="http://img62.ddimg.cn/upload_img/00316/by/750-315-1553219287.jpg" alt>
    </div>
    <p class="title">
      <i class="iconfont icon-aixin-yixuanzhong"></i>
      <span>猜您可能喜欢</span>
      <span></span>
    </p>
    <ul class="books">
      <li v-for="(item,i) in list" :key="i" id="list">
        <div @click="detail(item.product_id)">
          <img v-lazy="item.image_url" alt>
          <p>{{item.name}}</p>
          <p>￥{{item.price}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { media } from "../../tools/toolVue";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.$http.get("http://59.110.241.166:1810/vue/list").then(res => {
      this.list = res.data.result.slice(0, 6);
      console.log(localStorage.username);
    });
  },
  mounted() {
    console.log("home", this.$route.name);
    setTimeout(() => {
      media.$emit("loadHome", this.$route.name);
    }, 50);
  },
  methods: {
    detail(id) {
      // this.$http
      //   .get("http://59.110.241.166:1810/vue/detail", {
      //     params: {
      //       product_id: id
      //     }
      //   })
      //   .then(res => {
      //     this.$router.push({
      //       name: "detail",
      //       params: { result: res.data.result }
      //     });
      //   });
      this.$router.push({
        name: "detail",
        params: { goodsid: id }
      });
    }
  }
};
</script>

<style lang="css" scoped>
.ul1 {
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: #fff;
  font-size: 24px;
}
.ul1 li {
  width: 17%;
  text-align: center;
  margin: 10px;
}
.icon {
  width: 80px;
  height: 80px;
  vertical-align: -0.15rem;
  fill: currentColor;
  overflow: hidden;
}
h2 {
  font-size: 60px;
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
.books li img {
  width: 100%;
}
.books li p:nth-child(2) {
  height: 0.7rem;
  line-height: 0.38rem;
  overflow: hidden;
}
.books li p:nth-child(3) {
  color: #e53e30;
}
.huise {
  height: 9px;
}
.booknav img {
  width: 100%;
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
</style>



