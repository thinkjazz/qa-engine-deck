# Руководство по стилю

## Руководство по стилю рекомендует следующее, когда дело доходит до определения компонентов:

* По возможности каждый компонент должен быть определен в своем собственном выделенном файле (SFC).
* Компоненты одного файла должны быть названы в PascalCase.
* Все базовые компоненты должны начинаться с одного и того же префикса (например, Baseили App) .
  - Вы можете думать о базовых компонентах как о повторно используемых компонентах всего приложения, таких как кнопка или модальное окно.
  - Это группирует их вместе и объявляет их глобальный, многоразовый характер.
* Имена компонентов всегда должны состоять из нескольких слов, чтобы не конфликтовать ни с какими существующими или будущими элементами HTML. Не создавайте компонент Tableили .Button
* Компоненты с одним экземпляром должны начинаться с префикса The
  - Например, верхний или нижний колонтитул сайта.
  - Это группирует их вместе и объявляет их одноразовыми.
* Тесно связанные дочерние компоненты должны иметь префикс с именем их родительского компонента.
  - Например, TodoListItemвTodoList
  - Это группирует их вместе и объявляет их связанными
* Имена компонентов должны начинаться со слов самого верхнего уровня (обычно общего) и заканчиваться наиболее конкретными словами.
  - Такие как SearchWidgetInput, SearchWidgetResultsList,SearchWidget
  - Это группирует связанные компоненты вместе в файловой структуре.

Держитесь крепче, если это не совсем понятно, через минуту появится изображение, которое может помочь🙂