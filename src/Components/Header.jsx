import React from 'react'
import Logo from '../img/logo.png'
import Lupa from '../img/lupa2.png'
import '../CSS/Header.css'

const Header = () => {
    const clickSearch = () => {
        const btnMenu = document.getElementById('search')
        if(btnMenu.style.display === 'block'){
             btnMenu.style.display = 'none';
             
         }else{
             btnMenu.style.display = 'block';
             
         }
     }
    return (
        <header>
            <img className= "logo" src={Logo} alt="logo"/> 
                <input className='searchBar' id='search' placeholder='   ¿Que estas buscando?'></input>
               
                <button className='searchButton' onClick={(e) => {clickSearch()}}> <img src={Lupa} className='imgSearchButton' alt='boton buscar' /> </button>
            
        </header>
    )
}

export default Header
