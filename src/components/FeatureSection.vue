<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div id="feature-section" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2
          class="text-base text-teal-600 font-semibold tracking-wide uppercase"
        >
          A MEGOLDÁS
        </h2>
        <p
          class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        >
          Cégalapítás és könyvelés, egyszerűen
        </p>
        <p class="mt-10 mb-20 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Egyszerű, megbízható szolgáltatás. Rejtett költségek nélkül. <br />
          Vedd fel Velünk a kapcsolatot (az igényfelmérő kitöltésével) és akár
          heteken belül elkészülhet a romániai céged.
        </p>
      </div>

      <div class="mt-10">
        <dl
          class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"
        >
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
              <div
                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white"
              >
                <component
                  :is="feature.icon"
                  class="h-6 w-6"
                  aria-hidden="true"
                />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                {{ feature.name }}
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  AnnotationIcon,
  BriefcaseIcon,
  LightningBoltIcon,
  ScaleIcon
} from '@heroicons/vue/outline'

const features = [
  {
    name: 'Cégalapítás A-tól Z-ig',
    description:
      'Ha nem akarsz külön keresni egy megbízható ügyvédi irodát, könyvelő csapatot és székhely szolgáltatót akkor Mi levesszük ezt a terhet a válladról. Veled leszünk az elindulástól kezdve, a havi szintű kapcsolattartáson keresztül egészen az éves mérleg elkészítéséig. Egy szóval, végig.',
    icon: LightningBoltIcon
  },

  {
    name: 'Magyar nyelvű kollégák',
    description:
      'Ha attól tartanál, hogy magas szintű román nyelvtudásra van szükséged ahhoz, hogy megalapíts egy romániai céget akkor ez igaz is lehet, ha nem Mi segítenénk Neked. Mivel Nálunk a legtöbb kollégánk kétnyelvű, így a kommunikáció a partnereink között magyarul zajlik.',
    icon: AnnotationIcon
  },
  {
    name: 'Egyszerűsített adózás',
    description:
      'Ha ismerős számodra a KATA adózási rendszere, akkor itt nagyon hasonló lesz a helyzet. 3 havonta kiszámoljuk, hogy mekkora adókötelezettséged keletkezett, amit egy egyszerű átutalással el tudsz intézni.',
    icon: BriefcaseIcon
  },
  {
    name: 'Áfa mentes számlakiállítás',
    description:
      'Ha román céggel szeretnél kiállítani Forint alapú számlát Magyarországi partnernek (s a cég rendelkezik érvényes közösségi adószámmmal), akkor ezt megteheted akár 0% áfa tatartalommal is.',
    icon: ScaleIcon
  }
]
</script>
