export const LOAD_WEATHER = 'LOAD WEATHER'
export const WEATHER_SUCCESS = 'WEATHER_SUCCESS'
export const WEATHER_ERROR = 'WEATHER_ERROR'

export const weatherSucces = data => {
    return {
        type: WEATHER_SUCCESS,
        payload: { data }
    }
}

export const weatherError = error => {
    return {
        type: WEATHER_ERROR,
        payload: { error }
    }
}

// Use of thunk! => Function wraps an action
export const loadWeather = zip => {
    return async (dispatch) => {
        console.log(zip, dispatch)
        // returns a function! => This function receives the dispatcher
        const apikey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY
        const url = `https://api.openweathermap.org/data/2.5/weather?units=imperial&zip=${zip},us&appid=${apikey}`
        console.log(url);
        try {
            const res = await fetch(url)
            const json = await res.json()
            // Calls the dispatcher with an action
            console.log(json);
            dispatch(weatherSucces(json))
        } catch(err) {
            dispatch(weatherError(err))
            }
    }
}