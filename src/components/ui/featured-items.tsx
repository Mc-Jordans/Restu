"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./button";
import { Card, CardContent } from "./card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";
import ClassicBurger from "../../assets/burger.webp" ;
import CrispyChickenBurger from "../../assets/crispychickensandwich.jpg"
import LoadedFries from "../../assets/loadedfries.png"
import ChocoMilkShake from "../../assets/chocomilkshake.png"
import DoubleChesseBurger from "../../assets/DCburger.png"
import BaconBurger from "../../assets/amen.png"
import VeggieBurger from "../../assets/vbb.png"
import SpicyBurger from "../../assets/live.png"
import ChickenTenders from "../../assets/chy.png"
import SpicyChickenSandwich from "../../assets/sss.png"
import GrilledChickenSandwich from "../../assets/hmgc.png"
import ChickenWrap from "../../assets/wrapC.png"
import FrenchFries from "../../assets/frenchfries.png"
import CrispyOnion from "../../assets/crispyonion1.png"
import Coleslaw from "../../assets/coleslaw.png"
import MashedPotatoes from "../../assets/mashP.png"
import IceCreamSundae from "../../assets/icream.png"
import ApplePie from "../../assets/appie.png"
import ChocolateBrownie from "../../assets/chs.png"
import CheeseCake from "../../assets/chesck.png"

const categories = [
  { id: "popular", name: "Popular" },
  { id: "burgers", name: "Burgers" },
  { id: "chicken", name: "Chicken" },
  { id: "sides", name: "Sides" },
  { id: "desserts", name: "Desserts" },
];

const menuItems = {
  popular: [
    {
      id: 1,
      name: "Classic Burger",
      description: "Beef patty with lettuce, tomato, and our special sauce",
      price: 8.99,
      image: ClassicBurger,
    },
    {
      id: 2,
      name: "Crispy Chicken Sandwich",
      description: "Crispy chicken with lettuce and mayo",
      price: 7.99,
      image: CrispyChickenBurger,
    },
    {
      id: 3,
      name: "Loaded Fries",
      description: "Fries topped with cheese, bacon, and sour cream",
      price: 5.99,
      image: LoadedFries,
    },
    {
      id: 4,
      name: "Chocolate Shake",
      description: "Rich and creamy chocolate milkshake",
      price: 4.99,
      image: ChocoMilkShake,
    },
  ],
  burgers: [
    {
      id: 5,
      name: "Double Cheeseburger",
      description: "Two beef patties with double cheese",
      price: 10.99,
      image: DoubleChesseBurger,
    },
    {
      id: 6,
      name: "Bacon Burger",
      description: "Beef patty with crispy bacon and cheese",
      price: 9.99,
      image: BaconBurger,
    },
    {
      id: 7,
      name: "Veggie Burger",
      description: "Plant-based patty with fresh vegetables",
      price: 8.99,
      image: VeggieBurger,
    },
    {
      id: 8,
      name: "Spicy Burger",
      description: "Beef patty with jalapeños and spicy sauce",
      price: 9.49,
      image: SpicyBurger,
    },
  ],
  chicken: [
    {
      id: 9,
      name: "Chicken Tenders",
      description: "Crispy chicken tenders with dipping sauce",
      price: 7.99,
      image: ChickenTenders,
    },
    {
      id: 10,
      name: "Spicy Chicken Sandwich",
      description: "Spicy crispy chicken with pickles",
      price: 8.49,
      image: SpicyChickenSandwich,
    },
    {
      id: 11,
      name: "Grilled Chicken Sandwich",
      description: "Grilled chicken breast with lettuce and tomato",
      price: 8.99,
      image: GrilledChickenSandwich,
    },
    {
      id: 12,
      name: "Chicken Wrap",
      description: "Grilled chicken with vegetables in a wrap",
      price: 7.49,
      image: ChickenWrap,
    },
  ],
  sides: [
    {
      id: 13,
      name: "French Fries",
      description: "Crispy golden fries",
      price: 3.99,
      image: FrenchFries,
    },
    {
      id: 14,
      name: "Onion Rings",
      description: "Crispy battered onion rings",
      price: 4.49,
      image: CrispyOnion,
    },
    {
      id: 15,
      name: "Coleslaw",
      description: "Fresh cabbage and carrot in creamy dressing",
      price: 2.99,
      image: Coleslaw,
    },
    {
      id: 16,
      name: "Mashed Potatoes",
      description: "Creamy mashed potatoes with gravy",
      price: 3.49,
      image: MashedPotatoes,
    },
  ],
  desserts: [
    {
      id: 17,
      name: "Ice Cream Sundae",
      description: "Vanilla ice cream with chocolate sauce and cherry",
      price: 4.99,
      image: IceCreamSundae,
    },
    {
      id: 18,
      name: "Apple Pie",
      description: "Warm apple pie with cinnamon",
      price: 3.99,
      image: ApplePie,
    },
    {
      id: 19,
      name: "Chocolate Brownie",
      description: "Rich chocolate brownie with ice cream",
      price: 5.49,
      image: ChocolateBrownie,
    },
    {
      id: 20,
      name: "Cheesecake",
      description: "Creamy New York style cheesecake",
      price: 5.99,
      image: CheeseCake,
    },
  ],
};

export default function FeaturedItems() {
  const [, setActiveTab] = useState("popular");

  return (
    <section className="container px-4 md:px-6 py-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Featured Menu Items
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Explore our most popular dishes and customer favorites.
          </p>
        </div>
      </div>
      <Tabs
        defaultValue="popular"
        className="mt-8"
        onValueChange={setActiveTab}
      >
        <div className="flex justify-center">
          <TabsList className="grid w-full max-w-md grid-cols-3 md:grid-cols-5 gap-5 bg-blue-50 dark:text-white dark:bg-gray-700">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="cursor-pointer border-0 rounded-sm "
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-10">
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto max-w-6xl">
              {menuItems[category.id as keyof typeof menuItems].map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden border rounded-lg shadow-sm"
                >
                  <div className="relative h-48 w-full dark:bg-white flex items-center justify-center">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <CardContent className="p-4 flex flex-col justify-between h-40">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <div className="text-lg font-semibold text-gray-900 dark:text-blue-300">
                          ${item.price.toFixed(2)}
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                    <Button className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-md">
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link to={`/menu/${category.id}`}>
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 dark:text-white hover:bg-gray-100 py-2 px-4 rounded-md"
                >
                  View All {category.name}
                </Button>
              </Link>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
