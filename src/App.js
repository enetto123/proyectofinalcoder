import './App.css';
import CartWidget from './components/CartWidget';
import ItemListCointainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
<div className="App">
    <NavBar carrito={<CartWidget/>}/>
    <ItemListCointainer titulo={'Bienvenidos a mi tienda!'}/>
</div>
  );
}

export default App;
