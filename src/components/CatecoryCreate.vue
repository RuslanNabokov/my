<template>
        <div class="col s12 m6">
          <div>
            <div class="page-subtitle">
              <h4>Создать</h4>
            </div>

            <form @submit.prevent="SubmitHandler">
              <div class="input-field">
                <input
                    id="name"
                    type="text"
                    v-model="title"
                    :class="{invalid:($v.title.$dirty && !$v.title.required )}"
                >
                <label for="name">Название</label>
               <!-- <span class="helper-text invalid">Введите название</span> -->
              </div>

              <div class="input-field">
                <input
                    id="limit"
                    type="number"
                    v-model.number="limit"
                    :class="{invalid:($v.limit.$dirty && !$v.limit.required )}"
                    @input="$v.$touch()"
                >   
                <label for="limit">Лимит</label>
                <!-- <span class="helper-text invalid">Минимальная величина</span> -->
              </div>

              <button class="btn waves-effect waves-light" type="submit">
                Создать
                <i class="material-icons right">send</i>
              </button>
            </form>
          </div>
        </div>
</template>

<script lang="ts">
import {email,required,minValue} from  'vuelidate/lib/validators'
export default {
data:()=>({
    title:'',
    limit:1
}),
validations: {
    title:{required},
    limit:{minValue:minValue(1),required}
},
methods:{
 async   SubmitHandler(){
        if (this.$v.$invalid){
            console.log(this.$v.limit)
            this.$v.$touch()    
            return
        }
    try{
        //  await this.$store.dispatch('createCategory',{
        //     title: this.title,
        //     limit:this.limit 
        //  })
        const a  = await this.$store.dispatch('showData',{ })
        console.log(a)
        this.title = ''
        this.limit = 100
        this.$v.$reset()
        M.toast({html:'Категория создана'})
        this.$emit('created',category)
        
        //this.$message('Категория создана')
    }catch (e){     }
    }
},
mounted(){
    M.updateTextFields(); 
}
} 
</script>