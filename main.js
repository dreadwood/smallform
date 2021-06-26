import { generationMock } from "/mock.js";

const RenderPosition = {
  AFTER_BEGIN: `afterbegin`,
  BEFOR_END: `beforeend`,
};

const createFormTemplate = (data) => {
  const className = data.class ? `class="${data.class}"` : "";
  const method = data.method ? `method="${data.method}"` : "";
  const autocomplete = `autocomplete="${
    data.autocomplete ? data.autocomplete : "off"
  }"`;
  const enctype = data.enctype ? `enctype="${data.enctype}"` : "";

  return `<form 
      action="${data.url}" 
      ${className}
      ${method}
      ${autocomplete}
      ${enctype}
    >
      <button type="submit">${data.text}</button>
    </form>`;
};

const createInputTagTemplate = (data) => {
  const className = data.class ? `class="${data.class}"` : "";
  const required = data.required ? "required" : "";
  const autocomplete = `autocomplete="${
    data.autocomplete ? data.autocomplete : "off"
  }"`;
  const checked =
    data.checked && (data.type === "checkbox" || data.type === "radio")
      ? "checked"
      : "";
  const placeholder =
    data.placeholder && !(data.type === "checkbox" && data.type === "radio")
      ? `placeholder="${data.placeholder}"`
      : "";

  return `<input 
    type="${data.type}" 
    id="${data.id}" 
    name="${data.name}" 
    ${className}
    ${checked}
    ${autocomplete}
    ${required}
    ${placeholder}
  >`;
};

const createLabelTagTemplate = (data) => {
  return `<label for="${data.id}">${data.label}</label>`;
};

const createOptionTagTemplate = (data) => {
  const selected = data.checked ? "selected" : "";
  return `<option value="${data.name}" ${selected}>${data.label}</option>`;
};

const createFieldsetTagTemplate = (data) => {
  const valueTemplate = data.value
    .map((item, i) => {
      const dataValue = {
        ...item,
        type: data.type,
        name: data.name,
        id: data.name + i,
      };
      return `${createInputTagTemplate(dataValue)}
        ${createLabelTagTemplate(dataValue)}`;
    })
    .join("");

  return `<fieldset>
      <legend>${data.label}</legend>
      ${valueTemplate}
    </fieldset>`;
};

const createInputValueTemplate = (data) => {
  switch (data.type) {
    case "checkbox":
      return `${createInputTagTemplate(data)} ${createLabelTagTemplate(data)}`;
    case "radio":
      return createFieldsetTagTemplate(data);
    default:
      return `${createLabelTagTemplate(data)} ${createInputTagTemplate(data)}`;
  }
};

const createSelectValueTemplate = (data) => {
  const className = data.class ? `class="${data.class}"` : "";

  const optionsTemplate = data.value
    .map((item) => createOptionTagTemplate(item))
    .join("");

  return `${createLabelTagTemplate(data)}
    <select 
      id="${data.id}" 
      name="${data.name} 
      ${className} 
    >
      ${optionsTemplate}
    </select>`;
};

const createTextareaValueTemplate = (data) => {
  const className = data.class ? `class="${data.class}"` : "";
  const autocomplete = `autocomplete="${
    data.autocomplete ? data.autocomplete : "off"
  }"`;
  const required = data.required ? "required" : "";

  return `${createLabelTagTemplate(data)}
    <textarea 
      id="${data.id}" 
      name="${data.name}" 
      ${className}
      ${autocomplete}
      ${required}
    ></textarea>`;
};

const renderTemplate = (
  container,
  template,
  place = RenderPosition.BEFOR_END
) => container.insertAdjacentHTML(place, template);

const generateForm = (container, data) => {
  container.textContent = "";
  renderTemplate(container, createFormTemplate(data.submit));

  const formElement = container.querySelector("form");
  if (data.textarea) {
    data.textarea
      .reverse()
      .forEach((textareaValue) =>
        renderTemplate(
          formElement,
          createTextareaValueTemplate(textareaValue),
          RenderPosition.AFTER_BEGIN
        )
      );
  }

  if (data.select) {
    data.select
      .reverse()
      .forEach((selectValue) =>
        renderTemplate(
          formElement,
          createSelectValueTemplate(selectValue),
          RenderPosition.AFTER_BEGIN
        )
      );
  }

  if (data.inputs) {
    data.inputs
      .reverse()
      .forEach((input) =>
        renderTemplate(
          formElement,
          createInputValueTemplate(input),
          RenderPosition.AFTER_BEGIN
        )
      );
  }
};

const rootElement = document.querySelector("#root");
const exampleElement = document.querySelector(".example");
const textariaElement = exampleElement.querySelector(".example__text");

textariaElement.textContent = generationMock();

if (exampleElement) {
  const exampleTextElement = exampleElement.querySelector(".example__text");
  const exampleBtnElement = exampleElement.querySelector(".example__btn");

  exampleBtnElement.addEventListener("click", () => {
    const data = JSON.parse(exampleTextElement.value);

    generateForm(rootElement, data);
  });
}
