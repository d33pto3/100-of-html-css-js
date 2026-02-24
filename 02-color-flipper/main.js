const body = document.querySelector("body");

const aquaBtn = document.getElementById("aquaMarine");
const oliveBtn = document.getElementById("olive");
const lightSalmonBtn = document.getElementById("lightSalmon");
const cadetBlue = document.getElementById("cadetBlue");
const darkKhaki = document.getElementById("darkKhaki");

const changeBg = (color) => {
  console.log(color);
  const bgColor = getComputedStyle(body).backgroundColor;
  console.log(bgColor);
  body.style.backgroundColor = bgColor === color ? "white" : color;
};

aquaBtn.addEventListener("click", () => {
  changeBg(getComputedStyle(aquaBtn).backgroundColor);
});

oliveBtn.addEventListener("click", () => {
  changeBg(getComputedStyle(oliveBtn).backgroundColor);
});

lightSalmonBtn.addEventListener("click", () => {
  changeBg(getComputedStyle(lightSalmonBtn).backgroundColor);
});

cadetBlue.addEventListener("click", () => {
  changeBg(getComputedStyle(cadetBlue).backgroundColor);
});

darkKhaki.addEventListener("click", () => {
  changeBg(getComputedStyle(darkKhaki).backgroundColor);
});
