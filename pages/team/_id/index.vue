<template>
  <team-details v-if="team" :team="team" />
</template>
<script>
import TeamDetails from '~/components/TeamDetails'
export default {
  name: 'TeamPreviewPage',
  layout:"main",
  transition: 'slide-bottom',
  components: { TeamDetails },
  data () {
    return {
      team: null
    }
  },
  validate ({ params }) {
    // Must be a number
    return params.id !== undefined
  },
  async mounted () {
    console.log("mounted")
    const db = this.$fire.firestore
    try {
      const documentSnapshot = await db.collection('teams')
        .doc(this.$route.params.id)
        .get()
      if (!documentSnapshot.exists) {
        this.$nuxt.error({ statusCode: 404, message: 'Team not found' })
        return
      }
      this.team = {
        id: documentSnapshot.id,
        ...documentSnapshot.data()
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
      this.$nuxt.error({ statusCode: 404, message: 'Team not found' })
    }
  }
}
</script>
<style scoped>
</style>