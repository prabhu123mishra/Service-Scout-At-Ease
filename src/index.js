import React from 'react';
import ReactDOM from 'react-dom/client'; // Use `react-dom/client` for React 18
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root for rendering
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
