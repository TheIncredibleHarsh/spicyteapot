const FilterOptions = [
    {
        label: "Vegetarian",
        type: "checkbox",
        fieldName: "vegetarian"
    },
    {
        label: "Vegan",
        type: "checkbox",
        fieldName: "vegan"
    },
    {
        label: "Gluten Free",
        type: "checkbox",
        fieldName: "glutenFree"
    },
    {
        label: "Dairy Free",
        type: "checkbox",
        fieldName: "DairyFree"
    },
    {
        label: "Time",
        type: "range",
        fieldName: "time",
        additionalAttr: {
            min: "0",
            max: "180",
            step: "10"
        }
    }
];

const SortOptions = [
    {
        label: "Time L to H",
        type: "ascending",
        fieldName: "time"
    },
    {
        label: "Time H to L",
        type: "descending",
        fieldName: "time"
    },
    {
        label: "Score L to H",
        type: "ascending",
        fieldName: "spoonacularScore"
    },
    {
        label: "Score H to L",
        type: "descending",
        fieldName: "spoonacularScore"
    }
]

export {
    FilterOptions,
    SortOptions
};