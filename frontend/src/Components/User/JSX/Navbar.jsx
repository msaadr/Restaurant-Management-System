import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/Navbar.css';
import { useSelector } from 'react-redux';

const Navbar = (props) => {
    const totalQuantity = useSelector((state) => state.cart.quantity);
    const navigate = useNavigate();
    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;

        if (selectedCategory === 'pakistani' || selectedCategory === 'chinese') {

            props.setCategory(selectedCategory);
            navigate('/cuisine');

        }

    };
   useEffect(()=>{

   },[props.name])
    return (
        <div className='navbar'>
            <div className="left">
                <h2>Foodie's Restaurant</h2>
                <div className='navbar-user-name'>
                    <p>{props.name}</p>
                </div>
            </div>
            <ul className='nav-ul'>
                <li className='nav-li'>
                    <Link className='navlink' to="/">Home</Link>
                </li>
                <li className='nav-li'>
                    <Link className='navlink' to="/menu">Menu</Link>
                </li>
                <li className='nav-li dropdown'>
                    Cuisine
                    <select className='selecnav' name="cuisine" id="cuisine" onChange={handleCategoryChange}>
                        <option value="">Select Cuisine</option>
                        <option value="pakistani">Pakistani</option>
                        <option value="chinese">Chinese</option>
                    </select>
                </li>
                <li className='nav-li'>
                    <Link className='navlink' to="/contact">Contact Us</Link>
                </li>
            </ul>
            <div className="right">
                <Link to='/menu'> <button>Order Online</button></Link>
                <Link to='/cart'><i className="fa-solid  abc-nav fa-cart-shopping"></i></Link>
                <p className="circcc">{totalQuantity}</p>
                <Link to={props.showLoginOrLogout === 'Logout' ? '/logout' : '/signup'} className="abc-nav">
                    <p>{props.showLoginOrLogout}</p>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
