import React, { useState } from 'react';

const apiKey = "3b74d44f87e546df8200679f114a5448";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

function Search({ setWeatherData, setError }) {
  const [city, setCity] = useState('');

  const checkWeather = async (city) => {
    try {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (error) {
      setWeatherData(null);
      setError(error.message);
    }
  };

  return (
    <div className="search">
      <input 
        type="text" 
        placeholder="Enter City Name" 
        spellCheck="false" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        required
      />
      <button onClick={() => checkWeather(city)}>
        <img src="/images/search.png" alt="search icon" />
      </button>
    </div>
  );
}

export default Search;
