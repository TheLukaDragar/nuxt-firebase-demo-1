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
    <div class="flex border rounded shadow p-5  md:w-2/3 mx-auto mt-4 mb-4 items-center">
      <div>

        {{ team.name }}
      </div>
    </div>

    

    <v-row>
      <v-col col=5 v-for="req of rider_requests" :key="req.id">

        <rider-request-card :req="req"/>
      </v-col>
    </v-row>
    


  </v-container>
</template>

<script>
import RiderRequestCard from './RiderRequestCard.vue'



export default {
  components: { RiderRequestCard },
  name: 'TeamDetails',
  props: {
    team: {
      type: Object,
      required: true
    },
  },
  data() {
    return {

      rider_requests:[]
      
    }

  },
  computed: {
    
  },
  async mounted() {
    const db = this.$fire.firestore

     try {
        
      const documentSnapshot = db.collection('teams').doc(this.team.id).collection("bar").onSnapshot(res => {
        const changes=res.docChanges()

        changes.forEach(change => {
          if(change.type==='added') {

            this.rider_requests.push({
              ...change.doc.data(),
              id:change.doc.id
            })

          }

        })

        console.log(this.rider_requests)
      }
      )
        
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
      this.$nuxt.error({ statusCode: 404, message: 'erorr' })
    }

  },
  
}
</script>
<style scoped>


</style>