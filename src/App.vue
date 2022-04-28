<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";

import { computed } from "vue";
import { useMainStore } from "./stores/main";

const fullname = computed(() => {
  return useMainStore().$state.name;
});
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld :msg="`Hello ${fullname}!`" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
