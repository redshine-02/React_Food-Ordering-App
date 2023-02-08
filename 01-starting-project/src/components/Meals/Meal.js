import React from 'react';
import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';

const Meal = props =>{
    return <React.Fragment>

        <AvailableMeals></AvailableMeals>
        <MealsSummary></MealsSummary>
    
    </React.Fragment>
};

export default Meal;