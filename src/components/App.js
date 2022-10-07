import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importing the costume made components
import Products from './Products';
import Navbar from './Navbar';
import Cart from './Cart';
import Checkout from './Checkout';

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

    // Function that will update the selected amount of products for the selected 
    const handleAmountUpdate = async(id, quantity) => {
        const updatedCart = await commerce.cart.update(id, { quantity });
        setCart(updatedCart)
    }

    // Function that will handle the removal of the selected item
    const handleRemoveItem = async(id) => {
        const removedItem = await commerce.cart.remove(id);
        setCart(removedItem)
    }

    // Function that will handle removing all items from the cart
    const handleRemoveAll = async() => {
        const emptyCart = await commerce.cart.empty();
        setCart(emptyCart)
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
                    <Route path="/cart" element={<Cart cart={cart} onUpdateAmount={handleAmountUpdate} onRemoveItem={handleRemoveItem} onRemoveAll={handleRemoveAll} />} />
                    <Route path="/checkout" element={<Checkout cart={cart} />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;