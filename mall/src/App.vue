<template>
  <div id="app">
        <router-view></router-view>
  </div>
</template>
<script>


export default {
  name: 'App',
  data() {
    return {
      res:{}
    }
  },
  components: {
    
  },
  methods: {
     getUser(){
       this.axios.get('/user')
       .then((res={})=>{
        this.$store.dispatch('saveUsername',res.username)
         //把根组件的请求的数据保存到vuex里面
       })
    },
    getcartCount(){
      this.axios.get('/carts/products/sum')
      .then((res=0)=>{
        this.$store.dispatch('saveCartCount',res)
      })
    }
  },
  mounted() {
    this.getUser()
    this.getcartCount()
    // this.axios.get('/user/login').then((res)=>{
    //   this.res=res
    // })

  },
}
</script>

<style lang='scss'>
@import './assets/scss/reset.scss';
@import './assets/scss/button.scss';


</style>
