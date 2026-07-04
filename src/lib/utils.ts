import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// WhatsApp utility
export const COMPANY_PHONE = "916377724516";
export const COMPANY_EMAIL = "Rahulnaruka6890@gmail.com";
export const COMPANY_LOCATION = "Alwar, India";

export function getWhatsAppLink(
  message: string = "Hi The Lavender Planners, I want details regarding your event services.",
) {
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${COMPANY_PHONE}?text=${encodedText}`;
}
