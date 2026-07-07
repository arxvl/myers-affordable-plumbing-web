"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextType {
  isMounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  // Prevents hydration mismatches by ensuring the provider only renders 
  // interactive theme elements after the client has mounted.
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ThemeContext.Provider value={{ isMounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}