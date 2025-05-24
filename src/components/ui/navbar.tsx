import { Link, useLocation } from "react-router-dom";
import { Menu, ShoppingBag } from "lucide-react";
import { Button } from "./button";
import { ThemeToggle } from "./theme-toggle";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { cn } from "../../lib/utils";
import { useCart } from "../../context/CartContext";
import Logo from "../../assets/Restulogo.png";

const routes = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "Order Online", path: "/order" },
  { name: "Locations", path: "/locations" },
  { name: "Feedback", path: "/feedback" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2 md:gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden rounded-full"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <div className="flex flex-col gap-6 py-4">
                <Link to="/" className="flex items-center gap-2">
                  <div className="flex relative items-center justify-center">
                    <img
                      src={Logo}
                      width={112}
                      alt="Restu Logo"
                      className="rounded-full"
                    />
                  </div>
                </Link>
                <nav className="flex flex-col gap-4">
                  {routes.map((route) => (
                    <Link
                      key={route.path}
                      to={route.path}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary",
                        pathname === route.path
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                    >
                      {route.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          <Link to="/" className="flex items-center gap-2">
            <div className="flex relative items-center justify-center bottom-2 left-22">
              <img
                src={Logo}
                width={112}
                alt="Restu Logo"
                className="relative bottom-2.3"
              />
            </div>
            
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative group",
                pathname === route.path
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {route.name}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ease-out",
                  pathname === route.path ? "w-full" : "w-0 group-hover:w-full"
                )}
              ></span>
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link to="/order/cart">
            <Button
              variant="ghost"
              size="icon"
              className="relative rounded-full"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                  {cartCount}
                </span>
              )}
              <span className="sr-only">Shopping cart</span>
            </Button>
          </Link>
          <Link to="/order">
            <Button className="hidden md:flex bg-primary font-medium text-sm rounded-full">
              Order Now
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
