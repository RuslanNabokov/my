import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date_filter'
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/database'
import 'materialize-css/dist/js/materialize'
Vue.config.productionTip = false
Vue.filter('date',dateFilter)
Vue.use(Vuelidate)  // Добавляем плагин
// initial  firebase 
const firebaseConfig = {
  apiKey: "AIzaSyAFFq2I3PYhC-SbU6OeKD9_4AMr4Z8igHA",
  authDomain: "vue-test-bc39d.firebaseapp.com",
  databaseURL: "https://vue-test-bc39d.firebaseio.com",
  projectId: "vue-test-bc39d",
  storageBucket: "vue-test-bc39d.appspot.com",
  messagingSenderId: "279103820265",
  appId: "1:279103820265:web:91be8451d78648682cfb78",
  measurementId: "G-K1CX4VXER7"
};
firebase.initializeApp(firebaseConfig)
let app 

firebase.auth().onAuthStateChanged(() => {
// initial  firebase
   
app = app ? app :  new Vue({
        router,
        store,
        render: h => h(App)
      }).$mount('#app')

})

