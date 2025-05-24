"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";

const promos = [
  {
    id: 1,
    title: "Try Our New Signature Burger",
    description:
      "Juicy beef patty with our special sauce and fresh ingredients",
    image: "/placeholder.svg?height=500&width=1200&text=Signature+Burger",
    link: "/menu/burgers",
    buttonText: "Order Now",
  },
  {
    id: 2,
    title: "Family Meal Deal",
    description:
      "Feed the whole family with our special meal deal, includes 4 entrees and 2 sides",
    image: "/placeholder.svg?height=500&width=1200&text=Family+Meal",
    link: "/menu/deals",
    buttonText: "See Deal",
  },
  {
    id: 3,
    title: "Download Our App",
    description: "Order ahead, earn rewards, and get exclusive offers",
    image: "/placeholder.svg?height=500&width=1200&text=Mobile+App",
    link: "/app",
    buttonText: "Learn More",
  },
];

export default function PromoCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % promos.length);
  const prev = () => setCurrent((current - 1 + promos.length) % promos.length);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      <div className="relative h-[350px] md:h-[450px] lg:h-[550px] w-full">
        {promos.map((promo, index) => (
          <div
            key={promo.id}
            className="absolute inset-0 transition-opacity duration-700"
            style={{
              opacity: index === current ? 1 : 0,
              zIndex: index === current ? 10 : 0,
            }}
          >
            <img
              src={promo.image || "/placeholder.svg"}
              alt={promo.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex flex-col justify-center px-6 md:px-12 lg:px-20">
              <div className="max-w-md text-white">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
                  {promo.title}
                </h2>
                <p className="text-sm md:text-base mb-6 text-white/90">
                  {promo.description}
                </p>
                <Link to={promo.link}>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 font-medium text-sm rounded-full px-6"
                  >
                    {promo.buttonText}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full h-10 w-10"
        onClick={prev}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full h-10 w-10"
        onClick={next}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {promos.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-8 rounded-full transition-all duration-300 ${
              index === current ? "bg-primary w-10" : "bg-white/50"
            }`}
            onClick={() => setCurrent(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
