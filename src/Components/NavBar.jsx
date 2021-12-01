import React from 'react'
import '../CSS/NavBar.css'
import Categories from './Categories'

const NavBar = () => {
    return (
        <div className='containerNavBar' id='containerNavBar'>
            <div className='containerCategories'>
                <Categories/>
            </div>
            <div className='containerBtns'>
                <button className='NavBtns'> Inicio </button>
                <button className='NavBtns'> Productos </button>
                <button className='NavBtns'> Productores </button>
                <button className='NavBtns'> Vender en ComeS </button>
                <button className='NavBtns'> Blog </button>
                <button className='NavBtns'> Nosotros </button>
                <button className='NavBtns'> Contacto </button>
            </div>
        </div>
    )
}

export default NavBar
