import React, { useState } from 'react'
import ListItems from './ListItems'
import Forms from './Forms';

const Product = () => {
  // const [title, setTitle] = useState("");
  // const [price, setPrice] = useState(0);
  // const [discountedPrice, setDiscountedPrice] = useState(0);
  const [item, setItem] = useState([
    {
    id: 0,
    title: "What a snack",
    price: 450,
    discountedPrice: 340,
    img: "./snack.jpg",
    detail: "Good Food To have"
}, 
{
  id: 1,
  title: "What a pasta",
  price: 4500,
  discountedPrice: 3400,
  img: "./snack.jpg",
  detail: "Good Food To have at Night"
},
{
  id: 2,
  title: "What a pasta",
  price: 4500,
  discountedPrice: 3400,
  img: "./snack.jpg",
  detail: "Good Food To have at Night"
},
{
  id: 3,
  title: "What a nastaasta",
  price: 400,
  discountedPrice: 400,
  img: "./snack.jpg",
  detail: "Good Food To have at Night"
}


]);


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
      {/* <Forms item={item} handleInput= {handleInput} Inputhandler={Inputhandler}/> */}
      
          {  item.map((e, id) =>

                 (<ListItems key={id} data={e}/>))
          }


    </div>
  )
}

export default Product
