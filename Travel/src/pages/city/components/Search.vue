<!--
 * @Author: your name
 * @Date: 2019-11-12 15:23:41
 * @LastEditTime: 2019-11-12 15:40:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Travel/src/pages/city/components/Search.vue
 -->
<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="请输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .search
    padding 0 .1rem
    height .72rem
    background-color $bgColor
    .search-input
      box-sizing border-box
      width 100%
      padding 0 .1rem
      height .62rem
      line-height  .62rem
      text-align center
      border-radius 0.06rem
</style>
