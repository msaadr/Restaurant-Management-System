import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/User/JSX/Navbar';
import Hero from './Components/User/JSX/Hero';
import AboutRestaurant from './Components/User/JSX/AboutRestaurant';
import Menu from './Pages/JSX/Menu';
import Cart from './Pages/JSX/Cart';
import ItemDisplay from './Components/User/JSX/ItemDisplay';
import Categories from './Components/User/JSX/Categories';
import AboutUs from './Pages/JSX/AboutUs';
import Special from './Pages/JSX/Special';
import Footer from './Components/User/JSX/Footer';
import SignUp from './Pages/JSX/SignUp';
import Logout from './Pages/JSX/Logout';
import AdminNavbar from './Components/Admin/JSX/AdminNavbar';
import AdminMenu from './Components/Admin/JSX/AdminMenu';
import ModifyItem from './Components/Admin/JSX/ModifyItem';
import DeleteItem from './Components/Admin/JSX/DeleteItem';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [category, setCategory] = useState(null);
  const [showSignupForm, setShowSignupForm] = useState(true);
  const [name, setName] = useState(null);
  console.log(category);
  
  return (
    <Router>
      <div className="App">
        <Navbar
          setCategory={setCategory}
          name={name ? `Welcome ${name}` : null}
          showLoginOrLogout={showSignupForm ? 'Login/Signup' : 'Logout'}
        />
        {/* <AdminNavbar/> */}
        <Routes>
          <Route
            path="/"
            element={
              <>
              <AdminMenu/>
              <ModifyItem/>
              <DeleteItem/>
                <Hero />
                <AboutUs />
                <Special />
                <Categories setItem={setCategory} />
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<AboutRestaurant />} />
          <Route path="/special" element={<Special />} />
          <Route path="/menu" element={<Menu  setItem={setSelectedItem} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Footer/>} />

          <Route path="/cuisine" element={<Menu category={category} setItem={setSelectedItem}/>} />
          <Route path="/categories" element={<Menu category={category} setItem={setSelectedItem} />} />
          <Route path="/signUp" element={<SignUp/>} />

          <Route path="/productshow" element={<ItemDisplay item={selectedItem} setItem={setSelectedItem} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
