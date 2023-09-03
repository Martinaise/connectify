
import React from 'react';
import { BrowserRouter ,Routes, Route,Outlet } from 'react-router-dom';

import Profil from './pages/Profil/Profil';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Accueil from './pages/Accueil/Accueil';

function App() {
  return (
  < BrowserRouter>
    <Routes>
        <Route exact path="/"  element={<Accueil/>} />
        <Route exact path="/profil"  element={<Profil/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
    </Routes>
  </BrowserRouter>
  
  );
}




export default App;
