"use strict";
let buttonTop = document.querySelector(".buttonTop");
let topNumber;
let buttonBottom = document.querySelector(".buttonBottom");
let bottomNumber;
let buttonLeft = document.querySelector(".buttonLeft");
let leftNumber;
let buttonRight = document.querySelector(".buttonRight");
let rightNumber;
let activeItem;

buttonTop.addEventListener("click", () => {
  if (topNumber !== 1 && bottomNumber !== 1) {
    goTop();
  }
});

buttonBottom.addEventListener("click", () => {
  if (bottomNumber !== 1 && topNumber !== 1) {
    goBottom();
  }
});

buttonLeft.addEventListener("click", () => {
  if (leftNumber !== 1 && rightNumber !== 1) {
    goLeft();
  }
});

buttonRight.addEventListener("click", () => {
  if (rightNumber !== 1 && leftNumber !== 1) {
    goRight();
  }
});

let stopButton = document.querySelector(".buttonStop");
stopButton.setAttribute("disabled", "");
let startButton = document.querySelector(".buttonStart");
let vertical = 4;
let horizontal = 6;
let item = ".item-" + vertical + horizontal;
let startItem = document.querySelector(item);

function goTop() {
  topNumber = 1;
  bottomNumber = 0;
  leftNumber = 0;
  rightNumber = 0;
  vertical--;

  startItem.style.backgroundColor = "white";
  item = ".item-" + vertical + horizontal;
  startItem = document.querySelector(item);
  startItem.style.backgroundColor = "blue";
  setTimeout(() => {
    if (topNumber == 1) {
      goTop();
    }
  }, 1 * 1000);
}

function goBottom() {
  topNumber = 0;
  bottomNumber = 1;
  leftNumber = 0;
  rightNumber = 0;
  vertical++;
  startItem.style.backgroundColor = "white";
  item = ".item-" + vertical + horizontal;
  startItem = document.querySelector(item);
  startItem.style.backgroundColor = "blue";

  setTimeout(() => {
    if (bottomNumber == 1) {
      goBottom();
    }
  }, 1 * 1000);
}

function goLeft() {
  topNumber = 0;
  bottomNumber = 0;
  leftNumber = 1;
  rightNumber = 0;
  horizontal--;
  startItem.style.backgroundColor = "white";
  item = ".item-" + vertical + horizontal;
  startItem = document.querySelector(item);
  startItem.style.backgroundColor = "blue";

  setTimeout(() => {
    if (leftNumber == 1) {
      goLeft();
    }
  }, 1 * 1000);
}

function goRight() {
  topNumber = 0;
  bottomNumber = 0;
  leftNumber = 0;
  rightNumber = 1;
  horizontal++;
  startItem.style.backgroundColor = "white";
  item = ".item-" + vertical + horizontal;
  startItem = document.querySelector(item);
  startItem.style.backgroundColor = "blue";

  setTimeout(() => {
    if (rightNumber == 1) {
      goRight();
    }
  }, 1 * 1000);
}

function startGame() {
  startItem.style.backgroundColor = "blue";
  goTop();
}

startButton.addEventListener("click", () => {
  startButton.setAttribute("disabled", "");
  stopButton.removeAttribute("disabled");
  startGame();
});
stopButton.addEventListener("click", () => {
  stopButton.setAttribute("disabled", "");
  startButton.removeAttribute("disabled");
});

// function nextItem() {
//   startItem.style.backgroundColor = "blue";
//   vertical++;
//   setTimeout(() => {
//     startItem.style.backgroundColor = "white";
//     item = ".item-" + vertical + horizontal;
//     startItem = document.querySelector(item);
//     next();
//   }, 1 * 1000);
// }

// startButton.addEventListener("click", () => {
//   startButton.setAttribute("disabled", "");
//   stopButton.removeAttribute("disabled");
//   next(); //Запуск Next
// });
// function next() {
//   //Next
//   if (startButton.hasAttribute("disabled") == true) {
//     nextItem();
//   }
// }

// stopButton.addEventListener("click", () => {
//   startButton.removeAttribute("disabled");
//   stopButton.setAttribute("disabled", "");
// });

// if (topNumber == 0 && bottomNumber == 0 && leftNumber == 0 && rightNumber == 0) {
//   goTop()
// }
