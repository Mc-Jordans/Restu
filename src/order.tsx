
import { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "./components/ui/radio-group";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import { MapPin, Clock, ShoppingBag } from "lucide-react";
import { useCart } from "./context/CartContext";
import { Link } from "react-router-dom"; // Import Link for navigation

// Define types for menu items
type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

const categories = [
  { id: "popular", name: "Popular" },
  { id: "burgers", name: "Burgers" },
  { id: "chicken", name: "Chicken" },
  { id: "sides", name: "Sides" },
  { id: "desserts", name: "Desserts" },
  { id: "drinks", name: "Drinks" },
  { id: "deals", name: "Deals" },
];

const menuItems: Record<string, MenuItem[]> = {
  popular: [
    {
      id: 1,
      name: "Classic Burger",
      description: "Beef patty with lettuce, tomato, and our special sauce",
      price: 8.99,
      image: "/images/classic-burger.jpg", // Update to actual image path
    },
    {
      id: 2,
      name: "Crispy Chicken Sandwich",
      description: "Crispy chicken with lettuce and mayo",
      price: 7.99,
      image: "/images/chicken-sandwich.jpg",
    },
    {
      id: 3,
      name: "Loaded Fries",
      description: "Fries topped with cheese, bacon, and sour cream",
      price: 5.99,
      image: "/images/loaded-fries.jpg",
    },
    {
      id: 4,
      name: "Chocolate Shake",
      description: "Rich and creamy chocolate milkshake",
      price: 4.99,
      image: "/images/chocolate-shake.jpg",
    },
  ],
  burgers: [
    {
      id: 5,
      name: "Double Cheeseburger",
      description: "Two beef patties with double cheese",
      price: 10.99,
      image: "/images/double-cheeseburger.jpg",
    },
    {
      id: 6,
      name: "Bacon Burger",
      description: "Beef patty with crispy bacon and cheese",
      price: 9.99,
      image: "/images/bacon-burger.jpg",
    },
    {
      id: 7,
      name: "Veggie Burger",
      description: "Plant-based patty with fresh vegetables",
      price: 8.99,
      image: "/images/veggie-burger.jpg",
    },
    {
      id: 8,
      name: "Spicy Burger",
      description: "Beef patty with jalapeños and spicy sauce",
      price: 9.49,
      image: "/images/spicy-burger.jpg",
    },
  ],
  // Add other categories as needed
};

export default function OrderPage() {
  const [orderType, setOrderType] = useState<"delivery" | "pickup">("delivery");
  const [activeTab, setActiveTab] = useState("popular"); // Use the state
  const [address, setAddress] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("downtown"); // Manage pickup location
  const { cartItems, addToCart, cartCount } = useCart();

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Order Online
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Order your favorite Restu meals for pickup or delivery.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-6 rounded-lg border p-4">
            <h2 className="mb-4 text-lg font-bold">
              How would you like to receive your order?
            </h2>
            <RadioGroup
              value={orderType}
              onValueChange={setOrderType}
              className="flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="delivery" id="delivery" />
                <Label htmlFor="delivery" className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" /> Delivery
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pickup" id="pickup" />
                <Label htmlFor="pickup" className="flex items-center gap-1">
                  <Clock className="h-4 w-4" /> Pickup
                </Label>
              </div>
            </RadioGroup>

            {orderType === "delivery" && (
              <div className="mt-4">
                <Label htmlFor="address">Delivery Address</Label>
                <Input
                  id="address"
                  placeholder="Enter your address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="mt-1"
                />
              </div>
            )}

            {orderType === "pickup" && (
              <div className="mt-4">
                <Label>Select a Location</Label>
                <RadioGroup
                  value={selectedLocation}
                  onValueChange={setSelectedLocation}
                  className="mt-2 grid gap-2 sm:grid-cols-2"
                >
                  {["Restu Downtown", "Restu Westside", "Restu Eastside"].map(
                    (location, i) => (
                      <div key={i} className="rounded-lg border p-3">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value={`location-${i}`}
                            id={`location-${i}`}
                          />
                          <Label htmlFor={`location-${i}`}>{location}</Label>
                        </div>
                      </div>
                    )
                  )}
                </RadioGroup>
              </div>
            )}
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
            <TabsList className="grid w-full grid-cols-4 md:grid-cols-7">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {Object.keys(menuItems).map((categoryId) => (
              <TabsContent key={categoryId} value={categoryId} className="mt-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  {menuItems[categoryId as keyof typeof menuItems].map(
                    (item: MenuItem) => (
                      <Card key={item.id} className="overflow-hidden">
                        <div className="flex h-full">
                          <div className="relative h-auto w-1/3">
                            <img
                              src={item.image || "/images/placeholder.jpg"}
                              alt={item.name}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <CardContent className="flex-1 p-4">
                            <div className="flex h-full flex-col justify-between">
                              <div>
                                <h3 className="font-medium">{item.name}</h3>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                  {item.description}
                                </p>
                                <div className="mt-2 font-medium">
                                  ${item.price.toFixed(2)}
                                </div>
                              </div>
                              <Button
                                onClick={() => addToCart(item)}
                                className="mt-4"
                                size="sm"
                              >
                                Add to Cart
                              </Button>
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    )
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">Your Order</h2>
            <ShoppingBag className="h-5 w-5" />
          </div>

          {cartCount === 0 ? (
            <div className="mt-4 text-center text-muted-foreground">
              <p>Your cart is empty</p>
              <p className="mt-2 text-sm">
                Add items from the menu to get started
              </p>
            </div>
          ) : (
            <div className="mt-4 space-y-4">
              {cartItems.map((item: MenuItem & { quantity: number }, index) => (
                <div key={index} className="flex justify-between border-b pb-2">
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-muted-foreground">
                      Qty: {item.quantity}
                    </div>
                  </div>
                  <div className="font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <div>Subtotal</div>
                  <div className="font-medium">${cartTotal.toFixed(2)}</div>
                </div>
                <div className="mt-2 flex justify-between text-sm text-muted-foreground">
                  <div>Tax (8%)</div>
                  <div>${(cartTotal * 0.08).toFixed(2)}</div>
                </div>
                {orderType === "delivery" && (
                  <div className="mt-2 flex justify-between text-sm text-muted-foreground">
                    <div>Delivery Fee</div>
                    <div>$2.99</div>
                  </div>
                )}
                <div className="mt-4 flex justify-between font-bold">
                  <div>Total</div>
                  <div>
                    $
                    {(
                      cartTotal +
                      cartTotal * 0.08 +
                      (orderType === "delivery" ? 2.99 : 0)
                    ).toFixed(2)}
                  </div>
                </div>
              </div>
              <Button asChild className="w-full">
                <Link to="/order/checkout">Checkout</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
