import React, { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { EVENTS, CATEGORIES } from "../data/mockData";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { cn } from "../lib/utils";

export function Events() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredEvents =
    activeCategory === "all"
      ? EVENTS
      : EVENTS.filter((e) => e.category === activeCategory);

  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
        <h1 className="text-4xl sm:text-5xl font-serif mb-4 md:mb-6 mt-4 md:mt-8">
          Our Experiences
        </h1>
        <p className="text-lavender-800 text-sm md:text-base font-light">
          Explore our portfolio of premium services. From conceptualization to
          flawless execution across India.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-10 md:mb-16">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "px-4 md:px-6 py-2 text-xs md:text-sm tracking-wider uppercase transition-colors border",
              activeCategory === cat.id
                ? "border-gold-400 bg-gold-600 text-white font-medium"
                : "border-lavender-300 text-lavender-800 hover:border-gold-600 hover:text-lavender-900",
            )}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Listing Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {filteredEvents.map((event, i) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col md:flex-row group satin-silk-dark-bg border border-lavender-300 overflow-hidden"
          >
            <div className="w-full md:w-2/5 aspect-square md:aspect-auto overflow-hidden shrink-0">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <span className="text-gold-600 text-xs tracking-[0.2em] font-medium uppercase mb-3 block">
                {event.category}
              </span>
              <h3 className="font-serif text-2xl mb-4">{event.title}</h3>
              <p className="text-lavender-800 font-light text-sm mb-8 leading-relaxed">
                {event.shortDescription}
              </p>

              <div className="mt-auto flex flex-col gap-4">
                <Link
                  to={`/events/${event.id}`}
                  className="text-sm border-b border-gold-400 inline-block w-max pb-1 hover:text-gold-600 transition-colors uppercase tracking-wider"
                >
                  View Details
                </Link>
                <WhatsAppButton
                  message={`Hi Rhytm Events, I am interested in knowing more about your "${event.title}" services.`}
                  label="Inquire Now"
                  variant="outline"
                  className="w-full text-xs py-2 mt-4"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-20 text-lavender-600 font-serif text-xl">
          No events found in this category.
        </div>
      )}
    </div>
  );
}
