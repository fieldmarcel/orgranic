import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import { fetchRecipeCards } from "../../redux/slices/allCardSlice";
import Searchcontent from "./Searchcontent";

const Searchpage = () => {

const [searchTerm, setsearchTerm] = useState("")

const  dispatch = useDispatch()

const {isLoading, recipe, searchRecipe,error}= useSelector((state) => state.RecipeCard)


useEffect(() => {
 dispatch(fetchRecipeCards())


}, [dispatch])

if (isLoading) return <p className="text-center">Loading recipes...</p>;
   if (error) return <p className="text-center text-red-500">Error fetching recipes. Please try again later.</p>;



  return (
    <div className="flex flex-col">
      <form className=" bg-white border-b border-gray-100 py-4 px-4">
        <div className="max-w-3xl mx-auto flex items-center">
          <Search className="h-5 w-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Search recipes, ingredients, cuisines..."
            className="w-full py-2 outline-none text-gray-700 placeholder-gray-400"
          
          value={searchTerm}
          />
          <button
            className="ml-4 text-gray-500 hover:text-gray-700"
          >
            Search
          </button>
        </div>
      </form>

<div className="flex-flex-wrap justify-center hidden sm:flex flex-wrap items-center sm:mt-10 space-x-4">
{
    recipe.length >0  ?(recipe.map((item,index)=>{

    return (<Searchcontent
    key={item._id}
    id={item._id}

    title={item.title}
    rating={item.rating}
    description={item.description}
    image={item.image}

    />)
    })):<p>"no recipe"</p>
}
</div>

    </div>
  );
};

export default Searchpage;
