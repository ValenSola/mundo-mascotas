import React from 'react';
import {Link} from 'react-router-dom'

const Categories = () => {
return (
<ul className='navbar-container'>
    <li>
        <Link to="/"><button className='button titles'>Inicio</button></Link>
    </li>
    <li>
        <Link to="/category/comida"><button className='button titles'>Comida</button></Link>
    </li>
    <li>
        <Link to="/category/accesorios"><button className='button titles'>Accesorios</button></Link>
    </li>
    <li>
        <Link to="/category/juguetes"><button className='button titles'>Juguetes</button></Link>
    </li>
</ul>
);
}

export default Categories;