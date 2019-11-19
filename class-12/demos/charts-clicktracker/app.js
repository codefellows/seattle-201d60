'use strict';

// Global vars
var likeCounter = 0;
var workingGoats = [];
var leftGoatThatIsOnThePage;
var rightGoatThatIsOnThePage;
var previouslyPickedGoats = [];

// References to the DOM TODO: refactor
var leftImage = document.getElementById('left_goat_img');
var rightImage = document.getElementById('right_goat_img');
var leftCaption = document.getElementById('left_goat_caption');
var rightCaption = document.getElementById('right_goat_caption');



var allGoatContainerSectionEl = document.getElementById('all_goats');
// =======================================
// Constructors
// =======================================

var GoatImage = function(url, name){
  this.imageUrl = url;
  this.name = name;
  this.clicks = 0;

  GoatImage.all.push(this);
};

GoatImage.all = [];






GoatImage.getSafeRandom = function(forbidden=[]) {

  if(workingGoats.length == 0) {
    workingGoats = GoatImage.all.slice();
    shuffle(workingGoats);
  }

  var goat = workingGoats.pop();

  while(forbidden.includes(goat)) {
    workingGoats.unshift(goat);
    goat = workingGoats.pop();
  }
  
  return goat;
}







// =======================================
// Other Functions
// =======================================
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function handleClickOnBothGoats(event){
  if(event.target.tagName !== 'IMG'){
    return;
  }
  // if some other other thing is wrong, stop (return)
  // iof another thing is wrong, stop

  console.log('clicked on a goat');
  //increment total clicks
  likeCounter++;
  // increment left goat's clicks

  //TODO: refactor
  if(event.target.id === 'left_goat_img'){
    leftGoatThatIsOnThePage.clicks++;
  }
  if(event.target.id === 'right_goat_img'){
    rightGoatThatIsOnThePage.clicks++;
  }

  leftGoatThatIsOnThePage = GoatImage.getSafeRandom(previouslyPickedGoats);
  previouslyPickedGoats.push(leftGoatThatIsOnThePage);
  rightGoatThatIsOnThePage = GoatImage.getSafeRandom(previouslyPickedGoats);
  previouslyPickedGoats = [leftGoatThatIsOnThePage, rightGoatThatIsOnThePage];

  // and put them on the page
  leftImage.src = leftGoatThatIsOnThePage.imageUrl;
  rightImage.src = rightGoatThatIsOnThePage.imageUrl;

  leftCaption.textContent = leftGoatThatIsOnThePage.name;
  rightCaption.textContent = rightGoatThatIsOnThePage.name;

  
  // stop after 10 clicks
  if(likeCounter > 9){
    // stop listening for clicks on the left and right goat
    allGoatContainerSectionEl.removeEventListener('click', handleClickOnBothGoats);
    makeAGoatChart();
  }

}

// ===================================
// Initialize the Page
// ===================================

allGoatContainerSectionEl.addEventListener('click', handleClickOnBothGoats);

// Instantiate GoatImage objects
new GoatImage('./images/cruisin-goat.jpg', 'Cruisin Goat');
new GoatImage('./images/float-your-goat.jpg', 'Float Goat');
new GoatImage('./images/goat-out-of-hand.jpg', 'Hand Goat');
new GoatImage('./images/kissing-goat.jpg', 'Kiss Goat');
new GoatImage('./images/sassy-goat.jpg', 'Sass Goat');
new GoatImage('./images/smiling-goat.jpg', 'Smile Goat');
new GoatImage('./images/sweater-goat.jpg', 'Sweet Goat');

// When I first load the page, I need to know which goat is left and right, sso they can track their clicks in the javascript
leftGoatThatIsOnThePage = GoatImage.getSafeRandom();
rightGoatThatIsOnThePage = GoatImage.getSafeRandom();




// ==================================
// ChartJs Implementation
// ==================================

function makeAGoatChart(){

  var goatNamesArray = [];
  var goatLikesArray =[];

  for(var i = 0; i < workingGoats.length; i++){
    var singleGoatName = workingGoats[i].name;
    goatNamesArray.push(singleGoatName);
  }

  for(var i = 0; i < workingGoats.length; i++){
    var singleGoatLikes = workingGoats[i].clicks;
    goatLikesArray.push(singleGoatLikes);
  }

  var ctx = document.getElementById('goatChart').getContext('2d');
  var goatChart = new Chart(ctx, {
  // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: goatNamesArray,
      datasets: [{
        label: 'Goat Likes',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: goatLikesArray
      }]
    },

    // Configuration options go here
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
