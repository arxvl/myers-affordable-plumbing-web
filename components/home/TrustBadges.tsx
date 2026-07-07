import React from "react";
import { ShieldCheck, Clock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export function TrustBadges({ className }: { className?: string }) {
  return (
    <div className={cn("grid grid-cols-2 gap-4 sm:grid-cols-3", className)}>
      <div className="flex items-center gap-2 text-sm text-gray-700 font-semibold">
        <ShieldCheck className="text-primary" size={20} /> Licensed & Insured
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-700 font-semibold">
        <Clock className="text-primary" size={20} /> Fast Response
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-700 font-semibold">
        <MapPin className="text-primary" size={20} /> Locally Owned
      </div>
    </div>
  );
}