import React from "react";
import ProductItem from './ProductItem/ProductItem'

import classes from "./AvailableItem.module.css";
// import CartContext from "../../Store/cart-context";


const AvailableItems = (props) => {


  const productsArr = [
    {
      id: "1",
  
      title: "Colors",
  
      price: 100,
  
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
  
    {
      id: "2",
  
      title: "Black and white Colors",
  
      price: 50,
  
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
  
    {
      id: "3",
  
      title: "Yellow and Black Colors",
  
      price: 70,
  
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
  
    {
      id: "4",
  
      title: "Blue Color",
  
      price: 100,
  
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  
  
  return (
    <div className={classes.content}>
     
      <ul className={classes.ul}>
        {productsArr.map((item) => {
          return (
            <ProductItem
            key={Math.random()}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.imageUrl}
            quantity={1}
          
          
            />
          );
        })}
      </ul>
    </div>
  );
};

export default AvailableItems;