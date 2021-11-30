import React from 'react'
import Logo from '../img/logo.png'
import '../CSS/Header.css'

const Header = () => {
    return (
        <header>
            <img className= "logo" src={Logo} alt="logo"/> 
        </header>
    )
}

export default Header
