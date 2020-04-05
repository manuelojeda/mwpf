<template>
  <div>
    <h3 class="font-warfare">Error</h3>
    <h5 class="font-warfare mb-5">
      {{ error.message }}
    </h5>

    <p>
      This error is related at maybe the player you are looking for isn't available or wasn't found in the datastore.
      Try again later or search for another player.
    </p>

    <b-btn
      variant="primary"
      to="/"
    >
      Return to Home
    </b-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useMainStore } from '@/store/'

export default defineComponent({
  name: 'Error',
  setup () {
    const main = useMainStore()
    return {
      error: main.state.error
    }
  }
})
</script>

<style scoped>

</style>
