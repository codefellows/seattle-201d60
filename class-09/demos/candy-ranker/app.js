var form = document.getElementById('candy-form');

function Candy(candyName, candyRank) {
  this.name = candyName;
  this.rank = candyRank;
}

Candy.counter = 0;

Candy.prototype.render = function() {
  var tbody = document.getElementById('candy-entries');
  var row = document.createElement('tr');
  tbody.appendChild(row);

  var nameTD = document.createElement('td');
  row.appendChild(nameTD);
  nameTD.textContent = this.name;

  var rankTD = document.createElement('td');
  row.appendChild(rankTD);
  rankTD.textContent = this.rank;

}


function submitHandler(event) {
  event.preventDefault();
  var candy = new Candy(event.target.candyName.value, parseInt(event.target.candyRank.value));

  event.target.reset();

  candy.render();

  Candy.counter++;

  var candyCountElem = document.getElementById('candy-count');
  candyCountElem.textContent = Candy.counter;

}

form.addEventListener('submit', submitHandler);