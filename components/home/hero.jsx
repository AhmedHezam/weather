import React from 'react'
import Image from "next/image";

const Hero = ({ cities, weather, handleClick, search }) =>{
return (
    <div class="main">
        
        <span class="title">the.weather</span>
        <div class="footer">
            <div><span>{weather.current.temperature}<sup>o</sup></span></div>
            <div>
                <span id="span">{weather.location.name}</span>
                <p>{weather.location.localtime}</p>
            </div>
            <div>
            <Image src={weather.current.weather_icons[0]} className="img" width={40} height={40} />
                <p>{weather.current.weather_descriptions[0]}</p>
            </div>
            
            
        </div>
        <div class="form">
            <div class="srch">
                <input className="srchbar" type="search" placeholder="Another location" name="" id=""
                onKeyUp={(ev) =>{ 
                    if(ev.key == "Enter"){
                    search();
                }
                }}
                />
                <button className="btn"></button>
            </div>
            <div class="lisnav">
                <ul>
                {cities.data.map((city) => (
          <li
          style={{ cursor: "pointer" }}
            onClick={() => {
              handleClick(city.capital);
            }}
          >
            {city.capital}
          </li>
        ))}
                </ul>
            </div>
            <div class="lisnav2">
                <h3>Weather Details</h3>
                <div class="footer-form">
                <div>
                <ul>
                    <li><a href="#">Cloudy</a></li>
                    <li><a href="#">Humidity</a></li>
                    <li><a href="#">Wind</a></li>
                    <li><a href="#">Wind_dir</a></li>
                </ul>
                </div>
                <div>
                <ul>
                    <li><a href="#"> {weather.current.cloudcover}</a></li>
                    <li><a href="#"> {weather.current.humidity}</a></li>
                    <li><a href="#"> {weather.current.wind_speed}</a></li>
                    <li><a href="#"> {weather.current.wind_dir}</a></li>
                </ul>
            </div>
                
            </div>
        </div>
        </div>



    
    </div>
    
)
}

export default Hero;