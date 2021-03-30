import React from "react";
import "./style.css";

const IngredientList = (props) => {
  return (
    <div class="ingredient-list-container">
      <div class="ingredient-top"></div>
      <div class="ingredient-mid">
        <ul>
          {props.ingredients.map((ingredient) => (
            <li>
              <span class="ingredient-name">{ingredient.name}</span>
              <span class="ingredient-quantity">{ingredient.measures.metric.amount + ingredient.measures.metric.unitShort}</span>
            </li>
          ))}
        </ul>
      </div>
      <div class="ingredient-bottom"></div>
    </div>
  );
};

export default IngredientList;
