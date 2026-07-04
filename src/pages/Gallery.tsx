import React from "react";
import { GALLERY } from "../data/mockData";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

export function Gallery() {
  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-20 mt-4 md:mt-8">
        <h1 className="text-4xl md:text-5xl font-serif mb-4 md:mb-6">
          The Gallery
        </h1>
        <p className="text-lavender-800 font-light text-base md:text-lg">
          A visual testament to our commitment to luxury and flawless execution.
          Explore moments captured from our prestigious physical events.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[250px] gap-4">
        {GALLERY.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={cn(
              "group relative overflow-hidden satin-silk-dark-bg border border-lavender-300",
              item.span || "col-span-1 row-span-1",
            )}
          >
            <img
              src={item.url}
              alt={`Gallery visual ${i}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 satin-silk-bg/0 group-hover:satin-silk-bg/60 transition-colors duration-500 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-gold-600 text-sm tracking-widest uppercase font-medium">
                View Event
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
