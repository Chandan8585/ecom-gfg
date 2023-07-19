import React from 'react'
import "./style.scss"
const Navbar = () => {
  return (
    <nav class="logo">
    <div class="left">
        <img src="../src/assets/Logo.svg" alt="logo" />
    
  
    </div>
      <div class="center">
        <input type="text" placeholder="search Product" id="search-input" />
        <span class="material-icons search">
            search
            </span>
      </div>
      <div class="right">

            <a href="/"><span class="material-icons-outlined heart">
            favorite_border
            </span></a>
        
   <a href="/"><span class="material-icons-outlined">
shopping_cart
</span></a>
            
        <button class="button btn-primary">Log in</button>
      </div>
</nav>
  )
}

export default Navbar
