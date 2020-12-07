import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import createPersistedState from 'vuex-persistedstate'
import  info  from './info'
Vue.use(Vuex)
 
/* eslint-disable no-new */
const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state:{
    error:null, 
  },
  mutations:{
    setError(state,error){
      // console.log('error')
      console.log(1)
      state.error  = error
      
    },
    cleanError(state){
      state.error = null
    } 
  },
  actions:{
    async fetchCurrency(){
      const key  = process.env.VUE_APP_FIXER 
      const res = await fetch(`http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,RUB`)
      return await res.json()
    }
  },
  getters:{
    error: s=> s.error
  },
  modules: {
    auth,
    info
  },
})

export default store
