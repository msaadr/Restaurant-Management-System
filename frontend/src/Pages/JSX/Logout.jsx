import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = (props) => {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate('/'); 
  };
  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/logout', {}, { withCredentials: true });
      
      console.log(response);
      if (response.status === 200) {
        props.setName(null)
        alert(response.data.message);
        navigate('/signup');
      }
    } catch (error) {
      console.error('Error logging out:', error);
      alert('Failed to logout. Please try again.');
    }
  };
  
  return (
    <div className="logout">
      <div className="container">
        <p>Do you really want to logout?</p>
        <div>
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
