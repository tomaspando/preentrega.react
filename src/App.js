import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Botones from './components/ItemListContainer/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a la Tienda de Roger"} />
      <Botones />
    </div>
  );
}

export default App;
