function Goat(name, imgUrl) {
  this.name = name;
  this.imgUrl = imgUrl;
  this.clickCtr = 0;
  this.shownCtr = 0;
}

Goat.voteCtr = 0;
Goat.voteMax = 5;

Goat.prototype.increaseClickCounter = function() {
  this.clickCtr++;
}

var leftGoat = new Goat('Emily', 'images/cruisin-goat.jpg');

var leftImageElem = document.getElementById('left_goat_img');

leftImageElem.setAttribute('src', leftGoat.imgUrl);

var leftNameElem = document.getElementById('left_goat_h2');

leftNameElem.textContent = leftGoat.name;

var rightGoat = new Goat('James', 'images/sassy-goat.jpg');

var rightImageElem = document.getElementById('right_goat_img');

var rightNameElem = document.getElementById('right_goat_h2');

// rightImageElem.setAttribute('src', james.imgUrl);
rightImageElem.src = rightGoat.imgUrl;

rightNameElem.textContent = rightGoat.name;

leftImageElem.addEventListener('click', clickHandler);
rightImageElem.addEventListener('click', clickHandler);

function clickHandler(event) {
  var id = event.target.id;

  leftGoat.shownCtr++;
  rightGoat.shownCtr++;

  if(id == 'left_goat_img') {
    leftGoat.increaseClickCounter();
  } else if('right_goat_img') {
    rightGoat.increaseClickCounter();
  }

  Goat.voteCtr++;

  console.log('leftGoat.clickCtr : ', leftGoat.clickCtr, leftGoat.shownCtr);
  console.log('rightGoat.clickCtr : ', rightGoat.clickCtr, rightGoat.shownCtr);
  console.log('Goat.voteCtr : ', Goat.voteCtr);

  if(Goat.voteCtr == Goat.voteMax) {
    leftImageElem.removeEventListener('click', clickHandler);
    rightImageElem.removeEventListener('click', clickHandler);
  }


}

