

// console.log("vue 主函数 模块+ webpack 模块化编程 ");

import Vue from "vue";

import MintUI from "mint-ui";
Vue.use(MintUI);   // 全局声明  可以使用Mint-UI 
import { Tabbar, TabItem } from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

//表单
import { Field } from 'mint-ui';
Vue.component(Field.name, Field);

//多选框
import { Checklist } from 'mint-ui';
Vue.component(Checklist.name, Checklist);

//添加地址
// import { PaletteButton } from 'mint-ui';
// Vue.component(PaletteButton.name, PaletteButton);

import { Picker } from 'mint-ui';
Vue.component(Picker.name, Picker);

import VueResource from "vue-resource";
Vue.use(VueResource);   //  this.$http   Vue.http


Vue.component("myHead", {
    template: "<h2>head-  head - 1810</h2>"
})

import App from "./components/app.vue";
Vue.component("App", App);




// 全局注册 
import Head from "./components/head.vue";
Vue.component("Head", Head);

import Foot from "./components/foot.vue";
Vue.component("Foot", Foot);

import router from "./router"

const vm = new Vue({
    router,
    data: {
        msg: "vue + webpack 实践",
        word: "wuhan1810-daydayup",
        id: 1810,
        url: require("../assets/image/3.jpg")
    },

    created() {

    },
    mounted() {

    }

}).$mount("#app")

