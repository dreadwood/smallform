(() => {
  const generationMock = () => {
    const mock = {
      inputs: [
        {
          label: "Имя",
          engLabel: "Name",
          class: null,
          name: "first_name",
          type: "text",
          id: "first_name",
          autocomplete: "on",
          required: true,
        },
        {
          label: "Пароль",
          engLabel: "Password",
          class: null,
          name: "password",
          type: "password",
          id: "password",
        },
        {
          label: "Фамилия",
          engLabel: "Last name",
          class: null,
          name: "last_name",
          type: "text",
          id: "last_name",
          autocomplete: "on",
          checked: true,
          required: true,
          placeholder: "Константинопольский",
        },
        {
          label: "Найти",
          engLabel: "Search",
          class: null,
          name: "search",
          type: "search",
          id: "search",
          checked: true,
          placeholder: "Найти",
        },
        {
          label: "Предприниматель",
          engLabel: "Entrepreneur",
          class: null,
          name: "entrepreneur",
          type: "checkbox",
          id: "entrepreneur",
        },
        {
          label: "Рабочий",
          engLabel: "Worker",
          class: null,
          name: "worker",
          type: "checkbox",
          id: "worker",
        },
        {
          label: "Крестьянин",
          engLabel: "Farmer",
          class: null,
          name: "farmer",
          type: "checkbox",
          id: "farmer",
        },
        {
          label: "Мобильный телефон",
          engLabel: "Phone",
          class: null,
          name: "tel",
          type: "tel",
          id: "tel",
          autocomplete: "off",
          required: true,
        },
        {
          label: "Электронная почта",
          engLabel: "Email",
          class: null,
          name: "emal",
          type: "email",
          id: "emal",
          autocomplete: "off",
        },
        {
          label: "Тип документа",
          engLabel: "Type of document",
          class: null,
          name: "document",
          type: "radio",
          id: "document",
          value: [
            {
              label: "Паспорт",
              engLabel: "Passport",
            },
            {
              label: "Водительское удостоверение",
              engLabel: "Driver's license",
              checked: true,
            },
            {
              label: "Студенческий",
              engLabel: "Student ID",
            },
          ],
        },
        {
          label: "Возраст",
          type: "number",
          name: "age",
          id: "age",
        },
      ],
      textarea: [
        {
          label: "О себе",
          engLabel: "About",
          name: "about",
          id: "about",
          autocomplete: "off",
        },
      ],
      select: [
        {
          label: "Страна",
          engLabel: "Country",
          class: null,
          name: "сountry",
          id: "сountry",
          required: true,
          value: [
            {
              label: "Россия",
              engLabel: "Russia",
              name: "russia",
            },
            {
              label: "Казахстан",
              engLabel: "Kazakhstan",
              name: "Kazakhstan",
            },
            {
              label: "Фарерские острова",
              engLabel: "Faroe Islands",
              name: "faroes",
            },
            {
              label: "Нордхейм",
              engLabel: "Nordheim",
              name: "nordheim",
              checked: true,
            },
          ],
        },
      ],
      submit: {
        url: "www.example.com",
        text: "Отправить",
        resetText: "Очистить",
        checkbox:
          "Я согласен отправлять свои данные в неизвестном направлении.",
      },
    };

    return JSON.stringify(mock, "false", 2);
  };

  window.generationMock = generationMock;
})();
