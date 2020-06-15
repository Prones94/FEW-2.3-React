import React from 'react'
import data from './data'
import Product from './Product'


export function ProductList(props) {
    if(props.currentCategory === "All" ){
        return data.map((product) => {
            return <Product 
                    data={product}
                    key = {product.id}
            />
        })
    }
}