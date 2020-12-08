<template>
    <div class="col s12 m6 l8">
        <div class="card orange darken-3 bill-card">
          <div class="card-content white-text">
            <div class="card-header">
              <span class="card-title">Курс валют</span>
            </div>
            <table>
              <thead>
              <tr>
                <th>Валюта</th>
                <th>Курс</th>
                <th>Дата</th>
              </tr>
              </thead>

              <tbody>
              <tr v-for="cur of currency" :key="cur">
                  <td>{{cur}}</td>
                  <td>{{rates[cur]}}</td>
                  <td>{{date|date('date')}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
</template>

<script lang="ts">
export default{
   props:['rates','date'],
   data:()=>({
 currency: ['RUB','EUR','USD']
   }),
   computed:{
     
   },
   methods:{ 

   }
}
</script>
