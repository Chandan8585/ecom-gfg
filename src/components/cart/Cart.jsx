import { Fragment, useState } from "react";
import Modals from "../../utils/Modals";
import "./style.scss";
import CartItem from "./cartItem/CartItem";

const Cart = ({ count, items, onHandleEvent }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal((previousState) => !previousState);
  };

  return (
    <Fragment>
      <button onClick={handleModal}>
        <span className="material-icons-outlined heart" data-items={count}>shopping_cart</span>
        <span className="cart-counter">{count}</span>
      </button>
      {showModal && (
        <Modals onClose={handleModal}>
          <div className="checkout-modal">
            <h2>Checkout Modal</h2>
            <div className="checkout-modal_list">
              {count > 0 ? 
              (
                items.map((item) => (
                  <CartItem data={item} onEmitIncreaseItem={id=> onHandleEvent(id, 1)} onEmitDecreaseItem={id=> onHandleEvent(id, -1)} key={item.id}  />
                ))
              ) : (
                <div className="empty-cart">Please add something in your cart!</div>
              )}
            </div>
            {count > 0 && (
              <div className="checkout-modal_footer">
                <div className="totalAmount">
                  <h4>Total Amount: </h4>
                  <h4>{items.reduce((acc, curr)=> {return acc + (curr.discountedPrice * curr.quantity)}, 0)} <span style={{marginLeft: "4px"}}>INR</span></h4>
                </div>
                <button>Order Now</button>
              </div>
            )}
          </div>
        </Modals>
      )}
    </Fragment>
  );
};

export default Cart;
