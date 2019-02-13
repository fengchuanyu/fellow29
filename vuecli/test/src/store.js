import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:1
  },
  mutations: {
    add(state,num){
      state.count+=num
    }
  },
  actions: {
    addAction({commit}){
      commit('add',10)
    }
  },
  getters:{
    counta(state){
      return state.count+100
    }
  }
})
