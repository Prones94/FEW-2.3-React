import React from 'react'

export function Atmosphere(props){
    const { pressure, humidity, temp_min, temp_max} = props
    return (
        <div>
            <div>Pressure: {pressure}</div>
            <div>Humidity: {humidity}</div>
            <div>Temp Min: {temp_min}</div>
            <div>Temp Max: {temp_max}</div>
        </div>
    )
}