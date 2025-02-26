import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

const MoreIdeas = () => {
  const ideas = [
    { title: "Chicken Tikka Masala", image: "/abc.jpg" },
    { title: "Vegan Bacon", image: "/apple.jpg" },
    { title: "Copycat McDonald's Big Mac Sauce", image: "/emoji.png" },
    { title: "Crock-Pot Beef Roast", image: "/abc.jpg" }
  ];

  return (
    <div className="w-full p-4 md:p-8 rounded-2xl shadow-sm">
      <div className="flex justify-between items-center mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">More Ideas</h2>
        <button className="px-3 py-1 md:px-4 md:py-2 bg-blue-50 text-blue-600 text-sm md:text-base font-medium rounded-full hover:bg-blue-100 transition-colors">
          View All
        </button>
      </div>
      
      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {ideas.map((idea, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-32 md:h-64 overflow-hidden">
                  <img 
                    src={idea.image} 
                    alt={idea.title} 
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <CardContent className="p-3 md:p-4">
                  <h3 className="text-base md:text-lg font-medium text-gray-800">{idea.title}</h3>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
};

export default MoreIdeas;