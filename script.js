
  let city=document.querySelector(".search-bx")

const searchButton=document.getElementById("search-button")
const apiData = {
  url: `https://api.openweathermap.org/data/2.5/weather?q=`,
  key: `9b81d3e4265e2d1a5b8b73f1591ec139`,
};

async function getWeather(countryName) {
  //console.log(searchBox.value)
 
const response =await fetch(`${apiData.url}${countryName}&appid=${apiData.key}`) 
var data=await response.json();
 
  console.log(data) 
  
document.getElementById ("location "). innerText=`${data.name}, ${data.sys.country}`;
 document.getElementById ("temp").innerText=`${Math.floor(data.main.temp - 273.15)} °c`;
 document.getElementById ("weather").innerText=`${data.weather[0].main}`;
  
   document.getElementById ("min-max"). innerText=`${Math.floor(data.main.temp_min - 273.15)} °c/${Math.floor(data.main.temp_max - 273.15)} °c`;
  
  console.log (data.sys.country)
  
  
  
  
 } ;
 function searchData() {
   
 const cityName=city.value;
   console.log (cityName) ;

     
getWeather(cityName);
   

   
     
  }
searchButton.addEventListener("click", searchData) 
	
