import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import RevieItem from '../ReviewItem/RevieItem';
import './Order.css'
const Orders = () => {
    const [products,setProducts] = useProducts()
    const [cart,setCart] = useCart(products)
    const handleRemoveProduct = product =>{
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest)
        removeFromDb(product.id)
        
    }
    return (
        <div>
            {/* <h1>This is order Page Length {products.length}</h1>
            <h1>This is order cart Length {cart.length}</h1> */}
            <div className='order-container'>
                <div className="left-order-container">
                    {
                        cart.map(product=><RevieItem key={product.id} product={product} hadleRemoveProduct ={handleRemoveProduct}></RevieItem>)
                    }

                </div>
                <div className="right-order-container">
                    <Cart cart={cart}>
                        <button className='dlt-btn'>Procced Checkout</button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;