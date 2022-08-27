let apikey = '53f4ed0ce41f387bef450f839f69ec9b'
let country
let lat =`30.04"`
let long = `75.15"`
let temperaturevalue = document.querySelector('.temperature-value h2');
let temperatureunit = document.querySelector('.temperature-value span');
let weatherlocation = document.querySelector('.location h1');
let icon = document.querySelector('.icon')
let description = document.querySelector('.description');
let img;
let units = "f";

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position=>{
        long = position.coords.longitude;
        lat = position.coords.latitude;
        fetch(`http://api.weatherstack.com/current?access_key=${apikey}&query=${lat},${long}`)
        .then((response)=>{return response.json()})
        .then((data)=>{
            console.log(data);
            const{temperature , summary}= data.current;
            temperaturevalue.textContent = temperature;
            weatherlocation.textContent = data.location.name
            description.textContent = data.current.weather_descriptions;
            img = new Image()
            img.src = data.current.weather_icons;
            icon.appendChild(img);
            temperatureunit.addEventListener('click',()=>{
                console.log("yes")
                if(temperatureunit.innerText == "°F"){
                      temperatureunit.innerText = "°C"
            temperaturevalue.textContent = temperature;

                }
                else{
                     temperaturevalue.textContent = ((temperature * 9/5) + 32 ) 
                    temperatureunit.innerText = "°F"
                }
                console.log(units)
            })
        })
        
    })
}