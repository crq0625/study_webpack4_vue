组件注册方式只替换组件部分。
render只能渲染一个组件。
####Vnode 虚拟节点
~~~~
createElement 到底会返回什么呢？其实不是一个实际的 DOM 元素。
它更准确的名字可能是 createNodeDescription，因为它所包含的信息会告诉 Vue 页面上需要渲染什么样的节点，
包括及其子节点的描述信息。我们把这样的节点描述为“虚拟节点 (virtual node)”，也常简写它为“VNode”。
“虚拟 DOM”是我们对由 Vue 组件树建立起来的整个 VNode 树的称呼。
~~~~

#### webpack使用vue
~~~~
1)安装vue的 包：cnpm i vue -S
2)webpack中推荐使用.vue这个组件模板文件，需要安装vue-loader
cnpm i vue-loader vue-template-complier -D
3)在main.js中导入vue模块，import Vue form 'vue'
4)定义.vue结尾组件
5)使用import导入这个组件 import login from './login.vue'
6）创建vm实例 var vm = new Vue({el:'#app',render:c=>c(login)});
7)在页面中创建一个id为APP的div元素，作为我们vm实例控制区域
~~~~

#### es6 export default暴露对象
~~~~
node中向外暴露成员的方式
module.exports = {}
var 名称 = require('模块标识'）;

es6中导入模块方式 import 模块名 from '模块标识符'; import '路径';
es6中使用 export default 和 export 暴露成员。
1）export default 在一个模块中只允许使用一次。
2）export 可以使用多次。
export 暴露出来的变量只能通过 import {} from '模板路径';
只能通过{}来接收,也可以起别名.
参考案例在根目录test.js
main.js是导入方式。
~~~~