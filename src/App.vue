<template>
  <navigation-bar />
  <router-view></router-view>
</template>

<script setup lang="ts">
import navigationBar from './components/nav/NavigationBar.vue'
</script>

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
