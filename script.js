"use strict";
const shakedCombination = [];
let B = [];
let I = [];
let N = [];
let G = [];
let O = [];
function shake() {
  let randomNum = Math.trunc(Math.random() * 74 + 1);
  const allArr = [B, I, N, G, O].flat();
  if (allArr.includes(randomNum)) {
    randomNum = shake();
    return;
  }
  let letter = "";
  if (0 < randomNum && randomNum < 16) {
    B.push(randomNum);
    letter = "B";
  } else if (15 < randomNum && randomNum < 31) {
    I.push(randomNum);
    letter = "I";
  } else if (30 < randomNum && randomNum < 46) {
    N.push(randomNum);
    letter = "N";
  } else if (45 < randomNum && randomNum < 61) {
    G.push(randomNum);
    letter = "G";
  } else if (60 < randomNum && randomNum < 76) {
    O.push(randomNum);
    letter = "O";
  }

  document
    .querySelector(`.${letter}__num`)
    .insertAdjacentHTML("beforeend", `<ul>${letter} ${randomNum}<ul>`);
}
