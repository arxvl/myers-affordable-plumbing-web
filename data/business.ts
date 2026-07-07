/*Acts as the single source of truth for the company's information. This prevents hardcoding phone numbers or addresses across dozens of files. */
import { BusinessData } from "@/types/business";

export const businessData: BusinessData = {
  name: "Myers Affordable Plumbing",
  industry: "Plumbing Services",
  rating: 4.7,
  reviewCount: 51,
  contact: {
    address: {
      street: "714 N Pine St",
      city: "Richland",
      state: "MO",
      zip: "65556",
      country: "United States",
      full: "714 N Pine St, Richland, MO 65556",
    },
    phone: "+1 (573) 512-0176",
    phoneDisplay: "(573) 512-0176",
    email: "myersplumbing2019@gmail.com", // Placeholder
  },
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=100063701282802#",
  },
  hours: {
    monday_friday: "8:00 AM - 6:00 PM",
    saturday: "9:00 AM - 4:00 PM",
    sunday: "Closed (Emergency Services Available)",
  },
};