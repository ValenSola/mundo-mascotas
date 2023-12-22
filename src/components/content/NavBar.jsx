
import React from 'react';

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

export default Navbar;  

