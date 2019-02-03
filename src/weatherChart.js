function formatHours(hourlyData){
  // your code here
}

function formatFahrenheit(hourlyData){
  // your code here
}

function generateDataSet(hours, temperatures) {
  return {
    type: "line",
    data: {
      labels: hours,
      datasets: [
        {
          label: "NYC Weather Data",
          data: temperatures,
          backgroundColor: "rgba(100,150,220,0.2)",
          borderColor: "rgb(255, 99, 132)"
        }
      ]
    },
    options: {
      // additional configurations here
    }
  }
}

function makeRequest(endpoint, canvas) {
  // Your code goes here
  // After your fetch works - format the response using the helper functions above:
  // convert darksky timestamps
  // const formattedHours = formatHours(/*data from darksky*/)
  // extract temperatures from darksky data
  // const formattedTemps = formatFahrenheit(/*data from darksky*/)
  // create config object for chart.js
  // const chartDataset = generateDataSet(formattedHours, formattedTemps)
  // append the chart to the DOM
  // new Chart(canvas, chartDataset)
  fetch("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/7b6a4fc55b830b8c6af3a0cdced9e6ee/42.3601,-71.0589")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
}
