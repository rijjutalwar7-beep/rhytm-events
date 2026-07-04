import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Target, Heart } from "lucide-react";

export function About() {
  return (
    <div className="pt-16 md:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Intro */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24 mt-4 md:mt-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6 md:mb-8 leading-tight">
            Setting the Standard in{" "}
            <span className="gold-gradient-text-dark italic">Event Management</span>
          </h1>
          <p className="text-lavender-800 font-light text-base md:text-lg leading-relaxed">
            Founded by Rahul Naruka in Alwar, India, Rhytm Events has built a
            reputation on impeccable execution, visionary design, and absolute
            dedication to our clients' success. We do not just plan events; we
            architect memories.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-8 border border-lavender-300 satin-silk-dark-bg"
          >
            <Target
              className="w-12 h-12 text-gold-600 mx-auto mb-6 shrink-0"
              strokeWidth={1}
            />
            <h3 className="text-xl font-serif mb-4">Our Mission</h3>
            <p className="text-lavender-800 font-light text-sm leading-relaxed">
              To elevate the standard of event consulting and execution,
              delivering flawless physical experiences that reflect the prestige
              of our clients.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center p-8 border border-lavender-300 satin-silk-dark-bg"
          >
            <ShieldCheck
              className="w-12 h-12 text-gold-600 mx-auto mb-6 shrink-0"
              strokeWidth={1}
            />
            <h3 className="text-xl font-serif mb-4">Our Integrity</h3>
            <p className="text-lavender-800 font-light text-sm leading-relaxed">
              We operate with complete transparency. Our vendor pipelines are
              thoroughly vetted to ensure only the highest tier of service
              reaches your event floor.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center p-8 border border-lavender-300 satin-silk-dark-bg"
          >
            <Heart
              className="w-12 h-12 text-gold-600 mx-auto mb-6 shrink-0"
              strokeWidth={1}
            />
            <h3 className="text-xl font-serif mb-4">Our Passion</h3>
            <p className="text-lavender-800 font-light text-sm leading-relaxed">
              Every detail matters. From the trajectory of lighting fixtures to
              the threading on table linens, we treat your event as our personal
              masterpiece.
            </p>
          </motion.div>
        </div>

        {/* Owner Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h4 className="text-gold-600 text-xs md:text-sm tracking-[0.3em] font-medium uppercase mb-4">
              Leadership
            </h4>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 md:mb-8">
              Rahul Naruka
            </h2>
            <div className="space-y-6 text-lavender-800 font-light leading-relaxed">
              <p>
                With a deep-seated passion for hospitality and structural
                design, Rahul established Rhytm Events to bridge the gap between
                creative ambition and logistical reality in event management.
              </p>
              <p>
                Driven by a pursuit of excellence, Rahul's approach centers
                entirely around client peace of mind. Under his guidance, Rhytm
                Events has expanded its portfolio across high-society weddings,
                exclusive corporate retreats, and bespoke private gatherings,
                always remaining rooted in Alwar with an operational footprint
                that extends across the region.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-[3/4] relative">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                alt="Rahul Naruka - Founder"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lavender-100 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <p className="text-lavender-900 font-serif text-2xl">
                  Founder & Director
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
