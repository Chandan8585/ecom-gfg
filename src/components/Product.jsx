import React, { useState } from 'react'
import ListItems from './ListItems'

const Product = () => {
  // const [title, setTitle] = useState("");
  // const [price, setPrice] = useState(0);
  // const [discountedPrice, setDiscountedPrice] = useState(0);
  const [item, setItem] = useState({
    title: "What a snack",
    price: 450,
    discountedPrice: 340,
    img: "./snack.jpg",
    detail: "Good Food To have"
});

// const handleTitle = (event)=> {
//     setTitle(event.target.value);
// }

// const handlePrice = event=> {
//   setPrice(event.target.value);
// }
// const handleDiscountedPrice = event=> {
//   setDiscountedPrice(event.target.value);
// }
const Inputhandler= (event)=> {
     event.preventDefault();
     if(item.discountedPrice > item.price){
      alert("Discounted Price cannot be greater than price")
      return;
     }
    

}

const handleInput= event => {
  // event.preventDefault();
  setItem({
   ...item,
   [event.target.name] : event.target.value
    })
}

  return (
    <div className='product'>
      <form onSubmit={Inputhandler} >
     <label htmlFor="Title">
      Title
      </label>
      <input 
        onChange={handleInput}
      name="title"
      type="text"
       value={item.title} 
       
       />
      <label htmlFor="price">
      <h2>Original price</h2>
      <input 
        onChange={handleInput}
      name="price"
      type="number" value={item.price}
      //  onChange={handlePrice}
       />
      </label>
      <label htmlFor="Discounted Price">
      <h2>Discounted Price</h2>
      <input 
      name="discountedPrice"
      type="text"  value={item.discountedPrice} 
      onChange={handleInput}
      />
      </label>
      <label htmlFor="Img">
      <h2>Img</h2>
      </label>

      <input 
        onChange={handleInput}
      name="img"
      type="text" value={item.img}/>
      <div>
      <button>Update</button>
      </div>
      
      </form>
      <ListItems data={
       item}

      />

    </div>
  )
}

export default Product
