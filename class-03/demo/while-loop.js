'use strict';

var number;
var counter = 1;

while(number !== 20) {
  number = parseInt(prompt('what is your fav number?'));

  if (number < 20) {
    alert('you guessed too low');
    counter++;
  } else if (number > 20) {
    alert('you guessed too high');
    counter++;
  } else if (number === NaN || number === null) {
    alert('please enter a real number');
    counter++;
  }
}

console.log('current count:', counter);