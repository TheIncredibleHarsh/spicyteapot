import React from 'react';
import Data from '../data.json';
import IngredientList from '../components/Ingredients-list/index';

const ShowRecipe = (props) => {
    const recipe = Data[0];
    return (
        <p>
            <h1>Show Recipe</h1>
            <h2>{props.match.params.id}</h2>
            <p>
                {recipe.name}
            </p>
            <p>
                <IngredientList ingredients={recipe.ingredients} />
            </p>
        </p>
    )
};

export default ShowRecipe;