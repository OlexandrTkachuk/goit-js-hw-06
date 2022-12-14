const input = document.querySelector("#validation-input");

input.addEventListener("blur", function (event) {
  const countOfLetters = event.currentTarget.value.length;

  if (countOfLetters < Number(input.dataset.length)) {
    input.classList.remove("valid");
    input.classList.add("invalid");
  } else {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
});
