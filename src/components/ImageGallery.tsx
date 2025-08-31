"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: "tesla-roadster",
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5d609eb8-2505-4fb1-8e20-b7660c9d3084.png",
      alt: "Tesla Roadster sports car in cherry red with sleek aerodynamic design",
      title: "Tesla Roadster",
      category: "Electric Sports Car",
      brand: "tesla"
    },
    {
      id: "falcon-9-launch",
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/74b81535-8b03-4837-8bf8-461968adcfb8.png",
      alt: "SpaceX Falcon 9 rocket launch with bright flames and dramatic sky",
      title: "Falcon 9 Launch",
      category: "Rocket Launch",
      brand: "spacex"
    },
    {
      id: "tesla-cybertruck",
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c1b178a7-a142-48bf-acd1-8301f58a4bba.png",
      alt: "Tesla Cybertruck angular stainless steel electric pickup truck with futuristic design",
      title: "Tesla Cybertruck",
      category: "Electric Pickup",
      brand: "tesla"
    },
    {
      id: "starship-render",
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6b10b8fe-6ee5-425a-aa40-f97ef3aca0b0.png",
      alt: "SpaceX Starship massive silver rocket on launch pad with dramatic lighting",
      title: "Starship",
      category: "Mars Rocket",
      brand: "spacex"
    },
    {
      id: "tesla-model-3",
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/20d536a4-5f30-4729-a800-7624f838b441.png",
      alt: "Tesla Model 3 white sedan on highway with clean modern design",
      title: "Tesla Model 3",
      category: "Electric Sedan",
      brand: "tesla"
    },
    {
      id: "dragon-capsule",
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f7b5513b-37eb-4368-874d-e0bb696dfc08.png",
      alt: "SpaceX Dragon capsule in space with Earth background and solar panels",
      title: "Dragon Capsule",
      category: "Crew Vehicle",
      brand: "spacex"
    }
  ];

  const brandColors = {
    tesla: {
      border: "border-red-500/50",
      badge: "bg-red-500/20 text-red-400 border-red-500",
      hover: "hover:shadow-red-500/20"
    },
    spacex: {
      border: "border-blue-500/50",
      badge: "bg-blue-500/20 text-blue-400 border-blue-500",
      hover: "hover:shadow-blue-500/20"
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 via-white to-blue-500 bg-clip-text text-transparent">
            Vehicle Gallery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the stunning designs and engineering marvels from both companies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => {
            const colors = brandColors[image.brand as keyof typeof brandColors];
            
            return (
              <Card 
                key={image.id} 
                className={`bg-black/60 ${colors.border} ${colors.hover} hover:border-opacity-100 transition-all duration-300 cursor-pointer group backdrop-blur-sm`}
                onClick={() => setSelectedImage(image.src)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <Badge 
                      variant="outline" 
                      className={`${colors.badge} absolute top-4 left-4`}
                    >
                      {image.brand.toUpperCase()}
                    </Badge>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-opacity-80 transition-all">
                      {image.title}
                    </h3>
                    <p className="text-gray-400">
                      {image.category}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg">
            Click any image to view in full size
          </p>
        </div>
      </div>
    </section>
  );
}