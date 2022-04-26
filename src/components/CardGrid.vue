<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <li v-for="ticket in tickets" :key="ticket.id" class="col-span-1 bg-white divide-y divide-gray-200 rounded-lg shadow">
      <div class="flex items-center justify-between w-full p-6 space-x-6">
        <div class="flex-1 truncate">
          <div class="flex items-center space-x-3">
            <h3 class="text-sm font-medium text-gray-900 truncate">{{ ticket.name }}</h3>
            <span class="flex-shrink-0 inline-block px-2 py-0.5 text-gray-900 text-xs font-medium bg-amber-300 rounded-full">{{ ticket.role }}</span>
          </div>
          <p class="mt-1 text-sm text-gray-500 truncate">{{ ticket.description }}</p>
        </div>

      </div>
      <div>
        <div class="flex -mt-px divide-x divide-gray-200">
          <div class="flex flex-1 w-0">
           <TicketIcon class="w-5 h-5 text-rose-500" aria-hidden="true" />
           <PencilIcon class="w-5 h-5 text-gray-800" aria-hidden="true" />
            <a :href="`#`" class="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border border-transparent rounded-bl-lg hover:text-gray-500">
              <img class="flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full" :src="ticket.imageUrl" alt="" />
              <span class="ml-3"></span>
            </a>

          </div>
          <div class="flex flex-1 w-0 -ml-px">
            <a :href="`#`" class="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium text-gray-700 border border-transparent rounded-br-lg hover:text-gray-500">

              <span class="ml-3">Теги</span>
            </a>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">

import { TicketIcon, PencilIcon } from '@heroicons/vue/solid'

const tickets = [
  {
    id: '1',
    name: 'Проверить scss и анальни 😝',
    description: `Существует Rubу wrapper запустить и собрать, то как работают препроцессоры.
    Проверять надо с помощью анальни инструмента или типа того.`,
    list: [],
    isThereListOfSteps: false,
    imageTicket: '',
    isHasImage: false,
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // {
  //   name: 'John Smith',
  //   title: 'Dynamic Branding Architect',
  //   description: '',
  //   role: 'Mentor',
  //   email: '',
  //   telephone: '+1-202-555-0171',
  //   imageUrl:
  //      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  // },
  // {
  //   name: 'James Lewis',
  //   title: 'Dynamic Branding Architect',
  //   description: '',
  //   role: 'Mentor',
  //   email: '',
  //   telephone: '+1-202-555-0172',
  //   imageUrl:
  //      'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  // },
  // {
  //   name: 'Theresa Webb',
  //   title: 'Dynamic Branding Architect',
  //   description: '',
  //   role: 'Admin',
  //   email: '',
  //   telephone: '+1-202-555-0171',
  //   imageUrl:
  //      'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  // },
  // {
  //   name: 'May Jensen',
  //   title: 'Dynamic Branding Architect',
  //   description: '',
  //   role: 'Mentor',
  //   email: '',
  //   telephone: '+1-202-555-0172',
  //   imageUrl:
  //      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  // },
  // {
  //   name: 'Jane Cooper',
  //   title: 'Regional Paradigm Technician',
  //   description: '',
  //   role: 'Mentor',
  //   email: '',
  //   telephone: '+1-202-555-0174',
  //   imageUrl:
  //      'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  // },
]

export default {
  components: {
    TicketIcon,
    PencilIcon,
  },
  setup() {
    return {
      tickets,
    }
  },
}
</script>