import React from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
/// import './styles/global.css'; // Import global CSS

// Get the root element
const rootElement = document.getElementById('root');

// Ensure the root element exists
if (rootElement) {
  // Create a root
  const root = createRoot(rootElement);

  // Render the app
  root.render(
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <CssBaseline />
        <App />
      </HelmetProvider>
    </ThemeProvider>
  );
} else {
  console.error('Failed to find the root element.');
}
