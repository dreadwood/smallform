const exampleElement = document.querySelector(".example");

if (exampleElement) {
  const inputElement = exampleElement.querySelector(".example__input");
  const outputElement = exampleElement.querySelector(".example__output");
  const btnElement = exampleElement.querySelector(".example__btn--generate");
  const fileElement = exampleElement.querySelector(".example__file");

  inputElement.textContent = generationMock();

  btnElement.addEventListener("click", () => {
    SmallForm.create(outputElement, inputElement.value);
  });

  fileElement.addEventListener("change", (evt) => {
    const file = evt.target.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      SmallForm.create(outputElement, reader.result);
    });
    reader.readAsText(file);
  });
}
