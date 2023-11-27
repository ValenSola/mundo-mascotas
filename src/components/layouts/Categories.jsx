import React from 'react';
import {Link} from 'react-router-dom'

const Categories = () => {
return (
<ul className='navbar-container'>
    <li>
        <Link to="/"><button className='button titles'>Inicio</button></Link>
    </li>
    <li>
        <Link to="/category/libretas"><button className='button titles'>Libretas</button></Link>
    </li>
    <li>
        <Link to="/category/stickers"><button className='button titles'>Stickers</button></Link>
    </li>
    <li>
        <Link to="/category/posters"><button className='button titles'>Posters</button></Link>
    </li>
</ul>
);
}

export default Categories;