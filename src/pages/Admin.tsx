import React, { useState } from "react";
import { EVENTS, GALLERY, TESTIMONIALS } from "../data/mockData";
import {
  Search,
  Plus,
  Settings,
  Users,
  LayoutDashboard,
  Database,
  Image as ImageIcon,
} from "lucide-react";
import { cn } from "../lib/utils";

export function Admin() {
  const [activeTab, setActiveTab] = useState<
    "dashboard" | "events" | "gallery"
  >("dashboard");

  return (
    <div className="min-h-screen satin-silk-bg pt-16 md:pt-24 font-sans text-lavender-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col md:flex-row gap-8">
        {/* Sidebar Nav */}
        <div className="w-full md:w-64 shrink-0 satin-silk-dark-bg p-6 border border-lavender-300 rounded-lg shadow-2xl h-max">
          <div className="mb-8">
            <h2 className="text-gold-600 font-serif text-xl mb-1">
              Admin Portal
            </h2>
            <p className="text-xs text-lavender-600 uppercase tracking-wider">
              The Lavender Planners
            </p>
          </div>

          <nav className="space-y-2">
            {[
              { id: "dashboard", name: "Overview", icon: LayoutDashboard },
              { id: "events", name: "Manage Events", icon: Database },
              { id: "gallery", name: "Manage Gallery", icon: ImageIcon },
              { id: "testimonials", name: "Testimonials", icon: Users },
              { id: "settings", name: "Settings", icon: Settings },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded text-sm transition-colors text-left",
                  activeTab === tab.id
                    ? "bg-gold-600 text-white font-medium"
                    : "text-lavender-800 hover:satin-silk-bg/5 hover:text-lavender-900",
                )}
              >
                <tab.icon className="w-4 h-4 shrink-0" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Area */}
        <div className="flex-grow satin-silk-dark-bg border border-lavender-300 rounded-lg p-6 md:p-8 overflow-hidden">
          {activeTab === "dashboard" && (
            <div>
              <h2 className="text-2xl md:text-3xl font-serif mb-6 md:mb-8">
                Dashboard Overview
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
                <div className="satin-silk-bg border border-lavender-300 p-6 rounded">
                  <div className="text-lavender-600 text-xs tracking-widest uppercase mb-2">
                    Total Events
                  </div>
                  <div className="text-4xl text-gold-600 font-serif">
                    {EVENTS.length}
                  </div>
                </div>
                <div className="satin-silk-bg border border-lavender-300 p-6 rounded">
                  <div className="text-lavender-600 text-xs tracking-widest uppercase mb-2">
                    Gallery Assets
                  </div>
                  <div className="text-4xl text-gold-600 font-serif">
                    {GALLERY.length}
                  </div>
                </div>
                <div className="satin-silk-bg border border-lavender-300 p-6 rounded">
                  <div className="text-lavender-600 text-xs tracking-widest uppercase mb-2">
                    Testimonials
                  </div>
                  <div className="text-4xl text-gold-600 font-serif">
                    {TESTIMONIALS.length}
                  </div>
                </div>
              </div>
              <div className="text-center p-12 border border-dashed border-lavender-300 text-lavender-600 rounded">
                Analytics and recent inquiry data would populate here.
              </div>
            </div>
          )}

          {activeTab === "events" && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 md:mb-8 gap-4">
                <h2 className="text-2xl md:text-3xl font-serif">
                  Manage Events
                </h2>
                <button className="bg-gold-600 text-white px-4 py-2 text-sm font-medium rounded flex items-center gap-2 hover:bg-gold-500">
                  <Plus className="w-4 h-4" /> Add Event
                </button>
              </div>

              <div className="relative mb-6">
                <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-lavender-600" />
                <input
                  type="text"
                  placeholder="Search events..."
                  className="w-full satin-silk-bg border border-lavender-300 rounded py-3 pl-12 pr-4 text-sm focus:border-gold-400 focus:outline-none"
                />
              </div>

              <div className="border border-lavender-300 w-full overflow-x-auto rounded satin-silk-bg">
                <table className="w-full text-left text-sm">
                  <thead className="satin-silk-bg/5 border-b border-lavender-300 text-xs uppercase tracking-wider text-lavender-800">
                    <tr>
                      <th className="px-6 py-4">Title</th>
                      <th className="px-6 py-4">Category</th>
                      <th className="px-6 py-4">Images</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {EVENTS.map((ev) => (
                      <tr
                        key={ev.id}
                        className="border-b border-lavender-300 hover:satin-silk-bg/5 transition-colors"
                      >
                        <td className="px-6 py-4 font-medium">{ev.title}</td>
                        <td className="px-6 py-4 uppercase text-xs tracking-widest text-gold-600">
                          {ev.category}
                        </td>
                        <td className="px-6 py-4">
                          {ev.gallery.length + 1} item(s)
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-blue-400 hover:underline mr-4 text-xs tracking-wider">
                            Edit
                          </button>
                          <button className="text-red-400 hover:underline text-xs tracking-wider">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "gallery" && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-serif">Manage Gallery</h2>
                <button className="bg-gold-600 text-white px-4 py-2 text-sm font-medium rounded flex items-center gap-2 hover:bg-gold-500">
                  <Plus className="w-4 h-4" /> Upload Median
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {GALLERY.map((img) => (
                  <div
                    key={img.id}
                    className="aspect-square satin-silk-bg border border-lavender-300 rounded overflow-hidden relative group"
                  >
                    <img
                      src={img.url}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 satin-silk-bg/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                      <button className="bg-red-500 text-lavender-900 w-full py-2 text-xs rounded uppercase tracking-wider hover:bg-red-600">
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab !== "dashboard" &&
            activeTab !== "events" &&
            activeTab !== "gallery" && (
              <div className="text-center text-lavender-600 py-20">
                Module under development.
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
