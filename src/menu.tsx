import { Link } from "react-router-dom";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";

const categories = [
  {
    id: "burgers",
    name: "Burgers",
    description: "Our signature burgers made with 100% beef patties",
    image: "/placeholder.svg?height=300&width=400&text=Burgers",
  },
  {
    id: "chicken",
    name: "Chicken",
    description: "Crispy, grilled, or spicy chicken options",
    image: "/placeholder.svg?height=300&width=400&text=Chicken",
  },
  {
    id: "sides",
    name: "Sides",
    description: "Perfect companions to your main dish",
    image: "/placeholder.svg?height=300&width=400&text=Sides",
  },
  {
    id: "desserts",
    name: "Desserts",
    description: "Sweet treats to finish your meal",
    image: "/placeholder.svg?height=300&width=400&text=Desserts",
  },
  {
    id: "drinks",
    name: "Drinks",
    description: "Refreshing beverages for any meal",
    image: "/placeholder.svg?height=300&width=400&text=Drinks",
  },
  {
    id: "deals",
    name: "Deals & Combos",
    description: "Value meals and special offers",
    image: "/placeholder.svg?height=300&width=400&text=Deals",
  },
];

export default function MenuPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Menu
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Explore our wide variety of delicious options, made with quality
            ingredients.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link key={category.id} to={`/menu/${category.id}`}>
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-48 w-full">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h2 className="text-xl font-bold">{category.name}</h2>
                <p className="mt-2 text-muted-foreground">
                  {category.description}
                </p>
                <Button className="mt-4 w-full">View {category.name}</Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-12 rounded-lg bg-muted p-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Nutritional Information</h2>
            <p className="text-muted-foreground">
              We're committed to providing you with all the information you need
              to make informed choices.
            </p>
          </div>
          <Link to="/nutrition">
            <Button variant="outline">View Nutritional Info</Button>
          </Link>
        </div>
      </div>

      <div className="mt-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Special Dietary Needs?</h2>
            <p className="text-muted-foreground">
              We offer options for various dietary preferences and restrictions.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline">Vegetarian</Button>
            <Button variant="outline">Gluten-Free</Button>
            <Button variant="outline">Low Calorie</Button>
            <Button variant="outline">Allergen Info</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
