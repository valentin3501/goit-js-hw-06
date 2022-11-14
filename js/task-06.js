const inputField = document.querySelector("input");

let charLim = parseInt(inputField.getAttribute("data-length"));

const onBlurEvent = () => {
  if (inputField.value.length === charLim) {
    inputField.classList.remove("invalid");
    inputField.classList.add("valid");
  } else if (inputField.value.length === 0) {
    inputField.classList.remove("valid");
    inputField.classList.remove("invalid");
  } else {
    inputField.classList.add("invalid");
  }
};

inputField.addEventListener("blur", onBlurEvent);
