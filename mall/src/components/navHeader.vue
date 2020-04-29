<template>
  <div class="header">
    <!-- 顶部的顶部条 -->
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <!-- 顶部的导航区域 -->
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="userName">{{userName}}</a>
           <a href="javascript:;" v-if="!userName" @click="login">登陆</a>
          <a href="javascript:;">我的订单</a>
          <a href="javascript:;" class="cart" @click="gotoCart">
            <span class="icon-cart" ></span>购物车
          </a>
        </div>
      </div>
    </div>
    <!-- 顶部下面的导航区域   logo  搜索框 -->
    <div class="nav-header">
      <div class="container">
        <!-- logo -->
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <!-- 菜单 -->
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a :href="'/#/product/'+item.id" target="_blank">
                    <div class="pro-img">
                        <img :src="item.mainImage" alt="">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price |currency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
           <div class="item-menu">
            <span>红米手机</span>
            <div class="children"></div>
          </div>
           <div class="item-menu">
            <span>电视</span>
            <div class="children">
               <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                        <img src="/imgs/nav-img/nav-3-1.jpg" alt="">
                    </div>
                    <div class="pro-name">电视</div>
                    <div class="pro-price">1799</div>
                  </a>
                </li>
                 <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                        <img src="/imgs/nav-img/nav-3-1.jpg" alt="">
                    </div>
                    <div class="pro-name">电视cc</div>
                    <div class="pro-price">1799</div>
                  </a>
                </li>
                 <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                        <img src="/imgs/nav-img/nav-3-1.jpg" alt="">
                    </div>
                    <div class="pro-name">电视cc</div>
                    <div class="pro-price">1799</div>
                  </a>
                </li>
                 <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                        <img src="/imgs/nav-img/nav-3-1.jpg" alt="">
                    </div>
                    <div class="pro-name">电视cc</div>
                    <div class="pro-price">1799</div>
                  </a>
                </li>
                 <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                        <img src="/imgs/nav-img/nav-3-1.jpg" alt="">
                    </div>
                    <div class="pro-name">电视cc</div>
                    <div class="pro-price">1799</div>
                  </a>
                </li>
                 <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                        <img src="/imgs/nav-img/nav-3-1.jpg" alt="">
                    </div>
                    <div class="pro-name">电视cc</div>
                    <div class="pro-price">1799</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 搜索框 -->
        <div class="header-search">
          <div class="wrapper">
            <input type="text">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-header", //加载组件的时候引用的name值
  data() {
    return {
      userName:'',
      phoneList:[]
    }
  },
  mounted() {
   this.getProducList()
  },
  filters:{
    currency(val){
        if(!val){
          return '0.00';
        }else{
          return '￥'+val.toFixed(2)+'元'
        }
    }
  },
  methods: {
    getProducList(){
      this.axios.get('/products',{
        params:{
          categoryId:'100012',
          pageSize:6
        }
      }).then((res)=>{
       
        this.phoneList=res.list
      })
    },
    gotoCart(){
      this.$router.push('/cart')
    },
    login(){
      this.$router.push('/login')
    }
  },
};
</script>

<style lang='scss' scoped>
 @import '../assets/scss/base.scss';
 @import '../assets/scss/mixin.scss';
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
     @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .cart {
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        color: #ffffff;
        .icon-cart {
          @include bgImg(16px,12px,"/imgs/icon-cart-checked.png");
          display: inline-block;
          margin-right: 4px;
        }
      }
    }
  }

  .nav-header{
    .container{
      position: relative;
      height: 112px;
     @include flex();
      .header-logo{
        display: inline-block;
        width: 55px;
        height:55px;
         background-color: #ff6600;
        a{
          display: inline-block;
          width: 110px;
          height: 55px;
          &:before{
            @include bgImg(55px,55px,'/imgs/mi-logo.png');
            display: inline-block;
            content: '';
            transition: all 1s;
          }
          &:after{
            @include bgImg(55px,55px,'/imgs/mi-home.png');
            display: inline-block;
            content: '';
          }
          &:hover:before{
            margin-left: -55px;
            transition: all .5s;
          } 
        }
      }
    }
  }

  .header-menu{
    display: inline-block;
    padding-left: 209px;
    width:643px;
    .item-menu{
      display: inline-block;
      color: #333333;
      font-weight: bold;
      font-size: 16px;
      line-height: 112px;
      margin-right: 20px;
      span{
        cursor: pointer;
      }
      &:hover{
        color: #ff6600;
        .children{
          height:220px;
          opacity: 1;
          z-index: 10;
        }
      }
      .children{
        position: absolute;
        height:0;
        top: 112px;
        left: 0;
        width: 1226px;
        border-top: 1px solid #e5e5e5;
        box-shadow: 0px 7px 6px 0px rgba(0,0,0,0.11);
        opacity:0;
        overflow: hidden;
        transition: all 1s;
        background-color: #ffffff;
        }
        .product{
          position: relative;
          float: left;
          width: 16.6%;
          height: 220px;
          font-size: 12px;
          text-align: center;
          line-height: 12px;
          a{
            height:100%;
            display: inline-block;
            }
          img{
            height: 111px;
            width: auto;
            margin-top: 26px;
          }
          .pro-img{
            height:137px;
          }
          .pro-name{
            font-weight: 800;
            margin-top: 19px;
            margin-bottom: 8px;
            color: #333333;
          }
          .pro-price{
            color: #ff6600;
          }
          &:before{
          content: '';
          position: absolute;
          top: 28px;
          right: 0;
          height: 100px;
          width: 1px;
          border-left: 1px solid #d7d7d7;
           }
           &:last-child:before{
             display: none;
           }
        }
      }
    }
  }
  .header-search{
    display: inline-block;
    width: 319px;
    .wrapper{
      height:50px;
      border: 1px solid #E0E0E0;
      display: flex;
      align-items: center;
      input{
        box-sizing: border-box;
        width: 264px;
        height: 50px;
        border: none;
        padding-left: 15px;
      }
      a{
        @include bgImg(18px,18px,'/imgs/icon-search.png');
        display: inline-block;
         margin-left: 17px;
    }
  }
}
</style>