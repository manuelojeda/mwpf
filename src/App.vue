<template>
  <div id="app" class="container my-5">
    <default-layout />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import DefaultLayout from '@/layouts/Default.vue'

export default defineComponent({
  name: 'App',
  components: {
    DefaultLayout
  }
  // setup () {
  //   const main = useMainStore()

  //   const fetchPlayerData = () => {
  //     searchPlayerData(
  //       'battle',
  //       'darkjeda%231915'
  //     )
  //       .then(({ data }) => {
  //         // console.log(data)
  //         main.setPlayerData(data.data)
  //       })
  //       .catch((err) => {
  //         main.setError(err)
  //       })
  //   }

  //   fetchPlayerData()
  // }
  // async created () {
  //   const response = await searchPlayerData(
  //     'battle',
  //     'darkjeda%231915'
  //   )
  // }
})
</script>
