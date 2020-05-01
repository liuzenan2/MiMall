import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store=new Vuex.Store({
    state:{
        username:'',
        cartCount:0,
    },
    mutations:{
        saveUsername(state,username){
            state.username=username
        },
        saveCartCount(state,count){
            state.cartCount=count
        }
    },
    actions:{
       saveUsername({commit},useruser){
        commit('saveUsername',useruser)
       },
       saveCartCount({commit},count){
        commit('saveCartCount',count)
       }  
    }
})


export default store