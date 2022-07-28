<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<script setup lang="ts">
import Footer from './components/nav/Footer.vue'
import Header from './components/nav/Header.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
