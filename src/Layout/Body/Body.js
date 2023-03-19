
import AvailableItems from "../Items/AvailableItems";
import classes from './Body.module.css'
import Name from "../Name/Name";

const Body=(props)=>{
    return<div className={classes.body}>
         <Name/>
        <AvailableItems/>
        
        
        </div>
        
    
}
export default Body;