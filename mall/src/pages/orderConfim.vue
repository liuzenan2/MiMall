<template>
  <div class="orderConfim">
      <div class="wrapper">
        <div class="container">
          <div class="checkout-wrap">
            <!-- 包容 -->
              <div class="checkout-detail">
                <!-- 收货地址 -->
                  <div class="shipping-address">
                    <h3>收货地址</h3>
                    <!-- 收货地址框 -->
                    <div class="address-box" >
                        <div class="address-item" v-for="(item,index) in list" :key="index" @click="current=index" :class="{'currentAdd':current==index}" >
                          <div class="address-item-wrapper">
                            <h2>{{item.receiverName}}</h2>
                           <div class="phone">{{item.receiverMobile}}</div>
                           <div class="address-con">
                              <span>{{item.receiverProvince}}&emsp;&emsp;</span>
                              <span>{{item.receiverCity}}&emsp;&emsp;</span>
                              <span>{{item.receiverDistrict}}&emsp;&emsp;</span>
                              <span>{{item.receiverAddress}}&emsp;&emsp;</span>
                           </div>
                           <p>{{item.receiverZip}}</p>
                          </div>
                            <!-- 删除图标 -->
                            <a href="javascript:;" @click="delAddress(item)">
                        <svg t="1588503377458" class="icon-del" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2897" width="200" height="200"><path d="M517.59 21.609c-100.299 0-181.703 79.514-185.167 179.34H98.603c-25.979 0-47.235 21.099-47.235 47.236 0 25.98 21.099 47.237 47.236 47.237h52.117v528.416c0 99.196 67.233 180.285 150.37 180.285h423.55c82.98 0 150.37-80.616 150.37-180.285V295.737h47.236c25.98 0 47.236-21.1 47.236-47.237 0-25.98-21.099-47.236-47.236-47.236H702.441C699.449 101.124 617.888 21.61 517.59 21.61z m-96.677 179.34c3.464-51.172 45.19-90.85 96.834-90.85s93.37 39.835 96.362 90.85H420.913z m-119.98 714.842c-29.444 0-61.88-37.789-61.88-91.953V295.737h547.311V824.31c0 54.007-32.436 91.954-61.88 91.954H300.933v-0.473z m0 0" p-id="2898"></path><path d="M364.387 802.267c21.57 0 39.363-21.571 39.363-48.653V476.022c0-27.082-17.635-48.654-39.363-48.654-21.572 0-39.364 21.572-39.364 48.654v277.592c0 26.924 17.32 48.653 39.364 48.653z m142.496 0c21.571 0 39.363-21.571 39.363-48.653V476.022c0-27.082-17.635-48.654-39.363-48.654-21.571 0-39.364 21.572-39.364 48.654v277.592c0 26.924 17.793 48.653 39.364 48.653z m149.896 0c21.571 0 39.364-21.571 39.364-48.653V476.022c0-27.082-17.635-48.654-39.364-48.654-21.571 0-39.363 21.572-39.363 48.654v277.592c0 26.924 17.162 48.653 39.363 48.653z m0 0" p-id="2899"></path></svg>
                        </a>
                        <!-- 修改图标 -->
                        <a href="javascript:;" @click="upAddressModal(item)">
                        <svg t="1588503421725" class="icon-amend" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3694" width="200" height="200"><path d="M521.152 393.408l319.936-320 45.248 45.312-320 320z" fill="#333333" p-id="3695"></path><path d="M896 960H64V64h448v64H128v768h704V448h64v512z" fill="#333333" p-id="3696"></path></svg>
                        </a>
                        </div>
                          <!-- 添加地址 -->
                        <div class="address-item" @click="openAddressModal">
                          <div class="address-item-wrapper">
                            <a href="javascript:;" >
                              <svg t="1588559462817" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2337" width="200" height="200"><path d="M874.971429 149.942857C776.228571 54.857143 648.228571 0 512.914286 0S245.942857 54.857143 150.857143 149.942857c-201.142857 201.142857-201.142857 522.971429 0 724.114286C245.942857 969.142857 377.6 1024 512.914286 1024s266.971429-54.857143 362.057143-149.942857c201.142857-201.142857 201.142857-522.971429 0-724.114286m-51.2 672.914286C739.657143 906.971429 629.942857 950.857143 512.914286 950.857143s-226.742857-43.885714-310.857143-128c-171.885714-171.885714-171.885714-449.828571 0-621.714286C286.171429 117.028571 395.885714 73.142857 512.914286 73.142857s226.742857 43.885714 310.857143 128c171.885714 171.885714 171.885714 449.828571 0 621.714286" p-id="2338"></path><path d="M549.485714 475.428571V288.914286c0-21.942857-14.628571-36.571429-36.571428-36.571429s-36.571429 14.628571-36.571429 36.571429V475.428571H289.828571c-21.942857 0-36.571429 14.628571-36.571428 36.571429 0 10.971429 3.657143 18.285714 10.971428 25.6s14.628571 10.971429 25.6 10.971429H476.342857v186.514285c0 10.971429 3.657143 18.285714 10.971429 25.6 7.314286 7.314286 14.628571 10.971429 25.6 10.971429 21.942857 0 36.571429-14.628571 36.571428-36.571429V548.571429h186.514286c21.942857 0 36.571429-14.628571 36.571429-36.571429s-14.628571-36.571429-36.571429-36.571429H549.485714z" p-id="2339"></path></svg>
                            </a>
                          </div>
                        </div>
                    </div>
                  
                  
                  </div>
                  <!--  优惠卷和商品信息-->
                  <div class="detail-section">
                <div class="detail-header">商品及优惠券</div>
                <div class="goods-list">
                    <div class="good-item" >
                      <ul v-for="(item,index) in cartList" :key="index">
                        <li class="col-1"><img v-lazy="item.productMainImage" alt=""></li>
                        <li class="col-2"><p>{{item.productName+'   '+item.productSubtitle}}</p></li>
                        <li class="col-3"><p>{{item.productTotalPrice}}元 x {{item.quantity}}</p></li>
                        <li class="col-4"><p>{{item.productTotalPrice}}元</p></li>
                      </ul>
                    </div>
                </div>
                <!-- 配送方式 -->
                <div class="distribution">
                    <div class="distribution-title" style="width:133px">
                      配送方式
                    </div>
                    <div class="distribution-title">
                      <a href="javascript:;" style="font-size: 16px;color: #ff6700;">包邮</a>
                    </div>
                </div>
                <!-- 发票 -->
                  <div class="distribution">
                      <div class="distribution-title">
                        发票
                      </div>
                      <div class="distribution-list">
                        <a href="javascript:;">电子普通发票</a>
                        <a href="javascript:;">个人</a>
                        <a href="javascript:;">商品明细</a>
                        <a href="javascript:;">修改</a>
                      </div>
                  </div>
                  </div>
                  <!-- 商品总价件数等等 -->
                  <div class="detail-count">
                      <div class="detail-count-info">
                          <ul>
                            <li class="count-1">商品件数：</li>
                            <li class="count-1">商品总价：</li>
                            <li class="count-1">优惠活动：</li>
                            <li class="count-1">运费：</li>
                            <li class="count-1">应付金额：</li>
                          </ul>
                          <ul>
                            <li class="count-2">{{count}}件</li>
                            <li class="count-2">{{cartTotalPrice}}元</li>
                            <li class="count-2">0元</li>
                            <li class="count-2">0元</li>
                            <li class="count-2">{{cartTotalPrice}}</li>
                          </ul>
                      </div>
                  </div>
                  <!-- 结算 返货购物车 -->
                  <div class="close-backCart">
                      <div >
                        <a href="/#/cart">返回购物车</a>
                        <a href="javascript:;" @click="orderSubmit">去结算</a>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
      <modal 
      title="新增确认"
      btnType="1"
      :showModal="showEditModal"
      @cancel="showEditModal=false"
      @submit="submitAddress"
      >
      <template v-slot:body>
        <div class="edit-wrap">
            <div class="item">
              <input type="text" class="input" placeholder="姓名" v-model="checkItem.receiverName">
            </div>
            <div class="item">
              <input type="text" class="input" placeholder="手机号" v-model="checkItem.receiverMobile">
            </div>
            <div class="item">
              <select name="province" v-model="checkItem.receiverProvince">
                <option value="北京">北京</option>
                <option value="浙江">浙江</option>
                <option value="江西">江西</option>
              </select>
              <select name="city" v-model="checkItem.receiverCity">
                <option value="北京">北京</option>
                <option value="浙江">杭州</option>
                <option value="江西">南昌</option>
              </select>
              <select name="districe" v-model="checkItem.receiverDistrict">
                <option value="北京">昌平区</option>
                <option value="浙江">海淀区</option>
                <option value="江西">东城区</option>
              </select>
            </div>
            <div class="item">
              <textarea name="street" id="" v-model="checkItem.receiverAddress"></textarea>
            </div>
            <div class="item">
              <input type="text" class="input" placeholder="邮编" v-model="checkItem.receiverZip">
            </div>
        </div>
      </template>
      </modal>
      <modal 
      title="是否要删除"
      btnType="1"
      :showModal="showDelModal"
      @cancel="showDelModal=false"
      @submit="submitAddress"
      >
      <template v-slot:body>
            <p>你确定要删除吗</p>
      </template>
      </modal>
  </div>
</template>

<script>
import modal from '../components/Modal'
export default {
    name:'orderConfim',
    components:{modal},
    data() {
      return {
        list:[],//收获地址列表
        cartList:[], //购物车中需要结算商品
        cartTotalPrice:0,//商品的总价格
        count:0,  //商品的计算数量
        checkItem:{}, //选中商品对象 删除和编辑都需要使用
        userAction:'', //用户行为，0：新增 1编辑 2：删除
        showDelModal:false,
        showEditModal:false,  //是否显示新增弹框
        current:0,
      }
    },
    mounted() {
      this.getAddressList()
      this.getCartList()
    },
    methods: {
      //打开添加地址的模态框
      openAddressModal(){
        this.userAction=0;
        this.checkItem={},
        this.showEditModal=true
      },
      //修改地址
       upAddressModal(item){
        this.userAction=1;
        this.checkItem=item,
        this.showEditModal=true
      },
      //所有收货地址
      getAddressList(){
        this.axios.get('/shippings').then((res)=>{
          this.list=res.list
        })
      },
      //删除修改地址
      delAddress(item){
        this.checkItem=item
        this.userAction=2
        this.showDelModal=true
      },
      //地址新增，编辑，新增功能
      submitAddress(){
        let {checkItem,userAction}=this
        let method
        let url
        let params={}
        if(userAction==0){
            method='post'
            url='/shippings'

        }else if(userAction==1){
            method='put'
            url=`/shippings/${checkItem.id}`
        }else{
          method='delete'
          url=`/shippings/${checkItem.id}`
        }
        if(userAction==0 ||userAction==1){
          let{receiverName,receiverMobile,receiverProvince,receiverCity,receiverDistrict,receiverAddress,receiverZip}=checkItem
          params={
              receiverName,
              receiverMobile,
              receiverProvince,
              receiverCity,
              receiverDistrict,
              receiverAddress,
              receiverZip,
            }
        }
        this.axios[method](url,params).then(()=>{
            this.closeModal()
            this.getAddressList() //在执行一遍添加所有地址，渲染后面的地址数据数据
        })
      },
      closeModal(){
        this.checkItem={}
        this.userAction=null
        this.showDelModal=false
        this.showEditModal=false
      },
      getCartList(){
          this.axios.get('/carts').then((res)=>{
          let list=res.cartProductVoList  //购物车里所有的商品数
          this.cartTotalPrice=res.cartTotalPrice //总价
          this.cartList=list.filter(item=>item.productSelected)
          this.cartList.map((item)=>{
            this.count += item.quantity
          })
        })
      },
       //订单提交
    orderSubmit(){
      console.log(1)
     let item = this.list[this.current]
     if(!item){
       this.$message.error('请选择一个收货地址')
       return 
     }
     this.axios.post('/orders',{
       shippingId:item.id
     }).then((res)=>{
       this.$router.push({path:'/order/orderPay',query:{
         orderId:res.orderNo
       }})
      // this.$router.push({name:'orderPay',params:{
      //   orderId:res.orderNo
      // }})
     })
      }
    }
}
</script>

<style lang='scss'>
@import '../assets/scss/base.scss';
 .orderConfim{
    .wrapper{
      width: 100%;
      padding: 40px 0 60px 0;
      background-color: #f5f5f5;
      .container{
        background-color: #ffffff;
        .checkout-detail{
          padding-top: 48px;
          .shipping-address{
            width: 1178px;
            height:242px;
            padding: 0 24px;
            h3{
              color: #333;
              font-size: 18px;
              line-height: 20px;
              margin-bottom: 20px;
              font-weight: 400;
            }
            .address-box{
                width: 100%;
                height: 200px;
                .address-item{
                  width: 269px;
                  height: 178px;
                  border: 1px solid #e0e0e0;;
                  margin-right: 17px;
                  cursor: pointer;
                  position: relative;
                  float: left;
                  &.currentAdd{
                    border: 1px solid red;
                  }
                  .icon{
                    position:absolute;
                    left:50%;
                    top:50%;
                    transform:translate(-50%,-50%);
                    width: 40px;
                    height:40px;
                  }
                  /* 删除图标的样式 */
                  .icon-del{
                    position: absolute;
                    width: 20px;
                    height:20px;
                    bottom: 20px;
                    left:20px;
                  }
                  /* 修改样式的图标 */
                  .icon-amend{
                    position: absolute;
                    width: 20px;
                    height:20px;
                    bottom: 20px;
                    right: 20px;
                  }
                  .address-item-wrapper{
                    width: 220px;
                    padding: 15px 24px 0 24px;
                    h2{
                      height:30px;
                      margin-bottom: 10px;
                      font-size: 18px;
                      color: #333;
                      line-height: 30px;
                      font-weight: 400;
                    }
                    .phone{
                      line-height: 22px;
                      color: #757575;
                    }
                    .address-con{
                      font-size: 14px;
                      line-height: 30px;
                    
                    }
                  }
                }
              }
          }
          .detail-section{
            width: 1178px;
            padding: 0 24px;
            .detail-header{
            color: #333;
            font-size: 18px;
            line-height: 40px;
            }
            .goods-list{
              padding: 5px 0;
              width: 100%;
              border-bottom: 1px solid #e0e0e0;;
              .good-item{
                width: 100%;
                padding: 10px 0;
                ul{
                  display: flex;
                  line-height: 30px;
                  font-size: 16px;
                  padding: 10px 0;
                  .col-1{
                    width: 30px;
                    height:30px;
                    margin-right: 10px;
                    img{
                      width: 100%;
                      height:100%;
                    }
                  }
                  .col-2{
                    width: 650px;
                    height:30px;
                  }
                  .col-3{
                    width: 150px;
                    height: 30px;
                  }
                  .col-4{
                    width: 337px;
                    height:30px;
                    text-align: center;
                    color: #ff6701;
                  }
                }
              }
            }
          }
          .distribution{
            display: flex;
            width: 100%;
            height: 46px;
            padding: 25px 0;
            line-height: 38px;
             border-bottom: 1px solid #e0e0e0;;
             .distribution-title{
               width: 150px;
               height: 38px;
               color: #333;
               font-size: 18px;
             }
             .distribution-list{
               height:38px;
               width: 100%;
               a{
                 display: inline-block;
                 margin-right: 14px;
                 font-size: 14px;
                 color: #ff6700;
               }
             }
          }
          .detail-count{
            width: 1130px;
            margin: 0 48px;
            padding: 20px 0;
            position: relative;
            .detail-count-info{
              right: 0;
              display: flex;
              justify-content: flex-end;
              font-size: 14px;
               text-align: right;
              .count-1{
                width: 126px;
                height: 28px;
                color: #757575;
                line-height: 28px;
                
              }
              .count-2{
                  width: 97px;
                  height: 28px;
                  line-height: 28px;
                  color: #ff6700;
                  &:last-child{
                    font-size: 28px;
                    
                  }
                }
            }
          }
          .close-backCart{
            width: 1130px;
            height:40px;
            padding: 20px 48px;
            border-top: 1px solid #e0e0e0;;
            display: flex;
            justify-content: flex-end;
            font-size: 14px;
            a{
              width: 158px;
              height: 38px;
              display: inline-block;
              margin-left: 30px;
              border: 1px solid #b0b0b0;
              line-height: 38px;
              text-align: center;
              color: #b0b0b0;
              &:last-child{
                border: none;
                background-color: #ff6700;
                color: #ffffff;
              }
            }
          }
        }
      }
    }
    .edit-wrap{
      font-size: 14px;
      .item{
        margin-bottom: 15px;
        .input{
          float: left;
          box-sizing: border-box;
          width: 283px;
          height: 40px;
          line-height: 40px;
          padding-left: 15px;
          border: 1px solid #e5e5e5;
          margin-left: 7px;
        }
        select{
          height: 40px;
          line-height: 40px;
          border: 1px solid #e5e5e5;
          margin:15px 0 0 7px;
        }
        textarea{
          border: 1px solid #e5e5e5;
          height: 62px;
          width: 100%;
          padding: 13px 15px;
          box-sizing: border-box;
          margin-left: 7px;
        }
      }
    }
 }
</style>