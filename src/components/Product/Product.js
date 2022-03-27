import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import './Product.css';

const Product = ({ product, hanleAddToCart }) => {

    const { name, img, seller, price, rating, id } = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>Name:{name} </p>
                <p>Price:{price}</p>
                <p><small>Seller:{seller}</small></p>
                <p><small>Rating:{rating}stars</small></p>
                <p><small>Id:{id}</small></p>
            </div>
            <button onClick={() => hanleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;