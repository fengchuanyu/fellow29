import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:1000
  },
  mutations: {
    add(state,num){
      state.count+=num
    }
  },
  actions: {
    addAction({commit}){
      commit("add",20)
    }
  },
  getters:{
    count1(state){
      return state.count+100
    }
  }
})
