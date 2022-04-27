const forAllCheckboxes = document.querySelector("main");
const fast = document.querySelector("#fast");
const cheap = document.querySelector("#cheap");
const good = document.querySelector("#good");
let lastCheckbox = null;

function updateCheckboxes(e) {
  if (fast.checked && cheap.checked && good.checked) {
    lastCheckbox.checked = false;
    lastCheckbox = e.target;
  } else {
    lastCheckbox = e.target;
  }
}

forAllCheckboxes.addEventListener("change", updateCheckboxes);

/*fast.addEventListener("change", updateCheckboxes);
cheap.addEventListener("change", updateCheckboxes);
good.addEventListener("change", updateCheckboxes);
*/
