import React from 'react';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <div className='min-h-[calc(100vh-136px)]'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;