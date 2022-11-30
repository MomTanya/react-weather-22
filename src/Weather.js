import React from "react";
import axios from "axios";
import "./Weather.css"

export default function Weather() {
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
        <h1>New York</h1>
        <ul>
            <li>Wednesday</li>
            <li>Rein</li>
        </ul>

        <div className="row mt-3">
            <div className="col-6">
                <div className="clearfix">
                   <img src="https://ssl.gstatic.com/onebox/weather/64/rain.png" alt="rain" className="float-left"/>
                  <span className="float-left">
                    <span className="tempereture">4</span>
                    <spam className="unit">°C </spam>
                  </span>
                 </div>
            </div>
        
            <div className="col-6">
               <ul>
                   <li>Precipication: 15%</li>
                   <li>Humodity: 72%</li>
                   <li>Wind: 13 km/h</li>
               </ul>  
            </div>
        </div>   
    </div>
    );
}