import React from 'react'
import {AiOutlineShoppingCart, AiOutlineSearch} from 'react-icons/ai'
const Navbar = () => {
  return (
    <div className='navbar'>
    <ul className="item">
        <li className="logo"><h2>Amakart <span><AiOutlineShoppingCart/></span></h2></li>
        <li className="search-bar">
          <input
          className='search'
          type="text"
          placeholder='Enter product name category' />
          <span><button className='search-icon'><AiOutlineSearch/></button></span>
        </li>
        <li className="cart">
          <h2>Cart  <span className='product-counter'>7</span><AiOutlineShoppingCart/></h2>
          
        </li>
        
        </ul>  
    </div>
  )
}

export default Navbar
