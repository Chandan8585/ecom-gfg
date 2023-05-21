import React from 'react'

const ListItems = ({data}) => {
  return (
    <div className='item-wrapper'>
      <div className="img">
        <img src={data.img} alt="" width={300}/>
      </div>
      <div className="details">
        <div className="product-name">{data.title}</div>
        <small>Original Price<strike> Rs {data.price}</strike></small>
      <div className="Original-price">Discounted Price Rs {data.discountedPrice} </div>
      <div className="product-detail">
        {data.detail}
      </div>
        <button className='add-to-cart'>Add To Cart</button>
      </div>
    </div>
  )
}

export default ListItems
