import React from 'react';

function WeatherCard({ weatherData }) {
  const getWeatherIcon = (main) => {
    switch (main) {
      case "Clouds":
        return "/images/clouds.png";
      case "Clear":
        return "/images/clear.png";
      case "Rain":
        return "/images/rain.png";
      case "Drizzle":
        return "/images/drizzle.png";
      case "Mist":
        return "/images/mist.png";
      default:
        return "/images/clear.png";
    }
  };

  return (
    <div className="weather">
      <div className="condition">
        <img src={getWeatherIcon(weatherData.weather[0].main)} className="weather-icon" alt="weather icon" />
        <div>
          <p className="main">{weatherData.weather[0].main}</p>
          <p className="description">{weatherData.weather[0].description}</p>
        </div>
      </div>
      <h1 className="temp">{Math.round(weatherData.main.temp)}°C</h1>
      <h2 className="city">{weatherData.name}</h2>
      <div className="details">
        <div className="col">
          <img src="/images/humidity.png" alt="humidity icon" />
          <div>
            <p className="humidity">{weatherData.main.humidity}%</p>
            <p>Humidity</p>
          </div>
        </div>
        <div className="col">
          <img src="/images/wind.png" alt="wind icon" />
          <div>
            <p className="wind">{weatherData.wind.speed} km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
