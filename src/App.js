import React from 'react';
import './App.css';
import Whitening from './pages/whitening/Whitening';
import Home from './pages/home/Home';
import Appointments from './pages/appointments/Appointments';
import Cavities from './pages/cavities/Cavities';
import Navigation from './components/navigation/Navigation';
import {Routes, Route, Navigate} from 'react-router-dom';
import NotFound from "./pages/notFound/NotFound";
import ProductPage from "./pages/appointments/productpage/ProductPage";

function App() {

    // DIT IS ALLEEN OM DE NAVIGATE FUNCTIE TE DEMONSTREREN
    const isLoggedIn = true;

  return (
    <>
      <Navigation />
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/tanden-bleken" element={isLoggedIn === true ? <Whitening /> : <Navigate to="/"/>}/>
          <Route path="/afspraken" element={isLoggedIn === true ? <Appointments /> : <Navigate to="/"/>}/>
          <Route path="/gaatjes" element={isLoggedIn === true ? <Cavities /> : <Navigate to="/"/>}/>

          <Route path="/product/:id" element={isLoggedIn === true ? <ProductPage /> : <Navigate to="/"/>} />

          <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;