import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme'
/// import './styles/global.css'; // Import global CSS

// Get the root element
// eslint-disable-next-line no-undef
const rootElement = document.getElementById('root')

// Ensure the root element exists
if (rootElement) {
  // Create a root
  const root = createRoot(rootElement)

  // Render the app
  root.render(
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <CssBaseline />
        <App />
      </HelmetProvider>
    </ThemeProvider>,
  )
} else {
  // eslint-disable-next-line no-undef
  console.error('Failed to find the root element.')
}
