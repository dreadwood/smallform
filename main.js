"use strict";

const RenderPosition = {
  AFTER_BEGIN: `afterbegin`,
  BEFOR_END: `beforeend`,
};

const mock =
  '"inputs":[{"label":"Фамилия","type":"text","id":"last_name"},{"label":"Возраст","type":"number","id":"age"}],"submit": {"url":"www.example.com","text": "Отправить"}';

const createFormTemplate = (data) => {
  return `<form 
      class=${data.class}" 
      action="${data.url}" 
      method="${data.method || null}"
      autocomplete="${data.autocomplete || null}"
      enctype="${data.enctype || null}"
    >
      <button type="submit">${data.text}</button>
    </form>`;
};

const createInputTemplate = (data) => {
  return `<label for="${data.id}">${data.label}</label>
    <input 
      class=${data.class}" 
      type="${data.type}" 
      id="${data.id}" 
      name="${data.name}" 
      checked="${data.checked}" 
      autocomplete="${data.autocomplete || null}"
      ${required ? "required" : null}"
    >`;
};

const createTextariaTemplate = (data) => {
  return `<label for="${data.id}">${data.label}</label>
    <textaria 
      class=${data.class}" 
      id="${data.id}" 
      name="${data.name}" 
      autocomplete="${data.autocomplete || null}"
      ${required ? "required" : null}"
    ></textaria>`;
};

const renderTemplate = (
  container,
  template,
  place = RenderPosition.BEFOR_END
) => {
  container.insertAdjacentHTML(place, template);
};

// Изменить имя
const generateForm = (container, data) => {
  renderTemplate(container, createFormTemplate(data.submit));

  const formElement = container.querySelector("form");
  if (data.inputs) {
    data.inputs.forEach((input) =>
      renderTemplate(
        formElement,
        createInputTemplate(input),
        RenderPosition.AFTER_BEGIN
      )
    );
  }
};

const rootElement = document.querySelector("#root");
const exampleElement = document.querySelector(".example");

if (exampleElement) {
  const exampleTextElement = exampleElement.querySelector(".example__text");
  const exampleBtnElement = exampleElement.querySelector(".example__btn");

  exampleBtnElement.addEventListener("click", () => {
    const data = JSON.parse(exampleTextElement.value);

    generateForm(rootElement, data);
    console.log(data);
  });
}
