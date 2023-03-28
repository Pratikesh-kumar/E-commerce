import { Fragment,useContext} from "react";
// import CartContext from "../../Store/cart-context";
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import NavBar from '../NavBar/Navbar';
import LoginContext from "../../Store/LoginContext";


const Header = (props) => {
  const authCtx=useContext(LoginContext)
  return (
    <Fragment>
      <header className={classes.header}>
       
      {authCtx.isLoggedIn&& <HeaderCartButton onClick={props.onShowCart} />}
        <NavBar/>
        
      </header>
    </Fragment>
  );
};

export default Header;