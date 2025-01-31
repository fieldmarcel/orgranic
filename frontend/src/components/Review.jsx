import React from 'react';
import { useRef } from 'react';
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "../components/ui/card";
import { Star } from 'lucide-react';
// import { BorderBeam } from "../components/ui/border-beam";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const reviews = [
    {
      name: "Sarah Johnson",
      text: "Absolutely loved this recipe! The flavors were incredible and it was surprisingly easy to make. Will definitely cook this again!",
      rating: 5,
    },
    {
      name: "Mike Chen",
      text: "A great weeknight meal option. The instructions were clear and the result was restaurant-quality. Highly recommend!",
      rating: 4,
    },
    {
      name: "Emma Wilson",
      text: "This has become a family favorite. The perfect balance of spices and textures. Kids couldn't get enough!",
      rating: 5,
    },
    {
      name: "David Smith",
      text: "Impressive recipe that's perfect for special occasions. Took a bit longer than expected but worth every minute.",
      rating: 4,
    },]
    
const Review = () => {
  const plugin = useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true, loop: true })
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
        What Our Foodies Say
      </h2>
{/*        */}
      {/* <Carousel
        plugins={[plugin.current]}
        className="w-full mx-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {reviews.map((review, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-4">
                <Card className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                         
                    
                  <CardContent className="p-6 flex flex-col flex-grow">
                
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-rose-100 to-orange-200 rounded-full flex items-center justify-center">
                      <span className="font-bold text-gray-700 text-xl">
                          {review.name[0]}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900">{review.name}</h3>
                        <div className="flex gap-1 mt-1">
                          {[...Array(10)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < review.rating
                                  ? 'fill-amber-400 text-amber-400'
                                  : 'fill-gray-200 text-gray-200'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-base leading-relaxed mb-6 flex-grow">
                      "{review.text}"
                    </p>

                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Recipe Review</span>
                        <span className="text-sm text-amber-600">★ {review.rating}/5</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent> */}

        {/* Improved Navigation Buttons */}
        {/* <CarouselPrevious className="absolute bottom-0 right-12 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 hover:text-gray-900 rounded-full shadow-md w-10 h-10 transform translate-y-1/2 hover:scale-105 transition-all" />
        <CarouselNext className="absolute bottom-0 right-0 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 hover:text-gray-900 rounded-full shadow-md w-10 h-10 transform translate-y-1/2 hover:scale-105 transition-all" /> */}
      {/* </Carousel> */} 
    </div>
  );
};

export default Review;