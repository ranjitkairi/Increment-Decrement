//Global selections and variables
const decreaseValue = document.querySelector(".decrease");
const increaseValue = document.querySelector(".increase");
let valueChange = document.querySelector(".value");
let val = 0;

valueChange.textContent = localStorage.getItem("val");

//Add our event listeners
increaseValue.addEventListener("click", () => {
  val++;
  localStorage.setItem("val", val);
  valueChange.textContent = localStorage.getItem("val");
});

decreaseValue.addEventListener("click", () => {
  val--;
  localStorage.setItem("val", val);
  valueChange.textContent = localStorage.getItem("val");
});
