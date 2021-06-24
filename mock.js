const generationMock = () => {
  const mock = {
    inputs: [
      {
        label: "Фамилия",
        engLabel: "Last name",
        class: null,
        name: "last_name",
        type: "text",
        id: "last_name",
        autocomplete: "on",
        required: true,
      },
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
    submit: {
      url: "www.example.com",
      text: "Отправить",
      checkbox: "Я согласен отправлять свои данные в неизвестном направлении.",
    },
  };

  return JSON.stringify(mock, "false", true);
};

export { generationMock };
