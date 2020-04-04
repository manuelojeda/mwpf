<template>
  <div class="platform-wrapper">
    <img
      v-if="platform === 'PC'"
      src="@/assets/img/battle.png"
      alt=""
      class="platform-icon"
    >
    <img
      v-if="platform === 'XBOX'"
      src="@/assets/img/xbox.png"
      alt=""
      class="platform-icon"
    >
    <img
      v-if="platform === 'PS4'"
      src="@/assets/img/psn.png"
      alt=""
      class="platform-icon"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'PlatformIcon',
  props: {
    platform: {
      type: String
    }
  }
})
</script>

<style lang="scss" scoped>
.platform-wrapper {
  float: right;

  .platform-icon {
    width: 100px;
    height: 100px;
  }
}
</style>
