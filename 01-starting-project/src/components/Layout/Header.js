import React from 'react';
import mealsImage from '../../assets/meals.jpg';

import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) =>{
    return <React.Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton onClick={props.onSelection}></HeaderCartButton>
        </header>
        <div className={classes['main-image']}> 
            <img src={mealsImage} alt='A table full of delicious food'></img>
        </div>
    </React.Fragment>
};

export default Header;