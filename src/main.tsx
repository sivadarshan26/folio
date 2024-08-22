import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Import your App component
import './index.css'; // Import your styles

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
