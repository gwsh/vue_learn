<!--
 * @Author: your name
 * @Date: 2019-11-12 10:32:26
 * @LastEditTime: 2019-11-12 16:42:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Travel/src/pages/city/City.vue
 -->
<template>
  <div class="header">城市选择
    <router-link to="/" class="link_class">
      <div class="iconfont header-icon">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    overflow hidden
    position relative
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #fff
    background $bgColor
    font-size .32rem
    .link_class
      color #fff
    .header-icon
      position absolute
      top 0
      left 0
      width .64rem
      text-align center
      font-size .3rem
</style>
