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
      eof: false,
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
    window.addEventListener('scroll', this.loadMore)
  },
  destroyed() {
    window.removeEventListener('scroll', this.loadMore)
  },
  methods: {

    
    async loadVideos() {
      if (this.isLoading || this.eof) {
        return
      }
      this.isLoading = true
      const db = this.$fire.firestore

      let query = db.collection('teams')
          .where('owner', '==', this.UserInfo.uid)
          .orderBy('created', "desc")
          .limit(this.batchSize)
      if (this.lastDoc) {
        query = query.startAfter(this.lastDoc)
      }
      const querySnapshot = await query.get()
      this.eof = querySnapshot.empty
      if (querySnapshot.size > 0) {
        this.lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1]
        for (const doc of querySnapshot.docs) {

         
          const docdata = doc.data()
          this.teasers.push({
            id: doc.id,
            ...docdata
          })
        }


      }


      this.isLoading = false
    },
    loadMore() {
      const elementBounds = this.$el.getBoundingClientRect()
      // Add extra padding to load earlier even before the bottom of the element is in view.
      const padding = 100
      const bottomOfWindow =
          elementBounds.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) + padding
      if (bottomOfWindow && !this.isLoading && !this.eof) {
        this.loadVideos()
      }
    }
  }
}
</script>