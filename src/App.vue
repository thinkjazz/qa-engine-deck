<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="fixed inset-0 z-40 flex md:hidden" @close="sidebarOpen = false">

        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
          enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
          leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>

        <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0" leave-to="-translate-x-full">
          <div class="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-white">
            <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0"
              enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
              <div class="absolute top-0 right-0 pt-2 -mr-12">
                <button type="button"
                  class="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  @click="sidebarOpen = false">
                  <span class="sr-only">Close sidebar</span>
                  <XIcon class="w-6 h-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </TransitionChild>

            <div class="flex items-center flex-shrink-0 px-4">
              <img class="w-auto h-8" src="./assets/logo.svg" alt="QA Engineer Deck" />
            </div>
            <div class="flex-1 h-0 mt-5 overflow-y-auto">
              <nav class="px-2 space-y-1">

                <a v-for="item in navigation" :key="item.name" :href="item.href"
                  :class="[item.current
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-2 py-2 text-base font-medium rounded-md']">

                  <component :is="item.icon"
                    :class="[item.current
                    ? 'text-gray-900'
                    : 'text-gray-400 group-hover:text-gray-500', 'mr-4 flex-shrink-0 h-6 w-6']"
                    aria-hidden="true" />
                  {{ item.name }}
                </a>
              </nav>
            </div>
          </div>
        </TransitionChild>
        <div class="flex-shrink-0 w-14" aria-hidden="true">
      <!-- Фиктивный элемент, заставляющий боковую панель сжиматься, чтобы вместить значок закрытия -->
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex flex-col flex-grow pt-5 overflow-y-auto bg-white border-r border-gray-200">
        <div class="flex items-center flex-shrink-0 px-4">
          <img class="w-auto h-8" src="./assets/logo.svg" alt="QA Engineer Deck" />
        </div>
        <div class="flex flex-col flex-grow mt-5">
          <nav class="flex-1 px-2 pb-4 space-y-1">
            <a v-for="item in navigation" :key="item.name" :href="item.href"
              :class="[item.current
              ? 'bg-gray-100 text-gray-900'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']">

              <component :is="item.icon"
                :class="[item.current
                ? 'text-emerald-400'
                : 'text-gray-800 group-hover:text-emerald-500', 'mr-3 flex-shrink-0 h-6 w-6']"
                aria-hidden="true" />
              {{ item.name }}
            </a>
          </nav>
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-1 md:pl-64">
      <div class="sticky top-0 z-10 flex flex-shrink-0 h-16 bg-white shadow">
        <button type="button"
          class="px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ring-emerald-400 md:hidden"
          @click="sidebarOpen = true">
          <span class="sr-only">Открыть боковую панель</span>
          <MenuAlt2Icon class="w-6 h-6" aria-hidden="true" />
        </button>

        <div class="flex justify-between flex-1 px-4">
          <div class="flex flex-1">
            <form class="flex w-full md:ml-0" action="#" method="GET">
              <label for="search-field" class="sr-only">Поиск</label>

              <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                  <SearchIcon class="w-5 h-5 fill-emerald-400" aria-hidden="true" />

                </div>
              <input id="search-field" class="block w-full h-full py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 border-transparent focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm" placeholder="Поиск" type="search" name="search" />

           <!-- <input id="search-field"
                  class="block w-full h-full py-2 pl-10 pr-3 text-sm font-semibold text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 sm:text-sm"
                  placeholder="Найти свою задачу" type="search" name="Найти свою задачу" /> -->

                 <!-- <input id="search" name="search" class="block w-full py-2 pl-8 pr-3 text-sm placeholder-gray-500 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 sm:text-sm" placeholder="Search" type="search" /> -->


              </div>
            </form>
          </div>
          <div class="flex items-center ml-4 md:ml-6">
            <button type="button"
              class="p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400">
              <span class="sr-only">Просмотр уведомлений</span>
              <BellIcon class="w-6 h-6 fill-gray-900" aria-hidden="true" />
            </button>

            <!-- Profile dropdown -->
            <Menu as="div" class="relative ml-3">
              <div>
                <MenuButton
                  class="flex items-center max-w-xs text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400">
                  <span class="sr-only">Открыть меню пользователя</span>
                  <img class="w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="" />
                </MenuButton>
              </div>
              <transition enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0">
                <MenuItems
                  class="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                  <a :href="item.href"
                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{ item.name }}</a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>

      <main class="flex-1">
        <div class="py-6">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <h1 class="text-2xl font-semibold text-gray-900">Борда</h1>
          </div>
          <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <!-- Replace with your content -->
            <div class="py-4">
              <div class="border-4 border-gray-200 border-dashed rounded-lg h-96" />
            </div>
            <!-- /End replace -->
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'
import {
  Dialog,
  DialogOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'

import {
  AcademicCapIcon,
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  ChartPieIcon,
  CogIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UserIcon,
  UsersIcon,
  XIcon,
} from '@heroicons/vue/solid'

import { SearchIcon } from '@heroicons/vue/solid'

const navigation = [
  { name: 'Глагна', href: '#', icon: HomeIcon, current: false },
  { name: 'Борда', href: '#', icon: ChartPieIcon, current: true },
  { name: 'Команда', href: '#', icon: UsersIcon, current: false },
  { name: 'Проекты', href: '#', icon: FolderIcon, current: false },
  { name: 'Активность', href: '#', icon: AcademicCapIcon, current: false },
  { name: 'Календарь', href: '#', icon: CalendarIcon, current: false },
  { name: 'Почта', href: '#', icon: InboxIcon, current: false },
  { name: 'Настройки', href: '#', icon: CogIcon, current: false },
  { name: 'Отчёты', href: '#', icon: ChartBarIcon, current: false },
]
const userNavigation = [
  { name: 'Профиль', href: '#' },
  { name: 'Настройки', href: '#' },
  { name: 'Выход', href: '#' },
]

export default {
  components: {
    Dialog,
    DialogOverlay,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    BellIcon,
    MenuAlt2Icon,
    SearchIcon,
    XIcon,
  },
  setup() {
    const sidebarOpen = ref(false)

    return {
      navigation,
      userNavigation,
      sidebarOpen,
    }
  },
}


</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
