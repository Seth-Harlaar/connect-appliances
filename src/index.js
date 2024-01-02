import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// components
import Main from './main/main';

// styles
import './index.css';
import { ScreenProvider } from './components/screenProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ScreenProvider>
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    </ScreenProvider>
  </React.StrictMode>
);