import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing the App component
import App from './components/App';

// Getting the Root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the App component into the root div
root.render(<App />)