import WeatherIcon from './WeatherIcon'
import WeatherData from './WeatherData'
import '../WeatherForecast.css'

const WeatherForecast = ({ dayWeather }) => {
  return (
    <>
      <div className="weather">
        <h2>{dayWeather.day}</h2>
        <WeatherIcon img={dayWeather.img} imgAlt={dayWeather.imgAlt} />
        <WeatherData
          conditions={dayWeather.conditions}
          time={dayWeather.time}
        />
      </div>
    </>
  )
}

export default WeatherForecast
