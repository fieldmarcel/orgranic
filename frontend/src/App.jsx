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
const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          {/*   if i want  to show navbar on ont op of each page then make it here upper of routes */}
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

                  {/* <RecipeDetail/> */}
                  {/* <Home /> */}
                </>
              }
            />
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/recipe/:id" element={<Recipe />} />

            {/* <Route path="/recipe/:id" element={<RecipeDetail />} /> */}
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
