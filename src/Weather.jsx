import React, { useState} from 'react'
import axios from 'axios'
import './App.css'
const Weather = () => {

const [city , setCity] = useState('')
const [weatherData , setWeatherData] = useState(null)



const fetchData  = async() => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e4612fcd6ba51983db074d796d2d019d`)
        console.log(response.data)
        setWeatherData(response.data)
    } catch (error) {
        console.error('Error', error)
    }
}


const handleInput = (e) =>{
    setCity(e.target.value)
}

const handleChange  = (e) =>{
    e.preventDefault()
    fetchData()
}
  return (
    <div>
      <form onSubmit={handleChange}>
        <input type="text"
        placeholder='Enter name of the city'
        value={city}
        onChange={handleInput} />
        <button type="submit">Get Weather</button>
      </form>


    {
        weatherData ? (
            <>
            <h2>{weatherData.name}</h2>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Description: {weatherData.weather[0].description}</p>
            <p>Feels like : {weatherData.main.feels_like}°C</p>
            <p>Humidity : {weatherData.main.humidity}%</p>
            <p>Pressure : {weatherData.main.pressure}</p>
            <p>Wind Speed : {weatherData.wind.speed}m/s</p>
            </>
        ) : (
            <p>Loading weather data...</p>
        )
    }
        </div>
  )
}

export default Weather

