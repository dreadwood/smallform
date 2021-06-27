# 🦺 SmallForm — генератор форм

JS библиотека для преобразования JSON в HTML форму со стилями.

- Никаких зависимостей
- Полностью адаптивная форма
- Поддержка "вечнозеленых" браузеров

## Пример

Вы можете попробовать [интерактивную демонстрацию SmallForm](https://dreadwood.github.io/smallform/).

## Использование

Для использования библиотеки SmallForm

- [Скачайте её по ссылке](https://raw.githubusercontent.com/dreadwood/smallform/master/smallform.js) и добавьте в свой проект. Для работоспособности нужен всего один файл: скрипты и стили уже в нем!

- Подключите библиотеку на страницу раньше пользовательских скриптов.

  ```html
  <script src="smallform.js"></script>
  <!-- остальные скрипты -->
  ```

- Для создания формы используйте метод `create` объекта `SmallForm`

  ```js
  SmallForm.create(container, JSON);
  ```

  Метод принимает два параметра:

  - **container** — DOM узел, куда происходит вставка формы. Стоит учитывать, что содержимое узла будет удалено при генерации формы.
  - **JSON** — объект JSON c определенными полями, которые описывают форму и её элементы.

## Описание полей JSON

Объект состоит из нескольких полей:

- `submit` — **обязательное поле**, задает свойства формы (адрес отправки, наличие клавиши сброса и другое)
- `inputs` — поле для генерации input элементов формы (text, number, checkbox и другие)
- `textarea` — поле для генерации многострочной области (textarea элементов)
- `select` — поле для генерации выпадающего списка значений

Для корректной генерации формы объект должен содержать одно поле с внутренним значением, кроме submit. **Наличие поля submit обязательно**.

### Значение поля `submit`

Представляет собой объект с полями:

- `url` — **обязательное поле**, строка, URL адрес для отправки формы.
- `text` — **обязательное поле**, строка, надпись на клавише отправки формы.
- `resetText` — строка, надпись на клавише сброса формы. При отсутствии поля клавиша не генерируется.
- `method` — строка, метод отправки формы (по умолчанию GET).
- `enctype` — строка, значение атрибута `enctype` у формы.

### Значение поля `inputs`

Представляет собой массив с объектами, в котором описываются параметры для генерации `input` элементов. Эти объекты содержат следующие поля:

- `type` — **обязательное поле**, строка, тип поля. Поддерживаются следующие типы: `text`, `search`, `tel`, `emal`, `number`, `password`, `checkbox`, `radio`. Для значения поля `radio`, обязательно наличие в объекте поля `value`.
- `label` — **обязательное поле**, строка, описание (подпись) поля. Выводиться над полем.
- `id` — **обязательное поле**, строка, уникальный `id`, они не должны повторяться в любых других полях в JSON.
- `name` — **обязательное поле**, строка, поле для отправки на сервер. Указывается как атрибут `name` у элемента.
- `class` — строка, css класс элемента.
- `autocomplete` — булевый тип, атрибут `autocomplete` элемента. При `true` значение `on`, при `false` — `off`.
- `required` — булевый тип, наличие атрибута `required` элемента.
- `checked` — булевый тип, наличие атрибут `checked` элемента. Только для типов полей `checkbox` и `radio`.
- `placeholder` — строка, значение атрибута `placeholder` у элемента.
- `value` — массив объектов, только для значения поля `radio`. Каждый объект содержит поля:
  - `label` — **обязательное поле**, строка, описание радиокнопки.
  - `engLabel` — **обязательное поле**, строка, описание радиокнопки на английском.
  - `checked` — булевый тип, наличие атрибут `checked` у радиокнопки.
- `engLabel` — строка, описание (подпись) поля на английском.

### Значение поля `textarea`

Представляет собой массив с объектами, в котором описываются параметры для генерации `textarea` элементов. Эти объекты содержат следующие поля:

- `label` — **обязательное поле**, строка, описание (подпись) поля. Выводиться над полем.
- `id` — **обязательное поле**, строка, уникальный `id`, они не должны повторяться в любых других полях в JSON.
- `name` — **обязательное поле**, строка, поле для отправки на сервер. Указывается как атрибут `name` у элемента.
- `class` — строка, css класс элемента.
- `autocomplete` — булевый тип, атрибут `autocomplete` элемента. При `true` значение `on`, при `false` — `off`.
- `required` — булевый тип, наличие атрибута `required` элемента.
- `engLabel` — строка, описание (подпись) поля на английском.

### Значение поля `select`

Представляет собой массив с объектами, в котором описываются параметры для генерации `select` элементов. Эти объекты содержат следующие поля:

- `label` — **обязательное поле**, строка, описание (подпись) поля. Выводиться над полем.
- `id` — **обязательное поле**, строка, уникальный `id`, они не должны повторяться в любых других полях в JSON.
- `name` — **обязательное поле**, строка, поле для отправки на сервер. Указывается как атрибут `name` у элемента.
- `value` — **обязательное поле**, массив объектов, должен содержать хотя бы одно значение. Каждый объект содержит поля:
  - `label` — **обязательное поле**, строка, описание радиокнопки.
  - `engLabel` — **обязательное поле**, строка, описание радиокнопки на английском.
  - `name` — **обязательное поле**, строка, поле для отправки на сервер. Указывается как атрибут `name` у элемента.
  - `checked` — булевый тип, наличие атрибут `checked` у значения `select`.
- `class` — строка, css класс элемента.
- `required` — булевый тип, наличие атрибута `required` элемента.
- `engLabel` — строка, описание (подпись) поля на английском.

## В будущих релизах

Библиотека разрабатывалась в соответствии с техническим требованиями без обратной связи. В будущих релизах планируется добавить:

- Темную тему
- Поддержку мультиязычности
- Сокрытие стилей с помощью Shadow DOM
- Возможность определять порядок полей
- Добавление мультивыбора в select

## Автор 🦁

Библиотеку разрабатывал Быков Сергей в рамках [тестового задания vk](https://vk.com/@vkteam-testovoe-zadanie-frontend-infrastruktura).
По вопросам можно писать в [telegram](https://t.me/dreadwood).
