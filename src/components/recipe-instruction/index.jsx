import React from 'react';
import './style.css';

const RecipeInstruction = (props) => {
    return (
        <div class="recipe-steps-container">
            {props.recipeInstruction}
        </div>
    )
}

export default RecipeInstruction