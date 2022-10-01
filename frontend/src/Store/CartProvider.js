import { useReducer } from "react";
import CartContext from "./cart-context";

const defalutCartState = {
  items: [],
  totolAmount: 0,
};

const cartReducer = (state, action) => {
  if(action.type==='ADD'){
    const updatedItems= state.items.concat(action.item);
    const updatedTotalAmount= state.totolAmount+action.item.price*action.item.amount;
    return {
      items:updatedItems,
      totolAmount: updatedTotalAmount
    }
  }
  return defalutCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defalutCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({type:'ADD',item:item});
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type:'REMOVE',id:id})
  };
  const cartContext = {
    items: cartState.items,
    totolAmount: cartState.totolAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
