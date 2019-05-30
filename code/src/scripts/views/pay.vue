<template>
  <div>
    <Head title="扫码支付" :show="true"></Head>
    <div class="box">
      <p>
        <!-- <span>支付宝支付</span> -->
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zhifubao2"></use>
        </svg>
        <!-- <i class="iconfont icon-zhifubao2"></i> -->
      </p>
      <img src="../../assets/image/shoukuan.jpg" alt>
      <br>
      <mt-button type="danger" size="large" @click="queren">确认付款</mt-button>
    </div>
    <foot></foot>
  </div>
</template>
<style>
.box {
  text-align: center;
}
.icon {
  width: 20%;
  height: 80px;
}
img {
  width: 100%;
}
</style>
<script>
import { MessageBox } from "mint-ui";
export default {
  methods: {
    queren() {
      MessageBox("提示", "付款成功，请等待收货");
    }
  }
};
</script>

