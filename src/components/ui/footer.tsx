import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/placeholder.svg?height=32&width=32"
                width={32}
                height={32}
                alt="Restu Logo"
              ></img>
              <span className="text-xl font-bold">Restu</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Delicious food, fast service. Restu is your go-to restaurant for
              quality meals.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/order"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Order Online
                </Link>
              </li>
              <li>
                <Link
                  to="/locations"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Locations
                </Link>
              </li>
              <li>
                <Link
                  to="/feedback"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Feedback
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/terms"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/accessibility"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <FaFacebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <FaTwitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <FaInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
            <div className="mt-4">
              <h4 className="mb-2 text-sm font-medium">Download Our App</h4>
              <div className="flex space-x-2">
                <Link to="#">
                  <img
                    src="/placeholder.svg?height=40&width=120"
                    width={120}
                    height={40}
                    alt="App Store"
                    className="rounded"
                  ></img>
                </Link>
                <Link to="#">
                  <img
                    src="/placeholder.svg?height=40&width=120"
                    width={120}
                    height={40}
                    alt="Google Play"
                    className="rounded"
                  ></img>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Restu Restaurant. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
