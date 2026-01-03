const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

const numberEl = document.getElementById("number");

let number = parseInt(numberEl.innerText);

plusBtn.addEventListener("click", () => {
  number += 1;
  numberEl.innerText = number.toString();
});

minusBtn.addEventListener("click", () => {
  number -= 1;
  numberEl.innerText = number.toString();
});
