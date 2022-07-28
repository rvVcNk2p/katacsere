<template>
  <div class="bg-white">
    <div class="relative">
      <!-- Company Pricing Section -->
      <PricingSectionOnce />

      <!-- Page Header -->
      <div
        class="relative max-w-2xl mx-auto py-24 px-4 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8"
      >
        <div class="relative">
          <h1
            class="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl"
          >
            Pricing plans for teams of all sizes
          </h1>
          <p class="mt-6 max-w-2xl text-xl text-gray-500">
            Choose an affordable plan that's packed with the best features for
            engaging your audience, creating customer loyalty, and driving
            sales.
          </p>
        </div>
      </div>
    </div>

    <main>
      <!-- Pricing Section -->
      <section class="relative" aria-labelledby="pricing-heading">
        <h2 id="pricing-heading" class="sr-only">Pricing</h2>

        <!-- Tiers -->
        <div
          class="max-w-2xl mx-auto px-4 space-y-12 sm:px-6 lg:max-w-7xl lg:space-y-0 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8"
        >
          <div
            v-for="tier in pricing.tiers"
            :key="tier.title"
            class="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
          >
            <div class="flex-1">
              <h3 class="text-xl font-semibold text-gray-900">
                {{ tier.title }}
              </h3>
              <p
                v-if="tier.mostPopular"
                class="absolute top-0 py-1.5 px-4 bg-teal-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2"
              >
                Legnépszerűbb
              </p>
              <p class="mt-4 flex justify-center items-baseline text-gray-900">
                <span class="text-5xl font-extrabold tracking-tight"
                  >€{{ tier.price }}</span
                >
                <span class="ml-1 text-xl font-semibold">{{
                  tier.frequency
                }}</span>
              </p>
              <p class="mt-6 text-gray-500">{{ tier.description }}</p>

              <!-- Feature list -->
              <ul role="list" class="mt-6 space-y-6">
                <li
                  v-for="feature in tier.features"
                  :key="feature"
                  class="flex"
                >
                  <CheckIcon
                    class="flex-shrink-0 w-6 h-6 text-teal-500"
                    aria-hidden="true"
                  />
                  <span class="ml-3 text-gray-500">{{ feature }}</span>
                </li>
              </ul>
            </div>

            <a
              href="#"
              :class="[
                tier.mostPopular
                  ? 'bg-teal-500 text-white hover:bg-teal-600'
                  : 'bg-teal-50 text-teal-700 hover:bg-teal-100',
                'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium'
              ]"
              >{{ tier.cta }}</a
            >
          </div>
        </div>
      </section>

      <!-- Logo Cloud -->
      <section
        aria-labelledby="customer-heading"
        class="max-w-2xl mx-auto py-24 px-4 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8"
      >
        <h2 id="customer-heading" class="sr-only">Our customers</h2>
        <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div
            class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
          >
            <img
              class="h-12"
              src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
              alt="Tuple"
            />
          </div>
          <div
            class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
          >
            <img
              class="h-12"
              src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
              alt="Mirage"
            />
          </div>
          <div
            class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
          >
            <img
              class="h-12"
              src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
              alt="StaticKit"
            />
          </div>
          <div
            class="col-span-1 flex justify-center md:col-span-3 lg:col-span-1"
          >
            <img
              class="h-12"
              src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
              alt="Transistor"
            />
          </div>
          <div
            class="col-span-2 flex justify-center md:col-span-3 lg:col-span-1"
          >
            <img
              class="h-12"
              src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
              alt="Workcation"
            />
          </div>
        </div>
      </section>

      <!-- Testimonial -->
      <div class="relative">
        <!-- Decorative background -->
        <div
          aria-hidden="true"
          class="absolute inset-x-0 h-1/2 bg-gradient-to-b from-white to-gray-50"
        />

        <div
          class="relative max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <div
            class="relative py-24 px-8 bg-teal-500 rounded-xl shadow-2xl overflow-hidden lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8"
          >
            <div
              class="absolute inset-0 opacity-50 filter saturate-0 mix-blend-multiply"
            >
              <img
                src="https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80"
                alt=""
                class="w-full h-full object-cover"
              />
            </div>
            <div class="relative lg:col-span-1">
              <img
                class="h-12 w-auto"
                src="https://tailwindui.com/img/logos/workcation-logo-white.svg"
                alt=""
              />
              <blockquote class="mt-6 text-white">
                <p class="text-xl font-medium sm:text-2xl">
                  Workflow has completely transformed how we interact with
                  customers. We've seen record bookings, higher customer
                  satisfaction, and reduced churn.
                </p>
                <footer class="mt-6">
                  <p class="flex flex-col font-medium">
                    <span>Marie Chilvers</span>
                    <span>CEO, Workcation</span>
                  </p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ -->
      <section
        aria-labelledby="faq-heading"
        class="max-w-2xl mx-auto py-24 px-4 divide-y divide-gray-200 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8"
      >
        <h2 id="faq-heading" class="text-3xl font-extrabold text-gray-900">
          Frequently asked questions
        </h2>
        <div class="mt-8">
          <dl class="divide-y divide-gray-200">
            <div
              v-for="faq in faqs"
              :key="faq.id"
              class="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8"
            >
              <dt class="text-base font-medium text-gray-900 md:col-span-5">
                {{ faq.question }}
              </dt>
              <dd class="mt-2 md:mt-0 md:col-span-7">
                <p class="text-base text-gray-500">
                  {{ faq.answer }}
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/outline'

import PricingSectionOnce from '@/components/PricingSectionOnce.vue'

const pricing = {
  tiers: [
    {
      title: 'Alap',
      price: 89.99,
      frequency: '/hó',
      description: 'The essentials to provide your best work for clients.',
      features: [
        '5 products',
        'Up to 1,000 subscribers',
        'Basic analytics',
        '48-hour support response time'
      ],
      cta: 'Havi számlázás',
      mostPopular: true
    },
    {
      title: 'Normál',
      price: 149.99,
      frequency: '/hó',
      description: 'A plan that scales with your rapidly growing business.',
      features: [
        '25 products',
        'Up to 10,000 subscribers',
        'Advanced analytics',
        '24-hour support response time',
        'Marketing automations'
      ],
      cta: 'Havi számlázás',
      mostPopular: false
    },
    {
      title: 'Profi',
      price: 249.99,
      frequency: '/hó',
      description: 'Dedicated support and infrastructure for your company.',
      features: [
        'Unlimited products',
        'Unlimited subscribers',
        'Advanced analytics',
        '1-hour, dedicated support response time',
        'Marketing automations',
        'Custom integrations'
      ],
      cta: 'Havi számlázás',
      mostPopular: false
    }
  ]
}
const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
  },
  {
    id: 2,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
  },
  {
    id: 3,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
  }
  // More questions...
]
</script>
