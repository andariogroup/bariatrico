"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/site-config";

interface WhatsAppButtonProps {
  message?: string;
}

export function WhatsAppButton({ message }: WhatsAppButtonProps) {
  return (
    <motion.a
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-105"
      aria-label="Contactar por WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="h-7 w-7" fill="white" />
    </motion.a>
  );
}
