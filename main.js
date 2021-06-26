import { generationMock } from "/mock.js";
import { generateForm } from "/form.js";

const exampleElement = document.querySelector(".example");

if (exampleElement) {
  const inputElement = exampleElement.querySelector(".example__input");
  const outputElement = exampleElement.querySelector(".example__output");
  const btnElement = exampleElement.querySelector(".example__btn--generate");
  const fileElement = exampleElement.querySelector(".example__file");

  inputElement.textContent = generationMock();

  btnElement.addEventListener("click", () => {
    generateForm(outputElement, inputElement.value);
  });

  fileElement.addEventListener("change", (evt) => {
    const file = evt.target.files[0];
    console.dir(file);

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      generateForm(outputElement, reader.result);
    });
    reader.readAsText(file);
  });
}
