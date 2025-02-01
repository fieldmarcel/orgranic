import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Search, ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const [searchOpen, setSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({ recipes: false, cuisines: false, healthy: false });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => ({
      
      [menu]: !prev[menu],
    }));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src="/logo.svg" alt="logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center space-x-8">
            {/* Dropdown Menus */}
            <div className="flex space-x-6">
              {/* Recipes Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('recipes')}
                  className="flex items-center text-gray-700 hover:text-green-500 transition-colors"
                >
                  Recipes <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {dropdownOpen.recipes && (
                  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg w-64 py-2">
                    {['Breakfast & Brunch', 'Lunch', 'Appetizers & Snacks', 'Dinner', 'Dessert'].map((item, index) => (
                      <Link
                        key={index}
                        to={`/recipes/${item.toLowerCase().replace(/ & | /g, '-')}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                      >
                        {item} Recipes
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Cuisines Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('cuisines')}
                  className="flex items-center text-gray-700 hover:text-green-500 transition-colors"
                >
                  Cuisines <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {dropdownOpen.cuisines && (
                  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg w-64 py-2">
                    {['Indian', 'Mexican', 'Italian', 'Thai', 'Korean', 'French', 'Chinese', 'Japanese'].map((cuisine) => (
                      <Link
                        key={cuisine}
                        to={`/cuisines/${cuisine.toLowerCase()}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                      >
                        {cuisine} Recipes
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Healthy Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('healthy')}
                  className="flex items-center text-gray-700 hover:text-green-500 transition-colors"
                >
                  Healthy <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {dropdownOpen.healthy && (
                  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg w-64 py-2">
                    {['Keto', 'Vegetarian', 'Vegan', 'Mediterranean', 'Low-Carb'].map((diet) => (
                      <Link
                        key={diet}
                        to={`/diet/${diet.toLowerCase()}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                      >
                        {diet} Recipes
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Regular Links */}
            <Link to="/features" className="text-gray-700 hover:text-green-500 transition-colors">
              Features
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-green-500 transition-colors">
              About
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <Link 
              to="/search" 
              className="p-2 text-gray-600 hover:text-green-500 transition-colors"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Link>

            {/* Auth Button */}
            {isAuth ? (
              <Link 
                to="/logout" 
                className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
              >
                Logout
              </Link>
            ) : (
              <Link 
                to="/login" 
                className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
              >
                Login
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="sm:hidden p-2 text-gray-600 hover:text-green-500"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden py-4 space-y-4 border-t border-gray-100 mt-2">
            {/* Mobile Dropdowns */}
            <div className="space-y-4 px-4">
              <div className="border-b border-gray-100 pb-4">
                <button
                  onClick={() => toggleDropdown('recipes')}
                  className="flex items-center justify-between w-full text-gray-700"
                >
                  Recipes <ChevronDown className={`h-4 w-4 transition-transform ${dropdownOpen.recipes ? 'rotate-180' : ''}`} />
                </button>
                {dropdownOpen.recipes && (
                  <div className="mt-2 space-y-2">
                    {['Breakfast', 'Lunch', 'Dinner', 'Dessert'].map((item) => (
                      <Link
                        key={item}
                        to={`/recipes/${item.toLowerCase()}`}
                        className="block pl-4 py-2 text-gray-600 hover:text-green-500"
                      >
                        {item} Recipes
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Repeat similar structure for other dropdowns */}
            </div>
          </div>
        )}
      </div>

      {/* {searchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 py-4 px-4">
          <div className="max-w-3xl mx-auto flex items-center">
            <Search className="h-5 w-5 text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Search recipes, ingredients, cuisines..."
              className="w-full py-2 outline-none text-gray-700 placeholder-gray-400"
            />
            <button 
              onClick={() => setSearchOpen(false)}
              className="ml-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-15 w-15" />
            </button>
          </div>
        </div> */}
      {/* )} */}
    </nav>
  );
};

export default Navbar;