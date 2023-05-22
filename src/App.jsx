import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Product from './components/Product'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const Hanclick = () => {
    localStorage.setItem("demo-token", true)
    setIsLoggedIn(true);
  }
  const logout = () => {
    localStorage.setItem("demo-token", false)
    setIsLoggedIn(false);
 }
  
  return (
    <div>
    
    <div>
    {
      
        isLoggedIn ? 
        <div>
           <Navbar/>
      <Product/>
      <button onClick={logout}>Log Out</button>
        </div>
       : <button onClick={Hanclick}>Log In</button>

      }
    </div>
    

      

    </div>
  )
}

export default App
