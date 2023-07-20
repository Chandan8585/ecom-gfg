import { useEffect, useState } from 'react';
import Loader from '../../utils/Loader';
import ProductContainer from '../productContainer/productContainer';
import axios from 'axios';
import "./style.scss"


const Body = ({onAddItem, onRemoveItem})  => {
    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(true);
    const [presentItems, setPresentItems] = useState([]);

    useEffect(()=>{
      async function fetchItems(){
        try {
          const response =await axios.get('https://react-guide-2021-default-rtdb.firebaseio.com/items.json')
          const result = response.data ; 
          console.log(result); 
          const transformedData = Object.keys(result).map((item, index)=> {
            return{
              ...result[item],
              id: index,
            }
          })
            setItems(transformedData);
        } catch (error) {
          console.log("Error", error);
        }
       finally{
        setLoader(false)
       } 
      }

      
      fetchItems();
    }, [])
    const handleAddItem = id =>{
      if(presentItems.indexOf(id) > -1){
        return;
      }
      setPresentItems([...presentItems,id])
       console.log(id);
       onAddItem();
    }
    const handleRemoveItem = id =>{
      let index = presentItems.indexOf(id)
      if(index > -1){
        setPresentItems([...presentItems.splice(index,1)]);
        onRemoveItem();
      }
      
    }
  return (
    <div>
      <div className="product-list">
        <div className="product-list-wrapper">
          {
            items.map((item)=> {
              return (
                <ProductContainer onAdd={handleAddItem} onRemove = {handleRemoveItem} key={item.id} item={item}/>
              )
            } )
          }
      </div>
  
    </div>
    {loader && <Loader/> }
    </div>
  );
};

export default Body;
