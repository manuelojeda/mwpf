<template>
  <div class="col-12">
    <b-row>
      <b-col cols="12" lg="4" class="text-center mb-5">
        <player-rank :rank="player.level" />
      </b-col>
      <b-col cols="12" lg="4" class="text-center mb-5">
        <PlayerDonutChart
          :options="kdOptions"
          title="Kill Death Ratio"
        />
      </b-col>
      <b-col cols="12" lg="4" class="text-center mb-5">
        <PlayerDonutChart
          :options="wlOptions"
          title="Win Lose Ratio"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import PlayerRank from './PlayerRank.vue'
import PlayerDonutChart from './PlayerDonutChart.vue'

export default defineComponent({
  name: 'ProfileDetails',
  components: {
    PlayerRank,
    PlayerDonutChart
  },
  props: {
    player: {
      type: Object,
      required: true
    }
  },
  setup (props) {
    const kdOptions = computed(() => {
      return {
        series: [props.player.lifetime.all.properties.kills, props.player.lifetime.all.properties.deaths],
        labels: ['Kills', 'Deaths'],
        ratio: props.player.lifetime.all.properties.kdRatio
      }
    })
    const wlOptions = computed(() => {
      return {
        series: [props.player.lifetime.all.properties.wins, props.player.lifetime.all.properties.losses],
        labels: ['Wins', 'Losses'],
        ratio: props.player.lifetime.all.properties.wlRatio
      }
    })

    return {
      kdOptions,
      wlOptions
    }
  }
})
</script>

<style scoped>

</style>
