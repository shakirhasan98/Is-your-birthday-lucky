const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");
const messageBox = document.querySelector("#message-box");

function checkBirthdayIsLucky() {
  const dOb = dateOfBirth.value;
  const sum = calculateSum(dOb);
  if (sum && dOb) {
    compareValues(sum, luckyNumber);
  } else {
    messageBox.innerText = ("Enter both values");
  }
}

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber.value) {
    messageBox.innerText = ("Your birthday is lucky");
  } else {
    messageBox.innerText = ("Your birthday is not lucky");
  }
}

function calculateSum(dOb) {
  dOb = dOb.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < dOb.length; i++) {
    sum = sum + Number(dOb.charAt(i));
  }
  return sum;
}
checkNumber.addEventListener("click", checkBirthdayIsLucky);