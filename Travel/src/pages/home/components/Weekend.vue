<!--
 * @Author: your name
 * @Date: 2019-11-10 13:47:33
 * @LastEditTime: 2019-11-12 09:49:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Travel/src/pages/home/components/Recommend.vue
 -->
<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="(item,index) of list" :key="index">
        <div class="item-img-wrapper">
            <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  },
  data () {
    return {
      weekendList: [
        {
          id: '0001',
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
          title: '京城周末撒欢',
          desc: '在帝都过周末，不仅仅是城中游！'
        },
        {
          id: '0002',
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
          title: '京城有好泉',
          desc: '细数北京温泉，温暖你的冬天'
        },
        {
          id: '0003',
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
          title: '帝都必打卡',
          desc: '来北京必去的景点非这些地方莫属'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.recommend-title
  line-height: 0.8rem;
  background-color: #eee;
  text-indent: 0.2rem;
.item-img-wrapper
  overflow: hidden;
  height: 0;
  padding-bottom: 37.09%
.item-img
  width: 100%;
.item-info
  padding: 0.1rem;
  .item-title
    line-height: 0.54rem;
    font-size: 0.32rem;
    ellipsis();
  .item-desc
    line-height: 0.4rem;
    color: #ccc;
    ellipsis();
</style>
