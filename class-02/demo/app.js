'use strict';

var kids = prompt('how may kids does brian have?');
console.log('number of kids:', kids);

var guitars = prompt('how many guitars does brian have?');
console.log('num guitars:', guitars);

if (kids === '3' || kids === '4') {
  console.log('kids eval:', 'great');
  // do stuff here
}

if (guitars === '3' && kids === '3') {
  console.log('guitars eval:', 'cool')
}