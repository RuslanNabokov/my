import firebase   from 'firebase/app'
export default{
    state: {
        info:  {}
    },
    mutations: { // mutations вызываются через commit они синхронные
        setInfo(state, info){
            state.info = info
        },
        cleanInfo(state){
            state.info = {}
            console.log(1)
        }
    },
    actions: { // действия вызываются через метод dispatch 
  
      async  fetchinfo({dispatch,commit}){
        try {
  
           const uid =  await dispatch('getUid') 
           const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val()
            commit('setInfo',info)
   
    } catch (e){
       commit('setError',e) 
        }
      }
     },
    getters: {
        info: s => s.info
    }

}