import React from "react";
import { Star, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/Card";

interface ReviewCardProps {
  name: string;
  location: string;
  text: string;
  date: string;
}

export function ReviewCard({ name, location, text, date }: ReviewCardProps) {
  return (
    <Card className="p-8 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-bold text-gray-900 text-base">{name}</h3>
            <p className="text-xs text-gray-500">{location}</p>
          </div>
          <div className="flex items-center gap-1 text-sm text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">
            <CheckCircle size={14} /> Verified
          </div>
        </div>
        <div className="flex gap-0.5 text-yellow-500 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} fill="currentColor" size={16} />
          ))}
        </div>
        <p className="text-gray-600 text-sm italic leading-relaxed">
          "{text}"
        </p>
      </div>
      <span className="block mt-6 text-xs text-gray-400 font-medium">{date}</span>
    </Card>
  );
}