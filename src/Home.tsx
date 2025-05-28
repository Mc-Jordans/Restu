import { Link } from "react-router-dom";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import PromoCarousel from "./components/ui/promo-carousel";
import FeaturedItems from "./components/ui/featured-items";
import LocationFinder from "./components/ui/location-finder";
import { ArrowRight, MapPin, Gift, Utensils } from "lucide-react";
import review1 from "./assets/fgirl.jpeg"
import review2 from "./assets/johnd.jpeg"
import review3 from "./assets/emi.jpeg"
import SpecialOffers from "./assets/brz.png"


export default function Home() {
  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "The food at Restu is absolutely delicious! The service is fast and the staff is friendly. I'll definitely be coming back again and again!",
      image: review1,
    },
    {
      name: "John Doe",
      rating: 5,
      comment: "Amazing experience! The ambiance and food quality are top-notch.",
      image: review2,
    },
    {
      name: "Emily Smith",
      rating: 5,
      comment: "Best dining experience I've had in a long time. Highly recommend!",
      image: review3,
    },
  ];

  return (
    <div className="flex flex-col gap-16 pb-16">
      <PromoCarousel />

      <section className="container px-4 md:px-10">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-3 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Welcome to Restu
            </h2>
            <p className="mx-auto text-muted-foreground md:text-xl">
              Delicious food, fast service, and a welcoming atmosphere. Experience
              the best dining at Restu, where every meal is crafted with care.
            </p>
          </div>
          <div className="flex flex-col gap-3 min-[400px]:flex-row">
            <Link to="/menu">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 rounded-full px-6 dark:text-white"
              >
                Explore Our Menu
              </Button>
            </Link>
            <Link to="/order">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-primary/20 text-primary hover:bg-primary/10 px-6 dark:text-white"
              >
                Order Online
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FeaturedItems />

      <section className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Special Offers",
              description: "Discover our latest deals and promotions",
              image: SpecialOffers,
              link: "/menu/specials",
              icon: Gift,
            },
            {
              title: "Catering",
              description: "Perfect for events and gatherings",
              image: "/placeholder.svg?height=200&width=400",
              link: "/catering",
              icon: Utensils,
            },
            {
              title: "Rewards Program",
              description: "Join and earn points with every order",
              image: "/placeholder.svg?height=200&width=400",
              link: "/rewards",
              icon: Gift,
            },
          ].map((item, i) => (
            <Card key={i} className="overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative h-[250px] w-full">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20 p-6 flex flex-col justify-end">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-white/80 mb-4">{item.description}</p>
                    <Link to={item.link}>
                      <Button
                        variant="secondary"
                        className="w-full sm:w-auto rounded-full group-hover:bg-primary group-hover:text-white transition-colors"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-10">
            <div className="space-y-3 max-w-3xl">
              <div className="flex justify-center mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Find a Restu Near You
              </h2>
              <p className="mx-auto text-muted-foreground md:text-xl">
                With locations across the country, there's always a Restu
                restaurant nearby ready to serve you.
              </p>
            </div>
            <LocationFinder />
            <Link to="/locations">
              <Button variant="outline" className="rounded-full mt-4">
                View All Locations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-10">
          <div className="space-y-3 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mx-auto text-muted-foreground md:text-xl">
              Don't just take our word for it. Here's what our customers have to
              say about their Restu experience.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((review, i) => (
              <Card key={i} className="text-left overflow-hidden">
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 w-20 h-20 text-primary/5 -mt-6 -mr-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
                    </svg>
                  </div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden bg-primary/10">
                      <img
                        src={review.image || "/placeholder.svg?height=48&width=48"}
                        alt={`${review.name}'s profile picture`}
                        className="object-cover h-full w-full"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{review.name}</h4>
                      <div className="flex text-yellow-500">
                        {Array(review.rating)
                          .fill(0)
                          .map((_, j) => (
                            <svg
                              key={j}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="h-4 w-4"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Link to="/feedback">
            <Button variant="outline" className="rounded-full mt-4">
              Leave Feedback
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}