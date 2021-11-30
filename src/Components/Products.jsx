import React from 'react'
import data from '../data/products.json'
import '../CSS/Products.css'

const products = () => {
    return (
        <div className='productsContainer'>
            {data.map((product) => (
                <div key={product.id} className="productContainer">
                    
                    <img src={product.images[0].src} className='imgProduct' alt='Imagen de producto'/> 
                    <h1 className='productTitle'>{product.name} </h1>
                    <h1 className='productTitle'>{product.price} </h1>
                </div>
            ))}
        </div>
    )
}

export default products
