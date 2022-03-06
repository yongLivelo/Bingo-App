"use strict";
let B = [];
let I = [];
let N = [];
let G = [];
let O = [];
let currentLetter = [];
let wait = false;
const audio = new Audio();
audio.loop = true;
audio.src = "./assets/bingoShake.mp3";

document.querySelector(".shake").addEventListener("click", () => shake());
document.querySelector(".shake").addEventListener("mousedown", () => {
  audio.play();
  audio.loop = true;
});
document.querySelector(".shake").addEventListener("mouseup", () => {
  setTimeout(() => {
    audio.pause();
    audio.loop = false;
  }, 1000);
});
// document.querySelector(".bingo").addEventListener("click");
function getNumber(allArr) {
  let randomNum = Math.trunc(Math.random() * 75 + 1);
  if (allArr.includes(randomNum)) {
    console.log("same");
    return getNumber(allArr);
  }
  return randomNum;
}
function shake() {
  if (wait) return;
  wait = true;
  setTimeout(() => {
    const allArr = [B, I, N, G, O].flat();
    let randomNum = getNumber(allArr);
    if (0 < randomNum && randomNum < 16) {
      B.push(randomNum);
      currentLetter = ["B", B];
      B.sort((a, b) => a - b);
    } else if (15 < randomNum && randomNum < 31) {
      I.push(randomNum);
      currentLetter = ["I", I];
      I.sort((a, b) => a - b);
    } else if (30 < randomNum && randomNum < 46) {
      N.push(randomNum);
      currentLetter = ["N", N];
      N.sort((a, b) => a - b);
    } else if (45 < randomNum && randomNum < 61) {
      G.push(randomNum);
      currentLetter = ["G", G];
      G.sort((a, b) => a - b);
    } else if (60 < randomNum && randomNum < 76) {
      O.push(randomNum);
      currentLetter = ["O", O];
      O.sort((a, b) => a - b);
    }
    document.querySelector(`.${currentLetter[0]}__num`).innerHTML = "";
    currentLetter[1].forEach((el) => {
      currentLetter[3] =
        `${currentLetter[3] || currentLetter[0]}` + `<ul>${el}</ul>`;
      document.querySelector(`.${currentLetter[0]}__num`).innerHTML =
        currentLetter[3];
      document.querySelector(
        ".lastNum"
      ).innerHTML = `${currentLetter[0]}${randomNum}`;
    });
    wait = false;
    var toSpeak = new SpeechSynthesisUtterance();
    toSpeak.lang = "en";
    toSpeak.text = `${currentLetter[0]}${randomNum}`;
    window.speechSynthesis.speak(toSpeak);
  }, 1200);
}

document.onmousemove = function (event) {
  const pointerX = event.pageX;
  const pointerY = event.pageY;
  console.log(pointerX, pointerY);
};
