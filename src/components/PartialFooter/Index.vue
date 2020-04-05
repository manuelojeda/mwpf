<template>
  <div class="fixed-bottom p-1 fixed-footer">
    <PoweredBy />
  </div>
</template>

<script>
import PoweredBy from './PoweredBy'

export default {
  name: 'PartialFooter',
  components: {
    PoweredBy
  }
}
</script>

<style lang="scss" scoped>
.fixed-footer {
  background-color: #003791;
}
</style>
