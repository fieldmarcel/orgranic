import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import { fetchRecipeCards, fetchSearchRecipe } from "../../redux/slices/allCardSlice";
import Searchcontent from "./Searchcontent";
import Recipe from "./Recipe";

const Searchpage = () => {

const [searchTerm, setsearchTerm] = useState("")

const  dispatch = useDispatch()

const {isLoading, recipe, searchRecipe,error}= useSelector((state) => state.RecipeCard)


useEffect(() => {
 dispatch(fetchRecipeCards())
// dispatch(fetchSearchRecipe())

}, [dispatch])

useEffect(() => {
  dispatch(fetchRecipeCards());
}, []);

const handleSearch= (e)=>{
  e.preventDefault();
  if(searchTerm.trim()){
    dispatch(fetchSearchRecipe(searchTerm))
  }else {
    dispatch(fetchRecipeCards())
  }
}
if (isLoading) return <p className="text-center">Loading recipes...</p>;
   if (error) return <p className="text-center text-red-500">{error}</p>;



  return (
    <div className="flex flex-col">
      <form className=" bg-white border-b border-gray-100 py-4 px-4"  onSubmit={handleSearch}>
        <div className="max-w-3xl mx-auto flex items-center">
          <Search className="h-5 w-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Search recipes, ingredients, cuisines..."
            className="w-full py-2 outline-none text-gray-700 placeholder-gray-400"
          
          value={searchTerm}
          onChange={(e)=>setsearchTerm(e.target.value)}
          />
          <button
          type="submit"
            className="ml-4 text-gray-500 hover:text-gray-700"
          >
            Search
          </button>
        </div>
      </form>
<div className=" " >
{searchTerm.trim().length >0 ? (<p>{searchRecipe.length} results</p>) : (<p>{recipe.length} results</p>)
}


</div>
<div className="flex flex-wrap justify-center  sm:flex  items-center sm:mt-10 space-x-4">
{



  searchTerm.trim() && searchRecipe.length > 0
      ? searchRecipe.map((item) => {
        
        return   <Searchcontent
            key={item._id}
            id={item._id}
            title={item.title}
            rating={item.rating}
            image={item.image}
            readyIn={item.readyIn}

             description={item.description}
          />
          
})
      : searchTerm.trim() && searchRecipe.length === 0 ?(<p>No search recipes found</p>)
    : recipe.length > 0
    ? recipe.map((item) => {
     return   <Searchcontent
        
          key={item._id}
          id={item._id}
          title={item.title}
          rating={item.rating}
         readyIn={item.readyIn}
          image={item.image}
        />
})
    : <p>No recipes available</p>
    
}



    
</div>

    </div>
  );
};

export default Searchpage;
