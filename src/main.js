// 导入Vue框架 
import Vue from "vue";

// 导入App组件
import apps from './App.vue'

import util from "@/util/tool.js"
console.log(util)

// 导入路由组件
// import router from "./router/router.js"
import router from "@/router/router.js"


new Vue({
    el:'#app',
   // render会把渲染的组件直接覆盖页面el元素
    render:function(c){
        // c = createElement => function
        return c(apps);
    },
    // 挂载路由
    router, // 会注射到所有的Vue组件中，通过this.$router或this.#route操作
})


