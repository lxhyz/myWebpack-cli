<template>
    <div class="app-container">
        <!-- 头部 -->
        <div class="header"></div>

        <!-- 内容主题 -->
        <!-- <div class="main"></div> -->
        <!-- 这里存放路由匹配的组件 -->
        <keep-alive>
            <router-view></router-view>
        </keep-alive>

        <!-- 底部 -->
        <div class="footer">
            <router-link to="/" tag="button">首页</router-link>
            <router-link to="/login" tag="button">登录</router-link>
            <router-link to="/car" tag="button">购物车</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name:'app'
    }
</script>

<style lang="scss" scoped>
    .app-container{
       height: 2000vh;
   }
</style>