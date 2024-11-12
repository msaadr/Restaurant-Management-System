import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/JSX/Navbar';
import Hero from './Components/JSX/Hero';
import AboutRestaurant from './Components/JSX/AboutRestaurant';
import Menu from './Pages/JSX/Menu';
import Cart from './Pages/JSX/Cart';
import ItemDisplay from './Components/JSX/ItemDisplay';
import Categories from './Components/JSX/Categories';
import AboutUs from './Pages/JSX/AboutUs'
import Special from  './Pages/JSX/Special'
import Footer from './Components/JSX/Footer';
import SignUp from './Pages/JSX/SignUp';
function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [category, setCategory] = useState(null);
  console.log(category);
  
  return (
    <Router>
      <div className="App">
        <Navbar setCategory={setCategory} />
        <Routes>
          <Route path="/" element={<> <Hero /><AboutUs /><Special/> <Categories setItem={setCategory}/><Footer/> </>} />
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
