import React from 'react';
import IngredientList from '../components/Ingredients-list/index';
import '../stylesheets/recipe.css';
import RecipeInstruction from '../components/recipe-instruction/index';

const ShowRecipe = (props) => {
    var recipe;
    if(props.location.state.recipe) {
        recipe = props.location.state.recipe    
    }

    return (
        <>
        <div class="recipe-container">
            <IngredientList ingredients={recipe.extendedIngredients} />
            <RecipeInstruction recipeInstruction={recipe.instructions}/>
        </div>
        </>
    )
};

export default ShowRecipe;