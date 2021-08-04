<template>
  <div
    class="
      my-3
      w-full

      text-white
      p-4
      rounded
      shadow-xl
      text-xl
      flex flex-row
      items-center
      flex-wrap
    "
    :class="(req.seen == false ? 'bg-yellow-400' : 'bg-black')"

  >
    <div class="flex items-center mx-5">

       Rider {{ req.rider_name }} needs {{ req.request }}!!!

    </div>

    <div class="mx-5">Created on: {{ req.timestamp | toDate }}</div>
  </div>
</template>

<script>
export default {
  name: 'req',
  props: {
    req: {
      type: Object,
      required: true,
    },
    index:{
      type: Number,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {
    color() {
      return 'secondary'
    },
  },
}
</script>

<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
.notrounded-corner {
  border-radius: 0px !important;
}
</style>
