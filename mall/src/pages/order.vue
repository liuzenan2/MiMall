<template>
  <div>
    <order-header></order-header>
    <router-view></router-view>  <!-- 嵌套在order的子路由视图 -->
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import orderHeader from '../components/orderHeader'
import navFooter from '../components/navFooter'
export default {
  name:'order',
  components:{orderHeader,navFooter}
}
</script>

<style>

</style>