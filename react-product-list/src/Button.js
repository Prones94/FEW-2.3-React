import React from 'react'
import { categoriesWithCounts } from './data';

export function Button(props) {
    const {category, onClick, count } = props

    return <button 
                className= "Category"
                onClick = {() => onClick(category)}
            >
                <span className="Center">{category}</span>
                <div className="Badge"><span className="Center">{count}</span></div>
            </button>
}
