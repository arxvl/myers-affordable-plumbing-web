"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Card } from "@/components/ui/Card";
import { Loader } from "@/components/ui/Loader";

export function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // Replace this string with the actual key emailed to you by Web3Forms
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", 
          subject: "New Quote Request from Website",
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <Card className="p-8 sm:p-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h2>
      
      {status === "success" ? (
        <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center space-y-3 animate-fade-in-up">
          <CheckCircle2 className="text-green-600 mx-auto" size={40} />
          <h3 className="text-lg font-bold text-green-900">Message Sent Successfully!</h3>
          <p className="text-sm text-green-700">
            Thank you for reaching out. A representative from our team will follow up shortly.
          </p>
          <Button 
            variant="outline" 
            className="mt-4" 
            onClick={() => setStatus("idle")}
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input 
            label="Full Name *"
            type="text" 
            required
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            placeholder="John Doe"
            disabled={status === "submitting"}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input 
              label="Phone Number *"
              type="tel" 
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              placeholder="(573) 512-0000"
              disabled={status === "submitting"}
            />
            <Input 
              label="Email Address"
              type="email" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="john@example.com"
              disabled={status === "submitting"}
            />
          </div>
          <Textarea 
            label="Describe Your Plumbing Issue"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            placeholder="Let us know what needs fixing..."
            disabled={status === "submitting"}
          />
          
          {status === "error" && (
            <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-md">
              <AlertCircle size={16} />
              <span>Something went wrong. Please try calling us instead.</span>
            </div>
          )}

          <Button 
            type="submit" 
            variant="primary" 
            className="w-full py-3.5 mt-2 flex items-center justify-center gap-2"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? <Loader size={20} className="text-white" /> : "Submit Request"}
          </Button>
        </form>
      )}
    </Card>
  );
}