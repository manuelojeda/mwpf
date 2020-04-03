<template>
  <div class="mx-auto d-block text-center">
    <h5 class="font-warfare">
      {{title}} <br />
    </h5>
    <apexchart
      type="radialBar"
      :series="percents"
      :options="options"
    ></apexchart>
    <p class="font-text mb-0" v-if="isMatches">
      <strong>
        Total matches:
      </strong>
      {{ numeral(total).format('0,0') }}
    </p>

  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import numeral from 'numeral'

export default defineComponent({
  name: 'PlayerDonutChart',
  props: {
    title: {
      type: String,
      required: true
    },
    options: {
      type: Object,
      required: true
    },
    isMatches: {
      type: Boolean,
      default: () => false
    },
    isAccuracy: {
      type: Boolean,
      default: () => false
    }
  },
  setup (props) {
    const formattedRatio = computed(() => {
      return numeral(props.options.ratio).format('0.00')
    })

    const total = props.options.series[0] + props.options.series[1]
    const percents = computed(() => {
      if (!props.isAccuracy) {
        const positivePercent = (props.options.series[0] * 100) / total
        return [
          numeral(positivePercent).format('0.00')
        ]
      }

      return [
        numeral(props.options.series[0] * 100).format('0.00')
      ]
    })

    return {
      formattedRatio,
      percents,
      total,
      numeral
    }
  }
})
</script>
