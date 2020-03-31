<template>
  <div>
    <h3 class="font-warfare">Error</h3>
    <h5 class="font-warfare mb-5">
      <span v-if="error.status === 404">
        Player
      </span>
      {{ error.error }}
    </h5>

    <b-btn
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
