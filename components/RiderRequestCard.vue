<template>
  <div class="flex">
      <v-card height="320" width="500" color=#1a1a1a dark>
        <v-toolbar
            flat
            height="50"
            color="transparent"

        >

          <v-toolbar-title>

            {{req.rider_name}}

           
          </v-toolbar-title>
          <v-spacer></v-spacer>

          <v-chip

              color="primary"
              text-color="white"
          >
            <v-avatar
                left
                class="secondary"
            >
            
              
            </v-avatar>
            
           
          </v-chip>

        </v-toolbar>


        <v-img gradient="to bottom, rgba(0,0,0,0.3), rgba(0,0,0,.1)"
               :alt="req.rider_name" height=220 dark>

          <v-card-title>
            {{ req.request }}


          </v-card-title>

          <v-card-subtitle>{{ req.timestamp | toDate}}</v-card-subtitle>

         
        


        </v-img>

       

      </v-card>
    

  </div>
</template>

<script>


export default {
  name: 'req',
  props: {
    req: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}

  },
  computed: {
    color() {
     
        return 'secondary'

      
      }
    

    
  }
}
</script>

<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
.notrounded-corner{
    border-radius:0px  !important;
}


</style>