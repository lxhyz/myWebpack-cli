<template>
    <div>
        <h2>购物车组件</h2>
        <button v-on:click="getUserInfo">who am </button>
        <div v-for="item in lunbo" :key="item[1]">
            <img src="item[0].src" alt="">
            <img src="item[1].src" alt="">
        </div>
    </div>
</template>

<script>
    import {getlunbo} from "@api/article.js"
    import {getluo} from "@api/users.js"

    export default {
        data(){
            return{
                lunbo:[]
            }
        },
        methods:{
            async getLunboData(){
                let {result} = await getlunbo();
                this.lunbo = result;
            },
            getUserInfo(){
                // 调动接口
                getluo().then(res=>{
                    console.log(res)
                })
            }
            
        },
        created(){
            // this.getUserInfo()
        }
    }
</script>

<style lang="scss" scoped>

</style>