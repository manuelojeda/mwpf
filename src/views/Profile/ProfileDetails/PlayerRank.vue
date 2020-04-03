<template>
  <div>
    <h5 class="font-warfare">
      Tier Progress
    </h5>
    <img
      :src="playerRankUrl"
      :alt="rank"
      class="mx-auto d-block img-fluid"
    >
    <p class="font-text">
      {{ rank }} <br/>
      LEVEL
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'

export default defineComponent({
  name: 'PlayerRank',
  props: {
    rank: {
      type: Number,
      required: true
    }
  },
  setup (props) {
    const playerRankUrl = computed(() => {
      return `https://www.callofduty.com/cdn/app/icons/mw/ranks/mp/icon_rank_${props.rank}.png`
    })

    return {
      playerRankUrl
    }
  }
})
</script>

<style scoped>

</style>
