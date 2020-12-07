<template>
  <form class="card auth-card" @submit.prevent='submitHandler' :validator="$v.form" :messages="messagesOverride" >
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>

      <div class="input-field">
        <label> Email </label>

      
               <input
            id="email"
            type="text"
         
            v-model.trim="form.email"
     
            >


        <!-- /* $v  Это validate */ -->
      </div>
    
 <div class="input-field">

    <label> Password </label>
        <input
            id="password"
            type="password"
            v-model="form.password"
        >

  
  
      </div>
  <div class="input-field">

       <label> Name </label>
        <input
            id="name"
            type="text"
            v-model="form.name"

        >
 
      </div>
      <p>
        <label>
          <input type="checkbox" v-model='form.agree'  />
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
        >
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to= '/login'> Войти  </router-link>
      </p>
    </div>
  </form>
</template>

<script lang="ts">
import {email,required,minLength} from  'vuelidate/lib/validators'
 export default{
   name:'register',
   data: ()=> ({
    form: { 
     email:'',
     password:'',
    name:'',
    agree: false
    },
     messagesOverride: {
        required: "You must fill the {attribute} field to continue",
        email: "The email must be a genuine email address."
      }
   }),
   validations: {
    form: { 
     email: {email,required},
     password: {required,minLength: minLength(6)},
     name:{required},
     agree:{checked: v=> true},
    }
   },
   methods: {
  async submitHandler(){

     if (this.$v.form.$invalid){
       this.$v.form.$touch() // Покажет поле где ошибка (Активизация валидации)
 
 
       this.$store.commit('setError', 'Ошибка с формой')
       return
     }

       const formData = {
        email: this.$v.form.email,
        password: this.$v.form.password,
        name: this.$v.form.name
      }
    try{
      await this.$store.dispatch('register',formData)
      this.$router.push('/')
    } catch(e){ 
      this.$store.commit('setError',e)
     }
    //this.$router.push('/')
   } 
   }
 }

</script>