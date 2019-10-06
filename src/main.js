//普通网页中使用vue
//1)使用script导入vue的包。
//2)在index.html创建id为 app的div容器
//3)通过new vue得到一个vm的实例

//webpack使用vue
import Vue from 'vue';
//在webpack中，使用import Vue from 'vue'; 导入的vue构造函数，功能不全
//只提供了runtime-only 的方式，并没有提供向网页中那样的使用方式。
//1.项目根目录中有没有node_modules文件夹
//2.在node_modules中根据包名，找对应的vue文件夹。
//3.在vue文件夹中，找一个叫做package.json的包配置文件
//4.在package.json文件中，查找一个main属性，main属性指定了这个包被加载的入口
// import Vue from '../node_modules/vue/dist/vue.min'
// var login = {
//     template: '<h1>这是login组件，是使用网页形式创建的组件</h1>'
// };
// var vm = new Vue({
//    el:'#app',
//    data:{
//        msg:'123'
//    },
//     components: {
//         login:login
//     }
// });

//1)导入login组件

import login from "./login.vue";
//需要安装vue-loader
//1)cnpm install -D vue-loader vue-template-compiler
//2)在webpack.config.js中新增配置项
var vm = new Vue({
    el:'#app',
    data:{msg:'123'},
    // components:{
    //     login
    // }
    render:c => c(login)
    //在webpack中想要通过vue,把一个组件放到页面中展示，vm实例中的render可以实现
})

import test from '../test.js'
console.log(test)
import {title as title2,content} from '../test'
console.log(title2)
console.log(content)