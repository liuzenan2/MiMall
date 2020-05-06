<template>
  <div class="orderList">
       <orderHeader title="订单列表">
       <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话，了解更多</span>
      </template>
    </orderHeader>
     <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <Looading v-if="loading"></Looading>
          <div class="order" v-for="(item,index) in list" :key="index">

            <div class="order-title">
              <div class="item-info fl">
                {{item.createTime}}
                <span>|</span>
                {{item.receiverName}}
                <span>|</span>
                订单号：{{item.orderNo}}
                <span>|</span>
                {{item.paymentTypeDesc}}
              </div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <span class="money">{{item.payment}}</span>
                <span>元</span>
              </div>
            </div>
            <div class="goodsInfo-box" v-for="(order,j) in item.orderItemVoList" :key="j">
                <div class="box-img">
                    <img v-lazy="order.productImage" alt="">
                </div>
                <div class="goods-word">
                  <p>{{order.productName}}</p>
                  <p>{{order.quantity +'X'+ order.currentUnitPrice}}元</p>
                </div>
                <div class="pay-Info" v-if="item.status==10 ||showModal">
                  <a href="javascript:;" @click="goPay(item.orderNo)">{{item.statusDesc}}</a>
                  <a href="javascript:;" @click="godel(item.orderNo)">取消订单</a>
                </div>
            </div>
          </div>
        </div>
        <el-pagination
          background
          layout="prev, pager, next"
          :pageSize="pageSize"
          :total="total"
          @current-change="change"
          >
        </el-pagination>
        <!-- <el-button type="primary" :loading="loading" @click="loadMore">加载中</el-button> -->
      </div>
    </div>
  </div>
</template>

<script>
import orderHeader from '../components/orderHeader'
import Looading from '../components/Loading'

import {Pagination,/* Button */} from 'element-ui'
export default {
    name:'orderList',
    components:{orderHeader,
    Looading,
    [Pagination.name]:Pagination,
    /* [Button.name]:Button, */
    },
    data() {
      return {
        list:[],
        showModal:false,
        loading:true,
        pageSize:4,
        total:0,
        pageNum:null,
      }
    },
    methods: {
        getOrderList(){
          this.loading=true
          this.axios.get('/orders',{
            params:{
              pageSize:this.pageSize,   //多少显示条数据
              pageNum:this.pageNum      //当前的页数
            }
          }).then((res)=>{
            this.list=res.list
            this.loading=false
            this.total=res.total
          })
        },
        goPay(orderId){
          this.$router.push({
            path:'/order/orderPay',
            query:{
              orderId
            }
          })
        },
        godel(orderId){
           this.axios.put(`/orders/${orderId}`).then(()=>{
             this.showModal=true
            this.$message.success('取消成功')
            this.getOrderList()
          })
        },
        // loadMore(){
          
        //   this.pageNum++
        //   this.getOrderList()
        // }
        change(pageNum){
          console.log(pageNum)
          this.pageNum=pageNum
          this.getOrderList()
        }
    },
    mounted() {
      this.getOrderList()
    },
}
</script>

<style lang='scss'>
.orderList{
  .wrapper{
    .order{
      &:first-child{
        margin-top: 20px;
      }
      border: 1px solid #cccccc;
      padding: 20px 30px;
      margin-bottom: 20px;
      .order-title{
        display: flex;
        justify-content: space-between;
        .item-info{
          font-size: 14px;
          
        }
        .item-money {
            font-size: 16px;
            .money{
              font-size: 20px;
              color: #333333;
            }
          }
      }

      .goodsInfo-box{
        margin-top: 40px;
        .box-img{
          display: inline-block;
          width: 80px;
          height: 80px;
          
          img{
            width: 100%;
            height: 100%;
          }
        }
        .goods-word{
          display: inline-block;
          font-size: 18px;
          vertical-align: top;
          padding-top: 17px;
        }
        .pay-Info{
          float: right;
          line-height: 95px;
          font-size: 16px;
         
          cursor: pointer;
          a{
             color: #ff6700;
             display: block;
             height: 15px;
          }
        }
      }
    }
  }
}

</style>