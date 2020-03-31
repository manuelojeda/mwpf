<template>
  <div class="container">
    <Title />
    <router-view />
  </div>
</template>

<script>
import Title from '@/components/Title'
export default {
  name: 'DefaultLayout',
  components: {
    Title
  }
}
</script>
