/* ENTRY POINT FOR REACT, ALLOWS THE WEBSITE TO RENDER/RENDERS APP.TSX AND THE WEBSITE STYLING RULES (INDEX.CSS) */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);