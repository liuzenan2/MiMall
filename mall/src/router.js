import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)
// import login from './pages/login'   //登陆
// import register from './pages/register' //注册
import home from './pages/home'   //首页
import index from './pages/index'
// import product from './pages/product'  //产品页面
// import detail from './pages/detail'  //详情页
// import cart from './pages/cart' //购物车页面
// import order from './pages/order' //订单页面
// import orderConfim from './pages/orderConfim' //订单确认页面
// import orderList from './pages/orderList'   //订单列表页面
// import orderPay from './pages/orderPay'    //订单支付页面
// import alipay from './pages/alipay'       //跳转到支付宝逗留页面
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
                    component:() => import('./pages/product.vue')
                },
                {
                    path:'/detail/:id',
                    name:'detail',
                    component:() => import('./pages/detail.vue')
                }
            ]
        },
        {
            path:'/cart',
            name:'cart',
            component:() => import('./pages/cart.vue')
        },
        {
            path:'/login',
            name:'login',
            component:() => import('./pages/login.vue')
        },
        {
            path:'/register',
            name:'register',
            component:() => import('./pages/register.vue')
        },
        {
            path:'/order',
            name:'order',
            component:() => import('./pages/order.vue'),
            children:[
                {
                    path:'orderList',
                    name:'orderList',
                    component:() => import('./pages/orderList.vue')
                },
                {
                    path:'orderPay',
                    name:'orderPay',
                    component:() => import('./pages/orderPay.vue')
                },
                {
                    path:'orderConfim',
                    name:'orderComfim',
                    component:() => import('./pages/orderConfim.vue')
                },
                {
                    path:'alipay',
                    name:'alipay',
                    component: () => import('./pages/alipay.vue')
                },
            ]
        },
       
    ]
})

export default router