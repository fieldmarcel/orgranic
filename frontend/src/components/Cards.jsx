import React, { useEffect } from "react";
import Cardscontent from "./Cardscontent";
import { fetchRecipeCards } from "../../redux/slices/recipeCardSlice";
import { useDispatch, useSelector } from "react-redux";
import { BorderBeam } from "../components/ui/border-beam";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";

const Cards = () => {
  const dispatch = useDispatch();
  const { isLoading, recipe, error } = useSelector((state) => state.RecipeCard);

  useEffect(() => {
    dispatch(fetchRecipeCards());
  }, [dispatch]);

  if (isLoading) return <p className="text-center">Loading recipes...</p>;
  if (error) return <p className="text-center text-red-500">Error fetching recipes. Please try again later.</p>;

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-center sm:mt-10 mb-4">
        Featured Recipes
      </h1>

      {/* Desktop   */}
      <div className="hidden sm:flex flex-wrap justify-center items-center sm:mt-10 space-x-4">

        {recipe.length > 0 ? (
          recipe.map((item) => (
            <Cardscontent
              key={item._id}
              id={item._id}
              image={item.image}
              title={item.title}
              rating={item.rating}
            />
          ))
        ) : (
          <p className="text-red-500">Error in loading recipes</p>
        )}

      </div>
{/* //max-w-xs */}
      {/* Mobile */}
      <div className="sm:hidden w-[22rem]  sm:mt-6 mb-6">
        <Carousel>
          <CarouselContent>
            {recipe.length > 0 ? (
              recipe.map((item) => (
                <CarouselItem key={item._id}>
                  <div className="p-2 flex justify-center">
                    <Card className="">
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        <Cardscontent
                          id={item._id}
                          image={item.image}
                          title={item.title}
                          rating={item.rating}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))
            ) : (
              <p className="text-center text-red-500">Error in loading recipes</p>
            )}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Cards;
