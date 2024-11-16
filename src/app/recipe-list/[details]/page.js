import RecipeDetailsItem from "@/components/recipe-details";

async function fetchRecipeDetails(currentRecipeId) { {/*currentRecipeId is just a placholder. we can give name as per we want */}
  try {
    const apiResponse = await fetch(`https://dummyjson.com/recipes/${currentRecipeId}`); // getting the food item details from the dummy json 
    const data = await apiResponse.json(); // converting to the json 
    return data; // returning the data
  } catch (error) {
    console.error("Error fetching recipe details:", error); // logging the error
    return null; 
  }
}

export default async function RecipeDetails({ params }) {
    // Await the params object
    const resolvedParams = await params; // params means holds the dynamic values from the URL (such as an id or any other part of the path).
  
    const getRecipeDetails = await fetchRecipeDetails(resolvedParams.details); // getting the id's of fetchRecipeDetails function and passing the id to it
    
    return (
        <div>
            <RecipeDetailsItem recipedetailsitem={getRecipeDetails} /> {/*pass the recipe details item to the RecipeDetailsItem component */}
        </div>
    );
}