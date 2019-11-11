<!--
 * @Author: your name
 * @Date: 2019-10-26 16:11:27
 * @LastEditTime: 2019-11-11 18:18:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Travel/src/pages/home/components/Icons.vue
 -->
<template>
  <div class="icons">
    <swiper :options="swiperOption1">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt />
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption1: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.icons >>> .swiper-pagination-bullet {
  width:  .12rem;
  height: .12rem;
  margin-bottom -.25rem;
}
.icons >>> .swiper-pagination-bullet-active {
  background: rgb(112,189,201)!important;
}
.icons >>> .swiper-container {
  height: 0;
  padding-bottom: 50%;
}

.icons
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
  margin-top: .1rem;
  .icon
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    .icon-img
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;
      backgroud: blue;
      .icon-img-content
        display: block;
        margin: auto;
        height: 100%;
    .icon-desc
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      color: $darkColor;
      font-size: .24rem;
      ellipsis()
</style>
