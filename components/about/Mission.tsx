import React from "react";
import { Container } from "@/components/layout/Container";

export function Mission() {
  return (
    <section className="py-12">
      <Container>
        <div className="bg-primary text-white rounded-2xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-heading mb-6 text-white">Our Mission</h2>
            <p className="text-xl text-blue-100 leading-relaxed font-medium">
              "To safeguard the comfort, health, and properties of our local community by delivering fast, affordable, and durable plumbing solutions. We strive to offer an unmatched, stress-free customer experience from the moment you call to the final sign-off."
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}