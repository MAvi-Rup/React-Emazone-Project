import React, { useEffect, useState } from 'react';
import { addToDb } from '../../fakedb';
import useProducts from '../../hooks/useProducts';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';

import Product from '../Product/Product';
import './Shop.css'
import useCart from '../../hooks/useCart';

const Shop = () => {
    const [products,setProducts] = useProducts()
    const [cart,setCart]= useCart(products)

    // const updateCart =(product)=>{
    //     const newCart = [...cart,product]
    //     setCart(newCart)
    //     addToDb(product.id)
    // }
    const updateCart = (selectedProduct) =>{
        console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        
        setCart(newCart);
        addToDb(selectedProduct.id);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product key={product.id} product={product} eventHandler={updateCart}></Product>)
                }
                
            </div>
            
            <div className="cart-container">
            
                <Cart cart={cart}>
                    <Link to='/orders'>
                        <button className='dlt-btn'>Review Order</button>
                    </Link>
                </Cart>

            </div>
        </div>
    );
};

export default Shop;