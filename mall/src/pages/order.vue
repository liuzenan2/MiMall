<template>
  <div>
    <order-header :title="title">
      <template v-slot:tip>
        <span>{{tip}}</span>
      </template>
    </order-header>
    <router-view></router-view>  <!-- 嵌套在order的子路由视图 -->
    <service></service> 
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import orderHeader from '../components/orderHeader'
import navFooter from '../components/navFooter'
import service  from '../components/service'
export default {
  name:'order',
  components:{orderHeader,navFooter,service},
  data() {
    return {
      title:'',
      tip:''
    }
  },
  mounted() {
    
    let path=this.$route.path
    if(path=='/order/orderConfim'){
      this.title='订单确认'
      this.tip='请确认填写收货地址'
    }else if(path=='/order/orderList'){
      this.title='订单列表'
      this.tip='请谨防钓鱼链接或诈骗电话'
    }else if(path=='/order/orderPay'){
      this.title='订单支付'
      this.tip='请谨防钓鱼链接或诈骗电话'
    }else{
      this.title='订单支付'
      this.tip='请谨防钓鱼链接或诈骗电话'
    }
  },
}
</script>

<style>

</style>