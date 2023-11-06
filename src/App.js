import React, { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Layout from './Layout';
//pages
import Home from './pages/Home';
import Error from './pages/Error';
import Footer from './components/Footer';
import Fitness from './pages/Fitness';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" elements={Layout}>
            <Route path="/" element={<Home />} />
            <Route path="/Fitness-Datails/:slug" element={<Fitness />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
