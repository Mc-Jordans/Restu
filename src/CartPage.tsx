// src/CartPage.tsx
import { useCart } from "./context/CartContext";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cartItems, cartCount } = useCart();
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Your Cart
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Review your selected items and proceed to checkout.
        </p>
      </div>
      <div className="mt-8">
        {cartCount === 0 ? (
          <div className="text-center text-muted-foreground">
            <p>Your cart is empty</p>
            <p className="mt-2 text-sm">
              Add items from the menu to get started
            </p>
            <Button asChild className="mt-4">
              <Link to="/order">Go to Menu</Link>
            </Button>
          </div>
        ) : (
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">Your Order</h2>
                <ShoppingBag className="h-5 w-5" />
              </div>
              <div className="space-y-4">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between border-b pb-2"
                  >
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
                  <div className="mt-4 flex justify-between font-bold">
                    <div>Total</div>
                    <div>${(cartTotal + cartTotal * 0.08).toFixed(2)}</div>
                  </div>
                </div>
                <Button className="w-full mt-4">Proceed to Checkout</Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
