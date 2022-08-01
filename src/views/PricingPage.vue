<template>
  <div class="bg-white">
    <div class="relative">
      <main>
        <PricingHeader />
        <PricingSectionOnce />
        <!-- PricingOnceDescription -->
        <PricingSectionMonthly />
        <!-- PricingMonthlyDescription -->
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import PricingHeader from '@/components/pricing/PricingHeader.vue'
import PricingSectionMonthly from '@/components/pricing/PricingSectionMonthly.vue'
import PricingSectionOnce from '@/components/pricing/PricingSectionOnce.vue'
</script>
