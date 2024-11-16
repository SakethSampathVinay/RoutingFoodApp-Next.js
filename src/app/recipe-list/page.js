import Recipe from "@/components/recipe-list/recipe-list";

async function fetchListOfRecipes() {
    try {
      const apiResponse = await fetch("https://dummyjson.com/recipes"); // getting data from the dummyjson
      const data = await apiResponse.json(); // converted into the json format
      return data?.recipes; // returning the recipes list
    } catch (error) {
      console.error("Error fetching recipes:", error); // if error occurs, it will be logged in the console
    }
  }
  
  export default async function RecipeList() {
    const recipeList = await fetchListOfRecipes(); // getting the function to fetch the recipes list
  
    return (
      <div>
        <Recipe recipeList={recipeList} /> {/*pass the recipe list to the Recipe component */}
      </div>
    );
  }