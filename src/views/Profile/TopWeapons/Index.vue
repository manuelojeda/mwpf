<template>
  <div class="col-12 my-3">
    <h4 class="font-warfare mb-3">
      {{
        tiers[tier]
      }}
    </h4>

    <div
      class="weapons-grid mb-5"
    >
      <div
        v-for="(weapon, index) in orderedWeapons"
        :key="index"
        class="weapon"
      >
        <WeaponDetail
          :weapon="weapon[1].properties"
          :weapon-key="weapon[0]"
          :weapon-tier="tier"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import WeaponDetail from './WeaponDetail.vue'

export default defineComponent({
  name: 'TopWeapons',
  props: {
    tier: {
      type: String
    },
    weapons: {
      type: Object
    }
  },
  components: {
    WeaponDetail
  },
  setup (props) {
    const tiers = {
      weapon_sniper: 'Snipers',
      tacticals: 'Tacticals',
      lethals: 'Lethals',
      weapon_lmg: 'LMGs',
      weapon_launcher: 'Launchers',
      weapon_pistol: 'Pistols',
      weapon_assault_rifle: 'Assault Rifles',
      weapon_other: 'Others',
      weapon_shotgun: 'Shotgun',
      weapon_smg: 'SMGs',
      weapon_marksman: 'Marksman',
      weapon_melee: 'Melee'
    }

    const orderedWeapons = computed(() => {
      return Object.entries(props.weapons).sort(function (a, b) {
        return b[1].properties.kills - a[1].properties.kills
      })
    })

    return {
      tiers,
      orderedWeapons
    }
  }
})
</script>

<style lang="scss" scoped>
.weapons-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;

  @media(min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media(min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media(min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
