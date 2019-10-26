<!--
 * @Author: your name
 * @Date: 2019-10-26 16:11:27
 * @LastEditTime: 2019-10-26 17:35:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Travel/src/pages/home/components/Icons.vue
 -->
<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt />
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [
        {
          id: '0001',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        },
        {
          id: '0002',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
          desc: '故宫'
        },
        {
          id: '0003',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          desc: '北京必游'
        },
        {
          id: '0004',
          imgUrl:
            'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
          desc: '香山公园'
        },
        {
          id: '0005',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          desc: '一日游'
        },
        {
          id: '0006',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png',
          desc: '古北水镇'
        },
        {
          id: '0007',
          imgUrl:
            'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png',
          desc: '欢乐谷万圣节'
        },
        {
          id: '0008',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
          desc: '赏红叶'
        },
        {
          id: '0009',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
          desc: '泡温泉'
        },
        {
          id: '0010',
          imgUrl:
            'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/bf88c62458044ca2ef9d733690eef3fc.png',
          desc: '优惠券'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
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

.icons >>> .swiper-container {
  height: 0;
  padding-bottom: 50%;
}

.icons
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
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
      font-size: 12px;
      ellipsis()
</style>
