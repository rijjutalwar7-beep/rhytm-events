import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { EVENTS } from "../data/mockData";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { motion } from "motion/react";
import { Check } from "lucide-react";

export function EventDetail() {
  const { id } = useParams();
  const event = EVENTS.find((e) => e.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lavender-900">
        <h1 className="text-2xl font-serif">Event Not Found</h1>
      </div>
    );
  }

  return (
    <div className="pb-16 md:pb-24">
      {/* Banner */}
      <div className="h-[50vh] md:h-[60vh] relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 satin-silk-bg/60 flex items-center justify-center">
          <div className="text-center px-4 md:px-6">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gold-600 text-sm tracking-[0.3em] font-medium uppercase mb-4 block"
            >
              {event.category}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-serif text-lavender-900 max-w-4xl leading-tight"
            >
              {event.title}
            </motion.h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl md:text-3xl font-serif mb-4 md:mb-6">
                About The Experience
              </h2>
              <p className="text-lavender-800 leading-relaxed font-light text-base md:text-lg">
                {event.fullDescription}
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-serif mb-6">Service Highlights</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {event.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-lavender-800 satin-silk-dark-bg p-4 border border-lavender-300"
                  >
                    <Check className="w-5 h-5 text-gold-600 shrink-0" />
                    <span className="font-light">{h}</span>
                  </li>
                ))}
              </ul>
            </section>

            {event.gallery.length > 0 && (
              <section>
                <h3 className="text-2xl font-serif mb-6">Visual Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {event.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      className="aspect-square overflow-hidden satin-silk-dark-bg border border-lavender-300"
                    >
                      <img
                        src={img}
                        alt={`${event.title} detail ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 md:top-32 satin-silk-dark-bg border border-lavender-300 p-6 md:p-8">
              <h3 className="text-2xl font-serif mb-6">Included Features</h3>
              <ul className="space-y-4 mb-10">
                {event.servicesIncluded.map((s, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-lavender-800 text-sm border-b border-lavender-300 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="text-gold-600 mt-1 uppercase text-[10px] tracking-widest">
                      •
                    </span>
                    {s}
                  </li>
                ))}
              </ul>

              <WhatsAppButton
                message={`Hi Rhytm Events, I want to book or get more details about "${event.title}".`}
                label="Book Constultation"
                className="w-full"
              />
              <p className="text-center text-xs text-lavender-600 mt-4 leading-relaxed font-light">
                Directly connect with our planning team via WhatsApp for pricing
                and availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
