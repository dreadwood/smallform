**TO-DO**

- Добавить другие атрибуты form
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

