<template>
  <div id="app">
    <img src="./assets/logo.png">  //对应着logo的图片的显示
    <router-view></router-view> // 这个应该是路由到对应的vue页面上；
  </div>
</template>

<script>
export default {
  name: 'app'  // 默认的模块是app（注册模块）
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
