"use client";

import HeroSection from "@/components/HeroSection";
import ComparisonSection from "@/components/ComparisonSection";
import ImageGallery from "@/components/ImageGallery";
import VehicleCard from "@/components/VehicleCard";

export default function HomePage() {
  const additionalVehicles = [
    {
      title: "Model Y",
      description: "The ultimate electric SUV combining performance, safety, and versatility for the modern family.",
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1b607489-7d54-43b5-b265-e8325db403b4.png",
      imageAlt: "Tesla Model Y electric SUV in white with panoramic glass roof and modern crossover design",
      specs: [
        { label: "Range", value: "330 miles" },
        { label: "0-60 mph", value: "3.5 sec" },
        { label: "Top Speed", value: "155 mph" },
        { label: "Seating", value: "7 seats" }
      ],
      brand: "tesla" as const,
      category: "Electric SUV"
    },
    {
      title: "Starlink Satellite",
      description: "Revolutionary satellite internet constellation providing global broadband coverage.",
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/35748759-015e-4ed9-a033-ff6343d70fcd.png",
      imageAlt: "SpaceX Starlink satellite in orbit with solar panels and Earth background",
      specs: [
        { label: "Altitude", value: "550 km" },
        { label: "Speed", value: "27,000 km/h" },
        { label: "Coverage", value: "Global" },
        { label: "Latency", value: "20-40 ms" }
      ],
      brand: "spacex" as const,
      category: "Satellite Internet"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with main Tesla car and SpaceX rocket showcase */}
      <HeroSection />

      {/* Additional Vehicle Cards Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              More Innovation
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore additional groundbreaking vehicles and technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {additionalVehicles.map((vehicle, index) => (
              <VehicleCard
                key={index}
                title={vehicle.title}
                description={vehicle.description}
                imageUrl={vehicle.imageUrl}
                imageAlt={vehicle.imageAlt}
                specs={vehicle.specs}
                brand={vehicle.brand}
                category={vehicle.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Comparison Section */}
      <ComparisonSection />

      {/* Vehicle Gallery */}
      <ImageGallery />

      {/* Footer Section */}
      <footer className="bg-black py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-8 mb-8">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🚗</span>
                <span className="text-red-400 font-bold text-xl">TESLA</span>
              </div>
              <span className="text-white text-2xl">×</span>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🚀</span>
                <span className="text-blue-400 font-bold text-xl">SPACEX</span>
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-4">
              Driving the Future Forward
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Both companies represent the pinnacle of innovation in their respective fields, 
              pushing the boundaries of what's possible and inspiring the next generation of technology.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span>Sustainable Transportation</span>
              <span>•</span>
              <span>Space Exploration</span>
              <span>•</span>
              <span>Advanced Technology</span>
              <span>•</span>
              <span>Innovation Leadership</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}