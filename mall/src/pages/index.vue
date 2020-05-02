<template>
  <div class="index">
    <div class="container">
      <!-- 轮播图 -->
      <div class="swiper-box">
        <!-- 轮播图左边的商品信息 -->
          <div class="nav-menu">
            <ul class="menu-warp">
              <li class="menu-item">
                <a href="javascript:;">
                  手机 电话卡
                  <!-- 商品列表 -->
                  <div class="children">
                    <ul v-for="(item,index) in menuList" :key="index">
                      <li v-for="(sub,j) in item" :key="j">
                          <a :href="'/#/product/'+sub.id">
                            <img  :src="sub.img || '/imgs/item-box-1.png'" alt="">
                            {{sub.name || '小米'}}
                          </a>
                      </li>
                    </ul>
                  </div>
                </a>
              </li>
               <li class="menu-item">
                <a href="javascript:;">
                  电视 盒子
                  <div class="children" style="top: -76px;">
                     <ul v-for="(item,index) in menuList" :key="index">
                      <li v-for="(sub,j) in item" :key="j">
                          <a :href="'/#/product/'+sub.id">
                            <img  :src="sub.img || '/imgs/item-box-1.png'" alt="">
                            {{sub.name || '小米'}}
                          </a>
                      </li>
                    </ul>
                  </div>
                </a>
              </li>
               <li class="menu-item">
                <a href="javascript:;">
                  笔记本 平版
                  <div class="children" style="top: -126px;">
                     <ul v-for="(item,index) in menuList" :key="index">
                      <li v-for="(sub,j) in item" :key="j">
                          <a :href="'/#/product/'+sub.id">
                            <img  :src="sub.img || '/imgs/item-box-1.png'" alt="">
                            {{sub.name || '小米'}}
                          </a>
                      </li>
                    </ul>
                  </div>
                </a>
              </li>
               <li class="menu-item">
                <a href="javascript:;">
                  家电 插线板
                  <div class="children" style="top: -176px;">
                     <ul v-for="(item,index) in menuList" :key="index">
                      <li v-for="(sub,j) in item" :key="j">
                          <a :href="'/#/product/'+sub.id">
                            <img  :src="sub.img || '/imgs/item-box-1.png'" alt="">
                            {{sub.name || '小米'}}
                          </a>
                      </li>
                    </ul>
                  </div>
                </a>
              </li>
               <li class="menu-item">
                <a href="javascript:;">
                  出行 穿戴
                  <div class="children" style="top: -226px;">
                     <ul v-for="(item,index) in menuList" :key="index">
                      <li v-for="(sub,j) in item" :key="j">
                          <a :href="'/#/product/'+sub.id">
                            <img  :src="sub.img || '/imgs/item-box-1.png'" alt="">
                            {{sub.name || '小米'}}
                          </a>
                      </li>
                    </ul>
                  </div>
                </a>
              </li>
               <li class="menu-item">
                <a href="javascript:;">
                  智能 路由器
                  <div class="children" style="top: -276px;">
                     <ul v-for="(item,index) in menuList" :key="index">
                      <li v-for="(sub,j) in item" :key="j">
                          <a :href="'/#/product/'+sub.id">
                            <img  :src="sub.img || '/imgs/item-box-1.png'" alt="">
                            {{sub.name || '小米'}}
                          </a>
                      </li>
                    </ul>
                  </div>
                </a>
              </li>
               <li class="menu-item">
                <a href="javascript:;">
                  电源 配件
                  <div class="children" style="top: -326px;">
                     <ul v-for="(item,index) in menuList" :key="index">
                      <li v-for="(sub,j) in item" :key="j">
                          <a :href="'/#/product/'+sub.id">
                            <img  :src="sub.img || '/imgs/item-box-1.png'" alt="">
                            {{sub.name || '小米'}}
                          </a>
                      </li>
                    </ul>
                  </div>
                </a>
              </li>
               <li class="menu-item">
                <a href="javascript:;">
                 生活 箱包
                 <div class="children" style="top: -376px;">
                    <ul v-for="(item,index) in menuList" :key="index">
                      <li v-for="(sub,j) in item" :key="j">
                          <a :href="'/#/product/'+sub.id">
                            <img  :src="sub.img" alt="">
                            {{sub.name}}
                          </a>
                      </li>
                    </ul>
                 </div>
                </a>
              </li>
            </ul>
          </div>
        <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(item,index) in slideList" :key="index">
          <a :href="'/#/product/'+item.id">
            <img :src="item.img" alt="">
          </a>
        </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
      </div>
      <!-- 广告位标题 -->
      <div class="adb-box">
        <a :href="'/#/product/'+item.id" v-for="(item,index) in adbList" :key="index">
          <img v-lazy="item.img" alt="">
        </a>
      </div>
      <!-- banner位置 -->
      <div class="banner">
        <a href="/#/product/30">
          <img v-lazy="'/imgs/banner-1.png'" alt="">
        </a>
      </div>
      <!-- 产品列表 -->
      <div class="product-box">
        <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/12">
              <img v-lazy="'/imgs/mix-alpha.jpg'" alt="">
            </a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(item,index) in phoneList" :key="index">
              <div class="item" v-for="(item,j) in item" :key="j">
                <span :class="{'new-pro':j%2==0}">新品</span>
                <div class="item-img">
                  <img v-lazy="item.mainImage" alt="">
                </div>
                <div class="item-info">
                  <h3>{{item.name}}</h3>
                  <p>{{item.subtitle}}</p>
                  <p class="price" @click="addCart(item.id)">{{item.price |money}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
      </div>
    </div>
    <service></service>
    <modal title="信息提示" 
    confirmBtn='查看购物车' 
    btnType='1'  
    :showModal='showModal'
    modalType='middle'
    v-on:submit="goTocart"
    v-on:cancel="showModal=false"
    >
      <template v-slot:body>
        <p>商品添加成功</p>
      </template>
    </modal>
  </div>
</template>

<script>
import service from '../components/service'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import modal from '../components/Modal'
export default {
    name:'index',
    components:{service,Swiper,SwiperSlide,modal},
    data() {
      return {
        showModal:false,
        slideList:[
          {
            id:'42',
            img:'/imgs/slider/slide-1.jpg'
          },
           {
            id:'45',
            img:'/imgs/slider/slide-2.jpg'
          },
           {
            id:'46',
            img:'/imgs/slider/slide-3.jpg'
          },
           {
            id:'',
            img:'/imgs/slider/slide-4.jpg'
          },
           {
            id:'',
            img:'/imgs/slider/slide-5.jpg'
          }
        ],
        directives: {
          swiper: directive,
        },
        swiperOptions: {
           pagination: {
            el: '.swiper-pagination',
            clickable :true
          },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
       },
          loop:true,
          autoplay: {
          delay: 2000,//1秒切换一次
          },
      effect : 'cube',
      cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 100,
      shadowScale: 0.6
          },
        },
        menuList:[
        [
          {
            id:30,
            img:'/imgs/item-box-1.png',
            name:'小米cc9'
          },
          {
            id:31,
            img:'/imgs/item-box-2.png',
            name:'小米8青春版'
          }
          ,
          {
            id:32,
            img:'/imgs/item-box-3.jpg',
            name:'小米8青春版'
          },
          {
            id:33,
            img:'/imgs/item-box-4.jpg',
            name:'小米8青春版'
          }
        ],

        [
          {
            id:30,
            img:'/imgs/item-box-1.png',
            name:'小米cc9'
          },
          {
            id:31,
            img:'/imgs/item-box-2.png',
            name:'小米8青春版'
          }
          ,
          {
            id:32,
            img:'/imgs/item-box-3.jpg',
            name:'小米8青春版'
          },
          {
            id:33,
            img:'/imgs/item-box-4.jpg',
            name:'小米8青春版'
          }
        ],

        [
          {
            id:30,
            img:'/imgs/item-box-1.png',
            name:'小米cc9'
          },
          {
            id:31,
            img:'/imgs/item-box-2.png',
            name:'小米8青春版'
          }
          ,
          {
            id:32,
            img:'/imgs/item-box-3.jpg',
            name:'小米8青春版'
          },
          {
            id:33,
            img:'/imgs/item-box-4.jpg',
            name:'小米8青春版'
          }
        ],

        [
          {
            id:30,
            img:'/imgs/item-box-1.png',
            name:'小米cc9'
          },
          {
            id:31,
            img:'/imgs/item-box-2.png',
            name:'小米8青春版'
          }
          ,
          {
            id:32,
            img:'/imgs/item-box-3.jpg',
            name:'小米8青春版'
          },
          {
            id:33,
            img:'/imgs/item-box-4.jpg',
            name:'小米8青春版'
          }
        ],

        [
          {
            id:30,
            img:'/imgs/item-box-1.png',
            name:'小米cc9'
          },
          {
            id:31,
            img:'/imgs/item-box-2.png',
            name:'小米8青春版'
          }
          ,
          {
            id:32,
            img:'/imgs/item-box-3.jpg',
            name:'小米8青春版'
          },
          {
            id:33,
            img:'/imgs/item-box-4.jpg',
            name:'小米8青春版'
          }
        ],

        [
          {
            id:30,
            img:'/imgs/item-box-1.png',
            name:'小米cc9'
          },
          {
            id:31,
            img:'/imgs/item-box-2.png',
            name:'小米8青春版'
          }
          ,
          {
            id:32,
            img:'/imgs/item-box-3.jpg',
            name:'小米8青春版'
          },
          {
            id:33,
            img:'/imgs/item-box-4.jpg',
            name:'小米8青春版'
          }
        ],
        ],
        adbList:[
          {
            id:33,
            img:'/imgs/ads/ads-1.png'
          },
          {
            id:48,
            img:'/imgs/ads/ads-2.jpg'
          },
          {
            id:45,
            img:'/imgs/ads/ads-3.png'
          },
          {
            id:47,
            img:'/imgs/ads/ads-4.jpg'
          }
        ],
        phoneList:[]

      }
    },
    methods: {
      init(){
        this.axios.get('/products',{
        params:{
          categoryId:'100012',
          pageSize:14
        }
      }).then((res)=>{
        res.list=res.list.slice(6,14)
        this.phoneList =[res.list.slice(0,4),res.list.slice(4,8)] 
      })
      },
      addCart(id){
        
        this.axios.post('/carts',{
          productId:id,
          selected: true
        }).then((res)=>{
          this.showModal=true
          this.$store.dispatch('saveCartCount',res.cartTotalQuantity)
        }).catch(()=>{
          this.showModal=true
        })
      },
      goTocart(){
        this.$router.push('/cart')
      }
    },
    mounted() {
      this.init()
    },
    filters:{
      money(val){
        if(!val) return '0.00'
        return '￥'+val.toFixed(2)+'元'
      }
    }
}
</script>

<style lang='scss' >
@import '../assets/scss/mixin.scss';
@import '../assets/scss/base.scss';
  .index{
    .swiper-box{
      .nav-menu{
        box-sizing: border-box;
        position: absolute;
        width: 264px;
        height: 451px;
        z-index: 5;
        padding: 26px 0;
        background-color: #55585a73;
        .menu-warp{
          .menu-item{
            height: 50px;
            line-height: 50px;
             &:hover{
              background-color: #ff6600;
              .children{
                display: block;
                transition: all 3s;
              }
            }
            a{
              display: block;
              position: relative;
              font-size: 16px;
              color: #ffffff;
              padding-left: 30px;
              &:after{
                position: absolute;
                right:30px;
                top: 17.5px;
                content:'';
                @include bgImg(10px,15px,'/imgs/icon-arrow.png');
              }
            }
            .children{
              width: 962px;
              height:451px;
              background-color: #ffffff;
              position: absolute;
              top: -26px;
              left:264px;
              display: none;
             ul{
               display: flex;
               justify-content: space-between;
               height: 75px;
               li{
                 height:75px;
                 line-height: 75px;
                 width:241px;
                 padding-left: 23px;
                 
               }
               a{
                 color: #333333;
                 font-size: 14px;
               }
               img{
                   width: 42px;
                   height: 35px;
                   vertical-align: middle;
                   margin-right: 15px;
                 }
             }
            }
          }
        }
      }
      .swiper-container {
        height: 451px;
        .swiper-button-prev{
          left:274px;
        }
        img{
          width: 100%;
          height:100%;
        }
      }  
    }
    .adb-box{
      @include flex();
      margin-top: 14px;
      margin-bottom:31px;
      a{
        width: 296px;
        height:167px ;
        img{
          width: 100%;
          height: 100%;
        }
      }
  
    }
    .banner{
      margin-bottom: 50px;
      img{
        width: 1226px;
      }
    }
    .product-box{
      background-color: #f5f5f5;
      padding:30px 0 50px;
      h2{
        font-size: 22px;
        height: 21px;
        line-height: 21px;
        color: #333333;
        margin-bottom: 20px;
      }
      .wrapper{
         display: flex;
         .banner-left{
           margin-right: 16px;
              img{
             width: 224px;
             height: 619px;
             }
        
         }
         .list-box{
           .list{
            @include flex();
            width: 986px;
            margin-bottom: 14px;
            &:last-child{
              margin-bottom: 0;
            }
            .item{
               width: 236px;
               height: 302px;
               background-color: #ffffff;
               text-align: center; 
               span{
                  display: inline-block;
                  width: 67px;
                  height: 24px;
                  font-size: 14px;
                  line-height: 24px;
                  color: #ffffff;
                  &.new-pro{
                    background-color: #7ecf68;
                  }
                  &.kill-pro{
                    background-color: #e82626;
                  }
               }
               .item-img{
                 img{
                   width: 100%;
                   height: 195px;
                 }
               }
               .item-info{
                 h3{
                   font-size: 14px;
                   color: #333333;
                    line-height:14px;
                    font-weight: 700;
                 }
                  p{
                    color:#999999;
                    line-height: 13px;
                    margin: 6px 0 13px 0;
                  }
                  .price{
                    color: #f20a02;
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    &:after{
                      vertical-align: middle;
                      content: '';
                      display: inline-block;
                      margin-left: 5px;
                      @include bgImg(22px,22px,'/imgs/icon-cart-hover.png')
                    }
                  }
               }
            }
           }
         }
      }
    }

  } 
</style>