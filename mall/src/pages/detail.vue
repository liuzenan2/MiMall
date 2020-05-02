<template>
  <div class="detail">
     <productParam :title="product.name">
       <template v-solt='buy'>
         
       </template>
     </productParam>

     <!-- 身体 -->
     <div class="detail-box">
       <div class="container">
         <!-- 左侧的轮播图 -->
         <div class="detail-banner">
            <div class="swiper-box">
                <div class="swiper-wrapper">
                  <swiper ref="mySwiper" :options="swiperOptions">
                    <swiper-slide v-for="(item,index) in datailList" :key="index">
                      <img :src="item" alt="">
                          </swiper-slide>
                            <div class="swiper-pagination" slot="pagination"></div>
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-button-next"></div>
                    </swiper> 
                </div>
            </div>
         </div>
          <!-- 右边的具体信息 -->
          <div class="detail-info">
              <h1>{{product.name}}</h1>
              <p>
                <font>「购机享3期免息，低至700元起/期；延保/碎屏保享5折优惠；前5000名评价晒单赠小背包；赠善诊体检卡」</font>
                50倍潜望式超远变焦 / 双模5G / 骁龙765G处理器 / 三星AMOLED原色屏 / 180Hz采样率 / 4160mAh大电池 / 多功能NFC / 红外遥控器
              </p>
              <div class="j-main">
                  <p>小米自营</p>
                  <!-- 价格 -->
                  <div class="j-price">
                      <span>{{product.price}}</span>
                  </div>
                  <!-- 收获地址 -->
                  <div class="j-address">
                      <div class="address-wrapper">
                          <span class="j-s">北京 北京市 朝阳区 安定门街道</span><br>
                          <a href="">有现货</a>
                      </div>
                  </div>
                  <!-- 选择版本 -->
                  <div class="j-versions">
                      选择版本
                  </div>
                  <!-- 具体版本信息 -->
                  <ul class="j-versions-info">
                    <li  :class="{'checked':version==1}" @click="version=1">6GB+64GB 全网通</li>
                    <li :class="{'checked':version==2}" @click="version=2">4GB+64GB 移动4G</li>
                  </ul>
                  <!-- 选择颜色 -->
                   <div class="j-color">
                      选择颜色
                  </div>
                  <!-- 手机的颜色信息 -->
                  <ul class="phone-color">
                        <li>
                          <p></p>
                          <span>深空灰</span>
                        </li>
                      </ul>

                  <!-- 已经选择的产品 -->
                  <div class="phone-confirm">
                    <ul>
                      <li class="phone-confirm-top">
                        <p>{{product.name}} {{version==1?'6GB+64GB 全网通':'4GB+64GB 移动4G'}} 深空灰</p>
                        <p>{{product.price}}元</p>
                      </li>
                      <li class="phone-confirm-botton">总计：{{product.price}}元</li>
                    </ul>
                  </div>

                  <!-- 加入购物车按钮 -->
                  <div class="button-buy">
                    <button @click="addCart">加入购物车</button>
                  </div>
              </div>
          </div>
       </div>
     </div>
      <!-- 底部 -->
    <div class="detail-footer">
      <div class="container">
        <div class="detail-footer-price">
          <h3>价格说明</h3>
        </div>
        <div class="detail-footer-img">
            <img src="/imgs/detail/item-price.jpeg" alt="">
        </div>
      </div>
  </div>
  </div>
</template>

<script>
import productParam from '../components/productParam'
import {Swiper,SwiperSlide,directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
    name:'detail',
    components:{productParam,Swiper,SwiperSlide},
    data() {
      return {
        version:1,
        id:this.$route.params.id, //获取商品ID
        product:{},
        datailList:['/imgs/detail/phone-1.jpg','/imgs/detail/phone-2.jpg','/imgs/detail/phone-3.jpg','/imgs/detail/phone-4.jpg'],
        directives: {
          swiper: directive,
        },
        swiperOptions: {
           pagination: {
            el: '.swiper-pagination',
            clickable :true
          },
          effect : 'fade',
         navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          },
          loop:true,
          autoplay: {
          delay: 2000,//1秒切换一次
          },
        },
      }
    },
    methods: {
      getProductInfo(){
        this.axios.get(`/products/${this.id}`)
        .then((res)=>{
          this.product=res
        })
      },
      addCart(){
        this.axios.post('/carts',{
          productId:this.id,
          selected:true
        }).then((res)=>{
          this.$router.push('/cart')
          this.$store.dispatch('saveCartCount',res.cartTotalQuantity)
        })
      }
    },
    mounted() {
      this.getProductInfo()
    },
}
</script>

<style lang='scss'>
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
.detail{
  .detail-box{
    width: 100%;
    height: 900px;
    .container{
      padding: 32px 0 12px 0;
      .detail-banner{
        width: 606px;
        height: 600px;
        display: inline-block;
        .swiper-box{
          width: 560px;
          height: 560px;
        
          .swiper-wrapper{
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      .detail-info{
        float: right;
        width: 606px;
        margin-left: 12px;
        h1{
          width: 100%;
          height: 24px;
          line-height: 24px;
          font-size: 24px;
          font-weight: normal;
          color: #212121;
        }
        p{
          color: #b0b0b0;
          margin: 0;
          padding: 0;
          padding-top: 8px;
          font-size: 14px;
          font{
            color: rgb(255, 74, 0)
          }
        }
        .j-main{
          width: 100%;
          .j-price{
            color: #ff6700;
            font-size: 18px;
            padding: 12px 0 20px 0 ;
            border-bottom: 1px solid #e0e0e0;
          }
          .j-address{
            margin: 40px 0;
            .address-wrapper{
              width: 514px;
              height:41px;
              padding: 30px 40px 30px 50px;
              border: 1px solid #cccccc;
              .j-s{
                display: inline-block;
                margin-bottom: 10px;
              }
              a{
                color:#ff6700;
              }
            }
          }
          .j-versions{
            font-size: 18px;
          }
          .j-versions-info{
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;
            .checked{
              border: 1px solid #ff6700;
            }
              li{
                text-align: center;
                line-height:42px ;
                font-size: 16px;
                cursor: pointer;
                width: 298px;
                height:42px;
                margin: 15px 0 0 6px;
                border: 1px solid #cccccc;
              }
          }
          .j-color{
             font-size: 18px;
          }
          .phone-color{
              li{
                width: 298px;
                height:42px;
                margin-top: 15px;
                border: 1px solid #cccccc;
                text-align: center;
                line-height: 42px;
                font-size: 16px;
                cursor: pointer;
                p{
                  vertical-align:middle;
                  display: inline-block;
                  width: 20px;
                  height: 10px;
                  background-color: gray;
                  margin-right: 10px;
                }
              }
          }
          .phone-confirm{
            margin-top: 40px;
            width: 546px;
            height: 80px;
            padding: 30px;
            background-color: #e0e0e0;
            ul{
              width: 100%;
              height:100%;
              .phone-confirm-top{
                display: flex;
                justify-content: space-between;
                height:30px;
                line-height: 30px;
                margin-bottom: 20px;
                P{
                  font-size: 14px;
                  color: #333333;
                }
              }
              .phone-confirm-botton{
              color: #ff6700;
              font-size: 24px;
              }
            }
          }
          .button-buy{
            margin-top:30px;
            button{
              width: 298px;
              height: 52px;
              background: #ff6700;
              border: none;
              line-height: 52px;
            font-size: 16px;
              color: #ffffff;
            }
          }
        }
      }
    }
  }
  .detail-footer{
    width: 100%;
    background-color: #e0e0e0;
    .detail-footer-price{
      h3{
        font-size: 22px;
      font-weight: normal;
      margin-top: 0;
     margin-bottom: 0;
      padding: 1em 0;
      }
    }
  }
}
</style>