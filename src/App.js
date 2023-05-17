import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from "./components/ItemCount/ItemCount";
import ItemList from './components/Item/Items';
import { Link, Routes } from 'react-router-dom';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div><NavBar/></div>

      <Routes>
        <Route path='/' exact element={<Home/>}>
        
        </Route>
        <Route path='/productos' exact>
          
        </Route>
        <Route path='/nosotros' exact>
          
        </Route>
      </Routes>
    
    </Router>

  )
}
export default App;
