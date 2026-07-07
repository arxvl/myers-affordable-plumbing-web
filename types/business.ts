export interface BusinessAddress {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  full: string;
}

export interface BusinessContact {
  address: BusinessAddress;
  phone: string;
  phoneDisplay: string;
  email: string;
}

export interface BusinessSocials {
  facebook: string;
}

export interface BusinessHours {
  monday_friday: string;
  saturday: string;
  sunday: string;
}

export interface BusinessData {
  name: string;
  industry: string;
  rating: number;
  reviewCount: number;
  contact: BusinessContact;
  socials: BusinessSocials;
  hours: BusinessHours;
}