import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const Navbar = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const [searchOpen, setSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({ recipes: false, cuisines: false, healthy: false });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Added state for mobile menu

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => ({
      [menu]: !prev[menu],
    }));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="flex flex-wrap sm:flex-nowrap justify-around items-center sm:rounded-full sm:mt-2 sm:w-5/6 sm:ml-32 bg-white shadow-md sm:fixed sticky z-50 px-6 sm:py-3">
      {/* Logo */}
      <div className="flex items-center justify-between w-full sm:w-auto">
        <Link to="/" className="font-bold text-green-400">
          <img src="/logo.svg" alt="logo" className="w-30 h-12" />
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="sm:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="text-gray-600 hover:text-green-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Middle Links */}
      <div className={` sm:flex flex-grow justify-center gap-8 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        {/* Recipes Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown('recipes')}
            className="text-sm text-gray-600 hover:text-green-500"
          >
            Recipes
          </button>
          {dropdownOpen.recipes && (
            <div className="absolute top-full left-0 mt-1 bg-amber-500 border-8 border-white shadow-lg rounded-3xl w-64">
              {['Breakfast & Brunch Recipes', 'Lunch Recipes', 'Appetizers & Snack Recipes', 'Dinner Recipes', 'Dessert Recipes'].map((item, index) => (
                <Link
                  key={index}
                  to={`/recipes/${item.toLowerCase().replace(/ & | /g, '-')}`}
                  className="block px-4 py-2 text-slate-50 hover:text-black hover:bg-gray-100 "
                >
                  {item}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Cuisines Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown('cuisines')}
            className="text-sm text-gray-600 hover:text-green-500"
          >
            Cuisines
          </button>
          {dropdownOpen.cuisines && (
            <div className="absolute top-full left-0 mt-1 bg-amber-500 border-8 border-white shadow-lg rounded-3xl w-64">
              {['Indian', 'Mexican', 'Italian', 'Thai', 'Korean', 'French', 'Chinese', 'Japanese'].map((cuisine, index) => (
                <Link
                  key={index}
                  to={`/cuisines/${cuisine.toLowerCase()}`}
                  className="block px-4 py-2 text-slate-50 hover:text-black hover:bg-gray-100 "
                >
                  {cuisine} Recipes
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Healthy & Diet Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown('healthy')}
            className="text-sm text-gray-600 hover:text-green-500"
          >
            Healthy
          </button>
          {dropdownOpen.healthy && (
            <div className="absolute top-full left-0 mt-1 bg-amber-500 border-8 border-white shadow-lg rounded-3xl w-64 z-99">
              {['Keto', 'Healthy', 'Vegetarian', 'Vegan', 'Mediterranean', 'Weight Watchers', 'Low-Carb'].map((diet, index) => (
                <Link
                  key={index}
                  to={`/diet/${diet.toLowerCase().replace(' ', '-')}`}
                  className="block px-4 py-2 text-slate-50 hover:text-black hover:bg-gray-100 "
                >
                  {diet} Recipes
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link to="/features" className="text-sm text-gray-600 hover:text-green-500">
          Features
        </Link>
        <Link to="/about" className="text-sm text-gray-600 hover:text-green-500">
          About
        </Link>
      </div>
      <div className="relative mx-4">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-gray-600 hover:text-green-500"
          >
            Search
          </button>
          {searchOpen && (
            <div className="absolute mt-2 right-0 shadow-lg bg-amber-500 rounded-full w-56 sm:w-96 p-2">
              <input
                type="text"
                placeholder="I want to make"
                className="w-full p-2 bg-white outline-none text-black rounded-full"
              />
            </div>
          )}
        </div>

      {/* Login and Search */}
      <div className="flex items-center gap-4 mt-3 sm:mt-0">
        <div>
          {isAuth ? (
            <Link to="/logout" className="text-gray-600 hover:text-green-500">
              Logout
            </Link>
          ) : (
            <Link to="/login" className="text-gray-600 hover:text-green-500">
              Login
            </Link>
          )}
        </div>

        
      </div>
    </nav>
  );
};

export default Navbar;
