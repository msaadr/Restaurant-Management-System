import React from 'react';
import '../CSS/CartItem.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearAllCart } from '../../Redux/StoreSlice/CartSlice';

const CartItem = () => {
    const allCartsData = useSelector((state) => state.cart.carts);
    const totalQuantity = useSelector(state => state.cart.quantity);
    const dispatch = useDispatch();

    const reduce = (payload) => {
        dispatch(removeFromCart(payload));
    }

    const increase = (payload) => {
        dispatch(addToCart(payload));
    }

    const clear = () => {
        dispatch(clearAllCart());
    }

    return (
        <div className='CartItem'>
            <h1>Items In Cart:{totalQuantity}</h1>
            {allCartsData.map((element, index) => (
                element.itemQuantity > 0 && (
                    
                    <div className="cart-item" key={element.id}>
                        <img src={element.picture} alt={element.name} />
                        
                        <div className="cart-item-data">
                            <div className='cart-item-name'>{element.name}</div>
                            <div className="buttons">
                                <button onClick={() => reduce(element)}>-</button>
                                <p>Quantity: {element.itemQuantity}</p>
                                <button onClick={() => increase(element)}>+</button>
                            </div>
                            <div className="total-price-item">
                                Total: {(element.new_price * element.itemQuantity).toFixed(2)}
                            </div>
                            <div>{element.text}</div>
                        </div>
                    </div>
                )
            ))}
            {allCartsData.length > 0 && <button onClick={clear} className='clear-cart'>Clear Cart</button>}
        </div>
    );
}

export default CartItem
