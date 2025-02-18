import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
// import RecipeDetail from "./pages/RecipeDetail";
import { Toaster } from "react-hot-toast";
import Favourites from "./pages/Favourites";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "../redux/store.js";
import Hero from "./components/Hero.jsx";
import Cards from "./components/Cards";
import Recipe from "./components/Recipe";
import Review from "./components/Review";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import Searchpage from "./components/SearchPage";
import AddRecipe from "./pages/AddRecipe";
import UserSettings from "./pages/UserSettings";
const App = () => {
  return (
    <div className="">
      <Provider store={store}>
        <BrowserRouter>
          {/* If I want to show the navbar on top of each page, I can place it here above routes */}
          <Navbar />
          <Toaster />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Cards />
                  <Review />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/recipe/:id" element={<Recipe />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/search" element={<Searchpage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/addRecipe" element={<AddRecipe />} />
            <Route path="/userSettings" element={<UserSettings />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
