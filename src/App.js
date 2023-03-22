import React, { Fragment, useState,useContext} from "react";
import Header from './Layout/Header/Header';
import Body from './Layout/Body/Body';
import Cart from './Cart/Cart';
import CartProvider from "./Store/CartProvider";
import CartContext from "./Store/cart-context";
import { Route } from "react-router";
import About from "./Pages/AboutUs";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";


const App = () => {
  // const cartCtx = useContext(CartContext);
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
        <Route path="/AboutUs">
          <About />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/ContactUs">
          <ContactUs />
        </Route>
        <Body/>
        </CartProvider>
        </Fragment>
  )
}

export default App
