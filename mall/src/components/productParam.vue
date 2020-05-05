<template>
  <div class="productParam" :class="{'is_fixed':inFixed}">
    <div class="container">
        <div class="productParam-title">
           {{title}}
        </div>
        <div class="productParam-param">
            <a href="javascript:;">概述</a><span>|</span>
            <a href="javascript:;">参数</a><span>|</span>
            <a href="javascript:;">用户评价</a><span></span>
            <slot name="buy"></slot> 
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'productParam',
    props:{
        title:String
    },
    data() {
        return {
            inFixed:false
        }
    },
    mounted() {
        window.addEventListener('scroll',this.initHeight)
    },
    methods: {
        initHeight(){
            let scrollTop= document.documentElement.scrollTop ||window.pageYOffset
            this.inFixed=scrollTop>152?true:false;
        }
    },
    destroyed() {
        window.removeEventListener('scroll',this.initHeight,false)
    },
}
</script>

<style lang='scss'>
@import '../assets/scss/mixin.scss';
    .productParam{
        height:70px;
        line-height: 70px;
        border-top : 1px solid #e5e5e5;
        z-index: 10;
        &.is_fixed{
           position: fixed;
           top: 0;
           background-color: #ffffff;
           box-shadow: 0 5px 5px #cccccc;
        }
        .container{
           @include flex();
           /* 标题 */
           .productParam-title{
               font-size: 18px;
               color: #333333;
               font-weight: bold;
               margin-left: 20px;
           }

           .productParam-param{
               font-size: 14px;
               margin-right: 20px;
              
            a{
                 color: #666666;
            }
            span{
                margin: 0 10px;
                
            }
           }
        }
    }
</style>