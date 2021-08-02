<template>
  <v-container>
    <h3 class="text-3xl mb-5">Your Teams</h3>

    <team-view />
  </v-container>
</template>

<script>
import TeamView from '~/components/TeamView.vue'
export default {
  layout: 'main',

  components: {
    TeamView,
  },
}
</script>
