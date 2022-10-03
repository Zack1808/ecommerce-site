import React from 'react';

// Importing the costume made components
import Products from './Products';
import Navbar from './Navbar';

// Importing the style file
import "../css/App.css";

// Creating the App component
const App = () => {
    return (
        <div className='container'>
            <Navbar />
            <Products />
        </div>
    )
}

export default App;