import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'   //引入axios
import VueAxios from 'vue-axios'  //把axios挂载到实例上

//根据前端跨域方式做调整 /a/b  /api/a/b=>/a/b
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5ea82829b91d8b713ebf2097/example'
//超时进行设置
axios.defaults.timeout = 8000
//对返回数据的错误信息进行一个错误拦截处理
axios.interceptors.response.use(function(response){ //response是axios提供的参数，不是取到的返回的值
      let res = response.data    //取到接口的数据
      if(res.status == 0){
        return res.data
      }else if(res.status == 10){  //状态码返回10表示未登录
        window.location.href = '/#/login' //跳转到登陆页面,这里不是在app.vue页面，没有this，所有用window.location.href来进行一个跳转
      }else{
        alert(res.msg)
      }
})



Vue.use(VueAxios,axios)
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
