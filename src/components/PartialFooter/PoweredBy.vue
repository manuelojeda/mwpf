<template>
  <div class="text-center">
    <p class="mb-1">
      Powered by
    </p>

    <ul class="list-inline mb-1">
      <li class="list-inline-item mx-2" v-for="(icon, idx) in icons" :key="idx">
        <a :href="icon.href" target="_blank" :title="icon.href">
          <font-awesome-icon :icon="icon.classes" class="fa-lg" :style="{'color': icon.color}"/>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PoweredBy',
  data () {
    return {
      icons: [
        {
          classes: ['fab', 'vuejs'],
          color: '#4fc08d',
          href: 'https://vue.js.org/'
        },
        {
          classes: ['fab', 'bootstrap'],
          color: '#7952b3',
          href: 'https://bootstrap-vue.js.org/'
        },
        {
          classes: ['fab', 'github'],
          color: '#e4e4e4',
          href: 'https://github.com/manuelojeda'
        },
        {
          classes: ['fab', 'font-awesome'],
          color: '#0e95ff',
          href: 'https://fontawesome.com/'
        }
      ]
    }
  }
}
</script>
