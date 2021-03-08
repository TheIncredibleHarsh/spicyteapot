import React from "react";
import RecipeListItem from "../components/recipe-list-item/index.jsx";
import Data from "../assets/better-data.json";

const switchPage = (hist, url, recipe) => {
  hist.push(url, {recipe: recipe});
};

const Recipes = () => {
	const recipeList = Data.recipes;
  return <>
			<div className="recipe-list-container">
				{recipeList.map((value) => {
					console.log(value);
					return <RecipeListItem switchPage={switchPage} recipe={value} />
				})}
			</div>
		</>;
};

export default Recipes;
