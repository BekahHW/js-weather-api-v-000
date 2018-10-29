function getFahrenheit(result){
  // Your code goes here
  return result.map(function(hour){
    return hour.temperature
  })
}

function getHour(result){
  // Your code goes here
  return result.map(function(hour){
    let newHour = new Date(hour.time*1000)
    return newHour.getHours()
  })
}

function generateDataSet(labels, data) {
  return {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: "NYC Weather Data",
          data: data,
          backgroundColor: "rgba(100,150,220,0.2)",
          borderColor: 'rgb(255, 99, 132)'
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
  return fetch(endpoint)
    .then(res => res.json())
      .then(json => {
        let hourlyData = json.hourly.data
        // After your fetch works - use your json data with the line below :)
        const tempChart = new Chart(canvas, generateDataSet(getHour(hourlyData), getFahrenheit(hourlyData)))
  })
}
