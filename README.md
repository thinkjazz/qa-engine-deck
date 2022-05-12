# QA Engine Deck (Vue 3 + TypeScript + Vite + Tailwind css UI)

![Иллюстрация к проекту](https://github.com/thinkjazz/qa-engine-deck/blob/main/src/assets/board_5_column.png?raw=true)
![Иллюстрация к проекту](https://github.com/thinkjazz/qa-engine-deck/blob/main/src/assets/board_preview.png?raw=true?)



Этот шаблон должен помочь вам начать разработку с Vue 3 и TypeScript в Vite. Шаблон использует Vue 3 `<script setup>` SFCs, ознакомьтесь с [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup), чтобы узнать больше.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Поскольку TypeScript не может обрабатывать информацию о типе для импорта `.vue`, по умолчанию они подстраиваются под общий тип компонента Vue. В большинстве случаев это нормально, если вы не заботитесь о типах компонентов вне шаблонов. Однако если вы хотите получить фактические типы реквизитов в `.vue` импортах (например, для получения валидации реквизитов при использовании ручных вызовов `h(...)`), вы можете включить режим Volar's Take Over, выполнив следующие шаги:


1. Запустите команду `Extensions: Show Built-in Extensions` из палитры команд VS Code, найдите `TypeScript and JavaScript Language Features`, затем щелкните правой кнопкой мыши и выберите `Disable (Workspace)`. По умолчанию режим Take Over включится, если расширение TypeScript по умолчанию отключено.
2. Перезагрузите окно VS Code, выполнив команду `Developer: Reload Window` из палитры команд.

Подробнее о режиме Take Over можно узнать [здесь] (https://github.com/johnsoncodehk/volar/discussions/471).


## Гайд
Добавьте эти строки в настройки VS Code:

```
{
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  "vetur.validation.style": false,
  "editor.formatOnSave": true,
  "editor.formatOnPaste": false,
  "editor.formatOnType": false,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
}
```

Они указывают VS Code и Vetur/Volar не проверять форматирование стилей, так как это делает Stylelint.
Кроме того, мы настраиваем Prettier как форматтер по умолчанию.

## Config files

### Prettier

prettier.config.js

### Stylelint

stylelint.config.js

Если вы не используете SCSS, вы можете удалить правила _scss_ и удалить плагин _stylelint-scss_.

### Eslint

eslintrc.js

### PostCSS

postcss.config.js

PostCSS оснащен плагинами, которые обеспечивают SCSS-подобную функциональность, такую как переменные, миксины, вложенные блоки и т.д.

### Jest

jest.config.js \
jest.setup.js

## How to use each directory / Как использовать каждый каталог

### /api

Любые методы, работающие с запросами API, должны быть помещены в папку _api_.

Более подробно о каталогах и их использовании читайте в главе _Project Setup_.

### /assets

Любые ресурсы, используемые в проектах, такие как изображения, шрифты и т.д.

### /components

Этот каталог должен содержать только компоненты, которые могут быть использованы повторно и не являются специфическими для какой-либо функции. Другие компоненты должны быть помещены в каталог функций.

#### /components/base

В каталог _base_ можно поместить компоненты, которые очень часто используются в вашем приложении, например, кнопки, поля формы или иконки. Эти компоненты автоматически импортируются и регистрируются методами _registerBaseComponents_ в файле _main.js_.

#### /components/common

Сюда можно поместить любые компоненты, которые являются многоразовыми, но используются не так часто.

#### /components/transitions

Компоненты, обеспечивающие функциональность переходов и анимации

### /composables

Здесь вы можете разместить методы, использующие Composition API.

### config

Любые файлы конфигурации, связанные с приложениями или сторонними разработчиками.

### constants

Глобальные константы для приложения

### directives (optional)

Здесь вы можете разместить директивы многократного использования

### helpers

Поместите сюда небольшие и многократно используемые методы. Если у вас есть хелпер, состоящий из нескольких методов, то вам, вероятно, следует поместить его в папку _services_.

### intl (optional)

Здесь вы можете поместить любые данные об интернационализации. Если ваше приложение не включает в себя интернационализацию, то вы можете удалить его.

### layout

Любые компоненты, которые занимаются предоставлением макетов.
### plugins

Сюда следует поместить все регистрации сторонних библиотек. Не следует импортировать какие-либо файлы из каталога _plugins_. Вместо этого добавьте имя файла плагина в вызов _loadPlugins_ в файле _main.js_. Если вы используете Typescript, то измените метод _loadPlugins_ и измените расширение в строке 14 с .js на .ts

### router

Конфигурация и утилиты Vue-Router

### services

Файлы с методами, обеспечивающими специфическую функциональность, которая может быть использована повторно и не связана жестко с каким-либо компонентом. Например, валидация, обработка ошибок и т.д.

#### services/stateful

Сюда можно поместить любые сервисы, использующие реактивные данные. В Vue 3 это может быть через _ref_ или _reactive_, а в Vue 2 _observable_.

### store
//TODO переписать на pinia
Магазин Vuex. Вы можете использовать скрипт _scripts/generateVuexModule.ts_ для автоматического создания модуля Vuex

### styles

Глобальные стили, переменные препроцессоров и т.д.

### views

В эту папку вы должны поместить свои функции.