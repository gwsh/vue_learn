<!--
 * @Author: your name
 * @Date: 2019-10-25 16:24:33
 * @LastEditTime: 2019-10-25 16:51:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue_demo/Travel/src/App.vue
 -->
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- 当前路由地址所对应的内容 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
