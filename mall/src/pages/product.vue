<template>
  <div class="product">
    <div class="container">
      <productParam :title="product.name">
        <template v-slot:buy>
          <button class="btn" @click="buy">
              立即购买
          </button>
        </template>
      </productParam>
      <div class="product-container">
          <div class="img1">
            <h2>{{product.name}}</h2>
            <h3>{{product.subtitle}}</h3>
            <p>
              <a href="">全球首款双频 GP</a>
              <span>|</span>
              <a href="">骁龙845</a>
              <span>|</span>
              <a href="">AI 双变焦拍摄</a>
              <span>|</span>
              <a href="">红外人脸识别</a>
            </p>
            <div class="price">
              <span>￥<em>{{product.price}}</em></span>
            </div>
          </div>
          <div class="img2"></div>
          <div class="img3"></div>
      <div class="item-swiper">
     <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(item,index) in slideList" :key="index">
            <img :src="item.img" alt="">
        </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>       
  <p>小米8 AI变焦双向拍摄</p>         
          </div>
  <div class="product-disc">
    <h1>60帧超慢动作摄影</h1>
    <h1>慢慢回味每一个精彩瞬间</h1>
    <h2>后置960帧电影般超慢动作视频，将眨眼的美妙展现得淋漓尽致</h2>
    <h2>更能AI精准分析视频内容，15个场景智能匹配背景音效</h2>
  </div>
  <div class="video-bg" @click="showSlide='slideDown'"></div>
  <div class="video-box" v-if="showSlide">
    <div class="overlay" >
      <div class="video" v-bind:class="showSlide">
        <span class="icon-close" @click="closeVideo"></span>
        <video src="/imgs/product/video.mp4" autoplay controls="controls"></video>
      </div>
    </div>
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
    name:'product',
     components:{productParam,Swiper,SwiperSlide},   
    data() {
      return {
        showSlide:null,  //控制动画
        product:{},//商品信息
        slideList:[
          {
            img:'/imgs/product/gallery-2.png'
          },
          {
            img:'/imgs/product/gallery-3.png'
          },
          {
            img:'/imgs/product/gallery-4.png'
          },
          {
            img:'/imgs/product/gallery-5.jpg'
          },
          {
            img:'/imgs/product/gallery-6.jpg'
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
          loop:true,
          autoplay: {
          delay: 2000,//1秒切换一次
          },
         
         slidesPerGroup: 3,
        slidesPerView : 3,
        slidesPerGroupSkip: 4,
        },
      }
    },  
   mounted() {
      this.getproductInfo()
   },
   methods: {
     getproductInfo(){
       let id=this.$route.params.id
       this.axios.get(`/products/${id}`)
       .then((res)=>{
         this.product=res
       })
     },
     buy(){
       let id=this.$route.params.id
       this.$router.push(`/detail/${id}`)
     },
     closeVideo(){
       this.showSlide='slideUp'
       setTimeout(() => {
         this.showSlide=''
       },600);
     }
   },
   
}
</script>

<style lang='scss'>
@import '../assets/scss/mixin.scss';

  .product{
    width: 100%;
    .product-container{
        .img1{
          @include bgImg(100%,480px,'/imgs/product/product-bg-1.png');
          overflow: hidden;
           text-align: center;
           h2{
          font-size: 40px;
          margin-top: 20px;
            }
            h3{
          font-size: 20px;
          margin: 10px 0 10px 0;
            }
            a{
              color: black;
              font-size: 16px;
              padding: 0 20px;
            }
            .price{
              margin-top: 20px;
              font-size: 30px;
              font-weight: bold;
            }
        }
       .img2{
         @include bgImg(100%,405px,'/imgs/product/product-bg-2.png');
       }
       .img3{
         @include bgImg(100%, 405px,'/imgs/product/product-bg-3.png');
       }
       .item-swiper{
         margin: 36px auto 52px;
         text-align: center;
         img{
           width:350px;
         }
       }
       .product-disc{
         width: 100%;
         height: 400px;
         background-color: black;
         text-align: center;
         color: #ffffff;
         overflow: hidden;
         h1{
           font-size: 50px;
           margin-top: 40px;
            &:last-child{
              margin-top: 0px;
            }
         }
         h2{
            font-size: 24px;
            margin-top: 30px;
            &:last-child{
              margin-top: 0;
            }
         }
       }
        .video-bg{
         
          height: 400px;
          background: url('/imgs/product/gallery-1.png') center;
          background-size: contain;
          cursor: pointer;
        }
        /* 视频的样式 */
       .video-box{
         .overlay{
           @include position(fixed);
            background-color: rgba(0,0,0,.5);
            z-index: 10;
            @keyframes slideDown {
              from{
                top: -50%;
                opacity: 0;
              }
              to{
                top: 50%;
                opacity: 1;
              }
            }
            @keyframes slideUp {
               from{
                top: 50%;
                opacity: 1;
              }
              to{
                top: -50%;
                opacity: 0;
              }
            }
           .video{
            z-index: 10;
             position: fixed;
             top: -50%;
             left: 50%;
             transform: translate(-50%,-50%);
             width: 1000px;
             height: 536px;
             opacity: 1; 
             &.slideDown{
               animation: slideDown .6s linear;
               top: 50%;
             }
             &.slideUp{
               animation: slideUp .6s linear;
             }
             .icon-close{
               @include bgImg(20px,20px,'/imgs/icon-close.png');
               position: absolute;
               top: 20px;
               right: 20px;
               cursor: pointer;
               z-index: 15;
              
             }
             video{
               width: 100%;
               height: 100%;
               object-fit: cover;
               outline: none;
             }
           }
         }
       }
    }
  }
</style>