let container = document.querySelector('.container');
let search = document.querySelector('.search-box button');
let weatherBox = document.querySelector('.weather-box');
let weatherDetails = document.querySelector('.weather-details');
let error = document.querySelector('.not-found');

search.addEventListener('click', () => {
    let ApiKey = '93bbbf1a54364548f7080778169453da';
    let city = document.querySelector('.search-box input').value;

    if(city === '') 
        return;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=tr&units=metric&appid=${ApiKey}`)
        .then(response => response.json())
        .then(json => {

            let image = document.querySelector('.weather-box img');
            let temp = document.querySelector('.weather-box .temperature');
            let desc = document.querySelector('.weather-box .description');
            let humi = document.querySelector('.weather-details .humidity span');
            let wind = document.querySelector('.weather-details .wind span');

            switch(json.weather[0].main){
                case 'Clear':
                    image.src = 'images/clear.png';
                    break;
                case 'Rain':
                    image.src = 'images/rain.png';
                    break;
                case 'Snow':
                    image.src = 'images/snow.png';
                    break;
                case 'Clouds':
                    image.src = 'images/clouds.png';
                    break;
                case 'Haze':
                    image.src = 'images/haze.png';
                    break;
                default:
                    image.src = '';
            }

            temp.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            desc.innerHTML = `${json.weather[0].description}`;   
            humi.innerHTML = `%${json.main.humidity}`;
            wind.innerHTML = `${json.wind.speed} km/s`;   
            
            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '605px';
        });
    

});