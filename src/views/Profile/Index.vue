<template>
  <div class="my-5">
    <div v-if="isLoading" class="row">
      <b-col
        cols="12"
      >
        <spinner />
      </b-col>
    </div>
    <template v-else>
      <b-row>
        <b-col cols="12" class="mb-4" v-if="!isError">
          <h2 class="font-text mb-3">
            <PlatformIcon :platform="platform" />
            {{ player.username }} Profile's
          </h2>
          <router-link class="btn btn-sm btn-primary" to="/">
            Return
          </router-link>
        </b-col>

        <profile-details v-if="!isError" :player="player" />

        <b-col cols="12 mt-3">
          <hr class="bg-white" />
          <h3 class="font-warfare">
            Weapons Details
          </h3>
        </b-col>

        <div class="col-12" v-if="!isError">
          <div
            v-for="(tier, index) in weapons"
            :key="index"
            class="row"
          >
            <top-weapons
              v-if="isValid(index)"
              :key="index"
              :tier="index"
              :weapons="tier"
            />
          </div>
        </div>
      </b-row>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@vue/composition-api'
import { searchPlayerData } from '@/api/search'
import { useMainStore } from '@/store/'
import ProfileDetails from './ProfileDetails/Index.vue'
import TopWeapons from './TopWeapons/Index.vue'
import PlatformIcon from '@/components/PlatformIcon.vue'

export default defineComponent({
  name: 'Profile',
  components: {
    ProfileDetails,
    TopWeapons,
    PlatformIcon
  },
  setup (props, { root }) {
    const main = useMainStore()
    const player = ref<any>(null)
    const isError = ref<boolean>(false)
    const isLoading = ref<boolean>(false)
    const { username, platform } = root.$route.params

    function fetchPlayerData () {
      isLoading.value = true
      searchPlayerData(platform, username)
        .then(({ data }) => {
          if (data.status === 'error') {
            main.setError(data.data)
            main.setPlayerData(null)
            isError.value = true
          } else {
            player.value = data.data
            main.setError(null)
            main.setPlayerData(data.data)
          }
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
    }

    const weapons = computed(() => {
      if (isError.value) {
        return null
      }
      return {
        ...player.value.lifetime.itemData
      }
    })

    function isValid (index): boolean {
      if (
        index === 'tacticals' ||
        index === 'lethals' ||
        index === 'weapon_other'
      ) {
        return false
      }

      return true
    }

    fetchPlayerData()

    return {
      player,
      weapons,
      isLoading,
      isValid,
      isError,
      platform
    }
  }
})
</script>
