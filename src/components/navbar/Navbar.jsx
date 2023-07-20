import React from 'react'
import "./style.scss"
const Navbar = ({count}) => {
  return (
    <nav className="logo">
    <div className="left">
        <img src="../src/assets/Logo.svg" alt="logo" />
    
  
    </div>
      <div className="center">
        <input type="text" placeholder="search Product" id="search-input" />
        <span className="material-icons search">
            search
            </span>
      </div>
      <div className="right">

            <a href="/"><span className="material-icons-outlined heart">
            favorite_border
            </span></a>
        
   <a href="/">
    
    <span className="material-icons-outlined">
      shopping_cart
    </span>
    <div className="cart-counter">{count}</div>
    </a>
            
        <button className="button btn-primary">Log in</button>
      </div>
</nav>
  )
}

export default Navbar
