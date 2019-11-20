var context = document.getElementById('chart').getContext('2d');

var dataSet = [12, 6, 24, 5, 3, 9];
var itemNames = ['clock', 'watch', 'bigfoot', 'apple', 'TV', 'Blingy Red Shoes'];
var chartColors = ['black', 'white', 'brown', 'green', 'blue', 'red'];

var myChart = new Chart(context, {
  type: 'bar',
  data: {
    labels: itemNames,
    datasets: [{
      label: '# of Votes',
      data: dataSet,
      backgroundColor: chartColors
    }]
  },
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