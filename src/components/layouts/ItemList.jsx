
import { toCapital } from "../helpers/toCapital";
import Item from "./Item";



const ItemList = ( {productos, nombre} ) => {

  return (
    <div className="container">
        <h2 className="main-title">{toCapital(nombre)}</h2>

        <div className="producto">
            { productos.map((prod) => <Item producto={prod} key={prod.id} />) }
        </div>
    </div>
  )
}

export default ItemList