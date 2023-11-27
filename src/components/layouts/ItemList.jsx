import React, {useState, useEffect} from 'react';
import Item from './Item';

const ItemList = ({categoria}) => {
const [productos, setProductos] = useState([]);

useEffect(()=>{

const consultarBDD = async () => {
const response = await fetch (`../../json/productos.json`)
const productos = await response.json()

if (categoria !== undefined) {
const cardProducto = productos.filter(producto => producto.categoria === categoria).map(filtrado =>
<div key={filtrado.id} className='cart-container'>
    <Item item={filtrado} />
</div>
)
return cardProducto;
} else {
const cardProducto = productos.map(producto =>
<div key={producto.id} className='cart-container'>
    <Item item={producto} />
</div>
)
return cardProducto;
}
}
consultarBDD().then(producto =>setProductos(producto))
},[categoria])

return (
<>
    {productos}
</>
);
}

export default ItemList;