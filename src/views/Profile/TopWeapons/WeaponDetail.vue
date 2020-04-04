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
        <b>Headshots:</b> {{ formattedHeadshots }}
      </p>
      <p class="font-text mb-0">
        <b>Accuracy:</b> {{ formattedAccuracy }}%
      </p>
    </div>
    <b-btn
      class="w-100 d-block rounded-0 m-0"
      variant="primary"
      size="sm"
      :to="detailUrl"
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
    weaponTier: {
      type: String
    },
    weaponKey: {
      type: String
    }
  },
  setup (props, { root }) {
    const formattedKils = computed((): string => {
      return numeral(props.weapon.kills).format('0,0')
    })
    const formattedHeadshots = computed((): string => {
      return numeral(props.weapon.headshots).format('0,0')
    })
    const formattedAccuracy = computed((): string => {
      return numeral(props.weapon.accuracy * 100).format('0.00')
    })

    const detailUrl = computed((): string => {
      return `/profile/${escape(root.$route.params.username)}/${root.$route.params.platform}/${props.weaponTier}/${props.weaponKey}`
    })

    return {
      formattedKils,
      formattedAccuracy,
      formattedHeadshots,
      detailUrl
    }
  }
})
</script>

<style scoped>
.imageContainer {
  height: 120px;
}
</style>
