// import React, { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";
// import { FlapperSpinner } from "react-spinners-kit";
// import "./Home.css";
// import RecipeCard from "../components/RecipeCard";
// const Home = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [loading, isloading] = useState(false);

//   const getRecipes = async (text) => {
//     e.preventdefault()
//     isloading(true);
//     const res = await axios.get(
//       `https://www.themealdb.com/api/json/v1/1/filter.php?i=${text}`
//     );
//     const data = await res.data;
//     //to read the data we use GET method
//     //in axios api data is alrady in json format
//     // axios is used to to fetch and call api
//     if (data.meals == null || data.meals == undefined) {
//       console.log(" data not found");
//     } else {
//       setRecipes(data.meals);
//       ;
//     }

//     isloading(false);
//   };

//   const getInitialRecipes = async () => {
//     isloading(true);
//     const res = await axios.get(
//       `https://www.themealdb.com/api/json/v1/1/filter.php?i=`
//     );
//     const data = await res.data;
//     setRecipes(data.meals);

//     console.log(data.meals);
//     if (data.meals == null || data.meals == undefined) {
//       console.log(" data not found");
//     } else {
//       setRecipes(data.meals);
      
//     }

//   isloading(false);
//   };

//   // Scenario: When you need to fetch data from an API in a React component, 
//   // you use useEffect to manage when the fetch operation should occur
//   //   Within that useEffect hook, you use Axios to perform the actual data fetching.


//   useEffect(() => {
//     // getRecipes();
//     getInitialRecipes();
//   }, []);

//   return (
//     <div className="  home flex flex-col justify-center  items-center">
//       <div>
//         <input
//           type="text"
//           placeholder="Get your favourite recipe"
//           id="search"
//           name="search"

//           onChange={(e) => getRecipes(e.target.value)}
//           // when the user types in the input field, the onChange event is triggered, and e.target.value
//           //  fetches the current value of the input, which is then passed to getRecipes(text).
//           //  The function getRecipes uses that value to make an API call based on the inputted text.

//           // If the user types "chicken" in the input, e.target.value will be "chicken", and the
//           // getRecipes function will call the API with that text to search for recipes containing chicken.

//           className="  outline-none border px-5 py-3 rounded-3xl w-[60vw]"
//           autocomplete="off"

//         />
//         {/* <input
//   type="text"
//   placeholder="Get your favourite recipe"
//   id="search"
//   name="search"
//   onChange={(e) => getRecipes(e.target.value)}
//   className="outline-none border px-5 py-3 rounded-3xl w-[60vw]"
//   autocomplete="off"
// /> */}

//       </div>
//       <div className="my-10 ">
//         {loading ? (
//           <FlapperSpinner size={150} />
//         ) : recipes === null ? (
//           <h1>No recipes found</h1>
//         ) : (
//           <div className="lg:w-[70vw] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-3">
//             {recipes.map((recipe) => (
//               <RecipeCard
//                 key={recipe.idMeal}
//                 id={recipe.idMeal}
//                 title={recipe.strMeal}
//                 image={recipe.strMealThumb}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;
