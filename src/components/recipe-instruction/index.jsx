import React from 'react';
import './style.css';

const RecipeInstruction = (props) => {
    return (
        <div class="recipe-steps-container" dangerouslySetInnerHTML={{__html: props.recipeInstruction}}>
        </div>
    )
}

export default RecipeInstruction