<template>
  <div class="footer">
      <div class="footer-logo">
        <img src="/imgs/logo-footer.png" alt="">
        <p>小米商城</p>
      </div>
      <div class="footer-link">
        <a href="">小米商城</a><span>|</span>
        <a href="https://pro.jd.com" target="_black">京东商城</a><span>|</span>
        <a href="https://www.baidu.com" target="_blank">百度商城</a><span>|</span>
        <a href="https://www.taobao.com" target="_blank">淘宝商城</a><span>|</span>
        <a href="https://www.amazon.cn" target="_blank">亚马逊商城</a><span>|</span>
      </div>
      <div class="footer-all">
        © mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号
      </div>
  </div>
</template>

<script>
export default {
    name:'nav-footer'
}
</script>

<style lang='scss' scoped>
.footer{
  height: 234px;
  border-top: 4px solid #ff7301;
  background-color: #333333;
  color: #999999;
  font-size: 16px;
  text-align: center;
  .footer-logo{
      margin-top: 46px;
      margin-bottom: 31px;
      img{
        width: 53px;
        height:36px;
        margin-bottom: 13px;
      }
    }
    .footer-link{
      a{
        color: #999999;
        display: inline-block;
      }
      span{
        margin: 0 10px;
      }
    }
    .footer-all{
      margin-top: 20px;
    }
  }

</style>