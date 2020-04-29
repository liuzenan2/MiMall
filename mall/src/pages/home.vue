<template>
  <div>
    <nav-header></nav-header>
    <router-view></router-view>  <!-- 嵌套在home的子路由视图 -->
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import navHeader from '../components/navHeader'
import navFooter from  '../components/navFooter'


export default {
  name:'nav-home',
  components:{navHeader,navFooter},
  mounted() {
    
  },
}
</script>

<style>

</style>