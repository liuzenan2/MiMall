import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)
import login from './pages/login'   //登陆
import register from './pages/register' //注册
import home from './pages/home'   //首页
import index from './pages/index'
import product from './pages/product'  //产品页面
import detail from './pages/detail'  //详情页
import cart from './pages/cart' //购物车页面
import order from './pages/order' //订单页面
import orderConfim from './pages/orderConfim' //订单确认页面
import orderList from './pages/orderList'   //订单列表页面
import orderPay from './pages/orderPay'    //订单支付页面
import alipay from './pages/alipay'       //跳转到支付宝逗留页面
const router=new vueRouter({
    routes:[
        {
            path:'/',
            name:'home',
            component:home,
            redirect:'/index',
            children:[
                {
                    path:'/index',
                    name:'index',
                    component:index
                },
                {
                    path:'/product/:id',
                    name:'product',
                    component:product
                },
                {
                    path:'/detail/:id',
                    name:'detail',
                    component:detail
                }
            ]
        },
        {
            path:'/cart',
            name:'cart',
            component:cart
        },
        {
            path:'/login',
            name:'login',
            component:login
        },
        {
            path:'/register',
            name:'register',
            component:register
        },
        {
            path:'/order',
            name:'order',
            component:order,
            children:[
                {
                    path:'orderList',
                    name:'orderList',
                    component:orderList
                },
                {
                    path:'orderPay',
                    name:'orderPay',
                    component:orderPay
                },
                {
                    path:'orderConfim',
                    name:'orderComfim',
                    component:orderConfim
                },
                {
                    path:'alipay',
                    name:'alipay',
                    component:alipay
                },
            ]
        },
       
    ]
})

export default router