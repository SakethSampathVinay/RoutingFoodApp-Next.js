import Link  from "next/link";

export default function RecipeDetailsItem({ recipedetailsitem }) { {/*getting the prop recipedetailsitem from the [details] page.js file */}
  return (
    <>
    <Link href = {"/recipe-list"}>Go to Recipes</Link> {/*this will be link to the recipe-list page.js*/}
    <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
      <div className="grid items-start grids-cols-1 lg:grid-cols-2 gap-10">
        <div className="w-full lg:stricky top-0 sm:flex gap-2">
          <img
            src={recipedetailsitem?.image}
            name={recipedetailsitem?.name}
            className="w-4/5 rounded object-cover"
          />
          <div>
            <h2 className="text-3xl font-extrabold text-gray-950">
              {recipedetailsitem?.name}
            </h2>
            <div className="flex flex-wrap gap-4 mt-5">
              <p className="text-2xl text-gray-700">
                {recipedetailsitem?.mealType[0]}
              </p>
            </div>
            <div className="mt-5 ">
              <p className="text-xl text-gray-800">
                {recipedetailsitem?.cuisine}
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-bold text-gray-700">Ingredients</h3>
              <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
                {recipedetailsitem?.ingredients.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
