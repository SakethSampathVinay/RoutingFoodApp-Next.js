import { Card, CardContent } from "@/components/ui/card";
import { Car } from "lucide-react";

import Link from "next/link";

export default function Recipe({ recipeList }) { // prop recipeList get from the recipe-list page.js file
  // console.log(recipeList);
  return (
    <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
      <h2 className="text-4xl font-bold text-gray-800 mb-12">Recipes</h2>
      <Link href = {"/"}>Go Home</Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipeList && recipeList.length > 0 // check if recipeList is not empty and greater than 0 
          ? recipeList.map((recipe) => (
              <Link href={`/recipe-list/${recipe.id}`} key={recipe.id}> {/* link to the recipe-list page with the id of the recipe */}
                <Card>
                  <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
                    <div className="w-full aspect-[16/8] lg:h-80">
                      <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900">
                        {recipe.name}
                      </h3>
                      <div className="flex items-center justify-between mt-4 gap-2">
                        <p className="text-lg text-gray-600">
                          Rating: {recipe.rating}
                        </p>
                        <div className="ml-auto">
                          <p className="text-lg text-gray-600 font-bold">
                            {recipe.cuisine}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          : null} {}
      </div>
    </div>
  );
}
