const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '45dee0f5bcmshdb1d818c09840ecp1a7aaejsn2e687ba933c3',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

let container=document.querySelector('.container');
let body=document.querySelector('body');

const getWeather=(city)=>{
fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    cloud_pct.innerHTML = response.cloud_pct;
    feels_like.innerHTML = response.feels_like;
    humidity.innerHTML = response.humidity;
    
    max_temp.innerHTML = response.max_temp;
    min_temp.innerHTML = response.min_temp;
    sunrise.innerHTML = response.sunrise;
    sunset.innerHTML = response.sunset;
    temp.innerHTML = response.temp;
   
    // wind_degrees.innerHTML = response.wind_degrees;
    wind_speed.innerHTML = response.wind_speed;
    // wind_speed2.innerHTML = response.wind_speed;
    cityName.innerHTML = city;
   
   
   
    if(response.cloud_pct<=60)
        {
          console.log(response.cloud_pct); 
          container.style.background="url('images/sunny1.jpg')"; 
          body.style.background="url('images/Desktop\ -\ 1.png')";          
          png.src="./images/sunnypng.png";        
          container.style.backgroundSize="cover"; 
          body.style.background="cover";
        }
        if(response.cloud_pct>=60)
        {
          console.log(response.cloud_pct); 
          container.style.background="url('images/cloudy.jpg')"; 
          body.style.background="url('images/Desktop\ -\ 2.jpg') ";          
          png.src="./images/icons8-rainy-weather-50.png";        
          container.style.backgroundSize="cover"; 
          body.style.background="cover";
         
        }

  })
  .catch((err) => console.error(err));
}

search.addEventListener( "click",(e)=>
{getWeather(city.value)
  console.log("City"+city.value); 


 e.preventDefault()
})

getWeather("Delhi")


