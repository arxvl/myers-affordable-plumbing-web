import React from "react";
import { Phone, MapPin, Clock } from "lucide-react";
import { businessData } from "@/data/business";
import { Card } from "@/components/ui/Card";

export function ContactInfo() {
  return (
    <Card className="p-8 space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Information</h2>
      
      <div className="flex gap-4 items-start">
        <div className="p-3 bg-blue-50 text-primary rounded-lg flex-shrink-0">
          <Phone size={24} />
        </div>
        <div>
          <h3 className="font-semibold text-gray-500 text-sm">Call Directly</h3>
          <a href={`tel:${businessData.contact.phone.replace(/[^0-9+]/g, '')}`} className="text-xl font-bold text-primary hover:underline">
            {businessData.contact.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="flex gap-4 items-start">
        <div className="p-3 bg-blue-50 text-primary rounded-lg flex-shrink-0">
          <MapPin size={24} />
        </div>
        <div>
          <h3 className="font-semibold text-gray-500 text-sm">Service Location</h3>
          <p className="text-gray-800 font-medium whitespace-pre-line mt-1">
            {businessData.contact.address.full}
          </p>
        </div>
      </div>

      <div className="flex gap-4 items-start">
        <div className="p-3 bg-blue-50 text-primary rounded-lg flex-shrink-0">
          <Clock size={24} />
        </div>
        <div>
          <h3 className="font-semibold text-gray-500 text-sm">Operating Hours</h3>
          <div className="text-sm text-gray-700 space-y-1 mt-1 font-medium">
            <p><span className="text-gray-500">Mon - Fri:</span> {businessData.hours.monday_friday}</p>
            <p><span className="text-gray-500">Sat:</span> {businessData.hours.saturday}</p>
            <p><span className="text-gray-500">Sun:</span> {businessData.hours.sunday}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}