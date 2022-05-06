<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-white py-16 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-base font-semibold uppercase tracking-wider text-emerald-600">Чему научим?</h2>
      <p class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">На курсе вы получите следующие навыки:</p>
      <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500"></p>
      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="pt-6">
            <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
              <div class="-mt-6">
                <div>
                  <span class="inline-flex items-center justify-center rounded-md bg-emerald-500 p-3 shadow-lg">
                    <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div>
                <h3 class="mt-8 text-lg font-medium tracking-tight text-gray-900">{{ feature.name }}</h3>
                <p class="mt-5 text-base text-gray-500">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from '@heroicons/vue/outline'

const features = [
  {
    name: 'Разработка автотестов',
    description: 'Научитесь создавать скрипты, которые имитируют поведение человека для автоматической проверки работы продукта.',
    icon: CloudUploadIcon,
  },
  {
    name: 'Выстраивание инфраструктуры',
    description: 'Узнаете как решать инфраструктурные задачи для встраивания запуска автотестов в CI/CD, контейнеризации браузеров и мобильных устройств.',
    icon: LockClosedIcon,
  },
  {
    name: 'Визуализация результатов тестирования',
    description: 'В этом блоке вы освоите навык формирования отчётности понятной вам и заказчику и сможете получать уведомления в мессенджеры о статусе ваших тестов',
    icon: RefreshIcon,
  },
  {
    name: 'Тест-менеджмент',
    description: 'Сможете "по — взрослому" управлять большим объёмом тестов в тест-менеджмент системе, поддерживающей ручные и автотесты, во взаимодействии с CI/CD инструментами и таск-трекерами',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Свой инстументарий для тестирования',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: CogIcon,
  },
  {
    name: 'Своя борда',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]

export default {
  setup() {
    return {
      features,
    }
  },
}
</script>