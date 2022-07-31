<template>
  <div class="bg-gray-50">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <h2
          class="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl"
        >
          {{ title }}
          <h3>- {{ subTitle }} -</h3>
        </h2>
        <dl class="mt-6 space-y-6 divide-y divide-gray-200">
          <Disclosure
            v-for="faq in faqs"
            v-slot="{ open }"
            :key="faq.question"
            as="div"
            class="pt-6"
          >
            <dt class="text-lg">
              <DisclosureButton
                class="text-left w-full flex justify-between items-start text-gray-400"
              >
                <span class="font-medium text-gray-900">
                  {{ faq.question }}
                </span>
                <span class="ml-6 h-7 flex items-center">
                  <ChevronDownIcon
                    :class="[
                      open ? '-rotate-180' : 'rotate-0',
                      'h-6 w-6 transform'
                    ]"
                    aria-hidden="true"
                  />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12 faq-answer">
              <p v-html="faq.answer" class="text-base text-gray-500" />
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/outline'

type Faq = {
  question: string
  answer: string
}

interface FaqSectionType {
  title: string
  subTitle: string
  faqs: Faq[]
}

defineProps<FaqSectionType>()
</script>

<style lang="scss">
.faq-answer {
  @apply text-left;
  a {
    @apply text-teal-500 font-bold;
  }
}
</style>
