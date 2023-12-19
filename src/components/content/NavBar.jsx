/* 
import React from 'react';
import Categories from '../layouts/Categories';
import SearchBar from '../layouts/SearchBar';
import {Link} from 'react-router-dom'



const Navbar = () => {
return (
<>
    <nav className='navbar'>
        <Link to={"/"}> <div className='logo-container'>
        <p className='navbar-logo titles'>Mundo Mascotas</p>
        </div>
        </Link>
        <Categories />
        <SearchBar busqueda="Buscar Productos" />
    </nav>

</>
);
}

export default Navbar; */
import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../layouts/CartWidget'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="logo"><h1>MundoMascotas</h1></Link>
        <ul className="menu">
            <li><Link className="menu-link" to="/">Inicio</Link></li>
            <li><Link className="menu-link" to="/productos">Productos</Link></li>
            <li><Link className="menu-link" to="/productos/comida">Comida</Link></li>
            <li><Link className="menu-link" to="/productos/juguetes">Juguetes</Link></li>
            <li><Link className="menu-link" to="/productos/acesorios">Acesorios</Link></li>
            <li><Link className="menu-link" to="/contacto">Contacto</Link></li>
            <li><CartWidget /></li>
        </ul>
    </nav>
  )
}

export default Navbar;