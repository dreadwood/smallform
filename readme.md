**TO-DO**

- Добавить другие атрибуты form
- Добавить классы для формы
- Добавить другие атрибуты input
- Добавить другие элементы формы
- Добавить групировку
- Добавить стили
- Добавить проверку json
- Добавить генерацию моков
- Добавить документацию
- Добавить демо страницу с примером и генерацией

---

**Пример JSON**

```json
{
  "inputs": [
    {
      "label": "Фамилия",
      "type": "text",
      "id": "last_name"
    },
    {
      "label": "Возраст",
      "type": "number",
      "id": "age"
    }
  ],
  "submit": {
    "url": "www.example.com",
    "text": "Отправить"
  }
}
```

**Результат генерации**

```html
<form action="www.example.com">
  <label for="last_name">Фамилия</label>
  <input type="text" id="last_name"/>

  <label for="first_name">Возраст</label>
  <input type="number" id="age"/>

  <button>Отправить</button>

  <style>
    <!-- стили для элементов формы -->
  </style>
</form>
```

**Атрибуты form:**
- !action: url
- method: post / get
- autocomplete: off / on
- novalidate: boolean

**Атрибуты input:**
- type: 
- id: text
- name: text
- checked: boolean
- autocomplete: off / on
- disabled: boolean
- required: boolean
- min: number
- max: number
- minlength: number
- multiple: 
- placeholder: text
- readonly: 
- value

**Элементы форм**
- input
- datalist (option)
- select (option)
- button
- label
- textarea

**Виды input**
- text
- checkbox
- radio
- email
- file
- hidden
- password
- range
- search
- tel
- ?datetime
- ?date