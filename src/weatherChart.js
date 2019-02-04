function formatHours(hourlyData){
  return hourlyData.map(makeHours)
}

function makeHours(hours){
  return new Date(hours.time * 100).getHours()
}

function formatFahrenheit(hourlyData){
  return hourlyData.map(temp => temp.temperature)

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
fetch("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/7b6a4fc55b830b8c6af3a0cdced9e6ee/42.3601,-71.0589")
  .then(function(response) {
    return response.json();
  })
  .then(weatherData => {
      // convert darksky timestamps
      const formattedHours = formatHours(weatherData.hourly.data)
      // extract temperatures from darksky data
      const formattedTemps = formatFahrenheit(weatherData.hourly.data)
      const chartDataset = generateDataSet(formattedHours, formattedTemps)
      new Chart(canvas, chartDataset)

    }
  )

  // create config object for chart.js
  // append the chart to the DOM

}
