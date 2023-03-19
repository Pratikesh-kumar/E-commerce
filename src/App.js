import React, { Fragment, useState,useContext} from "react";
import Header from './Layout/Header/Header';
import Body from './Layout/Body/Body';
import Cart from './Cart/Cart';
import CartProvider from "./Store/CartProvider";
import CartContext from "./Store/cart-context";


const App = () => {
  const cartCtx = useContext(CartContext);
  const [cartIsShown, setCartIsShown] = useState(false);

  const ShowCartHandler = () => {
    setCartIsShown(true);
    console.log('showcart')
  };

  const HideCartHandler = () => {
    setCartIsShown(false);
  };

console.log(cartIsShown)
  return (
    <Fragment>
      
      <CartProvider>
        {cartIsShown && <Cart onClose={HideCartHandler} />}
        <Header onShowCart={ShowCartHandler} />
        <Body/>
        </CartProvider>
        </Fragment>
  )
}

export default App
