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
	const [filter, setFilter] = useState({
		vegan: true,
		vegetarian: true,
		glutenFree: true,
		dairyFree: true,
		time: 180
	});

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
	}, []);

	const updateFilter = (key, value) => {
		var tempFilter = filter;
		tempFilter[key] = value;
		setFilter(tempFilter);
	};
	console.log("this", this);
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
							return 	<FilterItem 
										filterOption={filterOption} 
										updateFilter={updateFilter} 
										filter={filter}
									/>
						})}
					</li>
				</ul>
			</div>
		</div>
		);
	}	
};

export default Recipes;
