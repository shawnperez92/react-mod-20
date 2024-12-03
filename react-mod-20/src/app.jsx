import React from 'react';
import { Outlet } from 'react-router-dom';
import NavTabs from './componets/navbar';
import Footer from './componets/footer';
import './app.css';




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