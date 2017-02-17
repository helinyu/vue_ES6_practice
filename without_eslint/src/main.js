// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/* eslint-disable no-new */
/// 这一块不知道有什么作用的😭
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

