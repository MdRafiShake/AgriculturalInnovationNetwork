import React from 'react';
import Navbar from './component/navbar';


import Footer from './component/footer';
import { Outlet } from 'react-router';
const App = () => {
  return (
    <div className='bg-gradient-to-br from-lime-100 to-lime-300 w-full min-h-screen '>
      <Navbar />
      <Outlet/>
      <Footer />
    </div>
  );
}

export default App;
