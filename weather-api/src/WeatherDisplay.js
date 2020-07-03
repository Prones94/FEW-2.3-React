import React from 'react'
import { useSelector } from 'react-redux'

export default function WeatherDisplay(props){
    const data = useSelector(state => state.weather)
    console.log('***********************************************');
    console.log(data);
    if (data === null) {
        return null
    } else if (data.cod != '200'){
        return <div>{data.message}</div>
    }
    const { name, cod, dt, sys, wind, clouds, coord } = data
    const { main, description, icon } = data.weather[0]
    const { temp, pressure, humidity, temp_min, temp_max } = data.main

    return(
        <div className="WeatherDisplay">
            <div>{name}</div>
            <div>{description}</div>
            <div className="temp">{temp.toFixed(1)}</div>
            <div>Temp Min: {temp_min} Max: {temp_max}</div>
        </div>
    )
}
