// 路由文件
import Vue from "vue"
import VueRouter from "vue-router"

// 显示安装在Vue身上 vue.use()
Vue.use(VueRouter)

// import loginCom from "@/components/login.vue"

import carCom from "@/components/car.vue"
import homeCom from "@/components/home.vue"

// 创建匹配
let router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:homeCom},
        {path:'/login',component:() =>import("@/components/login.vue")},
        {path:'/car',component:carCom}
        
    ]
})

// 暴露router对象
export default router;