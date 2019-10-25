/*
 * @Author: shundong
 * @Date: 2019-10-25 16:24:33
 * @LastEditTime: 2019-10-25 17:03:36
 * @LastEditors: Please set LastEditors
 * @Description: 路由配置
 * @FilePath: /vue_demo/Travel/src/router/index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import List from '@/pages/list/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
