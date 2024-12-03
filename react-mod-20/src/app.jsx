import React from 'react';
import { Outlet } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Footer from './components/Footer';
import './App.css';




function App() {
  return (
    <>
    <NavTabs />
    <div>
      {/* <h1>Shawn Perez</h1> */}
      <Outlet />
      <Footer />
    </div>
    </>
  );
}

export default App;