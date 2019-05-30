<template>
  <mt-header :title="title" style="font-size:20px ;background-color:#fff ;color:#000">
    <div @click="goBack" slot="left">
      <mt-button icon="back"></mt-button>
    </div>
    <i class="iconfont icon-search" style="color:#000;height:20px"></i>
    <mt-button icon="search" slot="right" @click="search" style="margin-right:20px"></mt-button>
    <mt-button icon="more" slot="right" @click="set"></mt-button>
    <!-- 设置 -->
    <ul class="setting">
      <li>
        <i class="iconfont icon-zhuye02"></i>
        <span>首页</span>
      </li>
      <li>
        <i class="iconfont icon-denglu"></i>
        <span>登录</span>
      </li>
      <li>
        <i class="iconfont icon-zhuce"></i>
        <span>注册</span>
      </li>
      <li>
        <i class="iconfont icon-zhuxiao"></i>
        <span>注销</span>
      </li>
    </ul>
  </mt-header>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    set() {},
    search() {
      this.$router.push({ name: "search" });
    }
  },
  props: ["title", "show"]
};
</script>

<style>
.setting {
  width: 150px;
  background-color: #fff;
  position: fixed;
  right: 5px;
  top: 70px;
}
.setting li {
  line-height: 60px;
  padding: 0 0 0 20px;
}
.setting li:hover {
  background-color: #ddd;
}
</style>
