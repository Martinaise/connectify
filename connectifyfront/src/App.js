
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet
} from "react-router-dom";
import Profil from './pages/Profil/Profil';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Accueil from './pages/Accueil/Accueil';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux"
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
const ProtectedRoute = ({ children }) => {
  const userToken = useSelector(state => state.auth.user?.token);
  console.log("userToken",userToken)
  if (!userToken) {
    return <Navigate to="/" replace={true} />;
  }
  return children ? children : <Outlet />;
}

function App() {
  return (
  < BrowserRouter>
        <Routes>
        <Route exact path="/"  element={<Accueil/>} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/profil' element={<Profil />} />
        </Route>
        <Route path='/inscription' element={<Register />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  </BrowserRouter>
  
  );
}




export default App;
