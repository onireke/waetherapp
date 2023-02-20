import React from "react";
import Image from "next/image";

function Weather({ data }) {
  console.log(data);
  return (
    <div className="weather">
      <div className="top">
        <div className="top-inner">
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="/"
            width="100"
            height="100"
          />
          <p className="weather-first">{data.weather[0].main}</p>
        </div>
        <p className="temp">{data.main.temp.toFixed(0)}&#176;</p>
      </div>
    </div>
  );
}

export default Weather;
