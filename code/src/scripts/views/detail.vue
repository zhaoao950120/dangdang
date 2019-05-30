<template>
  <div>
    <Head title="商品详情" :show="true"></Head>
    <img :src="data.image_url" id="images">
    <div class="box">
      <p class="name">{{data.name}}</p>
      <p>{{data.author_name}}</p>
      <p>{{data.price}}</p>
      <p>{{data.subtitle}}</p>
    </div>
    <footer>
      <ul class="foot">
        <li>
          <i class="iconfont icon-aixin-yixuanzhong" style="color:red"></i>
          <span>收藏</span>
        </li>
        <li @click="shopcar">
          <i class="iconfont icon-gouwuche"></i>
          购物车
        </li>
        <li @click="buy(data.product_id,data.name,data.price,data.image_url)">立即购买</li>
        <li @click="add(data.product_id)">加入购物车</li>
      </ul>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: "",
      data: [],
      username: ""
    };
  },
  created() {
    // this.data = this.$route.params.result[0];
    // console.log(this.data);
    this.id = this.$route.params;
    console.log(this.id.goodsid);
    this.$http
      .get("http://59.110.241.166:1810/vue/detail", {
        params: {
          product_id: this.id.goodsid
        }
      })
      .then(res => {
        console.log(res.data.result[0]);
        this.data = res.data.result[0];
      });

    // this.username = localStorage.username;
  },
  methods: {
    // 立即购买
    buy(id, name, price, image) {
      this.$http
        .get("http://59.110.241.166:1810/vue/buygoods", {
          params: {
            product_id: id,
            name: name,
            price: price,
            username: localStorage.username,
            image: image
          }
        })
        .then(res => {
          console.log(res);
          this.$router.push({ name: "shopcar" });
        });
    },
    shopcar() {
      this.$router.push({ name: "shopcar" });
    }

    
  },
};
</script>
<style>
#images {
  width: 100%;
  -webkit-animation: zoomIn 2s;
  animation: zoomIn 2s;
}

.box {
  padding: 0.2rem 0.3rem;
  box-sizing: border-box;
}
.name {
  margin-bottom: 0.1rem;
  line-height: 0.4rem;
  color: #4d525d;
  font-size: 0.3rem;
}
.box > p:nth-child(2) {
  line-height: 0.4rem;
  margin-bottom: 0.1rem;
  font-size: 0.26rem;
  color: #969696;
}
.box > p:nth-child(3) {
  margin: 0.3rem 0;
  color: #ff463c;
  font-size: 0.4rem;
}
.box > p:nth-child(4) {
  line-height: 0.4rem;
  margin-bottom: 0.1rem;
  font-size: 0.26rem;
  color: #969696;
}
footer {
  position: fixed;
  background: #fff;
  bottom: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  text-align: center;
}
footer ul {
  display: flex;
  align-items: center;
  height: 80px;
}
ul li {
  display: flex;
  flex-direction: column;
  width: 18%;
  text-align: center;
}
ul li:nth-child(3) {
  width: 32%;
  color: rgb(255, 255, 255);
  height: 80px;
  line-height: 80px;
  background: rgb(255, 190, 35);
  font-size: 25px;
}
.foot li:nth-child(4) {
  width: 32%;
  color: rgb(255, 255, 255);
  height: 80px;
  line-height: 80px;
  background: rgb(243, 85, 75);
  font-size: 25px;
}
</style>
