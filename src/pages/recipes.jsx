import React, { useEffect, useState } from "react";
import RecipeListItem from "../components/recipe-list-item/index.jsx";
import { FilterOptions } from "../lib/filter-sort-options";
import FilterItem from "../components/filter-item/index.jsx";
import '../stylesheets/recipe.css';

const switchPage = (hist, url, recipe) => {
  hist.push(url, {recipe: recipe});
};


const Recipes = (props) => {
	const [filters, setFilters] = useState({ 
		vegetarian: true, 
		vegan: true, 
		glutenFree: true, 
		dairyFree: true, 
		// readyInMinutes: "180"
	});
	const [recipeList, setRecipeList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const updateFilter = (key, value) => {
		var tempFilter = {...filters};
		tempFilter[key] = value;
		setFilters(tempFilter);
	};
	
	// const applyFilter = (item) => {
	// 	var filterKey;
	// 	for (filterKey in filters) {
	// 		if(item[filterKey] !== filters[filterKey] ) {
	// 			return false;
	// 		}
	// 	}
	// 	return true;
	// } 

    // useEffect(() => {
    //     // filter recipes
	// 	setIsLoading(true);
	// 	console.log(recipeList)
	// 	var filteredRecipes = recipeList.filter(applyFilter);
	// 	console.log(recipeList.filter(applyFilter))
	// 	setRecipeList(filteredRecipes);
	// 	setIsLoading(false);
    // }, [filters]);


	// eslint-disable-next-line
	useEffect(async () => {
		if (parseInt(localStorage.getItem("lastFetchTime")) + 8640000 > Date.now()) {
			setRecipeList(JSON.parse(localStorage.getItem("recipeList")));
			setIsLoading(false);
		} else {
			await fetch('https://api.spoonacular.com/recipes/random?number=100&apiKey=3c6b5aedfaf34bb899d1751ea2feb1b2')
							.then((resp) => resp.json())
							.then((data) => {
			setRecipeList(data.recipes);
			setIsLoading(false);
			localStorage.setItem("recipeList", JSON.stringify(data.recipes));
			localStorage.setItem("lastFetchTime", Date.now());
		})
		}
	}, []);

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
			{/* <div class="recipe-list-filter">
				<ul>
					<li>
						{FilterOptions.map((filterOption) => {
							return 	<FilterItem 
										filterOption={filterOption} 
										updateFilter={updateFilter} 
										filter={filters}
									/>
						})}
					</li>
				</ul>
			</div> */}
		</div>
		);
	}	
};

export default Recipes;
