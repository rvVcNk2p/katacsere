<template>
  <div class="bg-white">
    <div class="relative">
      <main>
        <PricingHero />
        <PricingSectionOnce />
        <!-- PricingOnceDescription -->
        <PricingSectionMonthly />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import PricingHero from '@/components/pricing/PricingHero.vue'
import PricingSectionMonthly from '@/components/pricing/PricingSectionMonthly.vue'
import PricingSectionOnce from '@/components/pricing/PricingSectionOnce.vue'
</script>
