<template>
  <div class="container">
    <Title />
    <router-view />
    <PartialFooter />
  </div>
</template>

<script>
import Title from '@/components/Title'
import PartialFooter from '@/components/PartialFooter/Index.vue'
export default {
  name: 'DefaultLayout',
  components: {
    Title,
    PartialFooter
  }
}
</script>
