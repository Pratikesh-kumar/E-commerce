import { Fragment,useContext} from "react";
import classes from "./ProductItem.module.css";
import CartContext from "../../../Store/cart-context";
import { Link } from "react-router-dom";
import axios from "axios";


const ProductItem = (props) => {
 const cartCtx = useContext(CartContext);
 let email = localStorage.getItem("email").replace(".", "").replace("@", "");
  
 const addItemToCart = (event) => {
  event.preventDefault();
 cartCtx.addItem({ ...props, quantity: props.quantity });
 axios.post(
   `https://crudcrud.com/api/50e06decf91a493c8bfd7e06f4d8126d/cart${email}`,
   props
 ).then((res) => {
   console.log(res.data, "Successfull");
 })
 .catch((error) => {
   alert(error);
 });
 }




  return (
    <Fragment>
      
    <div className={classes.Items}>
    
      <h3>{props.title}</h3>
      <Link to={`/products/${props.id}`} className={classes.link}>
     
      <img className={classes.img} src={props.image} alt="some images"></img>
      <div className={classes.price}>Rs. {props.price}</div>
      <button className={classes.button} onClick={addItemToCart} >Add To cart</button>
       </Link>

    </div>

    
    </Fragment>
);
};
export default ProductItem;