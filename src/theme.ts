import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode: 'light' | 'dark') => ({
  palette: {
    mode,
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    ...(mode === 'dark' && {
      background: {
        default: '#121212',
        paper: '#1d1d1d',
      },
    }),
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

const createMyTheme = (mode: 'light' | 'dark') => createTheme(getDesignTokens(mode));

export default createMyTheme;
