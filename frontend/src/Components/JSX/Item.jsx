import React, { useState } from 'react';
import '../CSS/Item.css';
import { addToCart } from '../../Redux/StoreSlice/CartSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import AddedToCart from './AddedToCart';

const Item = (props) => {
    const dispatch = useDispatch();
    const [message, setSuccessMessage] = useState(null) ;

    const add = (payload) => {
        dispatch(addToCart(payload));
        setSuccessMessage('Added to cart successfully!');
        
        setTimeout(() => {
            setSuccessMessage('');
        }, 3000);
    };

    const setItem = (item) => {
        props.setTheItem(item);
    };

    return (
        <div className='Item'>
            <Link to='/productshow' className='linkkk'>
                <img 
                    className='item-image' 
                    src={props.elem.picture} 
                    alt={props.elem.name} 
                    onClick={() => setItem(props.elem)}
                />
            </Link>
            <p>{props.elem.name}</p>
            <button onClick={() => add(props.elem)}>Add To Cart</button>
            {/* <AddedToCart message={message} /> */}
        </div>
    );
};

export default Item;
