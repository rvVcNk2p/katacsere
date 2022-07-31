<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-gray-50">
    <!-- Feature comparison (up to lg) -->
    <section aria-labelledby="mobile-comparison-heading" class="lg:hidden">
      <h2 id="mobile-comparison-heading" class="sr-only">Feature comparison</h2>

      <div class="max-w-2xl mx-auto py-16 px-4 space-y-16 sm:px-6">
        <div
          v-for="(plan, idx) in plans"
          :key="idx"
          class="border-t border-gray-200"
        >
          <div
            :class="[
              plan.featured ? 'border-teal-600' : 'border-transparent',
              '-mt-px pt-6 border-t-2 sm:w-full'
            ]"
          >
            <h3
              :class="[
                plan.featured ? 'text-teal-600' : 'text-gray-900',
                'text-sm font-bold'
              ]"
            >
              {{ plan.title }}
            </h3>
            <p class="mt-2 text-sm text-gray-500">{{ plan.description }}</p>
          </div>
          <h4 class="mt-10 text-sm font-bold text-gray-900 hidden">
            Catered for business
          </h4>

          <div class="mt-6 relative">
            <!-- Fake card background -->
            <div
              aria-hidden="true"
              class="hidden absolute inset-0 pointer-events-none sm:block"
            >
              <div
                :class="[
                  plan.featured ? 'shadow-md' : 'shadow',
                  'absolute right-0 w-1/2 h-full bg-white rounded-lg'
                ]"
              />
            </div>

            <div
              :class="[
                plan.featured
                  ? 'ring-2 ring-teal-600 shadow-md'
                  : 'ring-1 ring-black ring-opacity-5 shadow',
                'relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none'
              ]"
            >
              <dl class="divide-y divide-gray-200">
                <div
                  v-for="feature in features"
                  :key="feature.title"
                  class="py-3 flex items-center justify-between sm:grid sm:grid-cols-2"
                >
                  <dt class="pr-4 text-sm font-medium text-gray-600">
                    {{ feature.title }}
                  </dt>
                  <dd
                    class="flex items-center justify-end sm:px-4 sm:justify-center"
                  >
                    <span
                      v-if="typeof feature.tiers[idx].value === 'string'"
                      :class="[
                        feature.tiers[idx].featured
                          ? 'text-teal-600'
                          : 'text-gray-900',
                        'text-sm font-medium',
                        feature.tiers[idx]?.bold
                          ? '!text-base font-bold'
                          : null,
                        feature.tiers[idx]?.warn ? 'text-red-600' : null
                      ]"
                      >{{ feature.tiers[idx].value }}</span
                    >
                    <template v-else>
                      <CheckIcon
                        v-if="feature.tiers[idx].value === true"
                        class="mx-auto h-5 w-5 text-teal-600"
                        aria-hidden="true"
                      />
                      <XIcon
                        v-else
                        class="mx-auto h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span class="sr-only">{{
                        feature.tiers[idx].value === true ? 'Yes' : 'No'
                      }}</span>
                    </template>
                  </dd>
                </div>
              </dl>
            </div>

            <!-- Fake card border -->
            <div
              aria-hidden="true"
              class="hidden absolute inset-0 pointer-events-none sm:block"
            >
              <div
                :class="[
                  plan.featured
                    ? 'ring-2 ring-teal-600'
                    : 'ring-1 ring-black ring-opacity-5',
                  'absolute right-0 w-1/2 h-full rounded-lg'
                ]"
              />
            </div>
          </div>

          <div class="mt-6 relative">
            <!-- Fake card background -->
            <div
              aria-hidden="true"
              class="hidden absolute inset-0 pointer-events-none sm:block"
            >
              <div
                :class="[
                  plan.featured ? 'shadow-md' : 'shadow',
                  'absolute right-0 w-1/2 h-full bg-white rounded-lg'
                ]"
              />
            </div>

            <div
              :class="[
                plan.featured
                  ? 'ring-2 ring-teal-600 shadow-md'
                  : 'ring-1 ring-black ring-opacity-5 shadow',
                'relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none'
              ]"
            >
              <dl class="divide-y divide-gray-200">
                <div
                  v-for="perk in perks"
                  :key="perk.title"
                  class="py-3 flex justify-between sm:grid sm:grid-cols-2"
                >
                  <dt class="text-sm font-medium text-gray-600 sm:pr-4">
                    {{ perk.title }}
                  </dt>
                  <dd class="text-center sm:px-4">
                    <span
                      v-if="typeof perk.tiers[idx].value === 'string'"
                      :class="[
                        perk.tiers[idx].featured
                          ? 'text-teal-600'
                          : 'text-gray-900',
                        'text-sm font-medium',
                        perk.tiers[idx].bold ? '!text-base font-bold' : null,
                        perk.tiers[idx]?.warn ? 'text-red-600' : null
                      ]"
                      >{{ perk.tiers[idx].value }}</span
                    >
                    <template v-else>
                      <CheckIcon
                        v-if="perk.tiers[idx].value === true"
                        class="mx-auto h-5 w-5 text-teal-600"
                        aria-hidden="true"
                      />
                      <XIcon
                        v-else
                        class="mx-auto h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span class="sr-only">{{
                        perk.tiers[idx].value === true ? 'Yes' : 'No'
                      }}</span>
                    </template>
                  </dd>
                </div>
              </dl>
            </div>

            <!-- Fake card border -->
            <div
              aria-hidden="true"
              class="hidden absolute inset-0 pointer-events-none sm:block"
            >
              <div
                :class="[
                  plan.featured
                    ? 'ring-2 ring-teal-600'
                    : 'ring-1 ring-black ring-opacity-5',
                  'absolute right-0 w-1/2 h-full rounded-lg'
                ]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature comparison (lg+) -->
    <section aria-labelledby="comparison-heading" class="hidden lg:block">
      <h2 id="comparison-heading" class="sr-only">Feature comparison</h2>

      <div class="max-w-7xl mx-auto px-8 py-24 pb-0">
        <div class="w-full border-t border-gray-200 flex items-stretch">
          <div class="-mt-px w-1/3 py-6 pr-4 flex items-end">
            <h3 class="mt-auto text-sm font-bold text-gray-900 hidden">
              Catered for business
            </h3>
          </div>
          <div
            v-for="(plan, planIdx) in plans"
            :key="plan.title"
            aria-hidden="true"
            :class="[
              planIdx === plans.length - 1 ? '' : 'pr-4',
              '-mt-px pl-4 w-1/3'
            ]"
          >
            <div
              :class="[
                plan.featured ? 'border-teal-600' : 'border-transparent',
                'py-6 border-t-2'
              ]"
            >
              <p
                :class="[
                  plan.featured ? 'text-teal-600' : 'text-gray-900',
                  'text-sm font-bold'
                ]"
              >
                {{ plan.title }}
              </p>
              <p class="mt-2 text-sm text-gray-500">{{ plan.description }}</p>
            </div>
          </div>
        </div>

        <div class="relative">
          <!-- Fake card backgrounds -->
          <div
            class="absolute inset-0 flex items-stretch pointer-events-none"
            aria-hidden="true"
          >
            <div class="w-1/3 pr-4" />
            <div class="w-1/3 px-4">
              <div class="w-full h-full bg-white rounded-lg shadow" />
            </div>
            <div class="w-1/3 px-4">
              <div class="w-full h-full bg-white rounded-lg shadow-md" />
            </div>
          </div>

          <table class="relative w-full">
            <caption class="sr-only">
              Business feature comparison
            </caption>
            <thead>
              <tr class="text-left">
                <th scope="col">
                  <span class="sr-only">Feature</span>
                </th>
                <th v-for="plan in plans" :key="plan.title" scope="col">
                  <span class="sr-only">{{ plan.title }} plan</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="feature in features" :key="feature.title">
                <th
                  scope="row"
                  class="w-1/3 py-3 pr-4 text-left text-sm font-medium text-gray-600"
                >
                  {{ feature.title }}
                </th>
                <td
                  v-for="(tier, tierIdx) in feature.tiers"
                  :key="tier.title"
                  :class="[
                    tierIdx === feature.tiers.length - 1 ? 'pl-4' : 'px-4',
                    'relative w-1/3 py-0 text-center'
                  ]"
                >
                  <span class="relative w-full h-full py-3">
                    <span
                      v-if="typeof tier.value === 'string'"
                      :class="[
                        tier.featured ? 'text-teal-600' : 'text-gray-900',
                        'text-sm font-medium',
                        tier?.bold ? '!text-base font-bold' : null,
                        tier?.warn ? 'text-red-600' : null
                      ]"
                      >{{ tier.value }}</span
                    >
                    <template v-else>
                      <CheckIcon
                        v-if="tier.value === true"
                        class="mx-auto h-5 w-5 text-teal-600"
                        aria-hidden="true"
                      />
                      <XIcon
                        v-else
                        class="mx-auto h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span class="sr-only">{{
                        tier.value === true ? 'Yes' : 'No'
                      }}</span>
                    </template>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>

          <!-- Fake card borders -->
          <div
            class="absolute inset-0 flex items-stretch pointer-events-none"
            aria-hidden="true"
          >
            <div class="w-1/3 pr-4" />
            <div class="w-1/3 px-4">
              <div
                class="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5"
              />
            </div>
            <div class="w-1/3 px-4">
              <div
                class="w-full h-full rounded-lg ring-2 ring-teal-600 ring-opacity-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-8 mt-6 pb-20">
        <div class="relative">
          <!-- Fake card backgrounds -->
          <div
            class="absolute inset-0 flex items-stretch pointer-events-none"
            aria-hidden="true"
          >
            <div class="w-1/3 pr-4" />
            <div class="w-1/3 px-4">
              <div class="w-full h-full bg-white rounded-lg shadow" />
            </div>
            <div class="w-1/3 px-4">
              <div class="w-full h-full bg-white rounded-lg shadow-md" />
            </div>
          </div>

          <table class="relative w-full">
            <thead>
              <tr class="text-left">
                <th scope="col">
                  <span class="sr-only">Feature</span>
                </th>
                <th v-for="plan in plans" :key="plan.title" scope="col">
                  <span class="sr-only">{{ plan.title }} plan</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="perk in perks" :key="perk.title">
                <th
                  scope="row"
                  class="w-1/3 py-3 pr-4 text-left text-sm font-medium text-gray-600"
                >
                  {{ perk.title }}
                </th>
                <td
                  v-for="(tier, tierIdx) in perk.tiers"
                  :key="tier.title"
                  :class="[
                    tierIdx === perk.tiers.length - 1 ? 'pl-4' : 'px-4',
                    'relative w-1/3 py-0 text-center'
                  ]"
                >
                  <span class="relative w-full h-full py-3">
                    <span
                      v-if="typeof tier.value === 'string'"
                      :class="[
                        tier.featured ? 'text-teal-600' : 'text-gray-900',
                        'text-sm font-medium',
                        tier?.bold ? '!text-base font-bold' : null,
                        tier?.warn ? 'text-red-600' : null
                      ]"
                      >{{ tier.value }}</span
                    >
                    <template v-else>
                      <CheckIcon
                        v-if="tier.value === true"
                        class="mx-auto h-5 w-5 text-teal-600"
                        aria-hidden="true"
                      />
                      <XIcon
                        v-else
                        class="mx-auto h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span class="sr-only">{{
                        tier.value === true ? 'Yes' : 'No'
                      }}</span>
                    </template>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>

          <!-- Fake card borders -->
          <div
            class="absolute inset-0 flex items-stretch pointer-events-none"
            aria-hidden="true"
          >
            <div class="w-1/3 pr-4" />
            <div class="w-1/3 px-4">
              <div
                class="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5"
              />
            </div>
            <div class="w-1/3 px-4">
              <div
                class="w-full h-full rounded-lg ring-2 ring-teal-600 ring-opacity-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { CheckIcon, XIcon } from '@heroicons/vue/solid'

const plans = [
  {
    title: 'ÁTALÁNYADÓZÁS',
    featured: false,
    description: 'Főállású EV (Garantált Bérminimum) átalányadózás'
  },
  {
    title: 'MICRO (SRL)',
    featured: true,
    description: 'Kiemelkedő céges konstrukció, egyéni vállalkozóknak.'
  }
]

const features = [
  {
    title: 'Évi bevétel (Ft)',
    tiers: [
      { title: 'starter', value: '12,000,000', bold: false },
      { title: 'popular', featured: true, value: '12,000,000', bold: false }
    ]
  },
  {
    title: 'Költség hányad',
    tiers: [
      { title: 'starter', value: '40%', bold: false },
      { title: 'popular', featured: true, value: false, bold: false }
    ]
  },
  {
    title: 'Általányban megállapított jövedelem',
    tiers: [
      { title: 'starter', value: '7,200,000', bold: false },
      { title: 'popular', featured: true, value: false, bold: false }
    ]
  },
  {
    title: 'Adómentes rész',
    tiers: [
      { title: 'starter', value: '1,200,000', bold: false },
      { title: 'popular', featured: true, value: false, bold: false }
    ]
  },
  {
    title: 'SZJA alapja',
    tiers: [
      { title: 'starter', value: '6,000,000', bold: false },
      { title: 'popular', featured: true, value: false, bold: false }
    ]
  },
  {
    title: 'TBJ alapja',
    tiers: [
      { title: 'starter', value: '6,520,000', bold: false },
      { title: 'popular', featured: true, value: false, bold: false }
    ]
  },
  {
    title: 'Szocho alapja',
    tiers: [
      { title: 'starter', value: '6,585,000', bold: false },
      { title: 'popular', featured: true, value: false, bold: false }
    ]
  }
]

const perks = [
  {
    title: 'SZJA (15%)',
    tiers: [
      { title: 'starter', value: '900,000', bold: false },
      { title: 'popular', featured: true, value: false, bold: false }
    ]
  },
  {
    title: 'TBJ (18,5%)',
    tiers: [
      { title: 'starter', value: '1,206,200', bold: false },
      { title: 'popular', featured: true, value: false, bold: false }
    ]
  },
  {
    title: 'Szocho (13%)',
    tiers: [
      { title: 'starter', value: '856,050', bold: false },
      { title: 'popular', featured: true, value: false, bold: false }
    ]
  },
  {
    title: 'IPA (2%)',
    tiers: [
      { title: 'starter', value: '144,000', bold: false },
      { title: 'popular', featured: true, value: false, bold: false }
    ]
  },
  {
    title: 'Könyvelésí díj',
    tiers: [
      { title: 'starter', value: '174,000', bold: false },
      { title: 'popular', featured: true, value: '360,000', bold: false }
    ]
  },
  {
    title: 'Teljes bevétel utáni adó (3%)',
    tiers: [
      { title: 'starter', value: false, bold: false },
      { title: 'popular', featured: true, value: '360,000', bold: false }
    ]
  },
  {
    title: 'Nyereség adó (5%)',
    tiers: [
      { title: 'starter', value: false, bold: false },
      { title: 'popular', featured: true, value: '564,000', bold: false }
    ]
  },
  {
    title: 'Összes költség',
    tiers: [
      { title: 'starter', value: '3,280,250', bold: false, warn: true },
      {
        title: 'popular',
        featured: true,
        value: '1,280,000',
        bold: false,
        warn: false
      }
    ]
  },
  {
    title: 'Megmaradó összeg',
    tiers: [
      { title: 'starter', value: '8,719,750', bold: true, warn: true },
      {
        title: 'popular',
        featured: true,
        value: '10,720,000',
        bold: true,
        warn: false
      }
    ]
  },
  {
    title: 'Különbség',
    tiers: [
      { title: 'starter', value: '-2,000,000', bold: true, warn: true },
      {
        title: 'popular',
        featured: true,
        value: '2,000,000',
        bold: true,
        warn: false
      }
    ]
  }
]
</script>
