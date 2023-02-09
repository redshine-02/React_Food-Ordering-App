import React,{useReducer} from 'react';
import CartContext from './add_content_context';

const defaultCartState = {
    item: [],
    total: 0 
}
const cartReducer = (state,action) => {
    if(action.type==='ADD'){
        const updatedItem = state.item.concat(action.value);
        const updatedTotal = state.total+ action.value.price*action.value.amount;
        return {
            item:updatedItem,
            total:updatedTotal
        }
    }
    return defaultCartState;
}

const CartProvider = (props) =>{
    const[cartState,dispatchFn] = useReducer(cartReducer,defaultCartState);

    const addingItemHandler=(item)=>{
        dispatchFn({type:'ADD',value:item});
    }

    const removeItemHandler=(id)=>{
        dispatchFn({type:'REMOVE',value:id});
    }

    const cartContent = {
        item:cartState.item,
        totalAmount:cartState.total,
        addItem: addingItemHandler,
        removeItem : removeItemHandler
    }
    return <CartContext.Provider value={cartContent}>{props.children}</CartContext.Provider>
}

export default CartProvider;