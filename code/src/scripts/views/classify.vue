<template>
  <div>
    <Head title="分类" :show="true"></Head>
    <!-- 头部导航 -->
    <mt-navbar v-model="selected" style="margin-top:10px">
      <mt-tab-item id="1">
        <h2 @click="wenxue">文学</h2>
      </mt-tab-item>
      <mt-tab-item id="2">
        <h2 @click="xiaoshuo">小说</h2>
      </mt-tab-item>
      <mt-tab-item id="3">
        <h2 @click="guanli">管理</h2>
      </mt-tab-item>
      <mt-tab-item id="4">
        <h2 @click="qingzi">亲子/家教</h2>
      </mt-tab-item>
      <mt-tab-item id="5">
        <h2 @click="chenggong">成功/励志</h2>
      </mt-tab-item>
    </mt-navbar>
    <mt-navbar v-model="selected" style="margin-bottom:3px">
      <mt-tab-item id="6">
        <h2 @click="xinli">心理学</h2>
      </mt-tab-item>
      <mt-tab-item id="7">
        <h2 @click="jisuanji">计算机/网络</h2>
      </mt-tab-item>
      <mt-tab-item id="8">
        <h2 @click="qcwx">青春文学</h2>
      </mt-tab-item>
      <mt-tab-item id="9">
        <h2 @click="touzi">投资理财</h2>
      </mt-tab-item>
      <mt-tab-item id="10">
        <h2 @click="zhuanji">传记</h2>
      </mt-tab-item>
    </mt-navbar>
    <div style="overflow: hidden">
      <!-- 商品列表 -->
      <div @click="detail(item.product_id)" id="list" v-for="(item,i) in list" :key="i">
        <div class="left" style="width:30% float:left">
          <img v-lazy="item.image_url" style="width:100%">
        </div>
        <div class="right">
          <p>{{item.name}}</p>
          <p>{{item.author_name}}</p>
          <p>{{item.price}}RMB</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { media } from "../../tools/toolVue";
export default {
  data() {
    return {
      images: [{ tex: "1" }],
      list: [],
      selected: "1",
      allGoods: [],
      show: false,
      ative: "1"
    };
  },
  created() {
    if (this.$route.params.flag) {
      this.list = this.$route.params.result;
      console.log(this.$route.params.result);
    } else {
      this.$http.get("http://59.110.241.166:1810/vue/list").then(res => {
        this.list = res.data.result;
      });
    }
  },
  // updated() {
  //   this.list = this.$route.params.result;
  //   console.log(this.$route.params.result);
  // },
  mounted() {
    console.log("classify", this.$route.name);
    setTimeout(() => {
      media.$emit("loadHome", this.$route.name);
    }, 50);
  },
  methods: {
    wenxue() {
      this.$http
        .get("http://59.110.241.166:1810/vue/find", {
          params: {
            second_category_name: "文学"
          }
        })
        .then(res => {
          this.list = res.data.result;
        });
    },
    xiaoshuo() {
      this.$http
        .get("http://59.110.241.166:1810/vue/find", {
          params: {
            second_category_name: "小说"
          }
        })
        .then(res => {
          this.list = res.data.result;
        });
    },
    guanli() {
      this.$http
        .get("http://59.110.241.166:1810/vue/find", {
          params: {
            second_category_name: "管理"
          }
        })
        .then(res => {
          this.list = res.data.result;
        });
    },
    qingzi() {
      this.$http
        .get("http://59.110.241.166:1810/vue/find", {
          params: {
            second_category_name: "亲子/家教"
          }
        })
        .then(res => {
          this.list = res.data.result;
        });
    },
    chenggong() {
      this.$http
        .get("http://59.110.241.166:1810/vue/find", {
          params: {
            second_category_name: "成功/励志"
          }
        })
        .then(res => {
          this.list = res.data.result;
        });
    },
    xinli() {
      this.$http
        .get("http://59.110.241.166:1810/vue/find", {
          params: {
            second_category_name: "心理学"
          }
        })
        .then(res => {
          this.list = res.data.result;
        });
    },
    jisuanji() {
      this.$http
        .get("http://59.110.241.166:1810/vue/find", {
          params: {
            second_category_name: "计算机/网络"
          }
        })
        .then(res => {
          this.list = res.data.result;
        });
    },
    qcwx() {
      this.$http
        .get("http://59.110.241.166:1810/vue/find", {
          params: {
            second_category_name: "青春文学"
          }
        })
        .then(res => {
          this.list = res.data.result;
        });
    },
    touzi() {
      this.$http
        .get("http://59.110.241.166:1810/vue/find", {
          params: {
            second_category_name: "投资理财"
          }
        })
        .then(res => {
          this.list = res.data.result;
        });
    },
    zhuanji() {
      this.$http
        .get("http://59.110.241.166:1810/vue/find", {
          params: {
            second_category_name: "传记"
          }
        })
        .then(res => {
          this.list = res.data.result;
        });
    },
    //
    detail(id) {
      this.$router.push({
        name: "detail",
        params: { goodsid: id }
      });
    }
  }
};
</script>
<style scoped>
#list {
  margin-top: 0.1rem;
  /* display: flex; */
  -webkit-animation: zoomIn 2s;
  animation: zoomIn 1.5s;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
}
.left {
  float: left;
  width: 30%;
  padding: 40px;
  box-sizing: border-box;
}
.right {
  float: left;
  width: 60%;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
}
.right p {
  text-align: left;
  color: #000;
  /* flex: auto; */
  /* height: 30%; */
}
.right p:nth-child(1) {
  /* height: 0.8rem;
  line-height: 0.4rem; */
  overflow: hidden;
  color: #444;
  font-size: 0.28rem;
}
.right p:nth-child(2) {
  /* height: 0.4rem;
  line-height: 0.4rem; */
  overflow: hidden;
  color: #999;
}
.right p:nth-child(3) {
  /* line-height: 0.6rem; */
  color: #e53e30;
  font-size: 0.3rem;
}
</style>




