module.exports={
    devServer:{     //配置表
        host:'loaclhost',    //主机
        port:8080,  //端口
        proxy:{     //代理
            '/api':{    //
                target:'https://www.baidu.com',
                changeOrigin:true,
            }
        }
    }
}