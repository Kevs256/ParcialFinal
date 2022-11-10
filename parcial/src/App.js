import './App.css';
import { BrowserRouter,Switch, Navigate, Route, Routes } from "react-router-dom";

import NavbarPropio from "./components/navbar";
import Cart from "./pages/cart";
import Search from './pages/search';
import Login from './pages/login';
import Register from './pages/register';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <NavbarPropio/>
        <Routes>
            <Route path='/' element ={<Search />}/>
            <Route path='/cart' element ={<Cart />}/>
            <Route path='/login' element ={<Login />}/>
            <Route path='/register' element ={<Register />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
