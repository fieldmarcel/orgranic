import React, { useState, useEffect } from "react";
import Cardscontent from "./Cardscontent";
import axios from "axios";

const Cards = () => {
  const [recipe, setrecipe] = useState([])

  const handleGetRecipe = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/recipes/cards");
      setrecipe(response.data.recipes);
      console.log("Fetched recipesare:", response.data.recipes);

    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    handleGetRecipe();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-center sm:mt-10 mb-4">Become a true chef <br/>with our recipes</h1>

      <div className="flex flex-wrap justify-center items-center sm:mt-10 space-x-4">
        {recipe.length > 0 ? (
          recipe.map((item, index) => {
           return <Cardscontent
              key={index}
              image={item.image}
              title={item.title}
              rating={item.rating}
            />
})
        ) : (
          <p>Loading recipes...</p>
        )}
      </div>
    </div>
  );
};

export default Cards;  