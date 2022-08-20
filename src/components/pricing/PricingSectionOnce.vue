<template>
  <div id="cegalapitasi-csomagok" class="bg-gray-900">
    <div class="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
      <div class="text-center">
        <h2
          class="text-3xl leading-6 font-semibold text-gray-300 uppercase tracking-wider mb-10"
        >
          Cégalapítás
        </h2>
        <p
          class="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl"
        >
          A megfelelő ár, amit Rád szabtunk!
        </p>
        <p
          class="mt-3 max-w-4xl mx-auto text-xl text-gray-300 sm:mt-5 sm:text-2xl"
        >
          Csomagjaink 120.000-200.000 Forint között terjednek, s 3 kategóriába
          sorolják be a szolgáltatásainkat, amit az alapján állítottunk össze,
          hogy mennyire szeretnél önállósodni a cégalapítás folyamatában.
          <br />
          Összességében, a kényelem és a gyorsaság az amiben eltérnek
          csomagjaink. Bármelyiket is választod, biztosan nem fogsz csalódni!
        </p>
      </div>
    </div>

    <div class="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
      <div class="relative z-0">
        <div class="absolute inset-0 h-5/6 bg-gray-900 lg:h-2/3" />
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="relative lg:grid lg:grid-cols-7">
            <!-- <div
              class="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3"
            >
              <div
                class="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg"
              >
                <div class="flex-1 flex flex-col">
                  <div class="bg-white px-6 py-10">
                    <div>
                      <h3
                        id="tier-hobby"
                        class="text-center text-2xl font-medium text-gray-900"
                      >
                        Önálló csomag
                      </h3>
                      <div class="mt-4 flex items-center justify-center">
                        <span
                          class="px-3 flex items-start text-6xl tracking-tight text-gray-900"
                        >
                          <span class="font-extrabold"> 119,990 </span>
                        </span>
                        <span class="text-xl font-medium text-gray-500">
                          FT
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10"
                  >
                    <ul role="list" class="space-y-4">
                      <li
                        v-for="feature in hobbyFeatures"
                        :key="feature"
                        class="flex items-start"
                      >
                        <div class="flex-shrink-0">
                          <CheckIcon
                            class="flex-shrink-0 h-6 w-6 text-green-500"
                            aria-hidden="true"
                          />
                        </div>
                        <p
                          class="ml-3 text-base font-medium text-gray-500 text-left"
                        >
                          {{ feature }}
                        </p>
                      </li>
                    </ul>
                    <div class="mt-8">
                      <div class="rounded-lg shadow-md">
                        <a
                          :href="MAIN_FORM_URL"
                          class="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-teal-600 hover:bg-gray-50"
                          aria-describedby="tier-hobby"
                        >
                          Kiválasztom
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
            <div
              class="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-2 lg:col-end-5 lg:row-start-1 lg:row-end-4"
            >
              <div class="relative z-10 rounded-lg shadow-xl">
                <div
                  class="pointer-events-none absolute inset-0 rounded-lg border-2 border-teal-600"
                  aria-hidden="true"
                />
                <div class="absolute inset-x-0 top-0 transform translate-y-px">
                  <div class="flex justify-center transform -translate-y-1/2">
                    <span
                      class="inline-flex rounded-full bg-teal-600 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white"
                    >
                      Legnépszerűbb
                    </span>
                  </div>
                </div>
                <div class="bg-white rounded-t-lg px-6 pt-12 pb-10">
                  <div>
                    <h3
                      id="tier-growth"
                      class="text-center text-3xl font-semibold text-gray-900 sm:-mx-6"
                    >
                      Normál csomag
                    </h3>
                    <div class="mt-4 flex items-center justify-center">
                      <span
                        class="px-3 flex items-start text-6xl tracking-tight text-gray-900 sm:text-6xl"
                      >
                        <span class="font-extrabold"> 119,990 </span>
                      </span>
                      <span class="text-2xl font-medium text-gray-500">
                        FT
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  class="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10"
                >
                  <ul role="list" class="space-y-4">
                    <li
                      v-for="feature in growthFeatures"
                      :key="feature"
                      class="flex items-start"
                    >
                      <div class="flex-shrink-0">
                        <CheckIcon
                          class="flex-shrink-0 h-6 w-6 text-green-500"
                          aria-hidden="true"
                        />
                      </div>
                      <p
                        class="ml-3 text-base font-medium text-gray-500 text-left"
                      >
                        {{ feature }}
                      </p>
                    </li>
                  </ul>
                  <div class="mt-10">
                    <div class="rounded-lg shadow-md">
                      <a
                        :href="MAIN_FORM_URL"
                        class="block w-full text-center rounded-lg border border-transparent bg-teal-600 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-teal-700"
                        aria-describedby="tier-growth"
                      >
                        Kiválasztom
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-5 lg:col-end-7 lg:row-start-2 lg:row-end-3"
            >
              <div
                class="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg"
              >
                <div class="flex-1 flex flex-col">
                  <div class="bg-white px-6 py-10">
                    <div>
                      <h3
                        id="tier-scale"
                        class="text-center text-2xl font-medium text-gray-900"
                      >
                        Kiemelt csomag
                      </h3>
                      <div class="mt-4 flex items-center justify-center">
                        <span
                          class="px-3 flex items-start text-6xl tracking-tight text-gray-900"
                        >
                          <span class="font-extrabold"> 199,990 </span>
                        </span>
                        <span class="text-xl font-medium text-gray-500">
                          FT
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10"
                  >
                    <ul role="list" class="space-y-4">
                      <li
                        v-for="feature in scaleFeatures"
                        :key="feature"
                        class="flex items-start"
                      >
                        <div class="flex-shrink-0">
                          <CheckIcon
                            class="flex-shrink-0 h-6 w-6 text-green-500"
                            aria-hidden="true"
                          />
                        </div>
                        <p
                          class="ml-3 text-base font-medium text-gray-500 text-left"
                        >
                          {{ feature }}
                        </p>
                      </li>
                    </ul>
                    <div class="mt-8">
                      <div class="rounded-lg shadow-md">
                        <a
                          :href="MAIN_FORM_URL"
                          class="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-teal-600 hover:bg-gray-50"
                          aria-describedby="tier-scale"
                        >
                          Kiválasztom
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckIcon } from '@heroicons/vue/outline'

import { MAIN_FORM_URL } from '@/data/form'

// const hobbyFeatures = [
//   'Fedezzük a összes cégalapítás költséget, ami',
//   'Közvetlenül a könyvelő irodával kell tartanod majd a kapcsolatot',
//   '3-4 hét alatt megalapításra kerül a céged'
// ]

const growthFeatures = [
  'Fedezzük a összes cégalapítás költséget',
  'Segítünk a bankszámla megnyitásában',
  'Kapcsolat tartás a könyvelő irodával',
  'Válaszolunk a felmerülő kérdéseidre',
  'Ha elakadnál Mi ott leszünk, hogy segítsünk',
  'Kiemelt segítségnyújtás a megalapítási folyamat alatt',
  '3-4 hét alatt megalapításra kerül a céged'
]
const scaleFeatures = [
  'Minden, ami az előző csomagban',
  'Kiemelten kezeljük az ügyed',
  'Segítünk az átutazásban',
  'Munkaidőn kívül is kereshetsz minket bizalommal',
  '2-3 hét alatt megalapításra kerül a céged'
]
</script>
