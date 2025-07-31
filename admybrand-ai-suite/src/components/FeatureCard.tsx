import React from "react";
import { IconType } from "react-icons";

export interface FeatureCardProps {
  title: string;
  description: string;
  icon?: IconType;
}

export default function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <div className="text-center p-6 rounded-lg shadow-md bg-white">
      {Icon && <Icon className="text-4xl mx-auto mb-4 text-blue-600" />}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
