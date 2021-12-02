import React, { useState } from 'react'
import addShopping from '../img/add-to-cart.png'
import '../CSS/ModalProduct.css'


const ModalProduct = (props) => {
    const { itemSelect, stockText } = props;
    const [shoppingCart, setShoppingCart] = useState('0')

    return (
        <div>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"> {itemSelect.name} </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='containerProductDetail'>
                                <div className='containerImg'>
                                    {itemSelect.images.map((imageProduct) => (
                                        <img className='productDetailImg' alt='' src={imageProduct.src} />
                                    ))}
                                </div>
                                <div className='description' dangerouslySetInnerHTML={{ __html: itemSelect.description }} />
                            </div>
                            <div className='containerPriceButton'>
                                <p className='productPrice'> {stockText(itemSelect.price)} </p>
                                <div className="qtyOrder">
                                    <button onClick={() => setShoppingCart(1)} className="btnAR add">
                                        +
                                    </button>
                                    <div className="textQuantity"> {shoppingCart} </div>
                                    <button onClick={() => setShoppingCart(0)} className="btnAR remove">
                                        -
                                    </button>
                                </div>
                                <button className='buttonAddShopping'> <img src={addShopping} className='IconAddShopping' alt='icono agregar al carrito' /> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalProduct
