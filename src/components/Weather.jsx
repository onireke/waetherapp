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
        <div>
          <div>
            <p>{data.main.feels_like.toFixed(0)}&#176;</p>
            <p>Feels Like</p>
          </div>

          <div>
            <p>{data.main.humidty}%</p>
            <p>Humidity</p>
          </div>

          <div>
            <p>{data.wind.speed.toFixed(0)} MPH</p>
            <p>Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
