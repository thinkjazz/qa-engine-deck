<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-gray-50">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <h2 class="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Часто задаваемые вопросы</h2>
        <dl class="mt-6 space-y-6 divide-y divide-gray-200">
          <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="pt-6" v-slot="{ open }">
            <dt class="text-lg">
              <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400">
                <span class="font-medium text-gray-900">
                  {{ faq.question }}
                </span>
                <span class="ml-6 h-7 flex items-center">
                  <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base text-gray-500">
                {{ faq.answer }}
              </p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/outline'

const faqs = [
  {
    question: "Как проходят занятия?",
    answer:
      "В живом режиме с преподавателями по понедельникам и четвергам в 20.00 по МСК, записи занятия выкладываются на следующий день, также к записям добавляем тайм-коды чтобы вам было легче пересматривать их. Домашние задания есть у большинства занятий.",
  },
  { question: "Что нужно знать\уметь\иметь чтобы обучаться на курсе?",
    answer:
      "Операционная система: Win\Mac\Linux, 8 гб ОЗУ, процессор i3 2,8 Ghz или лучше. Минимум 6 свободных часов в неделю, 4 из них будут занимать занятия, плюс выполнение ДЗ, время выполнения сильно зависит от выбранного вами способа выполнения и вашего прошлого опыта"
  },
  { question: "А Java нужно знать?",
    answer: "Нет, мы проведём несколько занятий по основам Java, знаний полученных на них вам хватит для написания дипломного проекта. Курс вполне можно закончить не имея опыта в IT.",
  },
  { question: "А отзывы у вас есть?", answer: `Да, их можно почитать тут`},
  { question: "Скидки есть?", answer: "Скидки есть, при оплате до 13 мая , действует скидка в 10% на любой из вариантов курса. А с 14 мая по 19 мая действует скидка в 5% на любой платеж. Скидки при оплате в рассрочку не действуют."},
  { question: "В рассрочку можно?", answer: "Любой из вариантов можно оплатить в рассрочку, первый платёж в размере 50% вносите до начала обучения, следующий через месяц. Скидки на рассрочку не действуют."},
  { question: "Как оплатить?", answer: "Напишите нашему живому-боту в Telegram https://t.me/qa_guru_support и вам перешлют все доступные способы оплаты."},
  // More questions...
]

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronDownIcon,
  },
  setup() {
    return {
      faqs,
    }
  },
}
</script>