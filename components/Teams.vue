<template>
  <div class="container">
    <v-row>
      <v-col col=5 v-for="teaser of teasers" :key="teaser.id">

        <team-card :teaser="teaser"/>
      </v-col>
    </v-row>
    <loading-spinner v-if="isLoading"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TeamCard from '~/components/TeamCard'
import LoadingSpinner from '~/components/LoadingSpinner'


export default {
  components: {
    LoadingSpinner,
    TeamCard
  },
 
    data() {
    return {
      teasers: [],
      isLoading: false,
      lastDoc: null,
      batchSize: 8,
     

    }
  },
  computed: {

    ...mapGetters(['UserInfo'])

  },


  async mounted() {
    await this.loadVideos()
    
  },
  destroyed() {
   
  },
  methods: {

    
    async loadVideos() {
      if (this.isLoading ) {
        return
      }
      this.isLoading = true
      const db = this.$fire.firestore

      let query = db.collection('teams')
          .where('members', 'array-contains', this.UserInfo.uid)
          .orderBy('created', "desc")
          .limit(this.batchSize)
      if (this.lastDoc) {
        query = query.startAfter(this.lastDoc)
      }
      const querySnapshot = await query.onSnapshot(res => {
        const changes=res.docChanges()

        changes.forEach(change => {
          if(change.type==='added') {

                this.teasers.push({
                  id:change.doc.id,
                   ...change.doc.data(),
                })
              
          }

        })

      })
            


      this.isLoading = false
    },
    
  }
}
</script>