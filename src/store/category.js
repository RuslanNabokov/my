import firebase from 'firebase/app'
export default {
    actions:{
        async createCategory({dispatch,commit},{title,limit}){
        try{
            const uid = await dispatch('getUid')
            const category = await firebase.database().ref(`/users/${uid}/categories`).push({title,limit})
            return {title,limit,id:category.key}    
        }catch(e){
            commit('setError',e) // вызываем мутацию
            throw e
        }
    },
     async showData({dispatch,commit}){
        console.log(1)
        const uid = await dispatch('getUid')
        const data = await firebase.database().ref(`/users/${uid}`)
        console.log(data)
     }
    }   
}