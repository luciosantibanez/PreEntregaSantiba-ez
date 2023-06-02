import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from "./components/ItemCount/ItemCount";
import ItemList from './components/Item/Items';
import { Link, Routes } from 'react-router-dom';
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <Router>
      <div><NavBar/></div>
      <Routes>
        <Route path='/home' exact element={<Home/>}/>
        <Route path='/' exact element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' exact element={<ItemListContainer/>}/>
        <Route path='*' element={<h1>NOT FOUND</h1>}/>
      </Routes>
      
    </Router>

  )
}
export default App;
