/* Gracefully handles invalid routes with clear navigation parameters, keeping users engaged with simple re-routing choices rather than broken interactions.*/

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Wrench } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-background px-4 text-center">
      <div className="w-16 h-16 bg-blue-50 text-primary flex items-center justify-center rounded-full mb-6 animate-bounce">
        <Wrench size={32} />
      </div>
      <h1 className="text-4xl font-heading sm:text-5xl font-bold text-gray-900 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-gray-600 text-base max-w-md mb-8">
        Oops! The page you are looking for does not exist, has been removed, or had its name updated temporarily.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/">
          <Button variant="primary">
            Return Home
          </Button>
        </Link>
        <Link href="/contact">
          <Button variant="outline" className="bg-white">
            Contact Support
          </Button>
        </Link>
      </div>
    </div>
  );
}