

// 配置 路由  

import Vue from "vue";
import VueRouter from "vue-router";

// 0
Vue.use(VueRouter)

// 1. 定义组件
import Index from "./views/index.vue"
import Classify from "./views/classify.vue"
import Shopcar from "./views/shopcar.vue"
import Mine from "./views/mine.vue"
import App from "./components/app.vue";
import Detail from "./views/detail.vue";

import Login from "./views/login.vue";
import Register from "./views/register.vue";
import Search from "./views/search.vue";
import Commit from "./views/commit.vue";
import Edit from "./views/edit.vue";
import Addsite from "./views/addsite.vue";
import Pay from "./views/pay.vue";

// 2. 配置 routes 
const routes = [
    {
        path: "/index",
        name: "index",
        component: Index,
        children: [
            {
                path: "*",
                redirect: { name: "home" }
            },
            { path: "home", name: 'home', component: App },    //首页
            { path: "classify", name: 'classify', component: Classify },    //分类
            { path: "shopcar", name: 'shopcar', component: Shopcar },   //购物车
            { path: "mine", name: 'mine', component: Mine },    //我
            { path: "search", name: 'search', component: Search },    //搜索
        ]
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/register",
        name: "register",
        component: Register
    },
    {
        path: "/detail/:goodsid",
        name: "detail",
        component: Detail
    },
    {
        path: "/commit",
        name: "commit",
        component: Commit
    },
    {
        path: "/edit",
        name: "edit",
        component: Edit
    },
    {
        path: "/addsite",
        name: "addsite",
        component: Addsite
    },
    {
        path: "/pay",
        name: "pay",
        component: Pay
    },
    {
        path: "*",
        redirect: { name: "home" }
    }

]

// 3. 创建 router
const router = new VueRouter({
    routes,
    mode: "hash"
})


// 4. 挂载 根实例 
export default router;
