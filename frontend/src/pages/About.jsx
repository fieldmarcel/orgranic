import React from 'react';
import { ChefHat, Clock, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/api/placeholder/1200/600')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        </div>
        <div className="relative h-full flex items-center px-8 sm:px-16 lg:px-32">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
            <p className="text-lg md:text-xl">Passionate about creating extraordinary culinary experiences since 2010</p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-8 sm:px-16 lg:px-32">
        <div className="max-w-screen-lg mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At FoodChef, we believe that good food brings people together. Our mission is to make professional-quality cooking accessible to everyone, whether you're a beginner or an experienced home chef.
              </p>
              <p className="text-gray-600 mb-4">
                We carefully curate recipes, source the finest ingredients, and provide expert guidance to help you create memorable meals for yourself, your family, and your friends.
              </p>
              <p className="text-gray-600">
                Every dish tells a story, and we're here to help you tell yours through the universal language of food.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/api/placeholder/600/400" 
                alt="Chefs working in kitchen" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 rounded-lg p-4 shadow-lg">
                <p className="text-white font-semibold">Crafting culinary excellence daily</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Values */}
      <section className="py-16 px-8 sm:px-16 lg:px-32 bg-gray-50">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="mb-4 text-orange-500">
                <ChefHat size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Expertise</h3>
              <p className="text-gray-600">Our team includes award-winning chefs with decades of experience in top restaurants worldwide.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="mb-4 text-orange-500">
                <Clock size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Time-Saving Solutions</h3>
              <p className="text-gray-600">Our meal kits and recipes are designed to maximize flavor while respecting your busy schedule.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="mb-4 text-orange-500">
                <Award size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Ingredients</h3>
              <p className="text-gray-600">We source sustainable, organic produce and premium meats for exceptional dishes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="mb-4 text-orange-500">
                <Users size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Focus</h3>
              <p className="text-gray-600">We build connections through food, supporting local farmers and hosting events.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 px-8 sm:px-16 lg:px-32">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Meet Our Culinary Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-full mx-auto w-48 h-48 shadow-lg">
                <img 
                  src="/api/placeholder/200/200" 
                  alt="Executive Chef" 
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Alex Johnson</h3>
              <p className="text-orange-500 mb-3">Executive Chef</p>
              <p className="text-gray-600">Former head chef at a Michelin-starred restaurant with 15 years of experience in French and Asian fusion cuisine.</p>
            </div>
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-full mx-auto w-48 h-48 shadow-lg">
                <img 
                  src="/api/placeholder/200/200" 
                  alt="Pastry Chef" 
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Maria Rodriguez</h3>
              <p className="text-orange-500 mb-3">Pastry Chef</p>
              <p className="text-gray-600">Award-winning baker specializing in artisanal breads and desserts that blend tradition with innovation.</p>
            </div>
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-full mx-auto w-48 h-48 shadow-lg">
                <img 
                  src="/api/placeholder/200/200" 
                  alt="Nutritionist" 
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">David Chen</h3>
              <p className="text-orange-500 mb-3">Culinary Nutritionist</p>
              <p className="text-gray-600">Certified nutritionist who ensures our recipes balance flavor with health-conscious ingredient choices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 px-8 sm:px-16 lg:px-32 bg-gray-900 text-white">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="text-orange-400 text-4xl font-bold">2010</div>
                <h3 className="text-xl font-semibold mb-2">The Beginning</h3>
                <p className="text-gray-300">Started as a small catering business operating from a home kitchen.</p>
              </div>
              <div className="md:w-2/3">
                <img 
                  src="/api/placeholder/800/400" 
                  alt="The beginning of FoodChef" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="md:w-1/3">
                <div className="text-orange-400 text-4xl font-bold">2015</div>
                <h3 className="text-xl font-semibold mb-2">Growing Success</h3>
                <p className="text-gray-300">Expanded to an online platform offering recipes and meal kits nationwide.</p>
              </div>
              <div className="md:w-2/3">
                <img 
                  src="/api/placeholder/800/400" 
                  alt="FoodChef growing success" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="text-orange-400 text-4xl font-bold">2023</div>
                <h3 className="text-xl font-semibold mb-2">Today</h3>
                <p className="text-gray-300">A community of over 500,000 food enthusiasts with top-rated cooking classes and premium meal services.</p>
              </div>
              <div className="md:w-2/3">
                <img 
                  src="/api/placeholder/800/400" 
                  alt="FoodChef today" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 px-8 sm:px-16 lg:px-32 bg-orange-50">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-yellow-400 flex mb-4">
                {Array(5).fill(0).map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "FoodChef transformed my cooking skills! The detailed instructions and quality ingredients make every meal restaurant-worthy."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="/api/placeholder/100/100" 
                    alt="Customer" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Sarah M.</h4>
                  <p className="text-sm text-gray-500">Member since 2019</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-yellow-400 flex mb-4">
                {Array(5).fill(0).map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "As a busy professional, FoodChef's meal kits save me time without sacrificing quality. My family is impressed with every dish!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="/api/placeholder/100/100" 
                    alt="Customer" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">James T.</h4>
                  <p className="text-sm text-gray-500">Member since 2021</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-yellow-400 flex mb-4">
                {Array(5).fill(0).map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "The online cooking classes are fantastic! I've learned techniques I never thought I could master at home."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="/api/placeholder/100/100" 
                    alt="Customer" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Emily K.</h4>
                  <p className="text-sm text-gray-500">Member since 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-8 sm:px-16 lg:px-32 bg-orange-600 text-white">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Culinary Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover recipes, connect with fellow food lovers, and elevate your cooking skills with FoodChef.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
              Sign Up Now
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white font-semibold rounded-lg hover:bg-white/10 transition duration-300">
              Explore Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;