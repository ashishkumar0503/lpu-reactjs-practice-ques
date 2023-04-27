import React, { useState } from 'react'

const Cart = () => {

    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        const newCart = [...cart, item];
        setCart(newCart);
    };

    const removeFromCart = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
    }

    const product = [
        {name: 'Apple', price: 10},
        {name: 'Mango', price: 10},
        {name: 'Litchi', price: 10},
    ]

  return (
    <div>
        <h2>Shopping Cart</h2>
        <ul>Products
            {product.map((prod, index) => (
                <li key={index} >{prod.name} - Rs.{prod.price} <span><button onClick={() => addToCart(prod)} >Add to Cart</button></span></li>
            ))}
        </ul>
        <h3>Cart</h3>
        <ul>
            {cart.map((item, index) => (
                <li key={index} >
                    {item.name} - Rs.{item.price}{' '}
                    <button onClick={() => removeFromCart(index)} >Remove</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Cart