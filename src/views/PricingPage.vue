<template>
  <div class="bg-white">
    <div class="relative">
      <main>
        <PricingSectionOnce />
        <!-- PricingOnceDescription -->
        <PricingSectionMonthly />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import PricingSectionMonthly from '@/components/pricing/PricingSectionMonthly.vue'
import PricingSectionOnce from '@/components/pricing/PricingSectionOnce.vue'
</script>
