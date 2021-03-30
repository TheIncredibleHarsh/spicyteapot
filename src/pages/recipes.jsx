import React, { useEffect, useState } from "react";
import RecipeListItem from "../components/recipe-list-item/index.jsx";
import Data from "../assets/better-data.json";

const switchPage = (hist, url, recipe) => {
  hist.push(url, {recipe: recipe});
};


const Recipes = (props) => {
	const [recipeList, setRecipeList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	// const recipeList = Data.recipes;

	useEffect(async () => {
		if (recipeList == null) {
			return;
		}
		await fetch('https://api.spoonacular.com/recipes/random?number=20&apiKey=3c6b5aedfaf34bb899d1751ea2feb1b2')
		.then((resp) => resp.json())
		.then((data) => {
			setRecipeList(data.recipes);
			setIsLoading(false);
		})
	}, [])

	if (isLoading) {
		return <>
			<p>loading...</p>
		</>
	} else {
		return <>
			<div className="recipe-list-container">
				{recipeList.map((value) => {
					return <RecipeListItem switchPage={switchPage} recipe={value} />
				})}
			</div>
		</>;
	}	
};

export default Recipes;
