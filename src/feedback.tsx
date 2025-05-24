"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import { RadioGroup, RadioGroupItem } from "./components/ui/radio-group";
import { Checkbox } from "./components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    visitDate: "",
    rating: "",
    serviceRating: "",
    foodRating: "",
    cleanliness: "",
    comments: "",
    contactMe: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.rating) {
      setError("Please fill in all required fields");
      return;
    }

    // Submit form logic would go here
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setError("");
  };

  if (submitted) {
    return (
      <div className="container px-4 py-12 md:px-6 md:py-24">
        <Card className="mx-auto max-w-md">
          <CardHeader>
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
            </div>
            <CardTitle className="text-center text-2xl">
              Thank You for Your Feedback!
            </CardTitle>
            <CardDescription className="text-center">
              We appreciate you taking the time to share your experience with
              us.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-4">
              Your feedback helps us improve our service and provide a better
              experience for all our customers.
            </p>
            <Button onClick={() => (window.location.href = "/")}>
              Return to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            We Value Your Feedback
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Your opinion matters to us. Let us know about your recent experience
            at Restu.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-3xl">
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Please provide your contact information so we can follow up if
                needed.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">
                    Location Visited <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={formData.location}
                    onValueChange={(value) =>
                      handleSelectChange("location", value)
                    }
                  >
                    <SelectTrigger id="location">
                      <SelectValue placeholder="Select a location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="downtown">Restu Downtown</SelectItem>
                      <SelectItem value="westside">Restu Westside</SelectItem>
                      <SelectItem value="eastside">Restu Eastside</SelectItem>
                      <SelectItem value="midtown">Restu Midtown</SelectItem>
                      <SelectItem value="uptown">Restu Uptown</SelectItem>
                      <SelectItem value="brooklyn">Restu Brooklyn</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="visitDate">Date of Visit</Label>
                <Input
                  id="visitDate"
                  name="visitDate"
                  type="date"
                  value={formData.visitDate}
                  onChange={handleChange}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Experience</CardTitle>
              <CardDescription>
                Please rate your overall experience and provide specific
                feedback.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <Label>
                  Overall Experience <span className="text-red-500">*</span>
                </Label>
                <RadioGroup
                  value={formData.rating}
                  onValueChange={(value) => handleRadioChange("rating", value)}
                  className="flex space-x-4"
                >
                  {[1, 2, 3, 4, 5].map((value) => (
                    <div
                      key={value}
                      className="flex flex-col items-center space-y-1"
                    >
                      <RadioGroupItem
                        value={value.toString()}
                        id={`rating-${value}`}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={`rating-${value}`}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground"
                      >
                        {value}
                      </Label>
                      <span className="text-xs">
                        {value === 1
                          ? "Poor"
                          : value === 2
                          ? "Fair"
                          : value === 3
                          ? "Good"
                          : value === 4
                          ? "Very Good"
                          : "Excellent"}
                      </span>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label>Service Quality</Label>
                <RadioGroup
                  value={formData.serviceRating}
                  onValueChange={(value) =>
                    handleRadioChange("serviceRating", value)
                  }
                  className="flex space-x-4"
                >
                  {[1, 2, 3, 4, 5].map((value) => (
                    <div
                      key={value}
                      className="flex flex-col items-center space-y-1"
                    >
                      <RadioGroupItem
                        value={value.toString()}
                        id={`service-${value}`}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={`service-${value}`}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground"
                      >
                        {value}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label>Food Quality</Label>
                <RadioGroup
                  value={formData.foodRating}
                  onValueChange={(value) =>
                    handleRadioChange("foodRating", value)
                  }
                  className="flex space-x-4"
                >
                  {[1, 2, 3, 4, 5].map((value) => (
                    <div
                      key={value}
                      className="flex flex-col items-center space-y-1"
                    >
                      <RadioGroupItem
                        value={value.toString()}
                        id={`food-${value}`}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={`food-${value}`}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground"
                      >
                        {value}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label>Cleanliness</Label>
                <RadioGroup
                  value={formData.cleanliness}
                  onValueChange={(value) =>
                    handleRadioChange("cleanliness", value)
                  }
                  className="flex space-x-4"
                >
                  {[1, 2, 3, 4, 5].map((value) => (
                    <div
                      key={value}
                      className="flex flex-col items-center space-y-1"
                    >
                      <RadioGroupItem
                        value={value.toString()}
                        id={`clean-${value}`}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={`clean-${value}`}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground"
                      >
                        {value}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="comments">Additional Comments</Label>
                <Textarea
                  id="comments"
                  name="comments"
                  placeholder="Please share any additional feedback or suggestions..."
                  value={formData.comments}
                  onChange={handleChange}
                  rows={5}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="contactMe"
                  checked={formData.contactMe}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("contactMe", checked as boolean)
                  }
                />
                <Label htmlFor="contactMe">
                  I would like to be contacted about my feedback
                </Label>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Button type="submit" size="lg">
              Submit Feedback
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
