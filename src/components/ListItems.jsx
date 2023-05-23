import React, { useState } from 'react'

const ListItems = ({data}) => {
    const [count, setCount] = useState(0);

    // const Clickhandler= (e)=> {
    //   e.preventDefault();
  
    // }
  const Incrementcounter = ()=> {
    if(count < 5){
       return  setCount(count+1);
    }
  
  }
  const Decrementcounter = ()=> {
    if(count>0){
       setCount(count-1);
    }
  }
  

  return (
    <div className='item-wrapper'>
      <div className="img">
        <img src={data.thumbnail} alt="" width={300}/>
      </div>
      <div className="details">
        <div className="product-name">{data.title}</div>
        <small>Original Price<strike> Rs {data.price}</strike></small>
      <div className="Original-price">Discounted Price Rs {data.discountedPrice} </div>
      <div className="product-detail">
        {data.detail}
      </div>
      <div>
        {
           count < 1?
      <button className='add-to-cart' onClick={Incrementcounter}>Add TO Cart</button>
      :
      <div>
      <button onClick={Incrementcounter}>+</button> 
      <span>{count}</span>
     <button onClick={Decrementcounter}>-</button>
     </div>
        }
      </div>

      </div>
    </div>
  )
}

export default ListItems
