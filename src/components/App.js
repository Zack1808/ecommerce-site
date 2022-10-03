import React, { useEffect, useState } from 'react';

// Importing the costume made components
import Products from './Products';
import Navbar from './Navbar';

// importing the commerce api
import { commerce } from '../api/commerce'

// Importing the style file
import "../css/App.css";

// Creating the App component
const App = () => {

    const [products, setProducts] = useState([]); 

    // Will run the function that will fetch the products
    useEffect(() => {
        fetchProducts();
    }, []);

    // Function that will fetch the products
    const fetchProducts = async() => {
        const { data } = await commerce.products.list();
        setProducts(data)
    }

    console.log(products)

    return (
        <div className='container'>
            <Navbar />
            <Products />
        </div>
    )
}

export default App;