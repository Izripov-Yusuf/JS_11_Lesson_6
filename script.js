'use strict';

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};



function game() {
  function getRandomNumber() {
    return function () {
      return Math.floor(Math.random() * 99 + 1);
    };
  }
  let randomNumber = getRandomNumber()();

  function tryCounter() {
    let count = 10;
    return function () {
      return --count;
    };
  }
  let count = tryCounter(),
    countOut = tryCounter();
  const guesses = function () {
    function getGuessNumber() {
      let guessNumber = '';
      guessNumber = prompt('Угадай число от 1 до 100');
      if (guessNumber === null) {
        return alert('Спасибо за игру');
      }
      if (!isNumber(guessNumber)) {
        alert('Введи число!');
        return getGuessNumber();
      }
      return +guessNumber;
    }
    let guessedNumber = getGuessNumber();
    console.log('Рандомное число: '+ randomNumber);

    if (count() === 0) {
      if (confirm('Попытки закончились, хотите сыграть еще?')) {
        return game();
      }
      else return alert('Спасибо за игру');
    }
    if (guessedNumber > randomNumber) {
      alert('Загаданное число меньше, осталось попыток:' + countOut());
      return guesses();
    }
    if (guessedNumber < randomNumber) {
      alert('Загаданное число больше, осталось попыток: ' + countOut());
      return guesses();
    }
    if (guessedNumber === randomNumber) {
      if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
        return game();
      }
      return alert('Спасибо за игру');
    }

  };
  guesses();
}
game();