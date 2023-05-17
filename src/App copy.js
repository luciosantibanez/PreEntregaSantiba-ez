import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from "./components/ItemCount/ItemCount";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <> 
    <div>
      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos'}/>
      <ItemCount/>
    </div>
    
     <Router>
     <div>
       <Routes>
         <Route exact path="/" component={Home} />
         <Route path="/about" component={About} />
         <Route path="/contact" component={Contact} />
       </Routes>
     </div>
   </Router>
   </>
    
  );
}

export default App;
