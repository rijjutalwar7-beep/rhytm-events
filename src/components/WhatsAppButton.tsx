import React from "react";
import { MessageCircle } from "lucide-react";
import { cn, getWhatsAppLink } from "../lib/utils";
import { motion } from "motion/react";

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  label?: string;
  variant?: "floating" | "solid" | "outline";
}

export function WhatsAppButton({
  message,
  className,
  label = "Chat on WhatsApp",
  variant = "solid",
}: WhatsAppButtonProps) {
  const href = getWhatsAppLink(message);

  if (variant === "floating") {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] transition-colors",
          className,
        )}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
        <span className="sr-only">Contact on WhatsApp</span>
      </motion.a>
    );
  }

  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-3 font-medium transition-all duration-300 rounded-none";

  const variants = {
    solid:
      "bg-[#25D366] text-lavender-900 hover:bg-[#20bd5a] hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]",
    outline:
      "border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-lavender-900",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(baseStyles, variants[variant], className)}
    >
      <MessageCircle className="w-5 h-5" />
      <span>{label}</span>
    </a>
  );
}
