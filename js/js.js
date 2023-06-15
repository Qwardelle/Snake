"use strict";

// let startButton = document.querySelector(".buttonStart");
// startButton.addEventListener("click", () => {
//   startButton.style.backgroundColor = "blue";
// });

// let gameItems = document.querySelectorAll(".gameGround");
// let activeItem = ".item-6";
// let number = 10;
// function nextItemTimer() {
//   if (activeItem == ".item-6") {
//     setTimeout(() => {
//       activeItem = activeItem + number;
//       nextItem();
//     }, 2 * 1000);
//     return activeItem;
//   }
// }

// let startItem = document.querySelector(activeItem);
// function nextItem() {
//   startItem = document.querySelector(activeItem);
//   startItem.addEventListener("click", () => {
//     startItem.style.backgroundColor = "yellow";
//     nextItemTimer();
//   });
// }

// nextItem();
let number = 6;
let item = ".item-" + number;

function nextItem() {
  setTimeout(() => {
    number = number + 10;
    item = ".item-" + number;
    startButton = document.querySelector(item);
    startButton.style.backgroundColor = "white";
    next();
    return number;
  }, 2 * 1000);
}

let startButton = document.querySelector(item);
startButton.addEventListener("click", () => {
  next();
});
function next() {
  startButton.style.backgroundColor = "blue";
  nextItem();
}
