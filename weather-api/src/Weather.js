// Uses useState hooks
import React, { useState, useCallback} from 'react'
// Uses react-redux hooks
import  { useDispatch } from 'react-redux'
import { loadWeather } from './actions'

function Weather(props) {
    // Use state to track zip input
    const [ zip, setZip ] = useState('')
  
    // Alternatively use callback to handle submit
    // const handleSubmit = useCallback((e) => {
    //   e.preventDefault()
    //   console.log(e.target.elements)
    //   const zip = e.target.elements.zip.value
    //   dispatch(loadWeather(zip))
    // })
  
      const dispatch = useDispatch() // Get the dispatcher
  
      return (
        <div className="App">
          <form 
            // onSubmit={handleSubmit}
            onSubmit={e => {
              e.preventDefault()
              // Dispatch an action
              console.log('**********')
              dispatch(loadWeather(zip))
            }}
            >
  
            <input 
              name="zip"
              value={zip} 
              onChange={e => setZip(e.target.value)}
              type="text" 
              pattern="(\d{5}([\-]\d{4})?)"
              placeholder="enter zip"
            />
  
            <button type="submit">Submit</button>
                      
          </form>
        </div>
      );
  }
  
  export default Weather;
  