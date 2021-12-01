import React, { useState } from 'react'
import data from '../data/products.json'
import '../CSS/Products.css'
import ModalProduct from './ModalProduct'

const Products = () => { 
    // en el caso que el precio no esté establecido, dirá "Sin stock"
    const stockText = (price) => {
        if ( price === '') {
            return ('Sin Stock')
        } else {
            return ("$ " + parseInt(price).toLocaleString(['ban', 'id']))
        }
    }
    //vamos a guardar el producto seleccionado
    const [ itemSelect, setItemSelect ] = useState(data[0]);

    return (
        <div className='productsContainer'>
            {/* recorremos la data de los productos en JSON */}
            {data.map((product) => (
                <div key={product.id} className="productContainer" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setItemSelect(product)}>
                    <div className='selection'>
                    <img src={product.images[0].src} className='imgProduct' alt='Imagen de producto'/> 
                    </div>
                    <div className='containerText'>
                        <h1 className='productTitle'>{product.name} </h1>
                        <h1 className='productPrice'> {stockText(product.price)} </h1>
                    </div>
                </div>
            ))}
            <ModalProduct itemSelect = {itemSelect} stockText={stockText} />
        </div>
    )
}

export default Products
