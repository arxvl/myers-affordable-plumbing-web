import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines standard class names with Tailwind classes, resolving conflicts.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a phone number string for href attributes (e.g., tel:+15551234567)
 */
export function formatPhoneNumberForHref(phone: string) {
  return `tel:${phone.replace(/[^0-9+]/g, "")}`;
}