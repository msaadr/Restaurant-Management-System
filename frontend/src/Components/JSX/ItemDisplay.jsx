import React, { useEffect, useState } from 'react';
import '../CSS/ItemDisplay.css';
import RelatedProducts from '../JSX/RelatedProducts';
import { addToCart } from '../../Redux/StoreSlice/CartSlice';
import { useDispatch } from 'react-redux';

const ItemDisplay = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Add empty dependency array to run only on mount

  const [message, setSuccessMessage] = useState('');

  const dispatch = useDispatch();

  // Add function for adding item to cart
  const add = (item) => {
    dispatch(addToCart(item));
    console.log('Item added to cart:', item);

    setSuccessMessage('Added to cart successfully!');

    setTimeout(() => {
      setSuccessMessage('');
    }, 1000);
  };

  return (
    <div className='asdasd'>
      <div className='item-display-in-detail'>
        <img className='item-display-in-detail-img' src={props.item.picture} alt="" />
        <h2>{props.item.name}</h2>
        <h4>{props.item.description}</h4>
        <h5>PKR {props.item.price}</h5>
        <button onClick={() => add(props.item)}>Add to Cart</button>
        {message && <p style={{backgroundColor:'green',color:'white',width:'50%',margin:'10px auto'}}>{message}</p>} {/* Display success message */}
      </div>
      <hr style={{ marginTop: '40px' }} />
      {/* Pass the setItem function as a prop to RelatedProducts */}
      <RelatedProducts category={props.item.category} setItem={props.setItem} />
    </div>
  );
};

export default ItemDisplay;
