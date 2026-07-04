import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { EVENTS, GALLERY, TESTIMONIALS } from "../data/mockData";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { Star, ShieldCheck, Gem, Sparkles, Clock, Compass } from "lucide-react";

const HERO_IMAGES = [
  "https://storage.googleapis.com/aistudio-v2-pre-prod-storage/v1/user/103986794695029015488/applet/7df45a77-9e05-4d2a-9f02-2c59dbf2570f/assets/7517c5b6-76cd-4202-b25c-5690469b8c0e.jpeg",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
];

export function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* SECTION 1: HERO */}
      <section className="relative h-[100dvh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-lavender-900">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={currentImageIndex}
              src={HERO_IMAGES[currentImageIndex]}
              alt="Premium Event Management"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-lavender-50"></div>
        </div>

        <div className="relative z-10 text-center px-4 md:px-6 max-w-5xl mx-auto mt-16 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-7xl font-serif mb-4 md:mb-6 leading-tight"
          >
            Creating Memorable Events That Leave{" "}
            <span className="gold-gradient-text italic drop-shadow-sm">
              Lasting Impressions
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-lavender-100 max-w-2xl mx-auto mb-8 md:mb-10 font-light"
          >
            From bespoke weddings to elite corporate celebrations, The Lavender Planners
            turns ideas into unforgettable, luxurious experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              to="/events"
              className="w-full sm:w-auto px-8 py-4 bg-gold-600 text-white font-semibold tracking-wider hover:bg-gold-500 transition-colors"
            >
              EXPLORE EVENTS
            </Link>
            <WhatsAppButton
              label="CONTACT ON WHATSAPP"
              variant="outline"
              className="w-full sm:w-auto px-8 py-4"
            />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: ABOUT */}
      <section className="py-16 md:py-24 satin-silk-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] object-cover w-full max-w-md mx-auto lg:ml-0 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
                alt="The Lavender Planners Planning"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-2/3 aspect-square border border-gold-600/50 p-2 hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop"
                alt="Detailed Decor"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-gold-600 text-sm tracking-[0.3em] font-medium uppercase mb-4">
              About The Lavender Planners
            </h4>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6 md:mb-8 leading-tight">
              Your Trusted Partner in Elegance
            </h2>
            <div className="space-y-6 text-lavender-800 font-light leading-relaxed">
              <p>
                Based in Alwar, India, The Lavender Planners specializes in orchestrating
                premium physical experiences that captivate and inspire. We
                believe that every celebration deserves a unique fingerprint.
              </p>
              <p>
                Our professional planning team handles personalized execution
                from the ground up—meaning you get to enjoy your special day
                without worrying about the logistics. Seamless vendor
                management, elite floral architectures, and flawless timelines
                are standard.
              </p>
            </div>
            <div className="mt-10">
              <Link
                to="/about"
                className="text-gold-600 uppercase tracking-widest text-sm font-semibold hover:text-lavender-900 transition-colors flex items-center gap-2"
              >
                Discover Our Story <span className="text-lg">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: WHY CHOOSE US */}
      <section className="py-16 md:py-24 satin-silk-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h4 className="text-gold-600 text-xs md:text-sm tracking-[0.3em] font-medium uppercase mb-4">
              The The Lavender Planners Standard
            </h4>
            <h2 className="text-3xl md:text-4xl font-serif">Why Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Creative Event Planning",
                desc: "Bespoke concepts tailored precisely to your imagination.",
              },
              {
                icon: ShieldCheck,
                title: "Experienced Team",
                desc: "Years of industry expertise managing large-scale luxury events.",
              },
              {
                icon: Gem,
                title: "Premium Decoration",
                desc: "Sourcing only the finest florals, lighting, and ambient furnishings.",
              },
              {
                icon: Clock,
                title: "Smooth Execution",
                desc: "Flawless timeline management so you can simply enjoy the moment.",
              },
              {
                icon: Compass,
                title: "Custom Packages",
                desc: "Flexible planning structures that align with your specific scale.",
              },
              {
                icon: Star,
                title: "End-to-End Support",
                desc: "From the first consultation to the final teardown, we're with you.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 border border-lavender-300 satin-silk-bg/50 hover:border-gold-600/50 transition-colors group"
              >
                <feature.icon
                  className="w-10 h-10 text-gold-600 mb-6 group-hover:scale-110 transition-transform"
                  strokeWidth={1}
                />
                <h3 className="font-serif text-xl mb-4">{feature.title}</h3>
                <p className="text-lavender-800 font-light text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: EVENTS PREVIEW */}
      <section className="py-16 md:py-24 satin-silk-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
            <div>
              <h4 className="text-gold-600 text-xs md:text-sm tracking-[0.3em] font-medium uppercase mb-4">
                Our Expertise
              </h4>
              <h2 className="text-3xl md:text-4xl font-serif">
                Signature Experiences
              </h2>
            </div>
            <Link
              to="/events"
              className="text-gold-600 uppercase tracking-widest text-sm font-semibold hover:text-lavender-900 transition-colors"
            >
              View All Categories →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EVENTS.slice(0, 3).map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="group relative overflow-hidden"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-lavender-100/95 via-lavender-100/80 to-transparent flex flex-col justify-end p-8">
                  <span className="text-gold-600 text-xs tracking-[0.2em] font-medium uppercase mb-2 block">
                    {event.category}
                  </span>
                  <h3 className="font-serif text-2xl mb-3">{event.title}</h3>
                  <Link
                    to={`/events/${event.id}`}
                    className="text-sm border-b border-gold-400 inline-block w-max pb-1 hover:text-gold-600 transition-colors uppercase tracking-wider"
                  >
                    Discover Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: SPECIALTY PARTIES */}
      <section className="py-16 md:py-24 satin-silk-bg border-t border-lavender-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h4 className="text-gold-600 text-xs md:text-sm tracking-[0.3em] font-medium uppercase mb-4">
              Beyond the Ordinary
            </h4>
            <h2 className="text-3xl md:text-4xl font-serif">
              Specialty Gatherings
            </h2>
            <p className="mt-4 md:mt-6 text-lavender-800 text-sm md:text-base font-light leading-relaxed">
              From intimate kitty parties to high-energy club nights and
              dedicated teacher appreciation events, we craft custom interactive
              experiences for every group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: "e4",
                title: "Birthday Parties",
                cat: "birthday",
                img: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=2070&auto=format&fit=crop",
              },
              {
                id: "e6",
                title: "Kitty Parties",
                cat: "kitty",
                img: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop",
              },
              {
                id: "e7",
                title: "Club Parties",
                cat: "club",
                img: "https://i.pinimg.com/736x/a4/8f/40/a48f40777b1dc22fe826659c2970b8cd.jpg",
              },
              {
                id: "e8",
                title: "Teachers Funzone",
                cat: "teachers",
                img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
              },
            ].map((party, i) => (
              <motion.div
                key={party.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden aspect-[3/4] border border-lavender-300"
              >
                <img
                  src={party.img}
                  alt={party.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lavender-100 via-transparent to-transparent flex flex-col justify-end p-6">
                  <h3 className="font-serif text-xl mb-2">{party.title}</h3>
                  <Link
                    to={`/events/${party.id}`}
                    className="text-gold-600 text-xs uppercase tracking-widest font-medium hover:text-lavender-900 transition-colors"
                  >
                    Explore Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS */}
      <section className="py-16 md:py-24 satin-silk-dark-bg relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h4 className="text-gold-600 text-xs md:text-sm tracking-[0.3em] font-medium uppercase mb-4">
            Client Voices
          </h4>
          <h2 className="text-3xl md:text-4xl font-serif mb-10 md:mb-16">
            Words of Appreciation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="p-8 border border-lavender-300"
              >
                <div className="flex gap-1 text-gold-600 mb-6">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-lavender-800 font-light italic mb-8">
                  "{t.content}"
                </p>
                <div>
                  <h4 className="font-serif text-lg">{t.name}</h4>
                  <span className="text-lavender-600 text-xs uppercase tracking-wider block">
                    {t.event}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: BOOKING INQUIRY */}
      <section className="py-16 md:py-24 satin-silk-bg border-t border-lavender-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h4 className="text-gold-600 text-xs md:text-sm tracking-[0.3em] font-medium uppercase mb-4">
              Start Planning
            </h4>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              Book Your Event
            </h2>
            <p className="text-lavender-800 text-sm md:text-base font-light max-w-2xl mx-auto">
              Ready to create an unforgettable experience? Fill out the form
              below or reach out to us directly to discuss your vision, check
              availability, and secure your date.
            </p>
          </div>

          <div className="satin-silk-dark-bg border border-lavender-300 p-6 sm:p-10 mt-8 rounded-sm shadow-xl">
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Please use WhatsApp for primary contact and instant booking.",
                );
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-lavender-600">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full satin-silk-bg border border-lavender-300 p-4 text-lavender-900 focus:border-gold-400 focus:outline-none transition-colors"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-lavender-600">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full satin-silk-bg border border-lavender-300 p-4 text-lavender-900 focus:border-gold-400 focus:outline-none transition-colors"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-lavender-600">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full satin-silk-bg border border-lavender-300 p-4 text-lavender-900 focus:border-gold-400 focus:outline-none transition-colors"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-lavender-600">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full satin-silk-bg border border-lavender-300 p-4 text-lavender-900 focus:border-gold-400 focus:outline-none transition-colors"
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-lavender-600">
                    Event Date
                  </label>
                  <input
                    type="date"
                    className="w-full satin-silk-bg border border-lavender-300 p-4 text-lavender-800 focus:text-lavender-900 focus:border-gold-400 focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-lavender-600">
                    Event Type
                  </label>
                  <select
                    defaultValue=""
                    className="w-full satin-silk-bg border border-lavender-300 p-4 text-lavender-800 focus:text-lavender-900 focus:border-gold-400 focus:outline-none appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Select an event type
                    </option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Gala</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="kitty">Kitty Party</option>
                    <option value="club">Club Party</option>
                    <option value="teachers">Teachers Funzone</option>
                    <option value="other">Other Event</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-lavender-600">
                  Additional Details
                </label>
                <textarea
                  className="w-full satin-silk-bg border border-lavender-300 p-4 text-lavender-900 focus:border-gold-400 focus:outline-none min-h-[150px] resize-none"
                  placeholder="Tell us about your estimated guest count, theme ideas, or specific requirements..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full satin-silk-bg text-white hover:bg-gold-600 uppercase tracking-widest text-sm font-semibold py-4 transition-colors"
              >
                Submit Booking Request
              </button>

              <div className="relative py-4 flex items-center justify-center">
                <span className="satin-silk-dark-bg px-4 text-lavender-600 text-xs tracking-wider z-10 relative">
                  OR CONNECT INSTANTLY
                </span>
                <div className="absolute left-0 w-full border-t border-lavender-300 top-1/2"></div>
              </div>

              <WhatsAppButton
                label="CHAT ON WHATSAPP"
                className="w-full z-10"
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
