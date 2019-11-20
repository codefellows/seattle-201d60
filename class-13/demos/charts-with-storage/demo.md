```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Charts Demo</title>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>
  </head>
  <body>
    <canvas id="chart"></canvas>
    <script type="text/javascript" src="chartdata.js"></script>
  </body>
</html>
```  

Then, talk about `chartdata.js` from the prior class's demo:  
```javascript
var context = document.getElementById('my-chart').getContext('2d');

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
```  

Then, back in `app.js` add the following function:  
```javascript
//function to save to localStorage
function saveStatsToLocalStorage(dataSet){
  var productStats = [];
  for (var i = 0; i < dataSet.length; i++) {
    productStats.push(dataSet[i]);
  }
  console.log(JSON.stringify(productStats));
  localStorage.productStats = JSON.stringify(productStats);
}

saveStatsToLocalStorage(dataSet);
```  

Then, in `app.js`, comment out the following:  
```javascript
// var data = [12, 4, 9, 3, 100, 55, 31];
```  

Then add the following where `data` was:  
```javascript
var dataSet = JSON.parse(localStorage.productStats);
console.log(dataSet);
```  

## CSS Animations  
A good resource for css psuedo selectors:
https://css-tricks.com/pseudo-class-selectors/  

In `index.html`, add the following `div` underneath our chart `div`:
```html
<div class="hello"></div>
```  

in css, add the following:  
```css
.hello {
  width: 400px;
  height: 400px;
  background: #2db34a;
  border-radius: 6px;
  transition: background .2s linear, border-radius .5s ease-in, width .25s ease-in-out;
}

.hello:hover {
  width: 1000px;
  background: #ff7b29;
  border-radius: 50%;
}
```  
