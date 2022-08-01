<template>
  <HeroSection />
  <FeatureSection />
  <BeforeAfterSection :features="features_12" :perks="perks_12" />
  <ConclusionSection />
  <BeforeAfterSection :features="features_24" :perks="perks_24" />

  <!-- <TeamSection /> -->
  <!-- <TestimonialSection /> -->
</template>

<script lang="ts" setup>
import BeforeAfterSection from '@/components/BeforeAfterSection.vue'
import ConclusionSection from '@/components/ConclusionSection.vue'
import FeatureSection from '@/components/FeatureSection.vue'
import HeroSection from '@/components/HeroSection.vue'
import { features_12, features_24, perks_12, perks_24 } from '@/data/comparison'
</script>
