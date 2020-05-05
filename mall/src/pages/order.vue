<template>
  <div>
    <router-view></router-view>  <!-- 嵌套在order的子路由视图 -->
    <service></service> 
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import navFooter from '../components/navFooter'
import service  from '../components/service'
export default {
  name:'order',
  components:{navFooter,service},
  data() {
    return {
      title:'',
      tip:''
    }
  },
  mounted() {
    
  },
}
</script>

<style>

</style>