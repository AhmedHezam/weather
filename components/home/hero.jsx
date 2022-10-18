import React from 'react'
import Image from "next/image";

const Hero = ({ cities, weather, handleClick, search }) =>{
return (
    <div className="main">
        
        <span className="title">the.weather</span>
        <div className="footer">
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
        <div className="form">
            <div className="srch">
                <input className="srchbar" type="search" placeholder="Another location" name="" id=""
                // onKeyUp={(ev) =>{ 
                //     if(ev.key == "Enter"){
                //     search();
                // }
                // }}
                />
                <button className="btn"></button>
            </div>
            <div className="lisnav">
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
            <div className="lisnav2">
                <h3>Weather Details</h3>
                <div className="footer-form">
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