import React from 'react'

import '../CSS/ModalProduct.css'


const ModalProduct = (props) => {
    const {itemSelect} = props;
    
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
                                    <img className='productDetailImg'alt='' src={imageProduct.src} />
                                    
                                ))}
                                </div>
                            
                            <div id='description' dangerouslySetInnerHTML={{ __html: itemSelect.description }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalProduct
