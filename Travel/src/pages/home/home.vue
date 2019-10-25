<!--
 * @Author: your name
 * @Date: 2019-10-25 16:55:41
 * @LastEditTime: 2019-10-25 17:16:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue_demo/Travel/src/pages/home/home.vue
 -->
<template>
  <div class="home">
    <div>home</div>
    <router-link to="/list">列表页(单页应用测试)</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
.home {
  font-size: 50px;
}
</style>
