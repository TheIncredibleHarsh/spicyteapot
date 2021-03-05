import React from 'react';
import Data from '../data.json';
import IngredientList from '../components/Ingredients-list/index';
import '../stylesheets/recipe.css';
import RecipeInstruction from '../components/recipe-instruction/index';

const ShowRecipe = (props) => {
    const recipe = Data[0];
    return (
        <div class="flex-container">
            <IngredientList ingredients={recipe.ingredients} />
            <RecipeInstruction recipeInstruction={recipe.steps}/>
        </div>
    )
};

export default ShowRecipe;