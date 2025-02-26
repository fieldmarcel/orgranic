import React from "react";

const exploreItems = [
  { title: "Garlic Alfredo", subtitle: "Comfort Food Classics", image: "/abc.jpg" },
  { title: "International Eats", subtitle: "Global Flavors", image: "/apple.jpg" },
  { title: "Breakfast Casserole", subtitle: "Breakfast & Brunch", image: "/abc.jpg" },
  { title: "Fruit Salad", subtitle: "Community Picks", image: "/apple.jpg" },
  { title: "Quick & Easy Cover", subtitle: "Quick & Easy", image: "/emoji.png" },
  { title: "Homestyle Favorites", subtitle: "Classic Dishes", image: "/abc.jpg" }
];

const Explore = () => {
  return (
    <div className="py-12 ">
      <h2 className="text-3xl font-bold text-center mb-6">Explore More</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {exploreItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center w-40">
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
        ))}
      </div>
    </div>
  );
};

export default Explore;
