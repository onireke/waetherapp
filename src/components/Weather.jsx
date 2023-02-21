import React from "react";
import Image from "next/image";

function Weather({ data }) {
  console.log(data);
  return (
    <div className="weather">
      {/* Top */}
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

      {/* Bottom */}

      <div className="bottom">
        <p className="city-name">Weather in {data.name}</p>
        <div className="parameters">
          <div>
            <p className="param">{data.main.feels_like.toFixed(0)}&#176;</p>
            <p className="param-name">Feels Like</p>
          </div>

          <div>
            <p className="param">{data.main.pressure} Pa</p>
            <p className="param-name">Pressure</p>
          </div>

          <div>
            <p className="param">{data.wind.speed.toFixed(0)} MPH</p>
            <p className="param-name">Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
