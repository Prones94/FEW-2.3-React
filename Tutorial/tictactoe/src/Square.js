import React from 'react'
import { PropTypes } from 'prop-types';
import './App.css'


function Square({ onClick, value }) {
    return (
        <button className="square" onClick={onClick} type="button">
            {value}
        </button>
    )
}

export default Square
