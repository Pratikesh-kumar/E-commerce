import { Fragment,useContext} from "react";
import CartContext from "../../Store/cart-context";
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import NavBar from '../NavBar/Navbar';


const Header = (props) => {
  const cartCtx=useContext(CartContext)
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.fixed}>
        <HeaderCartButton onClick={props.onShowCart} />
        <NavBar/>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;