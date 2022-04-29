<template>
  <img class="mx-auto" alt="Vue logo" src="@/assets/logo.png" />
  <h1 class="text-3xl font-bold underline">{{ msg }}</h1>
  <p class="mt-4">
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p class="mt-4">See <code>README.md</code> for more information.</p>

  <p class="mt-4">
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" class="mt-4" @click="mainStore.increment()">
    count is: {{ counter }}
  </button>
  <p class="mt-4">
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { defineProps } from 'vue'

import { useMainStore } from '@/stores/main'

const mainStore = useMainStore()

defineProps({
  msg: {
    type: String,
    default: ''
  }
})

const counter = computed(() => mainStore.$state.counter)
</script>

<style scoped lang="scss">
a {
  color: $global__color--green;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: rem(2) rem(4);
  border-radius: rem(4);
  color: #304455;
}
</style>
