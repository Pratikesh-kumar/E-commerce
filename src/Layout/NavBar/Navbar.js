import { Fragment } from "react";
import classes from "./Navbar.module.css";

const NavBar = (props) => {
 
 
  return (
    <Fragment>
      <div className={classes.navbar}>
        <div className={classes.icon} >
          HOME
        </div>
        <div className={classes.icon} >
          STORE
        </div>
        <div className={classes.icon} >
          ABOUT
        </div>
       
        <div className={classes.icon} >
          CONTACT US
        </div>
       
      </div>
    </Fragment>
  );
};
export default NavBar;