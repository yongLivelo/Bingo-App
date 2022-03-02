"use strict";
const shakedNumber = [];
function shake() {
  let randomNumber = Math.trunc(Math.random() * 75 + 1);
  console.log(randomNumber);
  if (shakedNumber.includes(randomNumber)) {
    randomNumber = Math.trunc(Math.random() * 75 + 1);
  }
  shakedNumber.push(randomNumber);
  console.log(shakedNumber);
  document.querySelector(".shooked").innerHTML = shakedNumber;
}
