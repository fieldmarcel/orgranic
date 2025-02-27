import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Explore = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const res = await axios.get(`http://localhost:8081/api/v1/recipes/explore`);
      const data = res.data;
      setRecipes(data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-6">Explore More</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {recipes.map((item) => (
          <Link to={`/recipe/${item._id}`} key={item._id}>
            <div className="flex flex-col items-center text-center w-40">
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-3 font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Explore;