<template>
  <div class="login">
      <!--登陆页面的logo -->
      <div class="login-top">
          <div class="container">
            <a href="/#/index">
                <img src="/imgs/login-logo.png" alt="">
            </a>
          </div>
      </div>
      <!-- 登陆页面的中间 -->
      <div class="login-body">
           <img src="/imgs/login-bg.jpg" alt="">
          <div class="container">
             <div class="login-box">
                 <div class="nav-tabs">
                     <a href="">账号登陆</a>
                     <a href="">扫码登陆</a>
                 </div>

                <div class="login-input">
                <input type="text" placeholder="邮箱/手机号码/小米ID"  v-model="username">
                <input type="password" placeholder="请输入密码" v-model="password">
                <button @click="login">登陆</button>
                 <a href="/#/register">注册小米账号</a>
             </div>       
             </div>
          </div>
      </div>

      <!-- 登陆页面的底部 -->
      <div class="login-footer">
          <div class="container">
              <ul>
                  <li>
                      简体
                  </li>
                  <li>
                      繁体
                  </li>
                  <li>
                      English
                  </li>
                  <li>
                      常见问题
                  </li>
                  <li>
                      隐私政策
                  </li>
              </ul>
              <p>小米公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
           username:'',
           password:'',
           userId:''
        }
    },
    methods: {
        login(){
            let {username,password}=this
            this.axios.post('/user/login',{
                username,password
            }).then((res)=>{
                //保存用户ID
                this.$cookie.set('userId',res.id,{expires:'1M'});
                this.$store.dispatch('saveUsername',res.username)
                this.$router.push('/index')
            }).catch((req)=>{
                console.log(req)
                alert(req.msg)
            })
        }
    },
}
</script>

<style lang='scss'>
 @import '../assets/scss/base.scss';
 .login{
     /* 登陆页面的logo样式 */
    .login-top{
        height: 98px;
        width: 100%;
        background-color: #ffffff;
    }

    /* 登陆页面的身体样式 */
    .login-body{
        height:615px;
        width: 100%;
        background-color: #ffffff;
        img{
            width: 100%;
        }
        .container{
            position: relative;
            .login-box{
                right: 0;
                top: -420px;
                position: absolute;
                width: 410px;
                height:415px;
                .nav-tabs{
                    width: 100%;
                    height:31px;
                    padding: 27px 0 24px 0;
                    a{  
                        display: inline-block;
                        width: 204px;
                        text-align: center;
                        color: #000000;
                        font-weight: 800;
                        font-size: 24px;
                        border-right: 2px solid #cccccc;
                        &:last-child{
                            border:0;
                        }
                         &:hover{
                            color: #ff6700;
                        }
                    }
                }

                .login-input{
                    box-sizing: border-box;
                    width: 100%;
                    height:405px;
                    padding: 0 30px;
                    input{
                        width: 316px;
                        height:22px;
                        padding: 13px 16px 13px 14px;
                        margin-bottom: 20px;
                        outline: none;
                    }
                    button{
                        margin: 10px 0;
                        width: 350px;
                        height:50px;
                        background-color: #ff6700;
                        line-height: 50px;
                        text-align: center;
                        color: #ffffff;
                        display: block;
                        cursor: pointer;           
                        border: none;
                    }
                    a{
                        font-size: 14px;
                        color: #000000;
                        cursor: pointer;
                        &:hover{
                            color: #ff6700;
                        }
                    }
                }
            }
        
        }
    }
    /* 登陆页面底部的样式 */
    .login-footer{
        width: 100%;
        height:80px;
        padding-top: 100px;
        ul{
            height:19px;
            text-align: center;
            li{
                margin: 0 auto;
                display: inline-block;
                cursor: pointer;
                width: 50px;
                height: 16px;
                padding: 0 10px;
                border-right: 1px solid #cccccc;
                &:last-child{
                    border: none;
                }
            }
           
        }
        p{
            text-align: center;
            padding: 10px;
            line-height: 24px;
            font-size: 14px;
        }
    }
 }
</style>