/*
 * @Author: shundong
 * @Date: 2019-10-25 16:24:33
 * @LastEditTime: 2019-11-12 10:31:59
 * @LastEditors: Please set LastEditors
 * @Description: 路由配置
 * @FilePath: /vue_demo/Travel/src/router/index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})
