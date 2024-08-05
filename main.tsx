// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Frontend/App';
import { BrowserRouter } from 'react-router-dom';
import './main.css';
import 'boxicons/css/boxicons.min.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
