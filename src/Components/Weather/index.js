import './style.css'
import { useContext } from 'react'
import { WeatherContext } from '../../context/WeatherContext'

function Weather() {
  const { weather } = useContext(WeatherContext)

  const getTemp = () => {
    if (!weather) return 0
    return (weather.main.temp).toFixed(1)
  }

  return (
    <div className='temperature-box'>
      <span>Temperatura em Celsius</span>
      <p className='temperature'>{getTemp()}</p>
      <p>{weather ? weather.name : ''}</p>
    </div>
  )
}

export default Weather
