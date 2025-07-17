import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import LoadingOverlay from './components/LoadingOverlay';
import './index.css';

const App: React.FC = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [pendingLocation, setPendingLocation] = useState(location.pathname);

  useEffect(() => {
    if (location.pathname !== pendingLocation) {
      setLoading(true);
      setPendingLocation(location.pathname);
    }
  }, [location.pathname, pendingLocation]);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <>
      <LoadingOverlay loading={loading} />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        {loading ? (
          <main className="flex-grow" />
        ) : (
          <main className="flex-grow">
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
        )}
        <Footer />
      </div>
    </>
  );
};

const AppWrapper: React.FC = () => {
  return (
    <Router>
      <HelmetProvider>
        <ScrollToTop />
        <App />
      </HelmetProvider>
    </Router>
  );
};

export default AppWrapper;