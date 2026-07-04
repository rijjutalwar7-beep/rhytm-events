import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { COMPANY_PHONE, COMPANY_EMAIL, COMPANY_LOCATION } from "../lib/utils";

export function Footer() {
  return (
    <footer className="satin-silk-bg border-t border-lavender-300 pt-16 md:pt-20 pb-8 md:pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
          <div className="space-y-6">
            <div className="text-2xl font-serif tracking-widest uppercase flex flex-col items-start leading-tight">
              <span className="text-lavender-900">Rhytm</span>
              <span className="text-gold-600 text-xs tracking-[0.3em] font-sans">
                Events
              </span>
            </div>
            <p className="text-lavender-800 text-sm leading-relaxed max-w-xs">
              Turning ideas into unforgettable experiences. Your premier event
              management partner for weddings, corporate galas, and luxury
              celebrations.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-lavender-300 flex items-center justify-center text-lavender-800 hover:text-gold-600 hover:border-gold-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-lavender-300 flex items-center justify-center text-lavender-800 hover:text-gold-600 hover:border-gold-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-lavender-300 flex items-center justify-center text-lavender-800 hover:text-gold-600 hover:border-gold-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg text-lavender-900 tracking-widest mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Events", "Gallery", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      to={
                        link === "Home"
                          ? "/"
                          : `/${link.toLowerCase().replace(" ", "-")}`
                      }
                      className="text-lavender-800 hover:text-gold-600 transition-colors text-sm uppercase tracking-wider"
                    >
                      {link}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-lavender-900 tracking-widest mb-6">
              Legal
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-lavender-800 hover:text-gold-600 transition-colors text-sm tracking-wider"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-conditions"
                  className="text-lavender-800 hover:text-gold-600 transition-colors text-sm tracking-wider"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/refund-policy"
                  className="text-lavender-800 hover:text-gold-600 transition-colors text-sm tracking-wider"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-lavender-900 tracking-widest mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <span className="text-lavender-800 text-sm">
                  +{COMPANY_PHONE}
                </span>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <span className="text-lavender-800 text-sm">
                  {COMPANY_EMAIL}
                </span>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <span className="text-lavender-800 text-sm leading-relaxed">
                  {COMPANY_LOCATION}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-lavender-300 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-lavender-600 text-sm">
            &copy; {new Date().getFullYear()} Rhytm Events &ndash; All Rights
            Reserved
          </p>
          <p className="text-lavender-800 text-xs">Designed for Excellence</p>
        </div>
      </div>
    </footer>
  );
}
