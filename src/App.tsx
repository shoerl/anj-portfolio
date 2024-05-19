import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Volunteering from './pages/Volunteering';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import useColorMode from './hooks/useColorMode';

const App: React.FC = () => {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <HelmetProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/volunteering" element={<Volunteering />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer toggleColorMode={toggleColorMode} mode={mode} />
        </Router>
    </HelmetProvider>
  );
};

export default App;