import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import ScrollToTopButton from './components/ScrollToTopButton';
import ChatbotButton from './components/ChatBotButton';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Navbar />
      <ScrollToTopButton />
      <ChatbotButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


// import React, { useState, useEffect } from 'react';
// import { HashRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Blog from './pages/Blog';
// import Loader from './components/Loader';
// import ScrollToTopButton from './components/ScrollToTopButton';
// import ChatbotButton from './components/ChatBotButton';

// function App() {
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);

//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
//       <Loader isVisible={loading} />
//       <Navbar />
//       <ChatbotButton />
//       <ScrollToTopButton />
//       <div 
//         className={`ml-1 mr-1 transition-all duration-1000 ${
//           loading ? 'blur-sm opacity-50 pointer-events-none' : 'blur-none opacity-100 pointer-events-auto'
//         }`}
//       >
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/blog" element={<Blog />} />
//           <Route path="*" element={<div>Page Not Found</div>} />
//         </Routes>
//       </div>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

