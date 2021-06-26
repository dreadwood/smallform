const RenderPosition = {
  AFTER_BEGIN: `afterbegin`,
  BEFOR_END: `beforeend`,
};

const getClassNameAttr = (data) => (data ? `class="${data}"` : "");
const getAutocompleteAttr = (data) => `autocomplete="${data ? data : "off"}"`;
const getRequiredAttr = (data) => (data ? "required" : "");

const createFormTemplate = (data) => {
  const method = data.method ? `method="${data.method}"` : "";
  const enctype = data.enctype ? `enctype="${data.enctype}"` : "";
  const btnReset = data.resetText
    ? `<button type="reset">${data.resetText}</button>`
    : "";

  return `<form 
      action="${data.url}" 
      ${getClassNameAttr(data.class)}
      ${getAutocompleteAttr(data.autocomplete)}
      ${method}
      ${enctype}
    >
      <button type="submit">${data.text}</button>
      ${btnReset}
    </form>`;
};

const createInputTagTemplate = (data) => {
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
    ${getClassNameAttr(data.class)}
    ${getAutocompleteAttr(data.autocomplete)}
    ${getRequiredAttr(data.required)}
    ${checked}
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
  const valueTemplates = data.value
    .map((item, i) => {
      const valueData = {
        ...item,
        type: data.type,
        name: data.name,
        id: data.name + i,
      };
      return `${createInputTagTemplate(valueData)}
        ${createLabelTagTemplate(valueData)}`;
    })
    .join("");

  return `<fieldset>
      <legend>${data.label}</legend>
      ${valueTemplates}
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
  const optionTemplates = data.value
    .map((item) => createOptionTagTemplate(item))
    .join("");

  return `${createLabelTagTemplate(data)}
    <select 
      id="${data.id}" 
      name="${data.name} 
      ${getClassNameAttr(data.class)}
    >
      ${optionTemplates}
    </select>`;
};

const createTextareaValueTemplate = (data) => {
  return `${createLabelTagTemplate(data)}
    <textarea 
      id="${data.id}" 
      name="${data.name}" 
      ${getClassNameAttr(data.class)}
      ${getAutocompleteAttr(data.autocomplete)}
      ${getRequiredAttr(data.required)}
    ></textarea>`;
};

const renderTemplate = (
  container,
  template,
  place = RenderPosition.BEFOR_END
) => container.insertAdjacentHTML(place, template);

const generateForm = (container, json) => {
  const data = JSON.parse(json);
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

export { generateForm };
