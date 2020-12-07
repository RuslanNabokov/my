<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
            id="email"
            type="text"
            v-model.trim="email"
            :class="{invalid: ($v.email.$dirty) || !$v.email.required }" 
             
        >
        <!-- /* $v  Это validate */ -->

        <label  for="email">Email</label>
        <small  v-if=" ($v.email.$dirty) || !$v.email.required " class="helper-text invalid">{{ }}  </small>
      </div>
      <div class="input-field">
        <input
            id="password"
            type="password"
            v-model.trim="password"
        >
        <label for="password">Пароль</label>
        <small class="helper-text invalid">Password</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
        >
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to='/register'  >Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>
 

<script lang="ts">
import {email,required,minLength} from  'vuelidate/lib/validators'
 export default{
   name:'login',
   data: ()=> ({
     email:'',
     password:''
   }),
   validations:{
     email: {email,required},
     password: {required,minLength: minLength(6)},
   },
   methods: {
  async submitHandler(){
     if (this.$v.$invalid){
       this.$v.$touch() // Покажет поле где ошибка (Активизация валидации)
       return
     }
     const us_data =  {
       email: this.email,
       password: this.password
     }
    try{ 
     await this.$store.dispatch('login',us_data)
     this.$router.push('/') 
    } catch (e){
   
      
    }

   } 
   }
 }
</script>