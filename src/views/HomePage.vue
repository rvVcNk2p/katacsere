<template>
  <HelloWorld :msg="`Hello ${fullname}!`" />
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import HelloWorld from '../components/HelloWorld.vue'
import { useMainStore } from '../stores/main'

const fullname = computed(() => {
  return useMainStore().$state.name
})
</script>
