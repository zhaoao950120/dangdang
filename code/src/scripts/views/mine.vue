<template>
  <div>
    <Head title="个人中心" :show="false"></Head>

    <div id="header" v-if="username">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-touxiangnanhai"></use>
      </svg>
      <p>{{username}}</p>
      <p>
        <span>一蓑烟雨任平生</span>
        <i class="icon-qianmingqueren iconfont" style="color:#fff"></i>
      </p>
      <mt-button type="danger" id="btn" @click="logout">注销</mt-button>
    </div>
    <div id="header" v-else>
      <i class="iconfont icon-gerenzhongxin"></i>
      <p>请选择登录或注册</p>
      <div class="top">
        <mt-button type="danger" size="small" @click="gotoLogin">立即登录</mt-button>
        <mt-button type="primary" size="small" @click="gotoRegister">前往注册</mt-button>
      </div>
    </div>
    <ul class="nav">
      <li>
        <i class="iconfont icon-daifukuan"></i>
        <p>待付款</p>
      </li>
      <li>
        <i class="iconfont icon-daishouhuo"></i>
        <p>待发货</p>
      </li>
      <li>
        <i class="iconfont icon-daipingjia"></i>
        <p>待收货</p>
      </li>
      <li>
        <i class="iconfont icon-tuihuoshouhou"></i>
        <p>退款/售后</p>
      </li>
      <li>
        <i class="iconfont icon-quanbudingdan"></i>
        <p>全部订单</p>
      </li>
    </ul>
    <ul class="mine">
      <li>
        <i class="iconfont icon-huiyuanzhongxin"></i>
        <span>会员中心</span>
        <i class="iconfont icon-youjiantou" style="float:right"></i>
      </li>
      <li>
        <i class="iconfont icon-wodeliquan"></i>
        <span>我的礼券</span>
        <i class="iconfont icon-youjiantou" style="float:right"></i>
      </li>
      <li>
        <i class="iconfont icon-jifen"></i>
        <span>积分抵现</span>
        <i class="iconfont icon-youjiantou" style="float:right"></i>
      </li>
      <li>
        <i class="iconfont icon-ebook"></i>
        <span>我的电子书</span>
        <i class="iconfont icon-youjiantou" style="float:right"></i>
      </li>
      <li @click="edit">
        <i class="iconfont icon-shouhuodizhi"></i>
        <span>收货地址</span>
        <i class="iconfont icon-youjiantou" style="float:right"></i>
      </li>
    </ul>
    <!-- 轮播图 -->
    <div class="lunbo" style="height:150px">
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
  </div>
</template>


<script>
import { Indicator } from "mint-ui";
import { media } from "../../tools/toolVue";
export default {
  methods: {
    gotoLogin() {
      this.$router.push({ name: "login" });
    },
    gotoRegister() {
      this.$router.push({ name: "register" });
    },
    logout() {
      localStorage.username = "";
      window.location.reload();
    },
    edit() {
      this.$router.push({ name: "edit" });
    }
  },
  data() {
    return {
      banner: [],
      username: ""
    };
  },
  created() {
    this.username = localStorage.username;
    // Indicator.open({
    //   text: "加载中...",
    //   spinnerType: "fading-circle"
    // });
    // this.$http.get("http://59.110.241.166:1810/vue/allGoods",{
    //     params:{
    //         limit:6
    //     }
    // }).then(res=>{
    //     console.log(res);
    //     // 将回调延迟到下次 DOM 更新循环之后执行
    //     this.$nextTick(()=>{
    //         this.banner = res.data.result;
    //         Indicator.close();
    //     })
    // })
  },
  mounted() {
    setTimeout(() => {
      media.$emit("loadHome", this.$route.name);
    }, 50);
  }
};
</script>

<style scoped>
#header {
  width: 100%;
  box-sizing: border-box;
  background-color: #ff8e3b;
  padding: 20px;
  text-align: center;
  position: relative;
}
#header > i {
  color: #fff;
  font-size: 80px;
}
#header > p {
  text-align: center;
  font-size: 30px;
  color: #fff;
  margin-bottom: 20px;
}
#header > div {
  text-align: center;
}
#header p span {
  font-size: 23px;
}
.top {
  background-color: #ff8e3b;
}
.nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  padding: 30px 0;
}
.nav li {
  width: 20%;
  height: 100px;
  background: #fff;
  padding: 20px 0;
}
.nav li i {
  font-size: 50px;
}

.mine li {
  color: #000;
  font-size: 30px;
  line-height: 65px;
  text-align: left;
  padding-bottom: 7px;
  margin-bottom: 3px;
  padding: 10px 20px;
  background-color: #fff;
}
.mine li i {
  margin-right: 20px;
}
.iconfont {
  font-size: 30px;
  color: #fe7c13;
}
.icon {
  width: 80px;
  height: 80px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
#btn {
  width: 100px;
  font-size: 25px;
  height: 60px;
  position: absolute;
  right: 30px;
  top: 20px;
}
</style>
