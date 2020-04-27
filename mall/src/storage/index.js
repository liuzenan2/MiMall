const Storage_key='mall' //
export default {
    //存储值
    setItem(key,value,module_name){
        if(module_name){
            let val=this.getItem(module_name);
            val[key]=value
            this.setItem(module_name,val)
        }else{
            let val =this.getStorage()  //调用getStorage方法获取Storage里面所有的值
            val[key]=value;    //往对象里面存值
            window.sessionStorage.setItem(Storage_key,JSON.stringify(val)) 
        //存完之后在重新写入Storage里面去，参数一是key,参数二是value转换成json的字符串写入
        }
      
    },
    //获取某一个模块下面的属性user下面的userName
    getItem(key,module_name){
        if(module_name){  
            let val=this.getItem(module_name) //返回的是object (回调) 
            if(val){
                return val[key]
            } 
        }
     return   this.getStorage()[key]
    },
    //获取存储的storage的值
    getStorage(){
        //把获取到的storage的值转换成json对象的方式，没有就显示{}
       return JSON.parse(window.sessionStorage.getItem(Storage_key)||'{}')
    },
    clear(key,module_name){
        let val=this.getStorage()  //获取全部的值
        if(module_name){
            delete val[module_name][key]
        }else{
            delete val[key]
        }
        window.sessionStoragel.setItem(Storage_key,JSON.stringify(val)) 
    },
}