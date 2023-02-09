import React, { useContext } from 'react';
import CartContext from '../../../store/add_content_context';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = props => {
    const ctx = useContext(CartContext);
    const addToCartHandler =(totalAmount)=>{
        ctx.addItem({
            id:props.id,
            name:props.name,
            totalAmount:totalAmount,
            price:props.price
        })
    }
    const price = `$${props.price.toFixed(2)}`;
    return <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm code={props.id} onAddToCart={addToCartHandler}/>
        </div>
    </li>;
}

export default MealItem;