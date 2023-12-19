/* import React, {useState, useEffect} from 'react';
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

export default ItemList; */
import Item from "./Item";
import { toCapital } from "../../helpers/toCapital";


const ItemList = ( {productos, titulo} ) => {

  return (
    <div className="container">
        <h2 className="main-title">{toCapital(titulo)}</h2>

        <div className="productos">
            { productos.map((prod) => <Item producto={prod} key={prod.id} />) }
        </div>
    </div>
  )
}

export default ItemList;