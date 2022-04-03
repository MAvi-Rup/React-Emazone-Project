import React from 'react';
import './ReviewItem.css'

const RevieItem = (props) => {
    const {product,hadleRemoveProduct}= props
    const {name,price,shipping,quantity,img} = product
    return (
        <div className='review-item'>
            {/* <h1>This is the review item {name}</h1> */}
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-item-details-container">
                <div className="review-item-details">
                    <p className='product-name' title={name}>{name.length>20 ? name.slice(0,20)+'...':name}</p>
                    <p>Price : <span className='orange-colour'>{price}</span></p>
                    <p><small>Shipping : {shipping}</small></p>
                    <p><small>Quantity : {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={()=>{hadleRemoveProduct(product)}} className='dlt-btn'>Delete</button>

                </div>
            </div>
        </div>
    );
};

export default RevieItem;