import React from 'react';

const CartContext = React.createContext({
    item:[],
    totalAmount : 0,
    addItem: (items)=>{},
    removeItem : (id)=>{}
});

export default CartContext;