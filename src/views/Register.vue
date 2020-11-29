<template>
  <form class="card auth-card" @submit.prevent='submitHandler'>
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
  <div class="input-field">
        <input
            id="name"
            type="text"
            v-model="name"
            :class="{invalid: $v.name.$dirty && !$v.name.required}"
        >
        <label for="name">Имя</label>
        <small 
          class="helper-text invalid"
          v-if="$v.name.$dirty && !$v.name.required"
        >
          Введите ваше имя
        </small>
      </div>
      <p>
        <label>
          <input type="checkbox" v-model='agree'  />
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
     email:'',
     password:'',
    name:'',
    agree: false
   }),
   validations: {
     email: {email,required},
     password: {required,minLength: minLength(6)},
     name:{required},
    agree:{checked: v=> true}
   },
   methods: {
   submitHandler(){

     if (this.$v.$invalid){
       this.$v.$touch() // Покажет поле где ошибка (Активизация валидации)
       return
     }
       const formData = {
        email: this.email,
        password: this.password,
        name: this.name
      }

     console.log(formData)
    //this.$router.push('/')
   } 
   }
 }

</script>