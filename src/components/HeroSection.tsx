"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Background Stars Effect */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-red-900/20"></div>
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-red-500 via-white to-blue-500 bg-clip-text text-transparent">
            TESLA × SPACEX
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            When sustainable transportation meets space exploration - The future is here
          </p>
        </div>

        {/* Main Showcase Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Tesla Car Section */}
          <Card className="bg-gradient-to-br from-red-900/30 to-black border-red-500/50 hover:border-red-400 transition-all duration-500 transform hover:scale-105">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Badge variant="outline" className="bg-red-500/20 text-red-400 border-red-500 mb-4">
                  TESLA
                </Badge>
                <h2 className="text-3xl font-bold mb-4 text-red-400">Model S Plaid</h2>
              </div>
              
              <div className="relative mb-6 group">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/70e09050-cb39-4e8f-bbcc-bdbc543fbf8e.png"
                  alt="Tesla Model S Plaid electric luxury sedan in red finish with sleek aerodynamic design"
                  className="w-full h-64 object-cover rounded-lg shadow-2xl group-hover:shadow-red-500/20 transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-red-900/20 p-3 rounded">
                    <span className="text-red-400 font-semibold">Top Speed</span>
                    <p className="text-white">200 mph</p>
                  </div>
                  <div className="bg-red-900/20 p-3 rounded">
                    <span className="text-red-400 font-semibold">0-60 mph</span>
                    <p className="text-white">1.99 sec</p>
                  </div>
                  <div className="bg-red-900/20 p-3 rounded">
                    <span className="text-red-400 font-semibold">Range</span>
                    <p className="text-white">516 miles</p>
                  </div>
                  <div className="bg-red-900/20 p-3 rounded">
                    <span className="text-red-400 font-semibold">Power</span>
                    <p className="text-white">1,020 hp</p>
                  </div>
                </div>
                <p className="text-gray-300 text-center">
                  The pinnacle of electric performance and luxury
                </p>
              </div>
            </CardContent>
          </Card>

          {/* SpaceX Rocket Section */}
          <Card className="bg-gradient-to-br from-blue-900/30 to-black border-blue-500/50 hover:border-blue-400 transition-all duration-500 transform hover:scale-105">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Badge variant="outline" className="bg-blue-500/20 text-blue-400 border-blue-500 mb-4">
                  SPACEX
                </Badge>
                <h2 className="text-3xl font-bold mb-4 text-blue-400">Falcon Heavy</h2>
              </div>
              
              <div className="relative mb-6 group">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d62c9ca9-b86a-4b3f-9d78-7674041e73fc.png"
                  alt="SpaceX Falcon Heavy rocket on launch pad with white body and blue SpaceX logo against dramatic sky"
                  className="w-full h-64 object-cover rounded-lg shadow-2xl group-hover:shadow-blue-500/20 transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-blue-900/20 p-3 rounded">
                    <span className="text-blue-400 font-semibold">Height</span>
                    <p className="text-white">70 meters</p>
                  </div>
                  <div className="bg-blue-900/20 p-3 rounded">
                    <span className="text-blue-400 font-semibold">Payload</span>
                    <p className="text-white">63,800 kg</p>
                  </div>
                  <div className="bg-blue-900/20 p-3 rounded">
                    <span className="text-blue-400 font-semibold">Thrust</span>
                    <p className="text-white">22,819 kN</p>
                  </div>
                  <div className="bg-blue-900/20 p-3 rounded">
                    <span className="text-blue-400 font-semibold">Reusable</span>
                    <p className="text-white">Yes</p>
                  </div>
                </div>
                <p className="text-gray-300 text-center">
                  The world's most powerful operational rocket
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Innovation Banner */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-red-500/20 via-purple-500/20 to-blue-500/20 px-8 py-4 rounded-full border border-white/20">
            <span className="text-red-400 font-bold">🚗 TESLA</span>
            <span className="text-white">×</span>
            <span className="text-blue-400 font-bold">🚀 SPACEX</span>
          </div>
          <p className="text-gray-400 mt-4 text-lg">
            Revolutionizing Earth and Space Transportation
          </p>
        </div>
      </div>
    </section>
  );
}