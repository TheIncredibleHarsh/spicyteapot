import React, { useEffect } from 'react';
import IngredientList from '../components/Ingredients-list/index';
import '../stylesheets/recipe.css';
import RecipeInstruction from '../components/recipe-instruction/index';

const ShowRecipe = (props) => {
    var recipe;
    if(localStorage.getItem("recipe")) {
        recipe = JSON.parse(localStorage.getItem("recipe"));
    } else {
        recipe = props.location.state.recipe;
        localStorage.setItem("recipe", JSON.stringify(recipe));   
    }

    useEffect(() => {
        return () => {
         localStorage.removeItem("recipe")
        }
    }, []);
      

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