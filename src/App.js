
import './App.css';
import Header from './components/header/header';
import ItemCount from './components/ItemCount/itemcount';

function App() {

  const onAdd = (counter) => {
    console.log(`Tienes ${counter} productos`)
  }

  return (
    <div className="App">
      <Header />
      <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    </div>
  );
}

export default App;
