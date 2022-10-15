import React, { useEffect, useState } from "react";

function Geo_position (props) {
   
  //let [lat, setLat] = useState(0);
  //let [lon, setLon] = useState(0);

  useEffect(() => {
  if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
      const { coords } = position;
      let Lat = coords.latitude;
      let Lon = coords.longitude;
      props.setLat (Lat);
      props.setLon (Lon);
      console.log (coords.latitude, coords.longitude);
      
    });
  }else {
    /* определить местоположение не возможно */
  }
  }, []);
  
  //console.log(lat, lon);
  /*     
  return (
      
      <p >Координаты определены-{props.lat} / {props.lon}</p> 
      
  ) */

}

export default Geo_position;