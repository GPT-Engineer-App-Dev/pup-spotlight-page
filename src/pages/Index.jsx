import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dog, Bone, Heart, Award } from "lucide-react";

const dogBreeds = [
  { name: "Labrador Retriever", description: "Friendly, active, and outgoing" },
  { name: "German Shepherd", description: "Intelligent, versatile, and loyal" },
  { name: "Golden Retriever", description: "Intelligent, friendly, and devoted" },
  { name: "Bulldog", description: "Calm, courageous, and friendly" },
];

const DogFactCard = ({ fact }) => (
  <Card className="w-full max-w-3xl mx-auto bg-white/10 backdrop-blur-lg border-none text-white">
    <CardHeader>
      <CardTitle className="flex items-center text-2xl">
        <Dog className="mr-2" />
        Did You Know?
      </CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-lg text-gray-200">{fact}</CardDescription>
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
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-purple-700 text-white">
      <header className="py-20 px-4 text-center">
        <h1 className="text-6xl font-bold mb-4">Pawsome World</h1>
        <p className="text-xl mb-8">Discover the amazing world of our furry friends</p>
        <Button size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-300">Learn More</Button>
      </header>

      <section className="py-20 px-4 bg-white/10 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Dogs Are Amazing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-transparent border-2 border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Heart className="mr-2" />
                  Loyal Companions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-200">Dogs are known for their unwavering loyalty and affection towards their human families.</CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-transparent border-2 border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Bone className="mr-2" />
                  Playful Nature
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-200">With their energetic and playful personalities, dogs bring joy and laughter to our lives.</CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-transparent border-2 border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Award className="mr-2" />
                  Intelligent Beings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-200">Dogs are highly intelligent and can be trained to perform various tasks and understand complex commands.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Popular Dog Breeds</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dogBreeds.map((breed, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-none">
                <CardHeader>
                  <CardTitle className="text-xl">{breed.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-200">{breed.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/10 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Dog Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb" alt="Cute dog" className="w-full h-80 object-cover rounded-lg shadow-lg" />
            <img src="https://images.unsplash.com/photo-1534361960057-19889db9621e" alt="Playful dog" className="w-full h-80 object-cover rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Fun Dog Facts</h2>
          <DogFactCard fact={currentFact} />
          <div className="text-center mt-8">
            <Button onClick={getRandomFact} size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-300">Get Another Fact</Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-blue-900 text-center">
        <p>&copy; 2023 Pawsome World. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;