<template>
  <div class="register">
      <div class="register-box">
          <div class="wrappir">
              <!-- logo -->
              <div class="register-logo">
                <img src="/imgs/logo-mi.png" alt="">
              </div>
              <!-- 标题 -->
              <h4>注册小米账号</h4>
              <!-- 注册信息 -->
              <div class="register-msg">
                  <div class="register-msg-wrapper">
                      <p>请输入用户名</p>
                    <input type="text" placeholder="请输入用户名" v-model="username">
                    <p>请输入密码</p>
                  <input type="password" placeholder="请输入密码" v-model="password">
                  <p>请输入邮箱号</p>
                  <input type="text" placeholder="请输入邮箱号" v-model="email">
                  <button @click="register">注册</button>   
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'register',
    data() {
        return {
            username:'',
            password:'',
            email:''
        }
    },
     methods:{
         register(){
             let {username,password,email}=this
             this.axios.post('/user/register',{
                 username,
                 password,
                 email
             }).then(()=>{
                 this.$message.success('注册成功,3秒后跳转登陆页面')
                 setTimeout(() => {
                    this.$router.push('/login') 
                 }, 3000);
             })
         }
     }
}
</script>

<style lang='scss'>
@import '../assets/scss/mixin.scss';
    .register{
        background-color: #666666;
        width: 100%;
        height: 100%;
        .register-box{
            @include position(absolute,50%,50%,854px,548px);
            transform:translate(-50%,-50%);
            background-color: #ffffff;
            .wrappir{
                width: 786px;
                height: 518px;
                padding: 0 34px 30px 34px;
            .register-logo{
                width: 100%;
                height: 48px;
                padding-bottom: 40px;
                text-align: center;
                img{
                    height: 100%;
                }
            }
            h4{
                width: 100%;
                height: 45px;
                line-height: 45px;
                text-align: center;
                font-size: 30px;
                font-weight: normal;
                }
            }
            .register-msg{
                width: 100%;
                height: 385px;
                .register-msg-wrapper{
                    width: 332px;
                    height:246px;
                    padding: 20px 0 30px 0;
                    margin: 0 227px;
                    input{
                    box-sizing: border-box;
                    display: block;
                    margin: 0 auto;
                    width: 100%;
                    padding-left: 20px;
                    height: 42px;
                    margin-bottom: 10px;
                    }
                    button{
                        width: 100%;
                        height: 40px;
                        background-color: #ff6700;
                        color: #ffffff;
                        border: none;
                        cursor: pointer;
                        font-size: 14px;
                        &:hover{
                            opacity:0.5;
                        }
                    }
                }
                
            }
        }
    }
</style>