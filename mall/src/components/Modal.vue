<template>
 <transition name="slide">
<div class="modal" v-show="showModal">
    <div class="mask"></div>
        <div class="modal-dialog">
            <div class="modal-header">
                <span>{{title}}</span>
                <a href="javascript:;" class="icon-close" @click="$emit('cancel')"></a>
            </div>
            <div class="modal-body">
                <slot name="body"></slot>
            </div>
            <div class="modal-footer">
                <a href="javascript:;" class="btn" v-if="btnType==1" @click="$emit('submit')">{{confirmBtn}}</a>
                <a href="javascript:;" class="btn" v-if="btnType==2"  @click="$emit('cancel')">{{cancelBtn}}</a>
                <div class="btn-group" v-if="btnType==3">
                <a href="javascript:;" class="btn" @click="$emit('submit')">{{confirmBtn}}</a>
                <a href="javascript:;" class="btn"  @click="$emit('cancel')">{{cancelBtn}}</a>  
                </div>
               
            </div>
        </div>
  </div>
   </transition>
</template>

<script>
export default {
    name:'modal',
    //弹框类型，小smail,中middle,大large，表单from
    props:{
        //接受数据的类型是字符串，默认是表单
        modalType:{
            type:String,
            default:'from'
        },
        //弹框标题
        title:String,
        //按钮类型
        btnType:String,
        //确定按钮
        confirmBtn:{
            type:String,
            default:'确定'
        },
        //取消按钮
        cancelBtn:{
             type:String,
             dafault:'取消'
        },
        showModal:{
            type:Boolean
        }
    }
}
</script>

<style lang='scss' >
@import '../assets/scss/mixin.scss';
@import '../assets/scss/Modal.scss';
@import '../assets/scss/button.scss';   
</style>