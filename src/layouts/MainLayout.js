import React from 'react';
import { BrowserRouter } from 'react-router-dom'
// import Components
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NavHeader from '../components/NavHeader'
import ProductViewModal from '../components/ProductViewModal';


import Routes from '../routes/Routes'

const MainLayout = () => {
  return (
    <BrowserRouter>
      <NavHeader />
      <Navbar />
      <div>
        <Routes />
      </div>
      <Footer />
      <ProductViewModal />
    </BrowserRouter>
  );
}

export default MainLayout;
