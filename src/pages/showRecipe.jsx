import React from 'react';
import IngredientList from '../components/Ingredients-list/index';
import '../stylesheets/recipe.css';
import RecipeInstruction from '../components/recipe-instruction/index';

const ShowRecipe = (props) => {
    var recipe;
    if(props.recipe) {
        recipe = props.recipe    
    }

    return (
        <>
        <div class="flex-container">
            <IngredientList ingredients={recipe.ingredients} />
            <RecipeInstruction recipeInstruction={recipe.steps}/>
        </div>
        </>
    )
};

export default ShowRecipe;