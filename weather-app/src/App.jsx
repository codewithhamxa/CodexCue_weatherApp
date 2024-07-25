import React, { useState } from 'react';
import Search from './components/Search';
import WeatherCard from './components/WeatherCard';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  return (
    
    <div className="wrapper">
      <img src="/logo.png" alt="" width={160} className='logo'/>
      <h1></h1>
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      <div className="card">
        <Search setWeatherData={setWeatherData} setError={setError} />
        {weatherData && <WeatherCard weatherData={weatherData} />}
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default App;
