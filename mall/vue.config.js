module.exports={
    devServer:{     //配置表
        host:'localhost',    //主机
        port:8080,  //端口
        proxy:{     //代理
            '/api':{    //代理器中设置/api,项目中请求路径为/api的替换为target
                target:'http://mall-pre.springboot.cn',//代理地址，这里设置的地址会代替axios中设置的baseURL
                changeOrigin:true,// 如果接口跨域，需要进行这个参数配置
                pathRewrite:{      //pathRewrite方法重写url
                    '/api':''       //pathRewrite: {'^/api': '/'} 重写之后url为 http://192.168.1.16:8085/xxxx
                    //pathRewrite: {'^/api': '/api'} 重写之后url为 http://192.168.1.16:8085/api/xxxx
                }
            }
        }
    },
    productionSourceMap:false
}