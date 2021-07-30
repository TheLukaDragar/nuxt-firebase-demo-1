<template>
  <div class="flex">
      <v-card height="320/2" width="500/2" color=#1a1a1a dark>
        <v-toolbar
            flat
            height="50"
            color="transparent"

        >

          <v-toolbar-title>

           
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
            5 
              
            </v-avatar>
            members
           
          </v-chip>

        </v-toolbar>


        <v-img gradient="to bottom, rgba(0,0,0,0.3), rgba(0,0,0,.1)"
               :alt="teaser.title" height=220 dark>

          <template v-if="teaser.imageUrl" v-slot:placeholder>

            <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
            >
              <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>


          <v-card-title>
            {{ teaser.name }}


          </v-card-title>

          <v-card-subtitle>{{ teaser.created }}</v-card-subtitle>

         
         


        </v-img>

        <v-card-actions>


          <nuxt-link
              :to="{ name: 'team-id', params: { id: teaser.id } }"
              class="text-gray-700 no-underline hover:text-gray-700">
            <v-btn
                text
                bottom
                color="secondary"
                @click="reveal = true"
            >
             ENTER
            </v-btn>
          </nuxt-link>


        </v-card-actions>

      </v-card>
    

  </div>
</template>

<script>


export default {
  name: 'Teaser',
  props: {
    teaser: {
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