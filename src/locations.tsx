"use client";

import { useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Card, CardContent } from "./components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { MapPin, Navigation, Phone, Clock, Search } from "lucide-react";
import Location1 from "./assets/loc1.jpg"

const locations = [
  {
    id: 1,
    name: "Restu Downtown",
    address: "123 Main St, Downtown",
    city: "New York",
    state: "NY",
    zip: "10001",
    phone: "(555) 123-4567",
    hours: "Mon-Sun: 10:00 AM - 10:00 PM",
    features: ["Dine-in", "Takeout", "Delivery", "Drive-thru"],
    image: Location1,
  },
  {
    id: 2,
    name: "Restu Westside",
    address: "456 West Ave, Westside",
    city: "New York",
    state: "NY",
    zip: "10002",
    phone: "(555) 234-5678",
    hours: "Mon-Sun: 10:00 AM - 11:00 PM",
    features: ["Dine-in", "Takeout", "Delivery"],
    image: Location1,
  },
  {
    id: 3,
    name: "Restu Eastside",
    address: "789 East Blvd, Eastside",
    city: "New York",
    state: "NY",
    zip: "10003",
    phone: "(555) 345-6789",
    hours: "Mon-Sun: 10:00 AM - 10:00 PM",
    features: ["Dine-in", "Takeout", "Delivery", "Drive-thru"],
    image: "/placeholder.svg?height=200&width=300&text=Eastside",
  },
  {
    id: 4,
    name: "Restu Midtown",
    address: "321 Center St, Midtown",
    city: "New York",
    state: "NY",
    zip: "10004",
    phone: "(555) 456-7890",
    hours: "Mon-Sun: 10:00 AM - 12:00 AM",
    features: ["Dine-in", "Takeout", "Delivery"],
    image: "/placeholder.svg?height=200&width=300&text=Midtown",
  },
  {
    id: 5,
    name: "Restu Uptown",
    address: "654 North Ave, Uptown",
    city: "New York",
    state: "NY",
    zip: "10005",
    phone: "(555) 567-8901",
    hours: "Mon-Sun: 10:00 AM - 10:00 PM",
    features: ["Dine-in", "Takeout", "Delivery"],
    image: "/placeholder.svg?height=200&width=300&text=Uptown",
  },
  {
    id: 6,
    name: "Restu Brooklyn",
    address: "987 Brooklyn Rd, Brooklyn",
    city: "Brooklyn",
    state: "NY",
    zip: "11201",
    phone: "(555) 678-9012",
    hours: "Mon-Sun: 10:00 AM - 11:00 PM",
    features: ["Dine-in", "Takeout", "Delivery", "Drive-thru"],
    image: "/placeholder.svg?height=200&width=300&text=Brooklyn",
  },
];

export default function LocationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [, setActiveTab] = useState("list");

  const filteredLocations = locations.filter(
    (location) =>
      location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.zip.includes(searchTerm)
  );

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Find a Restu Near You
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            With locations across the country, there's always a Restu restaurant
            nearby.
          </p>
        </div>
      </div>

      <div className="mt-8 flex w-full max-w-md mx-auto">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by city, address, or ZIP code"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button className="ml-2">Search</Button>
      </div>

      <Tabs defaultValue="list" className="mt-8" onValueChange={setActiveTab}>
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="map">Map View</TabsTrigger>
        </TabsList>
        <TabsContent value="list" className="mt-6">
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {filteredLocations.map((location) => (
    <Card
      key={location.id}
      className="overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${location.image || "/placeholder.svg"})`,
      }}
    >
      <CardContent className="p-4 bg-black/50 text-white flex flex-col h-full justify-end">
        <h3 className="font-bold">{location.name}</h3>
        <div className="mt-2 space-y-2 text-sm">
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 mt-0.5 text-white/80" />
            <div>
              <div>{location.address}</div>
              <div>
                {location.city}, {location.state} {location.zip}
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Phone className="h-4 w-4 mt-0.5 text-white/80" />
            <span>{location.phone}</span>
          </div>
          <div className="flex items-start gap-2">
            <Clock className="h-4 w-4 mt-0.5 text-white/80" />
            <span>{location.hours}</span>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {location.features.map((feature, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-full border border-white/50 px-2.5 py-0.5 text-xs font-semibold"
            >
              {feature}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          <Button variant="outline" size="sm" className="flex-1 bg-white/20 text-white border-white/50">
            <Navigation className="mr-2 h-4 w-4" />
            Directions
          </Button>
          <Button size="sm" className="flex-1 bg-white/30 text-white">
            Order
          </Button>
        </div>
      </CardContent>
    </Card>
  ))}
</div>
        </TabsContent>
        <TabsContent value="map" className="mt-6">
          <div className="relative h-[500px] w-full rounded-lg border overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <div className="text-center">
                <p className="text-muted-foreground">
                  Interactive map view is loading...
                </p>
                <p className="text-sm text-muted-foreground">
                  View all Restu locations on the map
                </p>
              </div>
            </div>
            <img
              src="/placeholder.svg?height=500&width=1000&text=Map+View"
              alt="Map of Restu locations"
              className="object-cover"
            />
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12 rounded-lg bg-muted p-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">
              Looking for a Restu in another area?
            </h2>
            <p className="text-muted-foreground">
              We're constantly expanding! Check out our newest locations or
              suggest a new one.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button>View New Locations</Button>
            <Button variant="outline">Suggest a Location</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
