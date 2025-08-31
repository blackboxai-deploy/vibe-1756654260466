"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ComparisonSection() {
  const innovations = [
    {
      category: "Propulsion",
      tesla: {
        title: "Electric Drivetrain",
        description: "Tri-motor all-wheel drive with instant torque delivery",
        icon: "⚡"
      },
      spacex: {
        title: "Merlin Engines",
        description: "Reusable rocket engines with precision landing capability",
        icon: "🔥"
      }
    },
    {
      category: "Autonomy",
      tesla: {
        title: "Full Self-Driving",
        description: "Neural network-based autonomous driving technology",
        icon: "🧠"
      },
      spacex: {
        title: "Autonomous Flight",
        description: "Self-guided rocket landing and trajectory control",
        icon: "🎯"
      }
    },
    {
      category: "Efficiency",
      tesla: {
        title: "Energy Density",
        description: "Advanced battery technology with supercharging network",
        icon: "🔋"
      },
      spacex: {
        title: "Reusability",
        description: "Cost-effective space access through rocket reusability",
        icon: "♻️"
      }
    },
    {
      category: "Innovation",
      tesla: {
        title: "Over-the-Air Updates",
        description: "Continuous improvement through software updates",
        icon: "📡"
      },
      spacex: {
        title: "Rapid Iteration",
        description: "Fast development cycles and iterative design improvements",
        icon: "🚀"
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 via-white to-blue-500 bg-clip-text text-transparent">
            Innovation Comparison
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Both companies push the boundaries of technology in their respective domains
          </p>
        </div>

        <div className="space-y-8">
          {innovations.map((innovation, index) => (
            <Card key={index} className="bg-black/40 border-gray-700 backdrop-blur-sm">
              <CardHeader className="text-center border-b border-gray-700">
                <CardTitle className="text-2xl text-white">
                  {innovation.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-700">
                  {/* Tesla Side */}
                  <div className="p-8 group hover:bg-red-900/10 transition-all duration-300">
                    <div className="flex items-center justify-center mb-6">
                      <Badge className="bg-red-500/20 text-red-400 border-red-500 px-4 py-2 text-sm">
                        TESLA
                      </Badge>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {innovation.tesla.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-red-400 mb-3">
                        {innovation.tesla.title}
                      </h3>
                      <p className="text-gray-300">
                        {innovation.tesla.description}
                      </p>
                    </div>
                  </div>

                  {/* SpaceX Side */}
                  <div className="p-8 group hover:bg-blue-900/10 transition-all duration-300">
                    <div className="flex items-center justify-center mb-6">
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500 px-4 py-2 text-sm">
                        SPACEX
                      </Badge>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {innovation.spacex.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-blue-400 mb-3">
                        {innovation.spacex.title}
                      </h3>
                      <p className="text-gray-300">
                        {innovation.spacex.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-r from-red-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-4 text-white">
              The Future of Transportation
            </h3>
            <p className="text-gray-300 max-w-2xl">
              From sustainable road travel to interplanetary exploration, 
              these innovations are shaping humanity's future across Earth and space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}