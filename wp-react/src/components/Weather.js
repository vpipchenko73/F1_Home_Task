import React, { useEffect, useState } from "react";
import axios from "axios";

function Weather (props) {
   
    const API_Syti1 =`https://api.openweathermap.org/data/2.5/onecall?lat=${
        props.lat}&lon=${props.lon}&units=metric&lang=en&APPID=${props.API_KEY}`
    
    if ( props.lat != 0 && props.lon !=0 ) {     
    useEffect(() => {
            axios.get(API_Syti1).then( res =>{
            //console.log(res.data);
            props.setWeather_current(res.data.current);
            props.setWeather_hourly(res.data.hourly);
            props.setWeather_daily(res.data.daily);
          
        });
    },[props.lat, props.lon]);
    }
   
    console.log(props.weather_current)
    console.log(props.weather_hourly)
    console.log(props.weather_daily)

    let dat = props.weather_current.sunrise;
    console.log((new Date(dat*1000)).toLocaleDateString());
 
  /*return (
      <div>
      <p>{API_Syti1}</p>
      <table className={"countries"}>
      <thead><tr><th>Date</th><th>Temperature</th><th></th></tr></thead>
      
        <tbody>
              {
                props.weather_daily.map(country =><tr>
                    <td>{new Date(country.dt * 1000).toLocaleDateString()}</td>
                    <td>{country.temp.day}</td>
                </tr>)
              }
              {
                props.weather_hourly.map(country =><tr>
                    <td>{new Date(country.dt * 1000).toLocaleDateString()}{'**'}{new Date(country.dt * 1000).toLocaleTimeString()}</td>
                    <td>{country.temp}</td>
                </tr>)
              }
        </tbody>
      </table>
      </div>     
        
  ) */

}

export default Weather;