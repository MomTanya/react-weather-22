import React, { useState } from "react";
import axios from "axios";
import "./Weather.css"

export default function Weather(props) {
   
    
    const [weatherData, setWeatherData] = useState({ready: false });
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt*1000 ),
            description: response.data.wether[0].descripption,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/rain.png",
            wind: response.data.wind.spead,
            city: response.data.name
        });
       
    }

   
    if (Weather.Data.ready) {

    return (
    <div className="Weather">
        
        <form>
           <div className="row">
              < div className="col-9">
                 <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on"/>
              </div>
              <div className="col-3">
                 <input type="submit" value="Search" className="btn btn-primary w-100" />
              </div>
            </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
            <li>Wednesday</li>
            <li>weatherData.description</li>
        </ul>

        <div className="row mt-3">
            <div className="col-6">
                <div className="clearfix">
                   <img src="https://ssl.gstatic.com/onebox/weather/64/rain.png" alt="rain" className="float-left"/>
                  <span className="float-left">
                    <span className="tempereture">{Math.round(weatherData.temperature)}</span>
                    <spam className="unit">°C </spam>
                  </span>
                 </div>
            </div>
        
            <div className="col-6">
               <ul>
                   <li>Precipication: 15%</li>
                   <li>Humodity:{weatherData.humidity} %</li>
                   <li>Wind: {weatherData.wind} km/h</li>
               </ul>  
            </div>
        </div>   
    </div>
    );
    } else {
        const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }
}