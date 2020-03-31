<template>
  <div class="home">
    <b-row>
      <b-col>
        <home-title />
        <home-form />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import HomeTitle from './HomeTitle.vue'
import HomeForm from './HomeForm.vue'

export default {
  name: 'Home',
  components: {
    HomeTitle,
    HomeForm
  }
}
</script>
