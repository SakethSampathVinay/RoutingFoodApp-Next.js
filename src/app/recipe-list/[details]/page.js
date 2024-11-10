import RecipeDetailsItem from "@/components/recipe-details";

async function fetchRecipeDetails(currentRecipeId) {
  try {
    const apiResponse = await fetch(`https://dummyjson.com/recipes/${currentRecipeId}`);
    const data = await apiResponse.json();
    return data;
  } catch (error) {
    console.error("Error fetching recipe details:", error);
    return null;
  }
}
export default async function RecipeDetails({ params }) {
    // Await the params object
    const resolvedParams = await params;

    // Now you can safely access details
    const getRecipeDetails = await fetchRecipeDetails(resolvedParams.details);
    
    return (
        <div>
            <RecipeDetailsItem recipedetailsitem={getRecipeDetails} />
        </div>
    );
}