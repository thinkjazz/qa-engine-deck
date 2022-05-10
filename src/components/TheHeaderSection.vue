<template>
  <div class="bg-white">
    <!-- Header -->
    <div class="relative pb-32 bg-gray-800">
      <div class="absolute inset-0">
        <img class="object-cover w-full h-full" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100" alt="" />
        <div class="absolute inset-0 bg-emerald-800 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div class="relative px-4 py-24 mx-auto max-w-7xl sm:py-32 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Сильное комьюнити</h1>
        <p class="max-w-3xl mt-6 text-xl text-gray-300">Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames. Dui, amet, nec sit pulvinar.</p>
      </div>
    </div>

    <!-- Overlapping cards -->
    <section class="relative z-10 px-4 pb-32 mx-auto -mt-32 max-w-7xl sm:px-6 lg:px-8" aria-labelledby="contact-heading">
      <h2 class="sr-only" id="contact-heading">Contact us</h2>
      <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
        <div v-for="link in supportLinks" :key="link.name" class="flex flex-col bg-white shadow-xl rounded-2xl">
          <div class="relative flex-1 px-6 pt-16 pb-8 md:px-8">
            <div class="absolute top-0 inline-block p-5 transform -translate-y-1/2 shadow-lg bg-emerald-600 rounded-xl">
              <component :is="link.icon" class="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h3 class="text-xl font-medium text-gray-900">{{ link.name }}</h3>
            <p class="mt-4 text-base text-gray-500">{{ link.description }}</p>
          </div>
          <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
            <a :href="link.href" class="text-base font-medium text-emerald-700 hover:text-emerald-600">Contact us<span aria-hidden="true"> &rarr;</span></a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { NewspaperIcon, PhoneIcon, SupportIcon } from '@heroicons/vue/outline'

const supportLinks = [
  {
    name: 'Sales',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: PhoneIcon,
  },
  {
    name: 'Technical Support',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: SupportIcon,
  },
  {
    name: 'Media Inquiries',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: NewspaperIcon,
  },
]

export default {
  setup() {
    return {
      supportLinks,
    }
  },
}
</script>