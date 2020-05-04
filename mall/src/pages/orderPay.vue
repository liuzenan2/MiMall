<template>
  <div class="order-pay">
    <div class="wrapper">
      <div class="container">
        <div class="order-wrap">
          <div class="item-order">
            <div class="icon-succ"></div>
            <div class="order-info">
              <h2>订单提交成功！去付款咯～</h2>
              <p>请在<span>30分</span>内完成支付, 超时后将取消订单</p>
              <p>收货信息：{{addressInfo}}</p>
            </div>
            <div class="order-total">
              <p>应付总额：<span>2599</span>元</p>
              <p>订单详情<em class="icon-down" :class="{'up':showDetail}"  @click="showDetail=!showDetail"></em></p>
            </div>
          </div>
          <div class="item-detail" v-if="showDetail">
            <div class="item">
              <div class="detail-title">订单号：</div>
              <div class="detail-info theme-color">{{orderNo}}</div>
            </div>
            <div class="item">
              <div class="detail-title">收货信息：</div>
              <div class="detail-info">{{addressInfo}}</div>
            </div>
            <div class="item good">
              <div class="detail-title">商品名称：</div>
              <div class="detail-info">
                <ul>
                  <li v-for="(item,index) in goodList" :key="index" >
                    <img v-lazy="item.productImage" alt="">
                    {{item.productName}}
                  </li>
                </ul>
              </div>
            </div>
            <div class="item">
              <div class="detail-title">发票信息：</div>
              <div class="detail-info">电子发票 个人</div>
            </div>
          </div>
        </div>
        <div class="item-pay">
          <h3>选择以下支付方式付款</h3>
          <div class="pay-way">
            <p>支付平台</p>
            <div class="pay pay-ali " :class="{'checked':payType==1}" @click="paySubmit(1)"></div>
            <div class="pay pay-wechat" :class="{'checked':payType==2 }" @click="paySubmit(2)"></div>
          </div>
        </div>
      </div>
    </div>
   <weixinCode v-if="showPay" @close="closeModal" :img='payImg'></weixinCode>
   <Modal
   title="支付确认"
   btnType="3"
   :showModal="showPayModal"
   confirmBtn="查看订单"
   cancelBtn="未支付"
   @cancel="showPayModal=false"
   @submit="goOrderList"
   >
    <template v-slot:body>
      <p>您确认是否完成了支付</p>  
    </template>
   </Modal>
  </div>
</template>

<script>
import QRCode from 'qrcode'
import weixinCode from '../components/weixinCode'
import Modal from '../components/Modal'
export default {
    name:'orderPay',
    components:{weixinCode,Modal},
    data() {
      return {
        addressInfo:null, //收货人的地址信息
        orderNo:this.$route.query.orderId,
        goodList:[],// 订单详情
        showDetail:false,
        payType:0,//支付的类型
        showPay:false,//微信支付弹框
        payImg:'',  //微信支付二维码地址
        showPayModal:false,  //是否显示二次支付
        T:'' //定时器
      }
    },
    methods: {
      getOrderDetail(){
        this.axios.get(`/orders/${this.orderNo}`).then((res)=>{
          let item=res.shippingVo
            this.addressInfo=`${item.receiverName} ${item.receiverMobile} ${item.receiverProvince} ${item.receiverCity} ${item.receiverDistrict} ${item.receiverAddress} ${item.receiverZip}`
            this.goodList=res.orderItemVoList
        })  
      },
      paySubmit(payType){
        this.payType=payType
        if(payType==1){
          window.open('/#/order/aliPay?orderId='+this.orderNo,'_black')
        }else if(payType==2){
         
          this.axios.post('/pay',{
          orderId:this.orderNo,
          orderName:this.goodList[0].productName, //扫码支付时订单名称
          amount:100, //单位元
          payType:2, //1支付宝，2微信
          }).then((res)=>{
            QRCode.toDataURL(res.content)
            .then(url => {
              this.showPay=true
              this.payImg=url
              this.orderState()
            })
            .catch(err => {
              console.error(err)
            })
          })
        }
      },
      //关闭微信弹框
      closeModal(){
        this.showPay=false
        this.showPayModal=true
        clearInterval(this.T);
      },
      goOrderList(){
      this.$router.push('/order/orderList')
    },
    //轮询当前订单支付的状态
     orderState(){
      this.T= setInterval(() => {
          this.axios.get(`/orders/${this.orderNo}`).then((res)=>{
         if(res.status==20){
           clearInterval(this.T);
           this.goOrderList( )
         }
       })
       }, 1000);
     }
    },
    mounted() {
      this.getOrderDetail()
    },
    
}
</script>

<style lang='scss'>
@import '../assets/scss/mixin.scss';
  .order-pay{
    .wrapper{
      background-color:#F5F5F5;
      padding-top:30px;
      padding-bottom:61px;
      .order-wrap{
        padding: 62px 50px;
        background-color: #fff;
        font-size:14px;
        margin-bottom:30px;
        .item-order{
          display: flex;
          align-items: center;
          .icon-succ{
            @include bgImg(90px,90px,'/imgs/icon-gou.png');
            
            border-radius: 50%;
            background-color:#80c58a;
            background-size:60px;
            margin-right:40px;
          }
          .order-info{
            margin-right: 248px;
            h2{
              font-size:24px;
              color:#333333;
              margin-bottom:20px;
            }
            p{
              color:#666666;
              span{
                color:#FF6700;
              }
            }
          }
          .order-total{
            &>p:first-child{
              margin-bottom:30px;
            }
            span{
              font-size:28px;
              color:#FF6700;
            }
            .icon-down{
              display:inline-block;
               @include bgImg(14px,10px,'/imgs/icon-down.png');
              background-size:contain;
              margin-left:9px;
              transition:all .5s;
              cursor:pointer;
              &.up{
                transform: rotate(180deg);
              }
            }
            .icon-up{
              transform: rotate(180deg);
            }
          }
        }
        .item-detail{
          border-top: 1px solid #D7D7D7;
          padding-top: 47px;
          padding-left: 130px;
          font-size: 14px;
          margin-top: 45px;
          .item{
            margin-bottom:19px;
            .detail-title{
              float:left;
              width:100px;
            }
            .detail-info{
              display:inline-block;
              img{
                width: 30px;
                vertical-align: middle;
              }
            }
          }
        }
      }
      .item-pay{
        padding:26px 50px 72px;
        background-color:#ffffff;
        color: #333333;
        h3{
          font-size: 20px;
          font-weight: 200;
          color: #333333;
          padding-bottom: 24px;
          border-bottom: 1px solid #D7D7D7;
          margin-bottom: 26px;
        }
        .pay-way{
          font-size:18px;
          .pay{
            display:inline-block;
            width:188px;
            height:64px;
            border:1px solid #D7D7D7;
            cursor:pointer;
            &:last-child{
              margin-left:20px;
            }
            &.checked{
              border:1px solid #FF6700;
            }
          }
          .pay-ali{
            background:url('/imgs/pay/icon-ali.png') no-repeat center;
            background-size:103px 38px;
            margin-top:19px;
          }
          .pay-wechat{
            background:url('/imgs/pay/icon-wechat.png') no-repeat center;
            background-size:103px 38px;
          }
        }
      }
    }
  }
</style>