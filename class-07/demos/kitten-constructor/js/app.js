'use strict';

// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

// Each kitten's profile should have:
// - name
// - random age assigned
// - a list of what they like
// - an image
// good with kids
// good with dogs
// good with other cats\

function Kitten(kittenName, imgUrl, likesList, goodWithDogs, goodWithKids, goodWithOtherCats) {
  this.name = kittenName;
  this.likes = likesList;
  this.age = this.getRandomAge();
  this.imgUrl = imgUrl;
  this.goodWithDogs = goodWithDogs;
  this.goodWithKids = goodWithKids;
  this.goodWithOtherCats = goodWithOtherCats;
}

Kitten.prototype.getRandomAge = function () {
  return randomInRange(3, 12) + ' months';
}

Kitten.prototype.render = function(container) {
  
  var article = addElement('article', container);

  addElement('h2', article, this.name);

  addElement('p', article, `This adorable kitty is ${this.age} old`);

  var likesListElem = addElement('ul', article);

  for (var i = 0; i < this.likes.length; i++) {
    addElement('li', likesListElem, this.likes[i])
  }

  // add image
  var imgElem = addElement('img', article);
  imgElem.setAttribute('src', this.imgUrl);
  imgElem.setAttribute('alt', `Adorable photo of ${this.name}`);


  // add table
  var tableElem = addElement('table', article);
 
  var headerRowElem = addElement('tr', tableElem);

  addElement('th', headerRowElem, 'Good with Kids');
  addElement('th', headerRowElem, 'Good with Dogs');
  addElement('th', headerRowElem, 'Good with Other Cats');

  var dataRowElem = addElement('tr', tableElem);

  addElement('td', dataRowElem, this.goodWithKids);
  addElement('td', dataRowElem, this.goodWithDogs);
  addElement('td', dataRowElem, this.goodWithOtherCats);


}

// standalone function
function addElement(tag, container, text) {
  var element = document.createElement(tag);
  container.appendChild(element);
  element.textContent = text;
  return element;
}

function randomInRange (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var kittenContainer = document.getElementById('kittenProfiles');

var kittens = [];

kittens.push(new Kitten('Frankie Orlando', 'images/frankie.jpeg',['cuddling','catnip','lasers'], true, false, false));
kittens.push(new Kitten('Serena', 'images/serena.jpeg', ['gourmet food', 'petting', 'obedience'], false, true, true));
kittens.push(new Kitten('Jumper', 'images/jumper.jpeg', ['dogs','rough housing','jumping'], true, false, false));

for(var i = 0; i < kittens.length; i++) {
  var kitten = kittens[i];
  kitten.render(kittenContainer);
}


