import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme } from './lightTheme';

interface Props {
  children: React.ReactNode;
}

function AppsTheme({ children }: Props) {

  return (
    <ThemeProvider theme={{ ...lightTheme }}>
      <CssBaseline /> {children}
    </ThemeProvider>
  );
}

export default AppsTheme;
