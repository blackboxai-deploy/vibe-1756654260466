"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface VehicleCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  specs: Array<{ label: string; value: string }>;
  brand: "tesla" | "spacex";
  category: string;
}

export default function VehicleCard({
  title,
  description,
  imageUrl,
  imageAlt,
  specs,
  brand,
  category
}: VehicleCardProps) {
  const brandColors = {
    tesla: {
      primary: "text-red-400",
      bg: "from-red-900/30",
      border: "border-red-500/50 hover:border-red-400",
      badge: "bg-red-500/20 text-red-400 border-red-500",
      spec: "bg-red-900/20"
    },
    spacex: {
      primary: "text-blue-400", 
      bg: "from-blue-900/30",
      border: "border-blue-500/50 hover:border-blue-400",
      badge: "bg-blue-500/20 text-blue-400 border-blue-500",
      spec: "bg-blue-900/20"
    }
  };

  const colors = brandColors[brand];

  return (
    <Card className={`bg-gradient-to-br ${colors.bg} to-black ${colors.border} transition-all duration-500 transform hover:scale-105 group`}>
      <CardHeader className="text-center">
        <Badge variant="outline" className={`${colors.badge} mx-auto mb-2 w-fit`}>
          {brand.toUpperCase()}
        </Badge>
        <CardTitle className={`text-2xl font-bold ${colors.primary}`}>
          {title}
        </CardTitle>
        <CardDescription className="text-gray-400">
          {category}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

        <p className="text-gray-300 text-center">
          {description}
        </p>

        <div className="grid grid-cols-2 gap-3">
          {specs.map((spec, index) => (
            <div key={index} className={`${colors.spec} p-3 rounded transition-colors duration-200 hover:bg-opacity-40`}>
              <span className={`${colors.primary} font-semibold text-sm block`}>
                {spec.label}
              </span>
              <p className="text-white font-medium">
                {spec.value}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}