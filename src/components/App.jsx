import {BrowserRouter,Routes ,Route} from "react-router-dom";
import '../styles/App.css';
import Navbar from './content/NavBar.jsx';
import ItemListContainer from './content/ItemListContainer';
import ItemDetailContainer from './content/ItemDetailContainer';
import Carrito from "./content/Carrito";

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

export default App;