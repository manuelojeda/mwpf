<template>
  <div class="my-5">
    <div v-if="isLoading" class="row">
      <b-col>
        Loading
      </b-col>
    </div>
    <template v-else>
      <b-row>
        <b-col cols="12" class="mb-4">
          <h2 class="font-text mb-3">
            {{ player.username }} Profile's
          </h2>
          <router-link to="/">
            Return
          </router-link>
        </b-col>

        <profile-details :player="player" />
      </b-row>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import { searchPlayerData } from '@/api/search'
import { useMainStore } from '@/store/'
import ProfileDetails from './ProfileDetails/Index.vue'

export default defineComponent({
  name: 'Profile',
  components: {
    ProfileDetails
  },
  setup (props, { root }) {
    const main = useMainStore()
    const player = ref<any>(null)
    const isError = ref<boolean>(false)
    const isLoading = ref<boolean>(false)

    function fetchPlayerData () {
      let username
      const { platform } = root.$route.params

      if (platform === 'PC') {
        const temporalUsername = root.$route.params.username
        username = temporalUsername.replace('#', '%23')
      } else {
        username = root.$route.params.username
      }

      isLoading.value = true

      searchPlayerData(platform, username)
        .then(({ data }) => {
          player.value = data.data
          main.setError(null)
          main.setPlayerData(data.data)
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

    fetchPlayerData()

    return {
      player,
      isLoading
    }
  }
})
</script>
