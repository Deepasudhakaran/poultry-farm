import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Login from './Login.js';
import Register from './Register.js';
import Userhome from './Usermodules/Userhome.js';
import Navbar from './Usermodules/Navbar.js';
import Contact from './Usermodules/Contact.js';
import About from './Usermodules/About.js';
import Order from './Usermodules/Order.js';


const Mainrouter = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/userhome' element={<Userhome/>}/>
      <Route path='/navbar' element={<Navbar/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/order' element={<Order/>}/>
      </Routes> 
    </div>
  );
}

export default Mainrouter;
