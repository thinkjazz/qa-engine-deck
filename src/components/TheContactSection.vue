<template>
  <div class="px-4 py-16 overflow-hidden bg-white sm:px-6 lg:px-8 lg:py-24">
    <div class="relative max-w-xl mx-auto">
      <svg class="absolute transform translate-x-1/2 left-full" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
        <defs>
          <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
      </svg>
      <svg class="absolute bottom-0 transform -translate-x-1/2 right-full" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
        <defs>
          <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
      </svg>
      <div class="text-center">
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Записаться на вводное занятие 18-го мая 2022</h2>
        <p class="mt-4 text-lg leading-6 text-gray-500">После заполнения формы вам придёт письмо с инструкциями для посещения вводного урока и ответы на популярные вопросы, также ссылка на чат школы</p>
      </div>
      <div class="mt-12">
        <form action="#" method="POST" class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <!-- <div>
            <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
            <div class="mt-1">
              <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500" />
            </div>
          </div> -->
          <!-- <div>
            <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
            <div class="mt-1">
              <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500" />
            </div>
          </div> -->
          <div class="sm:col-span-2">
            <label for="first-name" class="block text-xl font-medium text-gray-700">Имя</label>
            <div class="mt-1">
              <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="email" class="block text-xl font-medium text-gray-700">Email</label>
            <div class="mt-1">
              <input id="email" name="email" type="email" autocomplete="email" class="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="phone-number" class="block text-sm font-medium text-gray-700">Ваш телефон</label>
            <div class="relative mt-1 rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 flex items-center">
                <label for="country" class="sr-only">Страна</label>
                <select id="country" name="country" class="h-full py-0 pl-4 pr-8 text-gray-500 bg-transparent border-transparent rounded-md focus:ring-emerald-500 focus:border-emerald-500">
                  <option>RU</option>
                  <option>UK</option>
                  <option>EU</option>
                </select>
              </div>
              <input type="text" name="phone-number" id="phone-number" autocomplete="tel" class="block w-full px-4 py-3 pl-20 border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500" placeholder="+7 (111) 111-1111" />
            </div>
          </div>
          <!-- <div class="sm:col-span-2">
            <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
            <div class="mt-1">
              <textarea id="message" name="message" rows="4" class="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500" />
            </div>
          </div> -->
          <div class="sm:col-span-2">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <Switch v-model="agreed" :class="[agreed ? 'bg-emerald-600' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500']">
                  <span class="sr-only">Agree to policies</span>
                  <span aria-hidden="true" :class="[agreed ? 'translate-x-5' : 'translate-x-0', 'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
                </Switch>
              </div>
              <div class="ml-3">
                <p class="text-base text-gray-500">
                  Я согласен на обработку моих персональных данных в соответствии с
                  {{ ' ' }}
                  <a href="#" class="font-medium text-gray-700 underline">Политикой конфиденциальности</a>
                  {{ ' ' }}
                  and
                  {{ ' ' }}
                  <a href="#" class="font-medium text-gray-700 underline">Политикой использования файлов cookie</a>.
                </p>
              </div>
            </div>
          </div>
          <div class="sm:col-span-2">
            <button type="submit" class="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">Записаться</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'

export default {
  components: {
    Switch,
  },
  setup() {
    const agreed = ref(false)

    return {
      agreed,
    }
  },
}
</script>