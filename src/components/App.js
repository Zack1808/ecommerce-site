import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importing the costume made components
import Products from './Products';
import Navbar from './Navbar';
import Cart from './Cart';

// importing the commerce api
import { commerce } from '../api/commerce'

// Importing the style file
import "../css/App.css";

// Creating the App component
const App = () => {

    const [products, setProducts] = useState([]); 
    const [cart, setCart] = useState({});

    // Will run the function that will fetch the products
    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    // Function taht will store all items that have been entered into the cart
    const fetchCart = async() => {
        setCart(await commerce.cart.retrieve());
    }

    // Function that will add the selected item to the cart
    const handleCartAdding = async(id, amount) => {
        const item = await commerce.cart.add(id, amount);
        setCart(item);
    }

    // Function that will fetch the products
    const fetchProducts = async() => {
        const { data } = await commerce.products.list();
        setProducts(data)
    }

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}> 
            <div className='container'>
                <Navbar totalItems={cart.total_items} />
                <Routes>
                    <Route exact path='/' element={<Products products={products} onAddToCart={handleCartAdding} />}/>
                    <Route path="/cart" element={<Cart cart={cart} />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;