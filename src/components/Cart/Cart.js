import React from 'react';
import './Cart.css'
const Cart = (props) => {

    const { cart } = props;




    // console.log(cart);
    let total = 0;
    let name = []
    let id = [];
    let img = [];


    for (const product of cart) {
        name = name + product.name
        total = total + product.price;
        id = id + product.id;


    }
    return (
        <div className='cart'>
            <h4>Order Sumary </h4>
            <p>Selected Item:{cart.length}</p>
            <img src={img} alt="" />
            <p>Name:{name}</p>
            <p>Id:{id}</p>
            <p>Total price:{total}</p>
            <div>
                <button className='choice'>
                    Choice
                </button>
            </div>
            <br />
            <div>
                <button className='delete'>Delete</button>
            </div>

        </div>
    );
};

export default Cart;