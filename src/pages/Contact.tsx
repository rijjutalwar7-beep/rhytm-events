import React from "react";
import { motion } from "motion/react";
import { COMPANY_EMAIL, COMPANY_LOCATION, COMPANY_PHONE } from "../lib/utils";
import { MapPin, Mail, Phone } from "lucide-react";
import { WhatsAppButton } from "../components/WhatsAppButton";

export function Contact() {
  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-20 mt-4 md:mt-8">
        <h1 className="text-4xl md:text-5xl font-serif mb-4 md:mb-6">
          Contact Us
        </h1>
        <p className="text-lavender-800 font-light text-base md:text-lg">
          Your next extraordinary event begins with a conversation. Reach out to
          our specialized planning team today.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
        {/* Contact info & map */}
        <div className="space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="satin-silk-dark-bg border border-lavender-300 p-8 flex flex-col items-center text-center">
              <Phone className="w-8 h-8 text-gold-600 mb-4" strokeWidth={1.5} />
              <h3 className="font-serif text-lg mb-2">Phone</h3>
              <p className="text-lavender-800 text-sm">+{COMPANY_PHONE}</p>
            </div>
            <div className="satin-silk-dark-bg border border-lavender-300 p-8 flex flex-col items-center text-center">
              <Mail className="w-8 h-8 text-gold-600 mb-4" strokeWidth={1.5} />
              <h3 className="font-serif text-lg mb-2">Email</h3>
              <p className="text-lavender-800 text-sm break-all">
                {COMPANY_EMAIL}
              </p>
            </div>
            <div className="satin-silk-dark-bg border border-lavender-300 p-8 flex flex-col items-center text-center sm:col-span-2">
              <MapPin
                className="w-8 h-8 text-gold-600 mb-4"
                strokeWidth={1.5}
              />
              <h3 className="font-serif text-lg mb-2">Office</h3>
              <p className="text-lavender-800 text-sm max-w-xs">
                {COMPANY_LOCATION}
              </p>
            </div>
          </div>

          <div className="w-full aspect-video satin-silk-dark-bg border border-lavender-300 overflow-hidden p-2">
            {/* Embedded Google Maps (Example for Alwar, India) */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113697.74712431718!2d76.541315!3d27.560938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39729a21239aa8a1%3A0x600fbea42036c070!2sAlwar%2C%20Rajasthan%2C%20India!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            ></iframe>
          </div>
        </div>

        {/* Form area */}
        <div className="satin-silk-dark-bg border border-lavender-300 p-6 md:p-10 lg:p-12">
          <h3 className="text-2xl md:text-3xl font-serif mb-6 md:mb-8">
            Send an Inquiry
          </h3>

          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Please use WhatsApp for primary contact.");
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
                  placeholder="John"
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
                  placeholder="Doe"
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
                  placeholder="john@example.com"
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
                  placeholder="+91 00000 00000"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-lavender-600">
                Event Type
              </label>
              <select className="w-full satin-silk-bg border border-lavender-300 p-4 text-lavender-900 focus:border-gold-400 focus:outline-none appearance-none cursor-pointer">
                <option>Wedding</option>
                <option>Corporate Gala</option>
                <option>Private Party</option>
                <option>Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-lavender-600">
                Message Details
              </label>
              <textarea
                className="w-full satin-silk-bg border border-lavender-300 p-4 text-lavender-900 focus:border-gold-400 focus:outline-none min-h-[150px] resize-none"
                placeholder="Tell us about your event vision, dates, and requirements..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full satin-silk-bg text-white hover:bg-gray-200 uppercase tracking-widest text-sm font-semibold py-4 transition-colors"
            >
              Submit Form
            </button>
            <div className="relative py-4 flex items-center justify-center">
              <span className="satin-silk-dark-bg px-4 text-lavender-600 text-xs tracking-wider z-10 relative">
                OR CONNECT INSTANTLY
              </span>
              <div className="absolute left-0 w-full border-t border-lavender-300 top-1/2"></div>
            </div>

            <WhatsAppButton label="CHAT ON WHATSAPP" className="w-full z-10" />
          </form>
        </div>
      </div>
    </div>
  );
}
