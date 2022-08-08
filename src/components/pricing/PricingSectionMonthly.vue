<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div
    id="konyvelesi-csomagok"
    class="max-w-7xl mx-auto py-24 px-4 bg-white sm:px-6 lg:px-8"
  >
    <h2
      class="text-3xl leading-6 font-black text-gray-700 uppercase tracking-wider mb-10"
    >
      KÖNYVELÉS
    </h2>
    <h2
      class="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl"
    >
      Árajánlatok minden méretű cég számára
    </h2>
    <p class="mt-6 max-w-5xl text-xl text-gray-500 mx-auto">
      Válaszd ki azt a megoldást, amelyik a legjobban passzol a működésedhez.
    </p>
    <hr class="mx-auto max-w-md border border-teal-500 mt-6" />
    <p class="mt-6 max-w-5xl text-xl text-gray-500 mx-auto">
      1. Ha régen KATAs voltál, akkor valószínűleg csak kevés számlát állítottál
      ki, így számodra a tökéletes választás az
      <span class="text-black font-black">'Alap'</span> csomagunk.
      <br />
      2. Ha például webshopot üzemeltetsz, és havi szinte már több 100+ számlát
      kell kiállítanod, akkor a
      <span class="text-black font-black">'Normál'</span> csomagunkat ajánljuk
      figyelmedbe.
      <br />
      3. Ha viszont több céged van vagy a havi szinten kiállított számlák száma
      meghaladha a 750 darabot, akkor a
      <span class="text-black font-black">'Profi'</span> csomagunk lesz, amire
      szükséged van!
    </p>
    <hr class="mx-auto max-w-md border border-teal-500 mt-6" />
    <p class="mt-6 max-w-5xl text-xl text-gray-500 mx-auto">
      <span class="text-black font-black">FONTOS:</span> Az összes ügyfelünk,
      ugyan azt a kiemelkedő szolgáltatást fogja kapni mint mindenki más. A
      csomagok, csak a havi kiállított számlamennyiségben térnek el. Mindenkit
      kiemelt partnerként kezelünk!
    </p>

    <!-- Tiers -->
    <div
      class="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8"
    >
      <div
        v-for="tier in pricing.tiers"
        :key="tier.title"
        class="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
      >
        <div class="flex-1">
          <h3 class="text-xl font-semibold text-gray-900">{{ tier.title }}</h3>
          <p
            v-if="tier.mostPopular"
            class="absolute top-0 py-1.5 px-4 bg-teal-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2"
          >
            Legnépszerűbb
          </p>
          <p class="mt-4 flex justify-center items-baseline text-gray-900">
            <span class="text-5xl font-extrabold tracking-tight">{{
              tier.price
            }}</span>
            <span class="ml-1 text-xl font-semibold"
              >Ft {{ tier.frequency }}</span
            >
          </p>
          <p class="mt-6 text-gray-500">{{ tier.description }}</p>

          <!-- Feature list -->
          <ul role="list" class="mt-6 space-y-6">
            <li v-for="feature in tier.features" :key="feature" class="flex">
              <CheckIcon
                class="flex-shrink-0 w-6 h-6 text-teal-500"
                aria-hidden="true"
              />
              <span class="ml-3 text-gray-500 text-left">{{ feature }}</span>
            </li>
          </ul>
        </div>

        <a
          :href="MAIN_FORM_URL"
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

    <hr class="mx-auto max-w-md border border-teal-500 mt-28" />
  </div>
</template>

<script setup lang="ts">
import { CheckIcon } from '@heroicons/vue/outline'

import { MAIN_FORM_URL } from '@/data/form'

const pricing = {
  tiers: [
    {
      title: 'Alap',
      price: '34,990',
      frequency: '/hó',
      description:
        'Ha régen KATAs voltál, akkor ez lesz számodra a tökéletes választás!',
      features: [
        'Havi 100 db számláig',
        'Könyvelés folyamatos frissen tartása',
        'Rendszeres és aktív kapcsolattartás',
        '3 havi emlékeztető a fizetési kötelezettségedről',
        'Folyamatos tájékoztatás a céget érintő közelgő változásokról'
      ],
      cta: 'Kiválasztom',
      mostPopular: true
    },
    {
      title: 'Normál',
      price: '59,990',
      frequency: '/hó',
      description:
        'Ha megszaporodtak a havi számláid, akkor erre lesz szükséged!',
      features: [
        'Havi 100-750 számla között',
        'Könyvelés folyamatos frissen tartása',
        'Rendszeres és aktív kapcsolattartás',
        '3 havi emlékeztető a fizetési kötelezettségedről',
        'Folyamatos tájékoztatás a céget érintő közelgő változásokról'
      ],
      cta: 'Kiválasztom',
      mostPopular: false
    },
    {
      title: 'Profi',
      price: '99,990',
      frequency: '/hó',
      description: 'Több mint 750+ számlád van a hónapban? Válaszd ez!',
      features: [
        'Havi 750+ számla felett',
        'Könyvelés folyamatos frissen tartása',
        'Rendszeres és aktív kapcsolattartás',
        '3 havi emlékeztető a fizetési kötelezettségedről',
        'Folyamatos tájékoztatás a céget érintő közelgő változásokról'
      ],
      cta: 'Kiválasztom',
      mostPopular: false
    }
  ]
}
</script>
