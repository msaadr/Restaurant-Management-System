import React from 'react';
import '../CSS/CartItem.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearAllCart } from '../../Redux/StoreSlice/CartSlice';

const CartItem = () => {
    const allCartsData = useSelector((state) => state.cart.carts);
    console.log(allCartsData);
    
    const totalQuantity = useSelector(state => state.cart.quantity);
    console.log(allCartsData.length);
    
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
            <h1>{totalQuantity > 0 ? `Items In Cart: ${totalQuantity}` : 'No items in cart'}</h1>
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
            <button>Confirm Your Order</button>
            {totalQuantity > 0 && <button onClick={clear} className='clear-cart'>Clear Cart</button>}
        </div>
    );
}

export default CartItem
