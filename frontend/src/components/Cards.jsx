import React, { useState, useEffect } from "react";
import Cardscontent from "./Cardscontent";
import { fetchRecipeCards } from "../../redux/slices/recipeCardSlice";
import { useDispatch, useSelector } from "react-redux";
const Cards = () => {
  

  // const [recipe, setrecipe] = useState([]);

  // const handleGetRecipe = async () => {
  //   try {
  //     const response = await axios.get(
  //       "http://localhost:8080/api/v1/recipes"
  //     );
  //     setrecipe(response.data.recipes);
  //     console.log("Fetched recipes are:", response.data.recipes);
  //   } catch (error) {
  //     console.error("Error fetching recipes:", error);
  //   }
  // };

  // useEffect(() => {
  //   handleGetRecipe();
  // }, []);
  const dispatch = useDispatch();

const {isLoading,recipe,error}=useSelector((state)=> state.RecipeCard)

useEffect(() => {
  dispatch(fetchRecipeCards())
}, [dispatch])

if(isLoading){
  return <p>Loading recipes</p>
}
if(error){
  return <p>Error fetching recipes. Please try again later.</p>;
}

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-center sm:mt-10 mb-4">
        Become a true chef of organic <br />
        with our recipes
      </h1>

      <div className="flex flex-wrap justify-center items-center sm:mt-10 space-x-4">
        {recipe.length >0 ?(
          recipe.map((item, index) => {
            return (
              <Cardscontent
                key={index}
                id= {item._id}
                image={item.image}
                title={item.title}
                rating={item.rating}
              />
            );
          })
        ):(
<p>error in loading </p>        
        )
        
}
      </div>
    </div>
  );
};

export default Cards;
