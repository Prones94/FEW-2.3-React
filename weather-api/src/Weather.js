import React from 'react'
import Temperature from './Temperature'
import  WeatherDescription  from './WeatherDescription'
import Atmosphere from './Atmosphere'

export default function Weather(props) {
    if(props.weatherData === null){
        return null
    }

    const { main, description, icon } = props.weatherData.weather[0]
    const { temp, pressure, humidity, temp_min, temp_max} = props.weatherData.main

    return (
        <div>
            <WeatherDescription main={main} description={description} icon = {icon} />
            <Temperature temp = {temp} />
            <Atmosphere 
                temp ={temp} 
                pressure={pressure} 
                humidity={humidity} 
                temp_min={temp_min}
                temp_max={temp_max}
                />
        </div>
    )
}