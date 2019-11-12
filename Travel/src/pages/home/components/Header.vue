<!--
 * @Author: shundong
 * @Date: 2019-10-25 16:55:41
 * @LastEditTime: 2019-11-12 10:45:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue_demo/Travel/src/pages/home/home.vue
 -->
<template>
  <div class="header">
    <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
        <span class="iconfont search-icon">&#xe632;</span>
        输入城市/景点/游玩主题</div>
    <router-link to="city">
    <div class="header-right">
        {{this.city}}<span class="iconfont arrow-icon">&#xe612;</span></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .header
        display: flex
        line-height: .86rem
        background: $bgColor
        color: #fff
        .header-left
            width: .64rem
            float: left
            .back-icon
                text-align: center
                font-size: .3rem
        .header-input
            flex: 1
            height .64rem
            line-height .64rem
            background: #fff
            border-radius: .05rem
            margin-top: .12rem
            margin-left: .2rem
            color: #ccc
            .search-icon
                margin-left: .2rem
        .header-right
            color: #fff
            width: 1.24rem
            float: right
            text-align: center
            margin-left: .04rem
            .arrow-icon
                font-size: .35rem
                margin-left: .04rem
</style>
