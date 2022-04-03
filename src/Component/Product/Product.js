import React from 'react';
import './Product.css'


const Product = (props) => {
    const {name,img,seller,price,ratings}=props.product;
    return (
        <div className='product'>
            <img src={img} alt=""/>
            <h3>{name}</h3>
            <div className="product-info">
            <p>Price: {price}</p>
            <p>Seller: {seller}</p>
            <p><small>Ratings: {ratings}</small></p>
            </div>
            <button onClick={()=>props.eventHandler(props.product)} className='btn-cart'>Add to Cart</button>
        
        </div>
    );
};

export default Product;