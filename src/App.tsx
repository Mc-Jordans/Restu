// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Menu from "./menu";
import Order from "./order";
import Locations from "./locations";
import Feedback from "./feedback";
import CartPage from "./CartPage";
import Navbar from "./components/ui/navbar";
import Footer from "./components/ui/footer";
import { ThemeProvider } from "./components/ui/ThemeProvider";
import { CartProvider } from "./context/CartContext";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="light" storageKey="restu-theme">
        <CartProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/menu/:categoryId" element={<Menu />} />
                <Route path="/order" element={<Order />} />
                <Route path="/order/cart" element={<CartPage />} />
                <Route
                  path="/order/checkout"
                  element={<div>Checkout Page (TBD)</div>}
                />{" "}
                {/* Placeholder */}
                <Route path="/locations" element={<Locations />} />
                <Route path="/feedback" element={<Feedback />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
