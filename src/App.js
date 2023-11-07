import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import "./components/Style.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <div>
        <ItemListContainer/>
      </div>
    </div>
  );
}

export default App;