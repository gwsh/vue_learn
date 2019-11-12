<!--
 * @Author: your name
 * @Date: 2019-11-12 10:32:26
 * @LastEditTime: 2019-11-12 15:26:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Travel/src/pages/city/City.vue
 -->
<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'

export default {
  name: 'City',
  components: {
    CityHeader: CityHeader,
    CitySearch: CitySearch
  }
}
</script>
<style lang="stylus" scoped>
</style>
