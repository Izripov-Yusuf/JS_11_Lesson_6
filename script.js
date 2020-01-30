'use strict';

function guess() {
  let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  let randomNumber = Math.floor(Math.random() * Math.floor(100)) + 1;
  console.log('Рандомное число: ', randomNumber);

  let numberСheck = function () {
    let userNumber = prompt('Введите число от 1 до 100');
    if (userNumber === null) {
      alert('Игра закончена');
    } else if (isNumber(userNumber)) {
    userNumber = +userNumber;
      if (userNumber > randomNumber) {
        alert('Загаданное число меньше!');
        numberСheck();
      } else if (userNumber < randomNumber) {
        alert('Загаданное число больше!');
        numberСheck();
      } else {
        alert('Вы победили! Поздравляем!');
        return;
      }
    } else {
      alert('Введи число!');
      numberСheck();
    }
  };
  return numberСheck;
  }

let guessNumber = guess();
guessNumber();