/* import {BrowserRouter,Routes ,Route} from "react-router-dom";
import '../styles/App.css';
import ItemListContainer from './content/ItemListContainer';
import ItemDetailContainer from './content/ItemDetailContainer';
import Carrito from "./content/Carrito";
import Navbar from "./content/NavBar";
const App=()=> {
return (
<>
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='*' element={<div>Error 404 sitio no encontrado</div>}/>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:id' element={<ItemListContainer />}/>
        <Route path='/item/:id' element={<ItemDetailContainer />}/>
        <Route path='/carrito' element={<Carrito />}/>
    </Routes>
  </BrowserRouter>
</>
);
} 

export default App; */
import Contacto from "./content/Contacto";
import ItemDetailContainer from "./content/ItemDetailContainer";
import ItemListContainer from "./content/ItemListContainer";
import Navbar from "./content/NavBar";
import "../styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Carrito from "./content/Carrito";
import Checkout from "./content/Checkout";

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/contacto" element={<Contacto />}/>
            <Route path="/carrito" element={<Carrito />}/>
            <Route path="/checkout" element={<Checkout />}/>
          </Routes>
          
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App; 