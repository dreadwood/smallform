import { generationMock } from "/mock.js";
import { generateForm } from "/form.js";

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
