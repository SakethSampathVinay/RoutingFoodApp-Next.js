import Recipe from "@/components/recipe-list/recipe-list";

async function fetchListOfRecipes() {
    try {
      const apiResponse = await fetch("https://dummyjson.com/recipes");
      const data = await apiResponse.json();
      return data?.recipes || [];
    } catch (error) {
      console.error("Error fetching recipes:", error);
      return [];
    }
  }
  
  export default async function RecipeList() {
    const recipeList = await fetchListOfRecipes();
  
    return (
      <div>
        <Recipe recipeList={recipeList} />
      </div>
    );
  }