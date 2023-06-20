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
let randomHorizonal;
let randomVertical;
let randomItem;
let newLevelItem;
let score = 0;
let arr = [];
let dontVar;
let dontVar2;
let arrSnake = arr[arr.length - (1 - score)];
let arrSnakeItem = document.querySelector(arrSnake);
let scoreText = document.querySelector(".score");
scoreText.innerHTML = `Score: ${score}`;
let lose1;
let lose2;
let lose3 = 0;
let record = 0;
let record1 = 0;
record = document.querySelector(".record");
record.innerHTML = `Record: ${0}`;

let restart = document.querySelector(".buttonRestart");
restart.addEventListener("click", () => {
  alert("Заленился делать эту кнопку :(");
});

function youLose() {
  stopButton.setAttribute("disabled", "");
  startButton.setAttribute("disabled", "");
  buttonTop.setAttribute("disabled", "");
  buttonBottom.setAttribute("disabled", "");
  buttonLeft.setAttribute("disabled", "");
  buttonRight.setAttribute("disabled", "");
  restart.style.display = "block";
  lose3 = 1;
  if (score > record1) {
    record1 = score;
    record.innerHTML = `Record: ${record1}`;
  }
}

function snakeLength() {
  arr.push(item);
  arrSnake = arr[arr.length - (1 - score)];
  arrSnakeItem = document.querySelector(arrSnake);
}
let whiteColor;
function deleteString() {
  arr.splice(0, 1);
  if (arr.length >= 1) {
    for (let value of arr) {
      whiteColor = document.querySelector(value);
      whiteColor.style.backgroundColor = "white";
    }
  }
}

function scorePlus() {
  if (item == randomItem) {
    arr.push(item);
    score++;
    randomItemFunc();
    scoreText.innerHTML = `Score: ${score}`;
  }
}

function randomItemFunc() {
  randomHorizonal = Math.round(Math.random() * 9);
  randomVertical = Math.round(Math.random() * 9);
  dontVar = ".item-" + randomHorizonal + randomVertical;
  dontVar2 = document.querySelector(dontVar);
  if (
    dontVar2.style.backgroundColor == "blue" ||
    dontVar2.style.backgroundColor == "white"
  ) {
    randomItemFunc();
  } else {
    randomItem = ".item-" + randomHorizonal + randomVertical;
    newLevelItem = document.querySelector(randomItem);
    newLevelItem.style.backgroundColor = "yellow";
  }
}
randomItemFunc();

newLevelItem.style.backgroundColor = "yellow";

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

function goGame() {
  item = ".item-" + vertical + horizontal;
  startItem = document.querySelector(item);
  deleteString();
  startItem.style.backgroundColor = "blue";
  scorePlus();
}

function snake() {
  arrSnakeItem.style.backgroundColor = "red";
}

function goTop() {
  if (vertical == 0 || lose3 == 1) {
    youLose();
  } else {
    scorePlus();
    arr.push(item);
    arrSnake = arr[arr.length - (1 + score)];
    arrSnakeItem = document.querySelector(arrSnake);
    arrSnakeItem.style.backgroundColor = "red";
    arrSnakeItem.innerHTML = "";
    topNumber = 1;
    bottomNumber = 0;
    leftNumber = 0;
    rightNumber = 0;
    lose1 = ".item-" + (vertical - 1) + horizontal;
    lose2 = document.querySelector(lose1);
    if (lose2.style.backgroundColor == "white") {
      youLose();
    }
    vertical--;

    goGame();
    setTimeout(() => {
      if (topNumber == 1) {
        goTop();
      }
    }, 1 * 1000);
  }
}

function goBottom() {
  if (vertical == 9 || lose3 == 1) {
    youLose();
  } else {
    scorePlus();
    arr.push(item);
    arrSnake = arr[arr.length - (1 + score)];
    arrSnakeItem = document.querySelector(arrSnake);
    arrSnakeItem.style.backgroundColor = "red";
    arrSnakeItem.innerHTML = "";
    topNumber = 0;
    bottomNumber = 1;
    leftNumber = 0;
    rightNumber = 0;
    lose1 = ".item-" + (vertical + 1) + horizontal;
    lose2 = document.querySelector(lose1);
    if (lose2.style.backgroundColor == "white") {
      youLose();
    }
    vertical++;
    goGame();
    setTimeout(() => {
      if (bottomNumber == 1) {
        goBottom();
      }
    }, 1 * 1000);
  }
}

function goLeft() {
  if (horizontal == 0 || lose3 == 1) {
    youLose();
  } else {
    scorePlus();
    arr.push(item);
    arrSnake = arr[arr.length - (1 + score)];
    arrSnakeItem = document.querySelector(arrSnake);
    arrSnakeItem.style.backgroundColor = "red";
    arrSnakeItem.innerHTML = "";
    topNumber = 0;
    bottomNumber = 0;
    leftNumber = 1;
    rightNumber = 0;
    lose1 = ".item-" + vertical + (horizontal - 1);
    lose2 = document.querySelector(lose1);
    if (lose2.style.backgroundColor == "white") {
      youLose();
    }
    horizontal--;
    goGame();
    setTimeout(() => {
      if (leftNumber == 1) {
        goLeft();
      }
    }, 1 * 1000);
  }
}

function goRight() {
  if (horizontal == 9 || lose3 == 1) {
    youLose();
  } else {
    scorePlus();
    arr.push(item);
    arrSnake = arr[arr.length - (1 + score)];
    arrSnakeItem = document.querySelector(arrSnake);
    arrSnakeItem.style.backgroundColor = "red";
    arrSnakeItem.innerHTML = "";
    topNumber = 0;
    bottomNumber = 0;
    leftNumber = 0;
    rightNumber = 1;
    lose1 = ".item-" + vertical + (horizontal + 1);
    lose2 = document.querySelector(lose1);
    if (lose2.style.backgroundColor == "white") {
      youLose();
    }
    horizontal++;
    goGame();
    setTimeout(() => {
      if (rightNumber == 1) {
        goRight();
      }
    }, 1 * 1000);
  }
}

function startGame() {
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
