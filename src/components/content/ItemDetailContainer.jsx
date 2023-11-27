import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../layouts/ItemDetail'

const ItemDetailContainer = () => {
const [producto, setProducto] = useState([]);
const {id} = useParams();

useEffect(()=>{
fetch (`../../json/productos.json`)
.then(response => response.json())
.then(producto => {
const producto1 = producto.find(productoArray => productoArray.id === parseInt(id))
setProducto(producto1)
})
},[id])

return (
<div className='main-container-producto'>
    <ItemDetail item={producto} />
</div>
);
}

export default ItemDetailContainer;