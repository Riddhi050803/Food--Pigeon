import { useState } from 'react'
import Header from './components/Header';
import Home from './components/Home';
import CartDetails from './components/CartDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Routes, Route}from "react-router-dom";
import { Toaster } from 'react-hot-toast';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<CartDetails/>}/>
      </Routes>
      <Toaster/>
    </>
  )
}

export default App
