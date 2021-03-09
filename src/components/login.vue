<template>
    <div class="box">
        <h2>登录组件</h2>
    </div>
</template>

<script>
    console.log('懒加载')
    export default {
        methods:{
            scroll(){
                console.log('滚动')
            }
        },
        created(){
            // 做一些初始化操作，如发送异步请求
            console.log('login->created')
        },
        mounted(){
            // 做一些dom操作和事件绑定
            console.log('login->mouted')
            window.addEventListener('scroll',this.scroll)
        },

        destroyed(){
            // 1.解绑事件
            // 2.清除定时器
            console.log('删除')
            window.removeEventListener('scroll',this.scroll)
        },
        activated(){
            // 缓存激活触发（出现）
            console.log('login-activated')
            window.addEventListener('scroll',this.scroll)
        },
        deactivated(){
            // 缓存禁用触发（隐藏）
            console.log('login-deactivated')
            window.removeEventListener('scroll',this.scroll)
        }
    }
</script>
<!-- scoped 样式私有化，仅在当前组件生效 -->
<style lang="scss" scoped>
   
</style>