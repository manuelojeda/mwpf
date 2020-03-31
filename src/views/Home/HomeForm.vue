<template>
  <div>
    <form v-on:submit.prevent="handleSubmitForm">
      <div class="form-group">
        <label class="font-text">Username</label>
        <input
          type="text"
          class="form-control rounded-0"
          v-model="username"
          required
        >
      </div>
      <b-form-group>
        <label class="font-text">
          Platform
        </label>
        <select v-model="platform" class="form-control">
          <option
            v-for="(item, index) in platformsEnum"
            :value="item"
            :key="index"
          >
            {{ item }}
          </option>
        </select>
      </b-form-group>

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
import { defineComponent, ref } from '@vue/composition-api'
import { platformsEnum } from '@/interfaces/platforms'

export default defineComponent({
  name: 'HomeForm',
  setup (props, { root }) {
    const username = ref<string>(null)
    const platform = ref<string>(platformsEnum.pc)

    function handleSubmitForm () {
      root.$router.push({ name: 'Profile', params: { username: username.value, platform: platform.value } })
    }

    return {
      username,
      platform,
      platformsEnum,
      handleSubmitForm
    }
  }
})
</script>
