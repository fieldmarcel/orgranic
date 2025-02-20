import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Search, Filter, Grid, List } from "lucide-react";
import { fetchRecipeCards, fetchSearchRecipe } from "../../redux/slices/allCardSlice";
import Searchcontent from "./Searchcontent";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [filterOpen, setFilterOpen] = useState(false);
  const dispatch = useDispatch();
  const { isLoading, recipe, searchRecipe, error } = useSelector((state) => state.RecipeCard);

  // Filters and Sort
  const [activeFilters, setActiveFilters] = useState({
    cuisine: [],
    dietaryRestrictions: [],
    cookTime: null
  });

  useEffect(() => {
    dispatch(fetchRecipeCards());
  }, [dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      dispatch(fetchSearchRecipe(searchTerm));
    } else {
      dispatch(fetchRecipeCards());
    }
  };

  // Loading and Error States
  if (isLoading) return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <div className="animate-pulse">
        <div className="w-16 h-16 border-4 border-green-500 rounded-full"></div>
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <p className="text-red-500 text-2xl font-bold">{error}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-8">

      <div className="max-w-6xl mx-auto px-4">
        <form onSubmit={handleSearch} className="mb-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="flex items-center px-6 py-4">
              <Search className="h-6 w-6 text-green-600" />
              <input 
                type="text" 
                placeholder="Find your perfect recipe..." 
                className="flex-1 ml-4 text-lg text-gray-800 outline-none placeholder-gray-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="flex items-center space-x-2">
                <button 
                  type="button" 
                  onClick={() => setFilterOpen(!filterOpen)}
                  className="p-2 hover:bg-green-50 rounded-full"
                >
                  <Filter className={`h-5 w-5 ${filterOpen ? 'text-green-600' : 'text-gray-500'}`} />
                </button>
                <button 
                  type="submit" 
                  disabled={!searchTerm.trim()}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    searchTerm.trim() 
                      ? "bg-green-600 text-white hover:bg-green-700" 
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Search
                </button>
              </div>
            </div>
            
            {/* Advanced Filters */}
            {filterOpen && (
              <div className="bg-green-50 p-4 border-t">
                <div className="grid grid-cols-3 gap-4">
                  {/* Cuisine Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Cuisine</label>
                    {/* Add cuisine filter checkboxes */}
                  </div>
                  
                  {/* Dietary Restrictions */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Diet</label>
                    {/* Add diet filter checkboxes */}
                  </div>
                  
                  {/* Cook Time */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Cook Time</label>
                    {/* Add cook time slider or select */}
                  </div>
                </div>
              </div>
            )}
          </div>
        </form>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">
            {searchTerm.trim() 
              ? `${searchRecipe.length} result${searchRecipe.length !== 1 ? 's' : ''} for "${searchTerm}"` 
              : `${recipe.length} Recipes`}
          </h2>
          
          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-full ${viewMode === 'grid' ? 'bg-green-100' : 'hover:bg-green-50'}`}
            >
              <Grid className={`h-5 w-5 ${viewMode === 'grid' ? 'text-green-600' : 'text-gray-500'}`} />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-full ${viewMode === 'list' ? 'bg-green-100' : 'hover:bg-green-50'}`}
            >
              <List className={`h-5 w-5 ${viewMode === 'list' ? 'text-green-600' : 'text-gray-500'}`} />
            </button>
          </div>
        </div>

        {/* Results Grid/List */}
        {searchTerm.trim() && searchRecipe.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
            <p className="text-gray-500 text-xl">No recipes found. Try different keywords!</p>
          </div>
        ) : (
          <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {(searchTerm.trim() ? searchRecipe : recipe).map((item) => (
              <Searchcontent 
                key={item._id}
                id={item._id}
                title={item.title}
                rating={item.rating}
                image={item.image}
                readyIn={item.readyIn}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;