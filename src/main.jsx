import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';

import App from './components/app';

createRoot(document.getElementById('main')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
