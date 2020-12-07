<template>

  <div class="app-main-layout">
      <Navbar  @click="isOpen = !isOpen" />
    <Sidebar v-model="isOpen" />
    <main class="app-content" :class="{fill: !isOpen}">
      <div class="app-page">
            
        <router-view />
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to='/record'>
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">

import Navbar from '../components/app/Navbar.vue'
import Sidebar from '../components/app/Sidebar.vue'
//  import { component } from 'vue/types/umd'
export default {
  name: 'Main', 
  components: {
    Navbar,
    Sidebar
  },
  data: () => ({  // свойство
     isOpen: true
  }),
 async mounted(){  //  Метод, который выполнфется после загрузки страницы.
    if(!Object.keys(this.$store.getters.info).length){
      await this.$store.dispatch('fetchinfo')
    }
  }
}
</script>
