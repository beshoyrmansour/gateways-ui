import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import Loader from './components/Loader';
import AppsTheme from "./Theme/theme";
import { Routes } from './router';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'

function App() {
  const queryClient = new QueryClient()

  return (
    <Suspense fallback={<Loader />}>
      <StyledEngineProvider injectFirst>
        <AppsTheme>
          <BrowserRouter>
            <QueryClientProvider client={queryClient}>
              <Routes />
            </QueryClientProvider>
          </BrowserRouter>
        </AppsTheme>
      </StyledEngineProvider>
    </Suspense>
  )
}

export default App
