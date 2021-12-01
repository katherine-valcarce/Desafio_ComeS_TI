import React from 'react'
import Logo from '../img/logo.png'
import Lupa from '../img/lupa2.png'
import Menu from '../img/menu.png'
import shoppingCart from '../img/shopping-cart.png'
import '../CSS/Header.css'

const Header = () => {
    console.log(window.innerWidth)

    const clickSearch = () => {
        const btnSearch = document.getElementById('search')
        if(btnSearch.style.display === 'block' && window.innerWidth<480){
            btnSearch.style.display = 'none';
             
         }else{
            btnSearch.style.display = 'block';
             
         }
     }
     const showMenu = () => {
        const btnMenu = document.getElementById('containerNavBar')
        if(btnMenu.style.display === 'block' && window.innerWidth<480){
             btnMenu.style.display = 'none';
             
         }else{
             btnMenu.style.display = 'block';
             
         }
     }
    return (
        <header>
            <img className= "logo" src={Logo} alt="logo"/> 
                <input className='searchBar' id='search' placeholder='   ¿Que estas buscando?'></input>
               
                <button className='searchButton' onClick={() => {clickSearch()}}> <img src={Lupa} className='imgSearchButton' alt='boton buscar' /> </button>
                <button className='shoppingCartButton' onClick={() => {}}> <img src={shoppingCart} className='imgShoppingCartButton' alt='boton buscar' /> </button>
                <button className='menuButtonMobile' onClick={() => {showMenu()}}> <img src={Menu} className='imgMenuButtonMobile' alt='boton menu' /> </button>
            
        </header>
    )
}

export default Header
