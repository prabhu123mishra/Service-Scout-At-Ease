import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import FAQPage from './pages/FAQPage';
import BecomeProvider from './pages/BecomeProvider';
import LoginPage from './pages/LoginPage';
import ServicesPage from './pages/ServicesPage';
import LearnMorePage from './pages/LearnMorePage';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/become-provider" element={<BecomeProvider />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Uncomment and create NotFoundPage for handling 404 errors */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </>
  );
};

export default App;
