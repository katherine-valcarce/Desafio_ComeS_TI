import React from 'react'
import '../CSS/Categories.css'

const Categories = () => {
    return (
        <div className="Menu-dropdown">
            <button className="CategoriesBtn" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false" >
                Categorias
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                <li>
                    <button className="dropdown-item" >
                        Ofertas
                    </button>
                </li>
                <li>
                    <button className="dropdown-item" >
                        Libros
                    </button>
                </li>
                <li>
                    <button className="dropdown-item" >
                        Nuevo
                    </button>
                </li>
            </ul>

        </div>
    )
}

export default Categories
