
import './App.css';
import Header from './components/header/header';
import ItemCount from './components/ItemCount/itemcount';

function App(onAdd) {

  onAdd = () => {
    alert("Hola")
  }

  return (
    <div className="App">
      <Header />
      <ItemCount onAdd={onAdd}/>
    </div>
  );
}

export default App;
