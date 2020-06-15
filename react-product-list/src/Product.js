import React from 'react'

export function Product({data}) {
    const { name, description, price, category, id } = data
    return (
        <div className="Product" key={id}>
            <h2>{name}</h2>
            <p>{price}</p>
            <p>{description}</p>
            <small>{category}</small>
        </div>
    )
}