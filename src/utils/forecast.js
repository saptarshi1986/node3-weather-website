const request = require('request')

const forecast = (latitude, longitude, callback) => {
    //const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude
    const url = 'http://api.weatherstack.com/current?access_key=d26b96347163646e6cf37592af23ebbe&query=' + longitude + ',' + latitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out, It feels like ' + body.current.feelslike + ' degrees out')
        }
    })
}

module.exports = forecast

//const url = 'http://api.weatherstack.com/current?access_key=d26b96347163646e6cf37592af23ebbe&query=' + longitude + ',' + latitude
//callback(undefined, response.body.current.weather_descriptions[0] + '. It is currently ' +  response.body.current.temperature + ' degrees out, It feels like ' + response.body.current.feelslike + ' degrees out')