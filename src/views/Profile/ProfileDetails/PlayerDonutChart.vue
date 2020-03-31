<template>
  <div class="mx-auto d-block text-center">
    <h5 class="font-warfare">
      {{title}} <br />
      <small class="font-text">
        {{ formattedRatio }}%
      </small>
    </h5>
    <apexchart
      type="pie"
      :series="options.series"
      :options="options"
    ></apexchart>

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
    }
  },
  setup (props) {
    const formattedRatio = computed(() => {
      return numeral(props.options.ratio).format('0.00')
    })

    return {
      formattedRatio
    }
  }
})
</script>
