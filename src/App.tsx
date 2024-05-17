import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import { useMemo } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Volunteering from "./pages/Volunteering";
import Contact from "./pages/Contact";
import createMyTheme from "./theme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import useColorMode from "./hooks/useColorMode";
import SkipLink from "./components/SkipLink";

const App: React.FC = () => {
  const { mode, toggleColorMode } = useColorMode();
  const theme = useMemo(() => createMyTheme(mode), [mode]);

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SkipLink />
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
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
