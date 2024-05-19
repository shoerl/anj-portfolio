import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF9EC7", // Soft Pink
    },
    secondary: {
      main: "#3C3C3C", // Dark Gray
    },
    background: {
      default: "#FFFFFF", // White
    },
    text: {
      primary: "#000000", // Black
      secondary: "#FFFFFF", // White
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#3C3C3C", // Dark Gray
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#D3D3D3", // Light Gray
          color: "#3C3C3C", // Dark Gray
          "&:hover": {
            backgroundColor: "#FF9EC7", // Soft Pink
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#3C3C3C", // Dark Gray
        },
      },
    },
  },
});

export default theme;
