"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export function Breadcrumb() {
  const pathname = usePathname();
  
  if (pathname === "/") return null;

  const paths = pathname.split("/").filter((path) => path);

  return (
    <nav aria-label="Breadcrumb" className="py-4 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-primary transition-colors flex items-center">
              <Home size={14} className="mr-1" />
              Home
            </Link>
          </li>
          
          {paths.map((path, index) => {
            const href = `/${paths.slice(0, index + 1).join("/")}`;
            const isLast = index === paths.length - 1;
            const label = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, " ");

            return (
              <li key={path} className="flex items-center">
                <ChevronRight size={14} className="mx-1 text-gray-400" />
                {isLast ? (
                  <span className="text-gray-900 font-medium" aria-current="page">
                    {label}
                  </span>
                ) : (
                  <Link href={href} className="hover:text-primary transition-colors">
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}