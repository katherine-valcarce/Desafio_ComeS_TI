import React from 'react'
import Logo from '../img/logo.png'
import Lupa from '../img/lupa2.png'
import '../CSS/Header.css'

const Header = () => {
    return (
        <header>
            <img className= "logo" src={Logo} alt="logo"/> 
            
                <input className='searchBar' placeholder='   ¿Que estas buscando?'></input>
                <button className='searchButton'> <img src={Lupa} className='imgSearchButton' alt='boton buscar' /> </button>
            
        </header>
    )
}

export default Header
