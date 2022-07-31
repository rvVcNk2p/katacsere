<template>
  <HeroSection />
  <FeatureSection />
  <BeforeAfterSection />

  <!--
    ConclusionSection
  -->

  <FaqSection
    title="Gyakran ismételt kérdések"
    sub-title="Csomagjaink"
    :faqs="PackagesFaqs"
  />
  <CtaSection />
  <FaqSection
    title="Gyakran ismételt kérdések"
    sub-title="Cégalapítás"
    :faqs="SettingUpCompanyFaqs"
  />
  <CtaSection />
  <FaqSection
    title="Gyakran ismételt kérdések"
    sub-title="Könyvelés"
    :faqs="AccountingFaqs"
  />
  <!-- <TeamSection /> -->
  <!-- <TestimonialSection /> -->
</template>

<script lang="ts" setup>
import BeforeAfterSection from '@/components/BeforeAfterSection.vue'
import CtaSection from '@/components/CtaSection.vue'
import FaqSection from '@/components/FaqSection.vue'
import FeatureSection from '@/components/FeatureSection.vue'
import HeroSection from '@/components/HeroSection.vue'
import { AccountingFaqs, PackagesFaqs, SettingUpCompanyFaqs } from '@/data/faq'
</script>
