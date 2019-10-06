<template>
    <div>
        <h1>这是登陆组件login.vue---{{msg}}</h1>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            //组件中的data必须是方法
            return {
                msg:'123'
            }
        },
        methods:{
            show(){
                console.log('调用了 login.vue 中的show方法')
            }
        }
    }
</script>

<style scoped>

</style>