'use strict';

const RenderPosition = {
  AFTER_BEGIN: `afterbegin`,
  BEFOR_END: `beforeend`,
};

const mock = '"inputs":[{"label":"Фамилия","type":"text","id":"last_name"},{"label":"Возраст","type":"number","id":"age"}],"submit": {"url":"www.example.com","text": "Отправить"}';

const createFormTemplate = (data) => {
  return (
    `<form action="${data.url}">
      <button>${data.text}</button>
    </form>`
  )
};

const createInputTemplate = (data) => {
  return (
    `<label for="${data.id}">${data.label}</label>
    <input type="${data.type}" id="${data.id}"/>`
  )
};

function generateInput(data) {
  const fragment = document.createDocumentFragment();

  const labelElement = document.createElement('label');
  if (data.label) {
    inputElement.setAttribute('type', data.label);
  }
  if (data.id) {
    inputElement.setAttribute('for', data.id);
  }

  const inputElement = document.createElement('input');
  if (data.type) {
    inputElement.setAttribute('type', data.type);
  }
  if (data.id) {
    inputElement.setAttribute('id', data.id);
  }

  fragment.appendChild(labelElement);
  fragment.appendChild(inputElement);

  return fragment;
}

function generateForm(data) {
  const formElement = document.createElement('form');
  if (data.url) {
    formElement.setAttribute('action', data.url);
  }

  const btnSubmitElement = document.createElement('button');
  if (data.text) {
    btnSubmitElement.textContent = data.text;
  }

  formElement.appendChild(btnSubmitElement);

  return formElement;
}

const renderTemplate = (container, template, place = RenderPosition.BEFOR_END) => {
  container.insertAdjacentHTML(place, template);
};


const rootElement = document.querySelector('#root');
const exampleElement = document.querySelector('.example');

if (exampleElement) {
  const exampleTextElement = exampleElement.querySelector('.example__text');
  const exampleBtnElement = exampleElement.querySelector('.example__btn');

  exampleBtnElement.addEventListener('click', () => {
    const data = JSON.parse(exampleTextElement.value);

    renderTemplate(rootElement, createFormTemplate(data.submit));

    const formElement = rootElement.querySelector('form');
    data.inputs.forEach((input) => {
      renderTemplate(formElement, createInputTemplate(input), RenderPosition.AFTER_BEGIN);
    });

    console.log(data);
  })
};
