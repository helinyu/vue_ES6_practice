<template>
  <div class="hello">

    <div class="fatBorder">
        <h2 >Essential Links 下面是相关文档必要的链接:</h2>
      <ul>
        <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
        <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
        <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
        <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
      </ul>

      <h2>Ecosystem 生态</h2>
      <ul>
        <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
        <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
        <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
        <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
      </ul>
    </div>

    <div class="vbindFatBorder">
     <p>v- bind 的使用</p>  
       <span v-bind:title="vbindMessage">
         haha vbind!
         {{vbindMessage}}
       </span>
    </div>

  </div>

</template>

<script>
export default {
  name: 'hello',
  data () {
    studyEs6();
    return {
      msg: 'Welcome to Your Vue.js App',
      desription:"描述关于vue.js 的内容",
      vbindMessage:'描述v-bind:you loaded this page on '+ new Date()
    }
  }
}

function studyEs6() {
  let a = 3;
  {
     a = 5;
  }
  // alert(a);
  console.log(a);
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
    font-weight: normal;
}

h2 {
  font-weight: normal;
  font-size: 17;
  color: blue;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.fatBorder {
  padding: 2px;
  border-width: 2px;
  border-color: red;
  border-style: dashed;
}

.vbindFatBorder {
  margin-top: 2px;
  padding: 2px;
  border-width: 2px;
  border-color: green;
  border-style: dashed;
}

</style>
