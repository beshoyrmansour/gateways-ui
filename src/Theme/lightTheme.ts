import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1a33a0',
      light: '#e9f0fd',
      contrastText: 'rgb(255 255 255/ .87)',
    },
    secondary: {
      main: '#eaeaea',
      light: '#f1f3f4',
      contrastText: 'rgb(0 0 0 / .7)',
    },
    error: {
      main: 'rgba(232, 56, 26, 1)',
      light: 'rgba(236, 95, 71, 1)',
      contrastText: '#ffffff',
    },
    success: {
      main: 'rgba(114, 225, 40, 1)',
      light: 'rgba(142, 231, 83, 1)',
      dark: '#4F9935',
      contrastText: '#ffffff',
    },
    info: {
      main: 'rgba(3, 195, 236, 1)',
    },
    warning: {
      main: 'rgba(255, 171, 0, 1)',
      contrastText: 'rgb(0 0 0 / .87)',
    },
    text: {
      primary: 'rgba(50,71,92,0.87)',
      secondary: 'rgba(50, 71, 92, 0.6)',
      disabled: 'rgba(50, 71, 92, 0.26)',
    },
    background: {
      default: '#f7f9fa',
      paper: '#ffffff',
    },
    grey: {
      100: '#f1f3f4',
      200: '#e5e5e5',
      300: '#dadce0',
      400: '#607d8b',
      500: '#e0e0e0',
      600: '#f7f7f7',
      800: '#7b7b7b',
      900: '#E9E9E9',
    },
  },

  typography: {
    htmlFontSize: 12,
    fontSize: 12,
    fontFamily: 'poppins',
    allVariants: {
      fontFamily: 'poppins',
    },
    h1: {
      fontSize: '24px',
      letterSpacing: '-1.5px',
      '&.capitalize': {
        textTransform: 'capitalize',
      },
    },
    h2: {
      fontSize: '20px',
      letterSpacing: '0.15000000596046448px',
      weghit: '500',
      '&.capitalize': {
        textTransform: 'capitalize',
      },
    },
    h3: {
      fontSize: '14px',
      letterSpacing: '0.7px',
      '&.capitalize': {
        textTransform: 'capitalize',
      },
    },
    h4: {
      fontSize: '2.125rem',
      letterSpacing: '0.6px',
      '&.capitalize': {
        textTransform: 'capitalize',
      },
    },
    h5: {
      fontSize: '1.812rem',
      letterSpacing: '0.1px',
      '&.capitalize': {
        textTransform: 'capitalize',
      },
    },
    h6: {
      fontSize: '1.5rem',
      letterSpacing: '0.2px',
      '&.capitalize': {
        textTransform: 'capitalize',
      },
    },
    subtitle1: {
      fontSize: '1.3125rem',
      fontWeight: 700,
      letterSpacing: 0.5,
    },
    subtitle2: {
      fontSize: '1.125rem',
      letterSpacing: 0.6,
      fontWeight: 500,
    },
    body1: {
      letterSpacing: 0.5,
      fontSize: '1rem',
      color: '#282828',
      //lineHeight: '31.5px',
    },
    body2: {
      fontSize: '.875rem',
      //lineHeight: '24px',
      letterSpacing: 0.5,
    },
    button: {
      fontSize: '.9375rem',
      letterSpacing: 0.8,
      //lineHeight: '24px',
      fontWeight: 500,
      textTransform: 'uppercase',
    },
    caption: {
      fontSize: '.8125rem',
      //lineHeight: '26px',
      letterSpacing: 0.4,
    },
    overline: {
      fontSize: '.625rem',
      letterSpacing: 1,
      //lineHeight: '22px',
      textTransform: 'uppercase',
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 6,
  },
  // overrides: overrides,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            outline: '1px solid #bbbaba',
            backgroundColor: 'rgb(12 6 6 / 25%)',
            borderRadius: '5px',
          },
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            width: '0.4em',
          },
        },
      },
    },
  },
});
