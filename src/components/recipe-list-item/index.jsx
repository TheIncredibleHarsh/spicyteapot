import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

const RecipeListItem = (props) => {
	const recipe = props.recipe;
  const history = useHistory();
  return (
    <div onClick={() => props.switchPage(history, "/recipe/" + recipe.id, recipe)}>
      <div className="flex-container">
        <div className="img-container">
          <img src={recipe.image} alt={recipe.title} />
        </div>
        <div className="info-container">
          <div className="recipe-title">
            <span>{recipe.title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const RecipeSummary = (props) => {
  return <div dangerouslySetInnerHTML={createMarkup(props.summary)} />;
};

export default RecipeListItem;