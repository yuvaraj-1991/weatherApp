window.addEventListener('load', weatherInfo)

function weatherInfo() {
    let long
    let lat
    let apiKey = `cf9437372eca6cb9a4cd7cea4d828d01`
    let temperatureDescription = document.querySelector('.temperature-description')
    let temperatureDegree = document.querySelector('.temparature-degree')
    let locationTimezone = document.querySelector('.location-timezone')
    
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude
            lat = position.coords.latitude

            // tested working api <http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=cf9437372eca6cb9a4cd7cea4d828d01>

            //`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=cf9437372eca6cb9a4cd7cea4d828d01`

            // const api = `http://api.openweathermap.org/data/2.5/weather/&appid=${apiKey}/${lat},${long}`  
            
            //If you are facing any cors error use this
            // const proxy = 'https://cors-anywhere.herokuapp.com/'

            //Working API
            const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=cf9437372eca6cb9a4cd7cea4d828d01`

            fetch(api)
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data)
                const {temp} = data.main
                const {description} = data.weather
                console.log(temp)
                console.log(description)
                // temperatureDegree.innerHTML = temp
                // locationTimezone.innerHTML = sys.timezone
                // temperatureDescription.innerHTML = weather.description
            })
        })        
    }
}