<template>
  <button type="button" class="inline-flex items-center px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
    <PlusIcon class="w-5 h-5 mr-3 -ml-1" aria-hidden="true" />
 {{name}}
  <slot></slot>
  </button>
</template>

<script lang="ts">
import { PlusIcon } from '@heroicons/vue/solid'

export default {
  data() {
    return {
      name: "Добавить проект"
    }
  },
  name: "BaseButton",
  props: [],
  components: {
    PlusIcon,
  },
}
</script>