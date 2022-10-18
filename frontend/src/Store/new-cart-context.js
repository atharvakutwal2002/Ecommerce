import { createContext, useState } from "react";

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem :(item)=>{},
  removeItem:(id)=>{}
});

export function CartContextProvider(props) {
  const [items, setItems] = useState([]);

  function addItemHandler(item) {
    setItems((prevItems) => {
      return prevItems.concat(item);
    });
  }
  function removeItemHandler(id) {
    setItems((prevItems) => {
        console.log(id);
        console.log(prevItems)

      return prevItems.filter((item) => item.id !== id);
    });
  }
  const context = {
    items: items,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
}


export default CartContext;