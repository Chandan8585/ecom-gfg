import React, { Fragment, useState } from 'react'
import "./style.scss"
import Modals from '../../utils/Modals';

const ProductContainer = ({item , onAdd, onRemove}) => {
    const [showModal, setShowModal] = useState(false);
    const [ count, setCount] = useState(0);
     function Increment(event){
      event.stopPropagation();
            onAdd(item.id);
       setCount( count + 1);
     }
    function Decrement(event){
      event.stopPropagation();
        if(count === 0){
        
            return;
        }
        if(count==1){
          onRemove(item.id);
        }
        setCount(count-1);
    }
    // function handleAddToCart(){
    //     setShowCounter(true);
    // }
    function handleModal(event){
      event.stopPropagation();
            setShowModal((previousState) =>! previousState)
    }
  return (
    <Fragment>
    <div className="card card-vertical d-flex direction-column relative shadow"  
    
    >
    <div className="card-image-container">
         <img className="card-image" src={item["thumbnail"]} alt="shoes"/>
    </div>
    <div className="card-details" >
         <div className="card-title" value="title" onClick={handleModal}>{item.title}</div>
         <div className="card-description">
              <p className="card-des"></p>
              <p className="card-price">
                 {item.discountedPrice}
                    <span className="price-strike-through">{item.price}</span>
                 <span className="discount">(30% OFF)</span>
              </p>
         </div>
         <div className="cta-btn">
         { count< 1  ?  ( <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
             Add To Cart <span className="material-icons-outlined add-to-cart" >
              shopping_cart 
               </span> </button>
          ) : (
      <div className="counter-container d-flex flex-column justify-space-around">
        <button className="plus button btn-primary btn-icon cart-btn d-flex" onClick={Increment}>+</button> <button
        className='btn-icon cart-btn d-flex'>
          {count}
            </button>
        <button className="minus button btn-primary btn-icon cart-btn d-flex" onClick={Decrement}>-</button>
      </div>
          )
}
         </div>
         { showModal && 
                <Modals onClose={handleModal}>
                    <div className="item-card__modal">
                        <div className="img-wrap">
                            <img className={"img-fluid"} src={item["thumbnail"]} alt={item.title} width={100}/>
                        </div>
                        <div className="meta">
                            <h3>{item.title}</h3>
                            <div className={"pricing"}>
                                <span>₹{item.discountedPrice}</span>
                                <small>
                                    <strike>₹{item.price}</strike>
                                </small>
                            </div>
                            <p>{item.description}</p>
                            {
                                count < 1 ?
                                <button className={"cart-add card-add__modal"} onClick={Increment}>
                                    <span>Add to Cart</span>
                                    {/* <img src={AddToCartIcon} alt="Cart Icon"/> */}
                                </button>
                                :
                                <div className="cart-addon card-addon__modal">
                                    <button onClick={Decrement}><span>-</span></button>
                                    <span>{count}</span>
                                    <button onClick={Increment}><span>+</span></button>
                                </div>
                            }
                        </div>
                    </div>
                </Modals> 
            }
    </div>
</div>
</Fragment>
  )
}

export default ProductContainer

