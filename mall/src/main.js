import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router'
import axios from 'axios'   //引入axios
import VueAxios from 'vue-axios'  //把axios挂载到实例上
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import {Message}  from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//根据前端跨域方式做调整 /a/b  /api/a/b=>/a/b
// axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5ea82829b91d8b713ebf2097/example'
//地址接口，隐藏真实的地址，写成/api
axios.defaults.baseURL='/api'
//超时进行设置
axios.defaults.timeout = 8000
//对返回数据的错误信息进行一个错误拦截处理
axios.interceptors.response.use(function(response){ //response是axios提供的参数，不是取到的返回的值
      let res = response.data    //取到接口的数据
      let path=location.hash    //获取到路由地址
      if(res.status == 0){
        return res.data
      }else if(res.status == 10){  //状态码返回10表示未登录
         if(path!='#/index'){
        window.location.href = '/#/login'
        }
        return Promise.reject(res)   
         //跳转到登陆页面,这里不是在app.vue页面，没有this，所有用window.location.href来进行一个跳转
      }else{
        Message.warning(res.msg)
        return Promise.reject(res)   
      }
},(error)=>{       //第二个回调拦截的是HTTP请求，拦截的是请求的报错
let res=error.response
    Message.warning(res.data.Message)
    return Promise.reject(error)
})


Vue.use(VueAxios,axios)
Vue.config.productionTip = false
/* 图片懒加载 */
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})

/* vue-cookie */
Vue.use(VueCookie)

/* element-ul全局使用 */
 Vue.component(Message)
Vue.prototype.$message=Message

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
