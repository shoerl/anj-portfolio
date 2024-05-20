import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
    h1: {
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '3rem',
      },
      '@media (min-width:960px)': {
        fontSize: '4rem',
      },
    },
    h2: {
      fontSize: '1.5rem',
      '@media (min-width:600px)': {
        fontSize: '2.5rem',
      },
      '@media (min-width:960px)': {
        fontSize: '3.5rem',
      },
    },
  },
  palette: {
    primary: {
      main: '#FFB6C1', // Lighter Pink
    },
    secondary: {
      main: '#04CFAD', // Teal
    },
    background: {
      default: '#F5F5DC', // Light Beige
    },
    text: {
      primary: '#6A6A6A', // Medium Gray for text
      secondary: '#FFFFFF', // White text
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#F5F5F5', // Very Light Gray for navbar background
          color: '#6A6A6A', // Medium Gray for text
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#04CFAD', // Teal
          color: '#FFFFFF', // White text
          padding: '10px 20px',
          '&:hover': {
            backgroundColor: '#D1F2EB', // Mint Green for hover
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#6A6A6A', // Medium Gray
        },
      },
    },
  },
})

export default theme
