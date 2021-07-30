<template>
  <v-container>

    <div class="mb-5">

      <div class="display-1">{{ team.name }}</div>


    </div>

    <div class=" md:w-2/3 mx-auto mt-10  items-center">

      //IMPLEMENT TEAM UPDATE LISTENER HERE
      //ADD TEAM MEMBERS TAB
      
       

      <div class="text-h4">{{ team.name }}</div>
     
      <div class="text-s">
        {{ team.created }}
      </div>

      <v-chip-group class="uppercase font-semibold flex flex-wrap ">
        <v-chip pill label text-color="white" v-for="tag of tags" :key="tag" color="info"
                class="mx-2 first:ml-0 theme--light">
          <v-icon left>
            mdi-label
          </v-icon>
          {{ tag }}
        </v-chip>
      </v-chip-group>

    </div>
    <div class="flex border rounded shadow p-5  md:w-2/3 mx-auto mt-4 items-center">
      <div>

        {{ team.name }}
      </div>
    </div>
    


  </v-container>
</template>

<script>



export default {
  name: 'TeamDetails',
  props: {
    team: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      
    }

  },
  computed: {
    
  },
  mounted() {

  },
  
}
</script>
<style scoped>


</style>