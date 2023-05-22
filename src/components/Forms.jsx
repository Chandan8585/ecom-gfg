import React from 'react'

const Forms = (props) => {
    
  return (
    <div>
         <form onSubmit={props.Inputhandler} >
     <label htmlFor="Title">
      Title
      </label>
      <input 
        onChange={props.handleInput}
      name="title"
      type="text"
       value={props.item.title} 
       
       />
      <label htmlFor="price">
      <h2>Original price</h2>
      <input 
        onChange={props.handleInput}
      name="price"
      type="number" value={props.item.price}
      //  onChange={handlePrice}
       />
      </label>
      <label htmlFor="Discounted Price">
      <h2>Discounted Price</h2>
      <input 
      name="discountedPrice"
      type="text"  value={props.item.discountedPrice} 
      onChange={props.handleInput}
      />
      </label>
      <label htmlFor="Img">
      <h2>Img</h2>
      </label>

      <input 
        onChange={props.handleInput}
      name="img"
      type="text" value={props.item.img}/>
      <div>
      <button>Update</button>
      </div>
      
      </form>
    </div>
  )
}

export default Forms
