 <template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <div class="row">
   <CatecoryCreate @created="addNewCategory" />
   <CatecoryEdit />
   
  

        
      </div>
    </section>
  </div>
</template>


<script lang="ts">
import CatecoryCreate from '@/components/CatecoryCreate'
import CatecoryEdit from '@/components/CatecoryEdit'

export default {
    name: 'Categories',
    data:() => ({
      categories:[]
    }),
    components:{ CatecoryEdit, CatecoryCreate},
    methods:{
      addNewCategory(category){
        this.categories.push(category)
        
  
      }
    }
} 
</script>