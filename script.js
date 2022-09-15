const input = document.querySelectorAll(".inbox input[type='checkbox']");
// console.log(input)
let lastChecked;
function hadleCheck(e) {
  lastChecked = this;
  console.log(lastChecked);
}

input.forEach((checkbox) => {
  checkbox.addEventListener('click', hadleCheck);
});
