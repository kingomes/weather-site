import './styles.css'
import Navbar from './components/Navbar'
import { useState } from 'react'
import axios, { AxiosResponse } from 'axios'

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');

async function getData() {
  const options = {
      method: 'GET',
      url: `https://${import.meta.env.VITE_API_HOST}/city/${city}/EN`,
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_API_HOST
      }
    };
    
    try {
        const response : AxiosResponse<any, any> = await axios.request(options);
        setWeatherData(response.data)
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}

// useEffect(() => {
//   getData();
// }, []);

  function handleChange(event) {
    setCity(event.target.value)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    getData()
  }

  return (
    <div>
      <Navbar/>
      <form className = 'weather-form' onSubmit = {handleSubmit}>
        <input type = 'text' placeholder = 'City' value = {city} onChange = {handleChange}/>
        <button className = 'submit-btn' type = 'submit'>FETCH</button>
      </form>
      { weatherData ? (
        <>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°F</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Feels like : {weatherData.main.feels_like}°F</p>
          <p>Humidity : {weatherData.main.humidity}%</p>
          <p>Pressure : {weatherData.main.pressure}</p>
          <p>Wind Speed : {weatherData.wind.speed}m/s</p>
          <img src = 'icons/${weatherData.weather[0].icon}.png'/>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  )
}