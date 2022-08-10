<template>
  <div class="bg-white">
    <main class="overflow-hidden">
      <!-- Header -->
      <div class="bg-gray-50">
        <div class="py-20">
          <div
            class="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8"
          >
            <h1
              class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
            >
              Lépj velünk kapcsolatba
            </h1>
            <p class="mt-10 text-xl text-gray-500 max-w-3xl">
              Ha úgy érzed, hogy tudnánk Neked segíteni, vagy csak maradt még
              benned pár megválaszolatlan kérdés, írj Nekünk bátran! Kollégáink
              igyekeznek mihamarabb választ adni.
            </p>
          </div>
        </div>
      </div>

      <!-- Contact section -->
      <section class="relative bg-white" aria-labelledby="contact-heading">
        <div class="absolute w-full h-1/2 bg-gray-50" aria-hidden="true" />
        <!-- Decorative dot pattern -->
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <svg
            class="absolute z-0 top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
            />
          </svg>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="relative bg-white shadow-xl">
            <h2 id="contact-heading" class="sr-only">Contact us</h2>

            <div
              class="grid grid-cols-1 lg:grid-cols-3"
              :class="{ 'lg:grid-cols-2': isEmailSent }"
            >
              <!-- Contact information -->
              <div
                class="relative overflow-hidden py-10 px-6 bg-gradient-to-b from-teal-500 to-teal-600 sm:px-10 xl:p-12"
              >
                <!-- Decorative angle backgrounds -->
                <div
                  class="absolute inset-0 pointer-events-none sm:hidden"
                  aria-hidden="true"
                >
                  <svg
                    class="absolute inset-0 w-full h-full"
                    width="343"
                    height="388"
                    viewBox="0 0 343 388"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                      fill="url(#linear1)"
                      fill-opacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear1"
                        x1="254.553"
                        y1="107.554"
                        x2="961.66"
                        y2="814.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#fff" />
                        <stop offset="1" stop-color="#fff" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                  aria-hidden="true"
                >
                  <svg
                    class="absolute inset-0 w-full h-full"
                    width="359"
                    height="339"
                    viewBox="0 0 359 339"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                      fill="url(#linear2)"
                      fill-opacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear2"
                        x1="192.553"
                        y1="28.553"
                        x2="899.66"
                        y2="735.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#fff" />
                        <stop offset="1" stop-color="#fff" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                  aria-hidden="true"
                >
                  <svg
                    class="absolute inset-0 w-full h-full"
                    width="160"
                    height="678"
                    viewBox="0 0 160 678"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                      fill="url(#linear3)"
                      fill-opacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear3"
                        x1="192.553"
                        y1="325.553"
                        x2="899.66"
                        y2="1032.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#fff" />
                        <stop offset="1" stop-color="#fff" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 class="text-lg font-medium text-white">Elérhetőségek</h3>
                <p class="mt-6 text-base text-teal-50 max-w-3xl">
                  A hétvége folyamán ezen az e-mail címünkön tudsz majd elérni
                  Minket. Megértésed köszönjük szépen!
                </p>
                <dl class="mt-8 space-y-6">
                  <!-- <dt><span class="sr-only">Telefonszám</span></dt>
                  <dd class="flex text-base text-teal-50">
                    <PhoneIcon
                      class="flex-shrink-0 w-6 h-6 text-teal-200"
                      aria-hidden="true"
                    />
                    <span class="ml-3">TELEFONSZÁM</span>
                  </dd> -->
                  <dt><span class="sr-only">Email</span></dt>
                  <dd class="flex text-base text-teal-50">
                    <MailIcon
                      class="flex-shrink-0 w-6 h-6 text-teal-200"
                      aria-hidden="true"
                    />
                    <span class="ml-3">katacsere.info@gmail.com</span>
                  </dd>
                </dl>
              </div>

              <!-- Contact form -->
              <div
                v-if="!isEmailSent"
                class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12"
              >
                <h3 class="text-lg font-medium text-gray-900">
                  Küldj egy üzenetet
                </h3>
                <form
                  class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                  @submit.prevent="sendEmail()"
                >
                  <div>
                    <label
                      for="first-name"
                      class="block text-sm font-medium text-gray-900"
                      >Keresztnév</label
                    >
                    <div
                      class="mt-1"
                      :class="{ error: v$.firstName.$errors.length }"
                    >
                      <input
                        id="first-name"
                        v-model="form.firstName"
                        placeholder="Zoltán"
                        type="text"
                        name="first-name"
                        autocomplete="given-name"
                        class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
                      />
                      <div v-if="v$.firstName.$error" class="input-errors">
                        <div class="error-msg">
                          {{ v$.firstName.$errors[0].$message }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      for="last-name"
                      class="block text-sm font-medium text-gray-900"
                      >Vezetéknév</label
                    >
                    <div
                      class="mt-1"
                      :class="{ error: v$.lastName.$errors.length }"
                    >
                      <input
                        id="last-name"
                        v-model="form.lastName"
                        placeholder="Nagy"
                        type="text"
                        name="last-name"
                        autocomplete="family-name"
                        class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
                      />
                      <div v-if="v$.lastName.$error" class="input-errors">
                        <div class="error-msg">
                          {{ v$.lastName.$errors[0].$message }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      for="email"
                      class="block text-sm font-medium text-gray-900"
                      >Email</label
                    >
                    <div
                      class="mt-1"
                      :class="{ error: v$.email.$errors.length }"
                    >
                      <input
                        id="email"
                        v-model="form.email"
                        placeholder="email_cím@gmail.com"
                        name="email"
                        type="email"
                        autocomplete="email"
                        class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
                      />
                      <div v-if="v$.email.$error" class="input-errors">
                        <div class="error-msg">
                          {{ v$.email.$errors[0].$message }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between">
                      <label
                        for="phone"
                        class="block text-sm font-medium text-gray-900"
                        >Telefonszám</label
                      >
                      <span id="phone-optional" class="text-sm text-gray-500"
                        >Opcionális</span
                      >
                    </div>
                    <div class="mt-1">
                      <input
                        id="phone"
                        v-model="form.phoneNumber"
                        placeholder="20 23 18 412"
                        type="text"
                        name="phone"
                        autocomplete="tel"
                        class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
                        aria-describedby="phone-optional"
                      />
                    </div>
                  </div>
                  <div class="sm:col-span-2">
                    <label
                      for="subject"
                      class="block text-sm font-medium text-gray-900"
                      >Tárgy</label
                    >
                    <div
                      class="mt-1"
                      :class="{ error: v$.subject.$errors.length }"
                    >
                      <input
                        id="subject"
                        v-model="form.subject"
                        placeholder="Érdeklődés cégalapítással kapcsolatban"
                        type="text"
                        name="subject"
                        class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
                      />

                      <div v-if="v$.subject.$error" class="input-errors">
                        <div class="error-msg">
                          {{ v$.subject.$errors[0].$message }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sm:col-span-2">
                    <div class="flex justify-between">
                      <label
                        for="message"
                        class="block text-sm font-medium text-gray-900"
                        >Üzenet</label
                      >
                      <span id="message-max" class="text-sm text-gray-500"
                        >Max. 1000 karakter</span
                      >
                    </div>
                    <div
                      class="mt-1"
                      :class="{ error: v$.message.$errors.length }"
                    >
                      <textarea
                        id="message"
                        v-model="form.message"
                        placeholder="Kezdj el írni..."
                        name="message"
                        rows="4"
                        class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-teal-500 focus:border-teal-500 border border-gray-300 rounded-md"
                        aria-describedby="message-max"
                      />
                      <div v-if="v$.message.$error" class="input-errors">
                        <div class="error-msg">
                          {{ v$.message.$errors[0].$message }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sm:col-span-2 sm:flex sm:justify-end">
                    <input
                      v-if="!isEmailSendingInProgress"
                      value="Küldés"
                      type="submit"
                      class="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-500 hover:bg-teal-600 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:w-auto cursor-pointer"
                    />
                    <div
                      v-else
                      class="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-500 outline-none sm:w-auto cursor-not-allowed"
                    >
                      <div class="lds-hourglass" />
                    </div>
                  </div>
                </form>
              </div>
              <div
                v-else
                class="flex justify-center items-center min-h-[50vh] w-full px-10"
              >
                <h3 class="text-teal-500 text-2xl">
                  <p>Köszönjük a megkeresést!</p>
                  <br />
                  <p>
                    Az e-mailt megkaptuk, s nemsokára fel fogjuk venni Veled a
                    kapcsolatot!
                  </p>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr class="mx-auto max-w-md border border-teal-500 my-20" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { MailIcon, PhoneIcon } from '@heroicons/vue/outline'
import useVuelidate from '@vuelidate/core'
import {
  email,
  helpers,
  maxLength,
  minLength,
  required
} from '@vuelidate/validators'
import emailjs from 'emailjs-com'
import { computed, reactive, ref } from 'vue'

const isEmailSent = ref(false)
const isEmailSendingInProgress = ref(false)

const form = reactive({
  lastName: '',
  firstName: '',
  email: '',
  phoneNumber: '',
  subject: '',
  message: ''
})

const rules = computed(() => {
  return {
    firstName: {
      required: helpers.withMessage(
        'A "Keresztnév" mező kitöltése kötelező!',
        required
      )
    },
    lastName: {
      required: helpers.withMessage(
        'A "Vezetéknév" mező kitöltése kötelező!',
        required
      )
    },
    email: {
      required: helpers.withMessage(
        'Az "Email" mező kitöltése kötelező!',
        required
      ),
      email: helpers.withMessage('Helytelen e-mail címet adtál meg!', email)
    },
    subject: {
      required: helpers.withMessage(
        'A "Tárgy" mező kitöltése kötelező!',
        required
      )
    },
    message: {
      required: helpers.withMessage(
        'Az "Üzenet" mező kitöltése kötelező!',
        required
      ),
      minLengthValue: helpers.withMessage(
        'Legalább 10 karaktert meg kell adnod!',
        minLength(10)
      ),
      maxLengthValue: helpers.withMessage(
        'Maximum 1000 karaktert adhatsz meg!',
        maxLength(1000)
      )
    }
  }
})

const v$ = useVuelidate(rules, form)

const sendEmail = async () => {
  v$.value.$validate()

  if (!v$.value.$error) {
    try {
      isEmailSendingInProgress.value = true

      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_last_name: form.lastName,
          from_first_name: form.firstName,
          subject: form.subject,
          email: form.email,
          phone_number: form.phoneNumber,
          message: form.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY_ID
      )
      console.log(
        '[%s][%s] Ez e-mail sikeresen el lett küldve!',
        response.status,
        response.text
      )
      resetFields()
      isEmailSent.value = true
      isEmailSendingInProgress.value = false
    } catch (error) {
      console.log('Hiba történt! Kérlek próbáld újra.', error)
      isEmailSendingInProgress.value = false
    }
  }
}

const resetFields = () => {
  form.lastName = ''
  form.firstName = ''
  form.email = ''
  form.phoneNumber = ''
  form.subject = ''
  form.message = ''
}
</script>

<style lang="scss" scoped>
.error {
  input {
    @apply focus:border-red-500 focus:ring-red-500 border-red-500 focus:outline-none;
  }
  .error-msg {
    @apply flex justify-start mt-1 text-red-500 font-black;
  }
}

.lds-hourglass {
  display: inline-block;
  position: relative;
}
.lds-hourglass:after {
  content: ' ';
  display: block;
  border-radius: 50%;
  box-sizing: border-box;
  border: 12px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-hourglass 1.2s infinite;
}
@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}
</style>
