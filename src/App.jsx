
import { useState } from 'react'
import './App.scss'
import Body from './components/body/Body'

import Navbar from './components/navbar/Navbar'
import SubHeader from './components/subheader/SubHeader'

function App() {
const [cartItems, setCartItems] = useState(0);
  const handleAddItem = ()=> {
     setCartItems(cartItems+1);
  }
  const handleRemoveItem = ()=> {
    setCartItems(cartItems-1);
  }
  return (
    <div>          
  <Navbar  count={cartItems}/>
<SubHeader />
  <Body onAddItem={handleAddItem} onRemoveItem={handleRemoveItem}/>

 </div>
  )
}

export default App
