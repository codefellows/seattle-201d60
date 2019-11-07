'use strict';

var stuff = ['popcorn', 'korn album', 'french fries', 'phone case'];
var answer = prompt('what is your favorite random thing?');

var flag;

for (var i = 0; i < stuff.length; i++) {
  console.log('current item:', stuff[i]);

  if (answer === stuff[i]) {
    alert('nice job, i really like' + ' ' + stuff[i]);
    break;
  }
}

if (!flag) {
  alert('no, you are incorrect');
}