<template>
  <div class="col-12">
    <b-row class="h-100">
      <b-col cols="12" class="mb-3">
        <h3 class="font-warfare">
          Player Details
        </h3>
      </b-col>
      <b-col cols="12" sm="6" md="6" lg="3" class="text-center mb-5 my-auto">
        <player-rank :rank="player.level" />
      </b-col>
      <b-col cols="12" sm="6" md="6" lg="3" class="text-center mb-5 my-auto">
        <PlayerDonutChart
          :options="kdOptions"
          title="KD Ratio"
        />
      </b-col>
      <b-col cols="12" sm="6" md="6" lg="3" class="text-center mb-5 my-auto">
        <PlayerDonutChart
          :options="wlOptions"
          title="Win Lose Ratio"
          :is-matches="true"
        />
      </b-col>
      <b-col cols="12" sm="6" md="6" lg="3" class="text-center mb-5 my-auto">
        <PlayerDonutChart
          :options="accuracyOptions"
          title="Accuracy"
          :is-accuracy="true"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import PlayerRank from './PlayerRank.vue'
import PlayerDonutChart from './PlayerDonutChart.vue'
import numeral from 'numeral'

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
        ratio: props.player.lifetime.all.properties.kdRatio,
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                show: false
              },
              value: {
                fontSize: '20px',
                color: '#FFF',
                offsetY: 8,
                formatter: function (val) {
                  return numeral(props.player.lifetime.all.properties.kdRatio).format('0.00')
                }
              }
            }
          }
        }
      }
    })
    const wlOptions = computed(() => {
      return {
        series: [props.player.lifetime.all.properties.wins, props.player.lifetime.all.properties.losses],
        labels: ['Wins', 'Losses'],
        ratio: props.player.lifetime.all.properties.wlRatio,
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                show: false
              },
              value: {
                fontSize: '20px',
                color: '#FFF',
                offsetY: 8
              }
            }
          }
        }
      }
    })

    const accuracyOptions = computed(() => {
      return {
        series: [props.player.lifetime.all.properties.accuracy],
        labels: ['Accuracy'],
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                show: false
              },
              value: {
                fontSize: '20px',
                color: '#FFF',
                offsetY: 8
              }
            }
          }
        }
      }
    })

    return {
      kdOptions,
      wlOptions,
      accuracyOptions
    }
  }
})
</script>

<style scoped>

</style>
