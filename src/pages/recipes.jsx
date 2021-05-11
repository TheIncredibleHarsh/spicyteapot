import React, { useEffect, useState } from "react";
import RecipeListItem from "../components/recipe-list-item/index.jsx";
import { FilterOptions, SortOptions } from "../lib/filter-sort-options";
import FilterItem from "../components/filter-item/index.jsx";
import '../stylesheets/recipe.css';

const switchPage = (hist, url, recipe) => {
  hist.push(url, {recipe: recipe});
};


const Recipes = (props) => {
	const [recipeList, setRecipeList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(async () => {
		if (parseInt(localStorage.getItem("lastFetchTime")) + 8640000 > Date.now()) {
			setRecipeList(JSON.parse(localStorage.getItem("recipeList")));
			setIsLoading(false);
		} else {
			await fetch('https://api.spoonacular.com/recipes/random?number=20&apiKey=3c6b5aedfaf34bb899d1751ea2feb1b2')
							.then((resp) => resp.json())
							.then((data) => {
			setRecipeList(data.recipes);
			setIsLoading(false);
			localStorage.setItem("recipeList", JSON.stringify(data.recipes));
			localStorage.setItem("lastFetchTime", Date.now());
		})
		}
	}, [])

	if (isLoading) {
		return <>
			<p>loading...</p>
		</>
	} else {
		return( 
		<div class="recipe-list-page">
			<div className="recipe-list-container">
				{recipeList.map((value) => {
					return <RecipeListItem switchPage={switchPage} recipe={value} />
				})}
			</div>
			<div class="recipe-list-filter">
				<ul>
					<li>
						{FilterOptions.map((filterOption) => {
							return <FilterItem filterOption={filterOption} />
						})}
					</li>
				</ul>
			</div>
		</div>
		);
	}	
};

export default Recipes;
