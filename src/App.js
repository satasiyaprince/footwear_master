import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Home from './Container/Home/Home';
import Men from './Container/Men/Men';
import Women from './Container/Women/Women';
import About from './Container/About/About';
import Contact from './Container/Contact/Contact';
import Login from './Container/Login/Login';
import Appoinment from './Container/Appoinment/Appoinment';
import Register from './Container/Login/Register';
import Cart from './Container/Cart/Cart';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/men' element={<Men />} />
        <Route path='/women' element={<Women />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/appoinment' element={<Appoinment />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
