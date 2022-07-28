<template>
  <div class="bg-white">
    <Popover as="header" class="relative">
      <div class="bg-gray-50">
        <nav
          class="relative max-w-7xl mx-auto flex items-center justify-between py-10 px-6 xl:px-8"
          aria-label="Global"
        >
          <div class="flex items-center flex-1 justify-between">
            <div class="flex items-center justify-between w-full lg:w-auto">
              <a href="#">
                <span class="sr-only">Workflow</span>
                <img
                  class="h-8 w-auto sm:h-10"
                  src="@/assets/logo_transparent_cropped.png"
                  alt=""
                />
              </a>
              <div class="-mr-2 flex items-center lg:hidden">
                <PopoverButton
                  class="bg-gray-100 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-200 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-teal-500"
                >
                  <span class="sr-only">Open main menu</span>
                  <MenuIcon class="h-6 w-6 fill-gray-400" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="hidden space-x-10 lg:flex lg:ml-10">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="text-lg font-medium text-gray-900 hover:text-gray-500"
                >{{ item.name }}</a
              >
            </div>
            <div />
          </div>
        </nav>
      </div>

      <transition
        enter-active-class="duration-150 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <PopoverPanel
          focus
          class="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top lg:hidden"
        >
          <div
            class="rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
          >
            <div class="px-5 pt-4 flex items-center justify-between">
              <div>
                <img
                  class="h-8 w-auto"
                  src="@/assets/logo_transparent_cropped.png"
                  alt=""
                />
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
                >
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="pt-5 pb-6">
              <div class="px-2 space-y-1">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                  >{{ item.name }}</a
                >
              </div>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'

const navigation = [
  { name: 'Főoldal', href: '/' },
  { name: 'Árazás', href: '/pricing' },
  { name: 'Kapcsolat', href: '/contact' }
]
</script>

<style lang="scss">
.router-link-active {
  @apply bg-slate-200;
}
</style>
