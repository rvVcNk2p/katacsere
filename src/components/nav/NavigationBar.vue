<template>
  <div class="mb-10">
    <router-link to="/" class="px-4 py-1 border rounded-lg mr-6">
      /
    </router-link>
    <router-link to="/about" class="px-4 py-1 border rounded-lg">
      About
    </router-link>
  </div>
</template>

<style lang="scss">
.router-link-active {
  @apply bg-slate-200;
}
</style>
