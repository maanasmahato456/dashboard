import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { MantineProvider } from '@mantine/core';
import BaseLayOut from './BaseLayout';
import { BrowserRouter } from 'react-router-dom';

const clientquery = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}>
        <QueryClientProvider client={clientquery}>
          <BaseLayOut />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
