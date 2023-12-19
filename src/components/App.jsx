import {BrowserRouter,Routes ,Route} from "react-router-dom";
import '../styles/App.css';
import Navbar from './content/NavBar.jsx';
import ItemListContainer from './content/ItemListContainer';
import ItemDetailContainer from './content/ItemDetailContainer';
import Carrito from "./content/Carrito";
import Checkout from "./content/Checkout";
import Contacto from "./content/Contacto";
import { CartProvider } from "./context/CartContext";


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