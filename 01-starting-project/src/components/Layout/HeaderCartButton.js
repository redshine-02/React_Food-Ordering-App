import React,{useContext} from 'react';
import CartContext from '../../store/add_content_context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';


const HeaderCartButton = props => {
    const ctx = useContext(CartContext);
    const numberofCartItem = ctx.item.reduce((curNumber, item) => {
        return curNumber + item.amount;
      }, 0);

    return <button className={classes.button} onClick={props.onClick}>
    <span className={classes.icon}>
        <CartIcon/>
    </span>

    <span >
        <span>Your Cart</span>
    </span>

    <span className={classes.badge}>
        {numberofCartItem}
    </span>
 </button>
}

export default HeaderCartButton;