<template>
  <!-- <button type="button" class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white border border-transparent rounded-md shadow-sm bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
    <MailIcon class="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
    Button text
  </button>
  <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
    <MailIcon class="w-5 h-5 mr-2 -ml-1" aria-hidden="true" />
    Button text
  </button>
  <button type="button" class="inline-flex items-center px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
    <MailIcon class="w-5 h-5 mr-3 -ml-1" aria-hidden="true" />
    Button text
  </button> -->
  <button type="button" class="inline-flex items-center px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
    <MailIcon class="w-5 h-5 mr-3 -ml-1" aria-hidden="true" />
    Button text
  </button>
</template>

<script>
import { MailIcon } from '@heroicons/vue/solid'

export default {
  name: "AtomButton",
  props: [],
  components: {
    MailIcon,
  },
}
</script>