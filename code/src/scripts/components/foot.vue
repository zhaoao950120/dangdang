<template>
  <div>
    <mt-tabbar style="color:#000;position:fixed" v-model="selected">
      <div class="nav" @click="index()" :class="color==0?'active':''">
        <mt-tab-item id="home">
          <img slot="icon" src="../../assets/image/home.png">
          <span>首页</span>
        </mt-tab-item>
      </div>
      <div class="nav" @click="classify()" :class="color==1?'active':''">
        <mt-tab-item id="classify">
          <img slot="icon" src="../../assets/image/fenlei.png">
          分类
        </mt-tab-item>
      </div>
      <div class="nav" @click="shopcar()" :class="color==2?'active':''">
        <mt-tab-item id="shopcar">
          <img slot="icon" src="../../assets/image/shopping.png">
          购物车
        </mt-tab-item>
      </div>
      <div class="nav" @click="mine()" :class="color==3?'active':''">
        <mt-tab-item id="my">
          <img slot="icon" src="../../assets/image/my.png">
          我
        </mt-tab-item>
      </div>
    </mt-tabbar>
  </div>
</template>

<script>
import { media } from "../../tools/toolVue";
export default {
  data() {
    return {
      selected: 3,
      color: 0,
      foots: [
        { txt: "首页", path: "/index/home", name: "home", icon: "&#xe619;" },
        {
          txt: "分类",
          path: "/index/classify",
          name: "classify",
          icon: "&#xe778;"
        },
        {
          txt: "购物车",
          path: "/index/shopcar",
          name: "shopcar",
          icon: "&#xe614;"
        },
        { txt: "我", path: "/index/mine", name: "mine", icon: "&#xe624;" }
      ]
    };
  },
  methods: {
    index() {
      // this.color = 0;
      this.$router.push({
        name: "home"
      });
    },
    classify() {
      // this.color = 1;
      this.$router.push({
        name: "classify"
      });
    },
    shopcar() {
      // this.color = 2;
      this.$router.push({
        name: "shopcar"
      });
    },
    mine() {
      // this.color = 3;
      this.$router.push({
        name: "mine"
      });
    }
  },
  mounted() {
    media.$on("loadHome", route => {
      // console.log("地址：", route);

      switch (route) {
        case "home":
          this.color = 0;
          break;
        case "classify":
          this.color = 1;
          break;
        case "shopcar":
          this.color = 2;
          break;
        case "mine":
          this.color = 3;
          break;

        default:
          break;
      }
    });
  }
};
</script>

<style scoped>
mt-tab-item {
  color: #000;
}
.nav {
  width: 25%;
}
div.active {
  /* color: red; */
  background-color: #ddd;
}
</style>




