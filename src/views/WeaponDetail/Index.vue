<template>
  <div class="my-5">
    <b-row v-if="!isLoading">
      <b-col cols="12" class="mb-4" >
        <h2 class="font-text mb-3">
          <PlatformIcon :platform="platform" />
          {{ username }} Profile's
        </h2>
        <b-btn
          variant="primary"
          size="sm"
          @click="returnPage"
        >
          Return
        </b-btn>
      </b-col>
      <b-col cols="12">
        <div class="data-grid">
          <div class="weapon-presentation">
            <img :src="`./img/${weapon}.webp`" :alt="weapon" class="img-fluid img-weapon">
          </div>
          <div class="data-presentation">
            <h2 class="text-center">
              {{
                weaponsCatalog[weapon]
              }}
            </h2>
          </div>
        </div>
      </b-col>
      <b-col
        cols="12"
        class="my-5"
      >
        <div class="others-grid">
          <div>
            <h3 class="text-center">
              {{
                numeral(weaponData.kills).format('0,0')
              }}
            </h3>
            <h5 class="font-warfare text-center">
              Kills
            </h5>
          </div>
          <div>
            <h3 class="text-center">
              {{
                numeral(weaponData.deaths).format('0,0')
              }}
            </h3>
            <h5 class="font-warfare text-center">
              Deaths by
            </h5>
          </div>
          <div>
            <h3 class="text-center">
              {{
                numeral(weaponData.headshots).format('0,0')
              }}
            </h3>
            <h5 class="font-warfare text-center">
              Headshots
            </h5>
          </div>
          <div>
            <h3 class="text-center">
              {{
                numeral(weaponData.kdRatio).format('0.00')
              }}
            </h3>
            <h5 class="font-warfare text-center">
              K/D Ratio
            </h5>
          </div>
          <div>
            <h3 class="text-center">
              {{
                numeral(weaponData.shots).format('0,0')
              }}
            </h3>
            <h5 class="font-warfare text-center">
              Shots fired
            </h5>
          </div>
          <div>
            <h3 class="text-center">
              {{
                numeral(weaponData.hits).format('0,0')
              }}
            </h3>
            <h5 class="font-warfare text-center">
              Hits
            </h5>
          </div>
          <div>
            <h3 class="text-center">
              {{
                numeral(
                  weaponData.accuracy * 100
                ).format('0.00')
              }}%
            </h3>
            <h5 class="font-warfare text-center">
              Accuracy
            </h5>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row v-else >
      <b-col
      >
        Loading
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import { useMainStore } from '@/store/'
import { searchPlayerData } from '@/api/search'
import { weaponsCatalog } from '@/utils/weapons'
import PlatformIcon from '@/components/PlatformIcon.vue'
import numeral from 'numeral'

export default defineComponent({
  name: 'WeaponDetail',
  components: {
    PlatformIcon
  },
  setup (props, { root }) {
    const main = useMainStore()
    const { username, platform, weapon, weaponTier } = root.$route.params
    const weaponData = ref<any>({})
    const isError = ref<boolean>(false)
    const isLoading = ref<boolean>(false)

    function returnPage (): void {
      root.$router.push({
        name: 'Profile',
        params: {
          username: unescape(root.$route.params.username),
          platform
        }
      })
    }

    function retrievWeaponData (): void {
      if (!main.state.player) {
        searchPlayerData(platform, username)
          .then(({ data }) => {
            main.setError(null)
            main.setPlayerData(data.data)

            weaponData.value = main.state.player.lifetime.itemData[weaponTier][weapon].properties
          })
          .catch((err) => {
            main.setError(err.response.data)
            main.setPlayerData(null)
            isError.value = true
          })
          .finally(() => {
            isLoading.value = false
            if (isError.value) {
              root.$router.push({ name: 'Error' })
            }
          })
      } else {
        weaponData.value = main.state.player.lifetime.itemData[weaponTier][weapon].properties
      }
    }

    retrievWeaponData()

    return {
      username,
      platform,
      weapon,
      returnPage,
      isLoading,
      weaponsCatalog,
      weaponData,
      numeral
    }
  }
})
</script>

<style lang="scss" scoped>
.data-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  align-items: center;
  align-self: center;

  .weapon-presentation {
    .img-weapon {
      max-height: 200px;
      display: block;
      margin: 0 auto;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
}

.others-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
