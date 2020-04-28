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
          <a href="javascript:;">登陆</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;" class="cart">
            <span class="icon-cart"></span>购物车
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
            <div class="children"></div>
          </div>
           <div class="item-menu">
            <span>红米手机</span>
            <div class="children"></div>
          </div>
           <div class="item-menu">
            <span>电视</span>
            <div class="children"></div>
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
  name: "nav-header" //加载组件的时候引用的name值
};
</script>

<style lang='scss'>
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
}
</style>