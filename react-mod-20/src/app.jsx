import React from 'react';
import { Outlet } from 'react-router-dom';
import navbar from './componets/navbar';
import Footer from './componets/footer';
import './app.css';




function App() {
  return (
    <>
    <navbar />
    <div>
      { <h1>Shawn Perez</h1> }
      <Outlet />
      <Footer />
    </div>
    </>
  );
}

export default App;