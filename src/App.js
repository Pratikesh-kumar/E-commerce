import React, { Fragment, useState, useContext ,useEffect} from "react";
import axios from "axios";
import Header from "./Layout/Header/Header";

import Cart from "./Cart/Cart";
import { Route, Redirect } from "react-router-dom";
import CartProvider from "./Store/CartProvider";
import CartContext from "./Store/cart-context";
import LoginContext from "./Store/LoginContext";
import About from "./Pages/AboutUs";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import ProductDetail from "./Pages/ProductDetails";
import Store from "./Pages/Store";
import LoginForm from "./Pages/LoginPage";


const App = () => {
  if (!localStorage.getItem("email")) {
    localStorage.setItem("email", "");
  }
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(LoginContext);
  let email = localStorage.getItem("email").replace(".", "").replace("@", "");

  const [cartIsShown, setCartIsShown] = useState(false);

  const ShowCartHandler = () => {
    setCartIsShown(true);
    console.log("showcart");
  };

  const HideCartHandler = () => {
    setCartIsShown(false);
  };
  console.log(authCtx.isLoggedIn + "hiiiii");

  console.log(cartIsShown);
  useEffect(() => {
    if (!email) return;
     axios.get(`https://crudcrud.com/api/50e06decf91a493c8bfd7e06f4d8126d/cart${email}`).then((res) => {
       const data= (res.data)
       for (const key in data) {
         const item = data[key];
         item._id = key;
         cartCtx.mapID(item)
       }
       
     }).catch((err) => {
       alert(err)
     })
   }, [email, cartCtx])
  return (
    <Fragment>
      <CartProvider>
        {cartIsShown && <Cart onClose={HideCartHandler} />}
        <Header onShowCart={ShowCartHandler} />

        <Route path="/" exact>
          <Redirect to="/Login" />
        </Route>
        <Route path="/AboutUs">
          <About />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/Store">
          {authCtx.isLoggedIn && <Store />}
          {!authCtx.isLoggedIn && <Redirect to="/Login" />}
        </Route>
        <Route path="/ContactUs">
          <ContactUs />
        </Route>
        <Route path="/products/:product_id">
          <ProductDetail />
        </Route>
        <Route path="/Login" exact>
          <LoginForm />
          {!authCtx.isLoggedIn && <Redirect to="/Login" />}
        </Route>
        {/* <Body/> */}
      </CartProvider>
    </Fragment>
  );
};

export default App;
