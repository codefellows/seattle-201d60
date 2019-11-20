
function Apple(variety, sweetness, tartness) {
  this.variety = variety;
  this.sweetness = sweetness;
  this.tartness = tartness;
}

Apple.prototype.sayHi = function() {
  return `Hi ${this.variety}`;
}

var pippen = new Apple('Pippen', 4, 8.5);

var appleJSON = JSON.stringify(pippen);

localStorage.setItem('savedApple', appleJSON);

// var parsedAppleData = JSON.parse(appleJSON);

// var restoredAppleInstance = new Apple(parsedAppleData.variety, parsedAppleData.sweetness, parsedAppleData.tartness);

// console.log('restoredApple : ', restoredAppleInstance);



