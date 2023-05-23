import React, { useEffect, useState } from 'react'
import ListItems from './ListItems'
import axios from "axios"
// import Forms from './Forms';

const Product = () => {
  // const [, setItem] = useState();
  // const [title, setTitle] = useState("");
  // const [price, setPrice] = useState(0);
  // const [discountedPrice, setDiscountedPrice] = useState(0);
  const [items, setItems] = useState([]);

// useEffect(()=> {
//      axios.get('https://ecom-gfg-default-rtdb.firebaseio.com/.json')
//      .then(response => {
//       const data = response.data;
//       const transformData = data.map((item, index) => {
//         return {
//            ...item,
//            id: index
//         }
//       });
//       setItem(transformData);
// })
// .catch(error => {
//   console.log(error)
// })

// },[]);

useEffect(() => {
  axios.get('https://ecom-gfg-default-rtdb.firebaseio.com/items.json')
    .then(response => {
      const data = response.data;
      const transformData = Object.values(data).map((item, index) => ({
        ...item,
        id: index
      }));
      setItems(transformData);
    })
    .catch(error => {
      console.log(error);
    });
}, []);

// const Inputhandler= (event)=> {
//   event.preventDefault();
//   if(item.discountedPrice > item.price){
//    alert("Discounted Price cannot be greater than price")
//    return;
//   }
 

// }

// const handleInput= event => {
//   // event.preventDefault();
//   setItem({
//    ...item,
//    [event.target.name] : event.target.value
//     })
// }

  return (
    <div className='product'>
      {/* <Forms item={item} handleInput= {handleInput} Inputhandler={Inputhandler}/> */}
      
          {/* {  item.map((e, id) =>

                 (<ListItems key={e.id} data={e}/>))
          } */}

{items.map((item) => (
  <ListItems key={item.id} data={item} />
))}

    </div>
  )
}

export default Product
