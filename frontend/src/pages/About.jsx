import React from "react";
import img from "../assets/spaghetti-1932466_1280.jpg";
const About = () => {
  return (
    <div className="mt-16">

      <div className="image-box relative  ">
        <div>
          
          <img src={img} alt="img"  className=" image w-full h-[500px] "/>
          <h3 className="font-cursive absolute font-bold  inset-0 flex items-center justify-center  text-white text-5xl bg-black bg-opacity-50 p-4 rounded " >Welcome to Home Chef</h3>

        </div>
      </div>

      {/* <p>
        What We Do Find Recipes with Ease Home Chef allows you to type in the
        name of any recipe you have in mind. Using the powerful MealDB API, we
        fetch and display all the essential ingredients you'll need to make that
        dish. From traditional favorites to exotic new dishes, we make it easy
        to find and prepare your desired recipes.
      </p>
      <p>
        Powered by MealDB API Our platform is integrated with the MealDB API,
        which provides access to a comprehensive database of recipes from around
        the globe. This ensures that you get accurate and detailed ingredient
        lists for a wide variety of dishes. Why Choose Home Chef? Simplicity and
        Convenience With Home Chef, you can quickly get the ingredient list for
        any recipe without the hassle of searching multiple sources. Our
        user-friendly interface is designed to provide you with a seamless
        experience, making cooking simpler and more enjoyable.
      </p>
      <p>
        Our Mission At Home Chef, we believe that cooking should be an enjoyable
        and accessible experience for everyone. Our mission is to empower you
        with the tools and knowledge to create delicious meals effortlessly,
        turning your kitchen into a place of creativity and joy.
      </p> */}
    </div>
  );
};

export default About;
