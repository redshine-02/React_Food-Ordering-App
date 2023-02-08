import Header from "./components/Layout/Header";
import Meal from "./components/Meals/Meal";
import React,{useState} from 'react';
import Cart from './components/Cart/Cart';

function App() {
  const[cartIsShown,setCartShown]=useState(false);

  const showCartHandler = () =>{
    setCartShown(true);
  }

  const closeCartHandler = () =>{
    setCartShown(false);
  }
  return (
    <React.Fragment>
      {cartIsShown && <Cart onRemoval={closeCartHandler}/>}
      <Header onSelection={showCartHandler}></Header>
      <main>
        <Meal/>
      </main>
      
    </React.Fragment>
  );
}

export default App;
