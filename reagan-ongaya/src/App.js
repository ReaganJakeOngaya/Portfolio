import React, { useState, useEffect } from 'react';
import {  HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import ScrollToTopButton from './components/ScrollToTopButton';
import ChatbotButton from './components/ChatBotButton';
import Loader from './components/Loader';

function AppContent() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    // Simulate a delay for loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [location.pathname]); // Trigger on route changes


  return (
    <>
      <ScrollToTopButton />
      <ChatbotButton />
      <Loader isVisible={loading} />
      <Navbar />
      <div 
          className={` ml-1 mr-1 transition-all duration-1000 ${
          loading ? 'blur-sm opacity-50 pointer-events-none' : 'blur-none opacity-100 pointer-events-auto'
        }`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

