"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Card, CardContent } from "./card";
import { MapPin, Navigation, Phone, Clock } from "lucide-react";

const locations = [
  {
    id: 1,
    name: "Restu Downtown",
    address: "123 Main St, Downtown",
    phone: "(555) 123-4567",
    hours: "Mon-Sun: 10:00 AM - 10:00 PM",
    distance: "0.5 miles",
  },
  {
    id: 2,
    name: "Restu Westside",
    address: "456 West Ave, Westside",
    phone: "(555) 234-5678",
    hours: "Mon-Sun: 10:00 AM - 11:00 PM",
    distance: "1.2 miles",
  },
  {
    id: 3,
    name: "Restu Eastside",
    address: "789 East Blvd, Eastside",
    phone: "(555) 345-6789",
    hours: "Mon-Sun: 10:00 AM - 10:00 PM",
    distance: "2.3 miles",
  },
];

export default function LocationFinder() {
  const [zipCode, setZipCode] = useState("");
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchPerformed(true);
  };

  return (
    <div className="w-full max-w-3xl">
      <form
        onSubmit={handleSearch}
        className="flex w-full max-w-sm mx-auto space-x-2 mb-6"
      >
        <Input
          type="text"
          placeholder="Enter ZIP code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          className="flex-1"
        />
        <Button type="submit">Find</Button>
      </form>

      {searchPerformed && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Locations near you:</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <Card key={location.id}>
                <CardContent className="p-4">
                  <h4 className="font-bold">{location.name}</h4>
                  <div className="mt-2 space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                      <span>{location.address}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Phone className="h-4 w-4 mt-0.5 text-muted-foreground" />
                      <span>{location.phone}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="h-4 w-4 mt-0.5 text-muted-foreground" />
                      <span>{location.hours}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Navigation className="h-4 w-4 mt-0.5 text-muted-foreground" />
                      <span>{location.distance}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Directions
                    </Button>
                    <Button size="sm" className="flex-1">
                      Order
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
