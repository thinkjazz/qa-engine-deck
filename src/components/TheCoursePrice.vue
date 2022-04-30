<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="px-4 py-24 mx-auto bg-white max-w-7xl sm:px-6 lg:px-8">
    <h2 class="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">Сколько стоит курс?</h2>
    <p class="max-w-2xl mt-6 text-xl text-gray-500">Выбрать один из трёх или все три ступени</p>

    <!-- Tiers -->
    <div class="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
      <div v-for="tier in pricing.tiers" :key="tier.title" class="relative flex flex-col p-8 bg-white border border-gray-200 shadow-sm rounded-2xl">
        <div class="flex-1">
          <h3 class="text-xl font-semibold text-gray-900">{{ tier.title }}</h3>
          <p v-if="tier.mostPopular" class="absolute top-0 py-1.5 px-4 bg-emerald-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">Самый популярный выбор</p>
          <p class="flex items-baseline mt-4 text-gray-900">
            <span class="text-5xl font-extrabold tracking-tight">{{ tier.price }} ₽</span>
            <span class="ml-1 text-xl font-extrabold">{{ tier.frequency }}</span>
          </p>
          <p class="mt-6 text-gray-500">{{ tier.description }}</p>

          <!-- Feature list -->
          <ul role="list" class="mt-6 space-y-6">
            <li v-for="feature in tier.features" :key="feature" class="flex">
              <CheckIcon class="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true" />
              <span class="ml-3 text-gray-500">{{ feature }}</span>
            </li>
          </ul>
        </div>

        <a href="#" :class="[tier.mostPopular ? 'bg-emerald-500 text-white hover:bg-emerald-600' : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100', 'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium']">{{ tier.cta }}</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { CheckIcon } from '@heroicons/vue/outline'

const pricing = {
  tiers: [
    {
      title: 'Юнлинг',
      price: '19 000',
      frequency: 'за курс',
      description: 'Первый и начальный вариант обучения',
      features: ['Занятия в прямом эфире с возможностью задать вопросы преподавателям', 'Записи занятий с тайм-кодами, полезные ссылки к ним и домашние задания (без проверки)', 'Сертификат слушателя курса по окончании курса'],
      cta: 'Выбрать и записаться',
      mostPopular: false,
    },
    {
      title: 'Падаван',
      price: '28 000',
      frequency: 'за курс',
      description: 'Второй вариант c дополнительными опциями',
      features: [
        'Занятия в прямом эфире с возможностью задать вопросы преподавателям',
        'Записи занятий с тайм-кодами, полезные ссылки и домашние задания с проверкой и обратной связью',
        'Чат со студентами и преподавателями потока',
        'Консультации наставников и преподавателей при необходимости',
        'Участие в живых разборах ДЗ',
        'Сертификат участника по окончании курса (при успешной сдаче дипломного проекта)',
      ],
      cta: 'Выбрать и записаться',
      mostPopular: true,
    },
    {
      title: 'Джедай',
      price: '37 500',
      frequency: 'за курс',
      description: 'Третий вариант c расширенными опциями.',
      features: [
        'Занятия в прямом эфире с возможностью задать вопросы преподавателям',
        'Записи занятий с тайм-кодами, полезные ссылки и домашние задания с проверкой и обратной связью',
        'Чат со студентами и преподавателями потока',
        'Консультации наставников и преподавателей при необходимости',
        'Участие в живых разборах ДЗ',
        'Сертификат участника по окончании курса (при успешной сдаче дипломного проекта)',
        '+Карьерное развитие',

      ],
      cta: 'Выбрать и записаться',
      mostPopular: false,
    },
  ],
}

export default {
  components: {
    CheckIcon,
  },
  setup() {
    return {
      pricing,
    }
  },
}
</script>