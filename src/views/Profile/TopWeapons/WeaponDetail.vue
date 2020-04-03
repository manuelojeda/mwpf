<template>
  <div class="border">
    <div class="p-3">
      <div class="imageContainer">
        <img class="d-block mx-auto img-fluid" :src="`./img/${weaponKey}.webp`" loading="lazy" />
      </div>
      <p class="font-text mb-0">
        <b>Kills:</b> {{ formattedKils }}
      </p>
      <p class="font-text mb-0">
        <b>Accuracy:</b> {{ formattedAccuracy }}%
      </p>
    </div>
    <b-btn
      class="w-100 d-block rounded-0"
      variant="primary"
      size="sm"
    >
      Details
    </b-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import numeral from 'numeral'

export default defineComponent({
  name: 'WeaponDetail',
  props: {
    weapon: {
      type: Object
    },
    weaponKey: {
      type: String
    }
  },
  setup (props) {
    const formattedKils = computed((): string => {
      return numeral(props.weapon.kills).format('0,0')
    })
    const formattedAccuracy = computed((): string => {
      return numeral(props.weapon.accuracy * 100).format('0.00')
    })
    return {
      formattedKils,
      formattedAccuracy
    }
  }
})
</script>

<style scoped>
.imageContainer {
  height: 120px;
}
</style>
