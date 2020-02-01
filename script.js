'use strict';

function guess() {
  let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  let randomNumber = Math.floor(Math.random() * Math.floor(100)) + 1;
  console.log('Рандомное число: ', randomNumber);

  let attempts = 10;
  console.log('Количество попыток: ', attempts);

  let numberСheck = function () {
    let userNumber = prompt('Введите число от 1 до 100');
    if (userNumber === null) {
      alert('Спасибо за игру');
    } else if (isNumber(userNumber)) {
      userNumber = +userNumber;
      if (userNumber > randomNumber) {
        attempts--;
        alert('Загаданное число меньше, осталось попыток ' + attempts);
        if (attempts === 0) {
          let end = confirm('Попытки закончились, хотите сыграть еще?');
          if (end === true) {
            attempts = 10;
            return guess();
          }
          else {
            alert('Спасибо за игру');
          }
        }
        numberСheck();
      } else if (userNumber < randomNumber) {
        attempts--;
        alert('Загаданное число больше, осталось попыток ' + attempts);
        if (attempts === 0) {
          let end = confirm('Попытки закончились, хотите сыграть еще?');
          if (end === true) {
            attempts = 10;
            return guess();
          }
          else {
            alert('Спасибо за игру');
          }
        }
        numberСheck();
      } else {
        alert('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
        return guess();

      }
    } else {
      alert('Введи число!');
      numberСheck();
    }
  };
  return numberСheck();
}

guess();