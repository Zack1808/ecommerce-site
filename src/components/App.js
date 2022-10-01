import React from 'react';

// Importing the costume made components
import Products from './Products';
import Navbar from './Navbar';

// Creating the App component
const App = () => {
    return (
        <div>
            <Navbar />
            <Products />
        </div>
    )
}

export default App;