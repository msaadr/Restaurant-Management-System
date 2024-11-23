import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/JSX/Navbar';
import Hero from './Components/JSX/Hero';
import AboutRestaurant from './Components/JSX/AboutRestaurant';
import Menu from './Pages/JSX/Menu';
import Cart from './Pages/JSX/Cart';
import ItemDisplay from './Components/JSX/ItemDisplay';
import Categories from './Components/JSX/Categories';
import AboutUs from './Pages/JSX/AboutUs';
import Special from './Pages/JSX/Special';
import Footer from './Components/JSX/Footer';
import SignUp from './Pages/JSX/SignUp';
import Logout from './Pages/JSX/Logout';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [category, setCategory] = useState(null);
  const [showSignupForm, setShowSignupForm] = useState(true);
  const [name, setName] = useState(null);

  const setUserData = async () => {  
    try {
      const response = await axios.get('http://localhost:5000/api/auth/getuser', {
        withCredentials: true,
      });
      if (response.data.username) {
        setName(response.data.username);
        setShowSignupForm(false);
      } else {
        setShowSignupForm(true);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    setUserData();
    const intervalId = setInterval(() => {
      setUserData();
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar
          setCategory={setCategory}
          name={name ? `Welcome ${name}` : null}
          showLoginOrLogout={showSignupForm ? 'Login/Signup' : 'Logout'}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <AboutUs />
                <Special />
                <Categories setItem={setCategory} />
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<AboutRestaurant />} />
          <Route path="/special" element={<><Special /><Footer /></>} />
          <Route path="/menu" element={<><Menu setItem={setSelectedItem} /><Footer /></>} />
          <Route path="/cart" element={<><Cart /><Footer /></>} />
          <Route path="/contact" element={<Footer />} />
          <Route path="/cuisine" element={<><Menu category={category} setItem={setSelectedItem} /><Footer /></>} />
          <Route path="/categories" element={<><Menu category={category} setItem={setSelectedItem} /><Footer /></>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/logout' element={<Logout setName={setName} />} />
          <Route path="/productshow" element={<><ItemDisplay item={selectedItem} setItem={setSelectedItem} /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
