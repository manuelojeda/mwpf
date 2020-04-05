<template>
  <div class="border">
    <div class="">
      <div class="image-container p-3">
        <img class="d-block mx-auto img-fluid" :src="`./img/${weaponKey}.webp`" loading="lazy" />
      </div>
      <div class="weapon-name">
        <h5 class="font-text font-weight-bold">
          {{
            weaponsCatalog[weaponKey]
          }}
        </h5>
      </div>
      <div class="weapon-details-data p-4">
        <p class="font-text mb-0">
          <font-awesome-icon icon="skull" class="mr-2" />{{ formattedKils }} kills
        </p>
        <p class="font-text mb-0">
          <font-awesome-icon icon="bullseye" class="mr-2" /> {{ formattedHeadshots }} headshots
        </p>
        <p class="font-text mb-0">
          <font-awesome-icon icon="crosshairs" class="mr-2" /> {{ formattedAccuracy }}% accuracy
        </p>
      </div>
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
import { weaponsCatalog } from '@/utils/weapons'
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
      detailUrl,
      weaponsCatalog
    }
  }
})
</script>

<style lang="scss" scoped>
.image-container {
  height: 120px;

  img {
    max-height: 80px;
  }
}

.weapon-name {
  padding: 0.3rem;
  margin-bottom: 0;
  text-align: center;
}

.weapon-details-data {
  background-color: lightslategray;
}

.btn-primary {
  transition: all ease .3s !important;
  &:hover {
    background-color: darken(#4285f4, 10) !important;
  }
}
</style>
