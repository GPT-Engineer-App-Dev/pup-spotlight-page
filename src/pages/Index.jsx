import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dog } from "lucide-react";

const dogBreeds = [
  { name: "Labrador Retriever", description: "Friendly, active, and outgoing" },
  { name: "German Shepherd", description: "Intelligent, versatile, and loyal" },
  { name: "Golden Retriever", description: "Intelligent, friendly, and devoted" },
  { name: "Bulldog", description: "Calm, courageous, and friendly" },
  { name: "Beagle", description: "Merry, friendly, and curious" },
];

const DogFactCard = ({ fact }) => (
  <Card className="w-full max-w-md mx-auto mt-4">
    <CardHeader>
      <CardTitle className="flex items-center">
        <Dog className="mr-2" />
        Did You Know?
      </CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{fact}</CardDescription>
    </CardContent>
  </Card>
);

const Index = () => {
  const [currentFact, setCurrentFact] = useState("Dogs have a sense of time and can tell the difference between one hour and five hours.");

  const dogFacts = [
    "Dogs have a sense of time and can tell the difference between one hour and five hours.",
    "A dog's nose print is unique, much like a human's fingerprint.",
    "Dogs can understand up to 250 words and gestures.",
    "The Basenji is the only breed of dog that can't bark, but they can yodel!",
    "Greyhounds can run up to 45 miles per hour.",
  ];

  const getRandomFact = () => {
    let newFact;
    do {
      newFact = dogFacts[Math.floor(Math.random() * dogFacts.length)];
    } while (newFact === currentFact);
    setCurrentFact(newFact);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">All About Dogs</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Popular Dog Breeds</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dogBreeds.map((breed, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{breed.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{breed.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Dog Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb" alt="Cute dog" className="w-full h-48 object-cover rounded-lg" />
            <img src="https://images.unsplash.com/photo-1534361960057-19889db9621e" alt="Playful dog" className="w-full h-48 object-cover rounded-lg" />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Fun Dog Facts</h2>
          <DogFactCard fact={currentFact} />
          <div className="text-center mt-4">
            <Button onClick={getRandomFact}>Get Another Fact</Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;