import React from 'react'
import '../CSS/Footer.css'
import iconFacebook from '../img/facebook.png'
import iconInstagram from '../img/instagram.png'
import iconYoutuve from '../img/youtube.png'


const footer = () => {
    return (
        <div className='containerFooter'>
            <div className='containerContacts'>
                <h1 className='textContacts'>ENCUÉNTRANOS</h1>
                <lu>
                    <li className='textContacts li'>Los Ángeles, Biobío, Chile</li>
                    <li className='textContacts li'>chile@comes.cl</li>
                    <li className='textContacts li'>+56 9 3957 9093</li>
                </lu>
            </div>
            
            <div className='containerSocialNetworks'>
                <img className='iconSocialNetworks' src={iconFacebook} alt='icono Facebook'/>
                <img className='iconSocialNetworks' src={iconInstagram} alt='icono Instagram'/>
                <img className='iconSocialNetworks' src={iconYoutuve} alt='icono Youtube'/>
            </div>

        </div>
    )
}

export default footer
