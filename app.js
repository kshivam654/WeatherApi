const request = require('request')

const url = 'http://api.weatherapi.com/v1/current.json?key=6c53af46d0854f87834115737202108&q=Kolkata'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.location)
})