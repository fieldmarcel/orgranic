import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Search, ChevronDown, Menu, X, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "../../redux/slices/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);

 
  const username = localStorage.getItem("userName") ?? "Guest"; 
  console.log(username);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("data");
    dispatch(logout());
  };

  return (
    <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0">
            <img src="/logo.svg" alt="logo" className="h-10 w-auto" />
          </Link>

          <div className="hidden sm:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-green-500 transition-colors">
                Recipes <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {["Breakfast", "Lunch", "Dinner", "Dessert"].map((item) => (
                  <DropdownMenuItem key={item}>
                    <Link to={`/recipes/${item.toLowerCase()}`}>
                      {item} Recipes
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-green-500 transition-colors">
                Cuisines <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {["Indian", "Mexican", "Italian", "Thai"].map((cuisine) => (
                  <DropdownMenuItem key={cuisine}>
                    <Link to={`/cuisines/${cuisine.toLowerCase()}`}>
                      {cuisine} Recipes
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/favourites"
              className="text-gray-700 hover:text-green-500 transition-colors"
            >
              Favourites
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-green-500 transition-colors"
            >
              About
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/search"
              className="p-2 text-gray-600 hover:text-green-500 transition-colors"
            >
              <Search className="h-5 w-5" />
            </Link>

            {isAuth ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="p-2 text-gray-600 hover:text-green-500">
                  <button className="text-yellow-300"> {username}</button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link to="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/add-recipe">Add a Recipe</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/settings">User Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>LOGOUT</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/login" className="text-gray-600 hover:text-green-500 transition-colors">
                <User className="h-5 w-5" />
              </Link>
            )}

            <button
              onClick={toggleMobileMenu}
              className="sm:hidden p-2 text-gray-600 hover:text-green-500"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="sm:hidden py-4 space-y-4 border-t border-gray-100 mt-2">
            <div className="space-y-4 px-4">
              <DropdownMenu>
                <DropdownMenuTrigger className="w-full text-left text-gray-700">
                  Recipes <ChevronDown className="ml-2 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {["Breakfast", "Lunch", "Dinner"].map((item) => (
                    <DropdownMenuItem key={item}>
                      <Link to={`/recipes/${item.toLowerCase()}`}>
                        {item} Recipes
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="w-full text-left text-gray-700">
                  Cuisines <ChevronDown className="ml-2 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {["Indian", "Mexican", "Italian"].map((cuisine) => (
                    <DropdownMenuItem key={cuisine}>
                      <Link to={`/cuisines/${cuisine.toLowerCase()}`}>
                        {cuisine} Recipes
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/favourites" className="block text-gray-700 hover:text-green-500">
                Favourites
              </Link>
              <Link to="/about" className="block text-gray-700 hover:text-green-500">
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
