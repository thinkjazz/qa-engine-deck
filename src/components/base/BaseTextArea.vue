<template>
  <form action="#" class="relative">
    <div class="overflow-hidden border border-gray-300 rounded-lg shadow-sm focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-emerald-500">
      <label for="title" class="sr-only">Название</label>
      <input type="text" name="title" id="title" class="block w-full border-0 pt-2.5 text-lg font-medium placeholder-gray-500 focus:ring-0" placeholder="Title" />
      <label for="description" class="sr-only">Описание</label>
      <textarea rows="2" name="description" id="description" class="block w-full py-0 placeholder-gray-500 border-0 resize-none focus:ring-0 sm:text-sm" placeholder="Write a description..." />

      <!-- Spacer element to match the height of the toolbar -->
      <div aria-hidden="true">
        <div class="py-2">
          <div class="h-9" />
        </div>
        <div class="h-px" />
        <div class="py-2">
          <div class="py-px">
            <div class="h-9" />
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 inset-x-px">
      <!-- Actions: These are just examples to demonstrate the concept, replace/wire these up however makes sense for your project. -->
      <div class="flex justify-end px-2 py-2 space-x-2 flex-nowrap sm:px-3">
        <Listbox as="div" v-model="assigned" class="flex-shrink-0">
          <ListboxLabel class="sr-only"> Назначить </ListboxLabel>
          <div class="relative">
            <ListboxButton class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 rounded-full bg-gray-50 whitespace-nowrap hover:bg-gray-100 sm:px-3">
              <UserCircleIcon v-if="assigned.value === null" class="flex-shrink-0 w-5 h-5 text-gray-300 sm:-ml-1" aria-hidden="true" />

              <img v-else :src="assigned.avatar" alt="" class="flex-shrink-0 w-5 h-5 rounded-full" />

              <span :class="[assigned.value === null ? '' : 'text-gray-900', 'hidden truncate sm:ml-2 sm:block']">{{ assigned.value === null ? 'Assign' : assigned.name }}</span>
            </ListboxButton>

            <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
              <ListboxOptions class="absolute right-0 z-10 py-3 mt-1 overflow-auto text-base bg-white rounded-lg shadow w-52 max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <ListboxOption as="template" v-for="assignee in assignees" :key="assignee.value" :value="assignee" v-slot="{ active }">
                  <li :class="[active ? 'bg-gray-100' : 'bg-white', 'cursor-default select-none relative py-2 px-3']">
                    <div class="flex items-center">
                      <img v-if="assignee.avatar" :src="assignee.avatar" alt="" class="flex-shrink-0 w-5 h-5 rounded-full" />
                      <UserCircleIcon v-else class="flex-shrink-0 w-5 h-5 text-gray-400" aria-hidden="true" />
                      <span class="block ml-3 font-medium truncate">
                        {{ assignee.name }}
                      </span>
                    </div>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>

        <Listbox as="div" v-model="labelled" class="flex-shrink-0">
          <ListboxLabel class="sr-only"> Добавить ярлык </ListboxLabel>
          <div class="relative">
            <ListboxButton class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 rounded-full bg-gray-50 whitespace-nowrap hover:bg-gray-100 sm:px-3">
              <TagIcon :class="[labelled.value === null ? 'text-gray-300' : 'text-gray-500', 'flex-shrink-0 h-5 w-5 sm:-ml-1']" aria-hidden="true" />
              <span :class="[labelled.value === null ? '' : 'text-gray-900', 'hidden truncate sm:ml-2 sm:block']">{{ labelled.value === null ? 'Label' : labelled.name }}</span>
            </ListboxButton>

            <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
              <ListboxOptions class="absolute right-0 z-10 py-3 mt-1 overflow-auto text-base bg-white rounded-lg shadow w-52 max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <ListboxOption as="template" v-for="label in labels" :key="label.value" :value="label" v-slot="{ active }">
                  <li :class="[active ? 'bg-gray-100' : 'bg-white', 'cursor-default select-none relative py-2 px-3']">
                    <div class="flex items-center">
                      <span class="block font-medium truncate">
                        {{ label.name }}
                      </span>
                    </div>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>

        <Listbox as="div" v-model="dated" class="flex-shrink-0">
          <ListboxLabel class="sr-only"> Добавить срок выполнения </ListboxLabel>
          <div class="relative">
            <ListboxButton class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 rounded-full bg-gray-50 whitespace-nowrap hover:bg-gray-100 sm:px-3">
              <CalendarIcon :class="[dated.value === null ? 'text-gray-300' : 'text-gray-500', 'flex-shrink-0 h-5 w-5 sm:-ml-1']" aria-hidden="true" />
              <span :class="[dated.value === null ? '' : 'text-gray-900', 'hidden truncate sm:ml-2 sm:block']">{{ dated.value === null ? 'Due date' : dated.name }}</span>
            </ListboxButton>

            <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
              <ListboxOptions class="absolute right-0 z-10 py-3 mt-1 overflow-auto text-base bg-white rounded-lg shadow w-52 max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <ListboxOption as="template" v-for="dueDate in dueDates" :key="dueDate.value" :value="dueDate" v-slot="{ active }">
                  <li :class="[active ? 'bg-gray-100' : 'bg-white', 'cursor-default select-none relative py-2 px-3']">
                    <div class="flex items-center">
                      <span class="block font-medium truncate">
                        {{ dueDate.name }}
                      </span>
                    </div>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
      </div>
      <div class="flex items-center justify-between px-2 py-2 space-x-3 border-t border-gray-200 sm:px-3">
        <div class="flex">
          <button type="button" class="inline-flex items-center px-3 py-2 -my-2 -ml-2 text-left text-gray-400 rounded-full group">
            <PaperClipIcon class="w-5 h-5 mr-2 -ml-1 group-hover:text-gray-500" aria-hidden="true" />
            <span class="text-sm italic text-gray-500 group-hover:text-gray-600">Прикрепить файл</span>
          </button>
        </div>
        <div class="flex-shrink-0">
          <button type="submit" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">Create</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CalendarIcon, PaperClipIcon, TagIcon, UserCircleIcon } from '@heroicons/vue/solid'

const assignees = [
  { name: 'Unassigned', value: null },
  {
    name: 'Wade Cooper',
    value: 'wade-cooper',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More items...
]
const labels = [
  { name: 'Unlabelled', value: null },
  { name: 'Engineering', value: 'engineering' },
  // More items...
]
const dueDates = [
  { name: 'No due date', value: null },
  { name: 'Today', value: 'today' },
  // More items...
]

export default {
  components: {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    CalendarIcon,
    PaperClipIcon,
    TagIcon,
    UserCircleIcon,
  },
  setup() {
    const assigned = ref(assignees[0])
    const labelled = ref(labels[0])
    const dated = ref(dueDates[0])

    return {
      assignees,
      labels,
      dueDates,
      assigned,
      labelled,
      dated,
    }
  },
}
</script>