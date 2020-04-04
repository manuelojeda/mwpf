<template>
  <div>
    <form v-on:submit.prevent="handleSubmitForm">
      <div class="form-grid">
        <div class="grid-item">
          <b-form-radio-group id="radio-group-2" v-model="platform" name="radio-sub-component">
            <b-form-radio value="PC">
              <img src="@/assets/img/battle.png" alt="Battle.net">
            </b-form-radio>
            <b-form-radio value="XBOX">
              <img src="@/assets/img/xbox.png" alt="XBOX">
            </b-form-radio>
            <b-form-radio value="PS4">
              <img src="@/assets/img/psn.png" alt="PSN">
            </b-form-radio>
          </b-form-radio-group>
        </div>
        <div class="form-group mb-0">
          <input
            type="text"
            class="form-control rounded-0"
            v-model="username"
            :placeholder="computedPlaceholder"
            required
          >
        </div>
      </div>
      <b-form-group>
        <div class="float-right">
          <b-btn type="submit" variant="primary" size="sm">
            Submit
          </b-btn>
        </div>
      </b-form-group>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@vue/composition-api'
import { platformsEnum } from '@/interfaces/platforms'

export default defineComponent({
  name: 'HomeForm',
  setup (props, { root }) {
    const username = ref<string>(null)
    const platform = ref<string>(platformsEnum.pc)

    const platforms = [
      { text: 'Battle.net', value: 'PC' },
      { text: 'Xbox', value: 'XBOX' },
      { text: 'PSN', value: 'PS4' }
    ]

    const computedPlaceholder = computed(() => {
      return platform.value === 'PC' ? 'Example: Username#1111' : `${platform.value} Username`
    })

    function handleSubmitForm () {
      root.$router.push({ name: 'Profile', params: { username: username.value, platform: platform.value } })
    }

    return {
      username,
      platform,
      platforms,
      platformsEnum,
      handleSubmitForm,
      computedPlaceholder
    }
  }
})
</script>

<style lang="scss" scoped>
.form-grid {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  gap: 10px;

  .grid-item {
    margin: 0 auto;
  }

  @media(min-width: 768px) {
    gap: 0px;
    grid-template-columns: auto 1fr;
  }
}

.custom-control.custom-control-inline.custom-radio {
  &:hover {
    cursor: pointer;
  }
}

img {
  max-width: 50px;
}
</style>
