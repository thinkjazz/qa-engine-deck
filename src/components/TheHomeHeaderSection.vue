<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-gray-50">
    <Popover class="relative bg-white shadow">
      <div class="px-4 mx-auto max-w-7xl sm:px-6">
        <div class="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span class="sr-only">QA Engineer | QA.guru</span>
              <img class="w-auto h-8 sm:h-10" src="../assets/qa-guru-full-logo.svg" alt="" />

            </a>
          </div>
          <div class="-my-2 -mr-2 md:hidden">
            <PopoverButton class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-400">
              <span class="sr-only">Open menu</span>
              <MenuIcon class="w-6 h-6" aria-hidden="true" />
            </PopoverButton>
          </div>
          <PopoverGroup as="nav" class="hidden space-x-10 md:flex">
            <Popover class="relative" v-slot="{ open }">
              <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400']">
                <span>Курсы</span>
                <ChevronDownIcon :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
              </PopoverButton>

              <transition enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y-1 opacity-0" enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-150 ease-in" leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0">
                <PopoverPanel class="absolute z-10 w-screen max-w-md px-2 mt-3 -ml-4 transform sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                  <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div class="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                      <a v-for="item in features" :key="item.name" :href="item.href" class="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                        <component :is="item.icon" class="flex-shrink-0 w-6 h-6 text-emerald-600" aria-hidden="true" />
                        <div class="ml-4">
                          <p class="text-base font-medium text-gray-900">
                            {{ item.name }}
                          </p>
                          <p class="mt-1 text-sm text-gray-500">
                            {{ item.description }}
                          </p>
                        </div>
                      </a>
                    </div>
                    <div class="px-5 py-5 space-y-6 bg-gray-50 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                      <div v-for="item in callsToAction" :key="item.name" class="flow-root">
                        <a :href="item.href" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100">
                          <component :is="item.icon" class="flex-shrink-0 w-6 h-6 text-gray-400" aria-hidden="true" />
                          <span class="ml-3">{{ item.name }}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>

            <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> Цены </a>
            <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> Преподаватели </a>

            <Popover class="relative" v-slot="{ open }">
              <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500']">
                <span>Остальное</span>
                <ChevronDownIcon :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
              </PopoverButton>

              <transition enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y-1 opacity-0" enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-150 ease-in" leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0">
                <PopoverPanel class="absolute z-10 w-screen max-w-md px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
                  <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div class="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                      <a v-for="item in resources" :key="item.name" :href="item.href" class="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                        <component :is="item.icon" class="flex-shrink-0 w-6 h-6 text-emerald-600" aria-hidden="true" />
                        <div class="ml-4">
                          <p class="text-base font-medium text-gray-900">
                            {{ item.name }}
                          </p>
                          <p class="mt-1 text-sm text-gray-500">
                            {{ item.description }}
                          </p>
                        </div>
                      </a>
                    </div>
                    <div class="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                      <div>
                        <h3 class="text-sm font-medium tracking-wide text-gray-500 uppercase">Последние записи</h3>
                        <ul role="list" class="mt-4 space-y-4">
                          <li v-for="item in recentPosts" :key="item.id" class="text-base truncate">
                            <a :href="item.href" class="font-medium text-gray-900 hover:text-gray-700">
                              {{ item.name }}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="mt-5 text-sm">
                        <a href="#" class="font-medium text-emerald-600 hover:text-emerald-500"> Посмотреть все сообщения <span aria-hidden="true">&rarr;</span></a>
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
          </PopoverGroup>
          <div class="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
              <router-link to="/login" class="text-base font-medium text-gray-500 whitespace-nowrap hover:text-gray-900">Войти</router-link>
            <a href="#" class="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-emerald-500 whitespace-nowrap hover:bg-emerald-700"> Записаться </a>
          </div>
        </div>
      </div>

      <transition enter-active-class="duration-200 ease-out" enter-from-class="scale-95 opacity-0" enter-to-class="scale-100 opacity-100" leave-active-class="duration-100 ease-in" leave-from-class="scale-100 opacity-100" leave-to-class="scale-95 opacity-0">
        <PopoverPanel focus class="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform md:hidden">
          <div class="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
            <div class="px-5 pt-5 pb-6">
              <div class="flex items-center justify-between">
                <div>
                  <img class="w-auto h-8" src="../assets/qa-chip-logo.svg" alt="QA" />
                </div>
                <div class="-mr-2">
                  <PopoverButton class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500">
                    <span class="sr-only">Close menu</span>
                    <XIcon class="w-6 h-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="mt-6">
                <nav class="grid gap-y-8">
                  <a v-for="item in features" :key="item.name" :href="item.href" class="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50">
                    <component :is="item.icon" class="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true" />
                    <span class="ml-3 text-base font-medium text-gray-900">
                      {{ item.name }}
                    </span>
                  </a>
                </nav>
              </div>
            </div>
            <div class="px-5 py-6 space-y-6">
              <div class="grid grid-cols-2 gap-y-4 gap-x-8">
                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Pricing </a>

                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Docs </a>
                <a v-for="item in resources" :key="item.name" :href="item.href" class="text-base font-medium text-gray-900 hover:text-gray-700">
                  {{ item.name }}
                </a>
              </div>
              <div>
                <a href="#" class="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-emerald-500 hover:bg-emerald-700"> Записаться </a>
                <p class="mt-6 text-base font-medium text-center text-gray-500">
                  Existing customer?
                  <a href="#" class="text-emerald-500 hover:text-emerald-500"> Войти </a>
                </p>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>

    <main class="lg:relative">
      <div class="w-full pt-16 pb-20 mx-auto text-center max-w-7xl lg:py-48 lg:text-left">
        <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span class="block xl:inline">Школа инженеров</span>
            {{ ' ' }}
            <span class="block text-emerald-500 xl:inline">по автоматизации тестирования</span>
          </h1>
          <p class="max-w-md mx-auto mt-3 text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">Научим разрабатывать автотесты и выстраивать процессы в востребованном стеке</p>
          <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <a href="#" class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md bg-emerald-500 hover:bg-emerald-700 md:py-4 md:text-lg md:px-10"> Начать обучение </a>
            </div>
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a href="#" class="flex items-center justify-center w-full px-8 py-3 text-base font-medium bg-white border border-transparent rounded-md text-emerald-500 hover:bg-gray-50 md:py-4 md:text-lg md:px-10"> Посмотреть программу </a>
            </div>
          </div>
        </div>
      </div>
      <div class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <img class="absolute inset-0 object-cover w-full h-full" src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />
      </div>
    </main>
  </div>
</template>

<script>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/vue/outline'
import { ChevronDownIcon } from '@heroicons/vue/solid'

const features = [
  {
    name: 'Выстраивание инфраструктуры',
    href: '#',
    description: 'Узнаете как решать инфраструктурные задачи для встраивания запуска автотестов в CI/CD, контейнеризации браузеров и мобильных устройств.',
    icon: ChartBarIcon,
  },
  {
    name: 'Разработка автотестов',
    href: '#',
    description: 'SНаучитесь создавать скрипты, которые имитируют поведение человека для автоматической проверки работы продукта.',
    icon: CursorClickIcon,
  },
  { name: 'Этичный хакинг', href: '#', description: "Освоите тесты на проникновение", icon: ShieldCheckIcon },
  {
    name: 'Визуализация результатов тестирования',
    href: '#',
    description: "В этом блоке вы освоите навык формирования отчётности понятной вам и заказчику и сможете получать уведомления в мессенджеры о статусе ваших тестов.",
    icon: ViewGridIcon,
  },
  {
    name: 'Тест-менеджмент',
    href: '#',
    description: 'Сможете "по — взрослому" управлять большим объёмом тестов в тест-менеджмент системе, поддерживающей ручные и автотесты, во взаимодействии с CI/CD инструментами и таск-трекерами',
    icon: RefreshIcon,
  },
]
const callsToAction = [
  { name: 'Вебинары', href: '#', icon: PlayIcon },
  { name: 'Записаться', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Справочный центр',
    description: 'Получите ответы на все свои вопросы на наших форумах или обратитесь в службу поддержки.',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Гайды',
    description: 'Узнайте, как максимально использовать нашу платформу, чтобы получить максимальную отдачу от нее',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'События',
    description: 'Узнайте, какие встречи и другие мероприятия мы планируем провести рядом с вами.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Безопасность', description: 'Поймите, как серьезно мы относимся к вашей конфиденциальности.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
  { id: 1, name: 'Повысьте свой уровень мастерства', href: '#' },
  { id: 2, name: 'Как использовать ваши навыки, чтобы получить работу мечты', href: '#' },
  { id: 3, name: 'Улучшите свой опыт QA инженера', href: '#' },
]

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      features,
      callsToAction,
      resources,
      recentPosts,
    }
  },
}
</script>