import {
  EventListing,
  EventCategory,
  GalleryItem,
  Testimonial,
} from "../types";

export const CATEGORIES: EventCategory[] = [
  { id: "all", name: "All Events" },
  { id: "wedding", name: "Wedding Events" },
  { id: "corporate", name: "Corporate Events" },
  { id: "birthday", name: "Birthday Parties" },
  { id: "kitty", name: "Kitty Parties" },
  { id: "club", name: "Club Parties" },
  { id: "teachers", name: "Teachers Funzone" },
  { id: "engagement", name: "Engagement Events" },
  { id: "private", name: "Private Events" },
  { id: "dj", name: "DJ & Entertainment" },
  { id: "decoration", name: "Decoration Services" },
];

export const EVENTS: EventListing[] = [
  {
    id: "e1",
    title: "The Royal Heritage Wedding",
    category: "wedding",
    shortDescription:
      "A majestic wedding experience merging traditional elegance with modern luxury.",
    fullDescription:
      "Experience the grandeur of a true royal wedding. We handle every detail from venue selection to intricate floral designs, ensuring your special day feels like a fairy tale. Our team works closely with you to realize your specific vision, managing vendors, decor, catering operations, and timelines with flawless execution.",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    ],
    highlights: [
      "Premium Venue Styling",
      "Palatial floral arrangements",
      "Synchronized lighting",
    ],
    servicesIncluded: [
      "Venue Coordination",
      "Floral Design",
      "Event Security",
      "Catering Management",
      "Logistics",
    ],
  },
  {
    id: "e2",
    title: "Executive Corporate Gala",
    category: "corporate",
    shortDescription:
      "A sophisticated gala night designed for networking and celebrating corporate milestones.",
    fullDescription:
      "Our corporate gala packages are tailored to reflect your brand's prestige. We curate an environment that promotes networking while delivering top-tier entertainment and dining. From branded stage setups to VIP guest management, we ensure your company's achievements are celebrated in style.",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1475721025505-c310b801f47c?q=80&w=2070&auto=format&fit=crop",
    ],
    highlights: [
      "Branded Stage Design",
      "High-end Audiovisual Setup",
      "VIP Lounge Areas",
    ],
    servicesIncluded: [
      "Venue Negotiation",
      "AV & Stage Setup",
      "Branding Integration",
      "Entertainment Sourcing",
    ],
  },
  {
    id: "e3",
    title: "Enchanted Engagement Evening",
    category: "engagement",
    shortDescription:
      "An intimate, beautifully styled evening to celebrate the beginning of forever.",
    fullDescription:
      "Your engagement sets the tone for your wedding. We create intimate, magical settings, complete with romantic lighting, bespoke floral arches, and personalized touches that tell your unique love story.",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1456453913054-d2e7c4f1c93a?q=80&w=2070&auto=format&fit=crop",
    ],
    highlights: [
      "Personalized Decor",
      "Romantic Candlelight Walkways",
      "Intimate Dining Setup",
    ],
    servicesIncluded: [
      "Complete Decor",
      "Photography Coordination",
      "Music Setup",
      "Catering Consultation",
    ],
  },
  {
    id: "e4",
    title: "Neon Birthday Bash",
    category: "birthday",
    shortDescription:
      "A vibrant, high-energy party atmosphere with custom neon lighting and DJ services.",
    fullDescription:
      "Turn your milestone birthday into a nightclub-style experience. We provide custom neon signs, immersive lighting, and top-tier DJ entertainment to keep your guests dancing all night.",
    image:
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=2070&auto=format&fit=crop",
    gallery: [],
    highlights: [
      "Custom Neon Signs",
      "Professional DJ setup",
      "Interactive Photo Booths",
    ],
    servicesIncluded: [
      "Lighting Design",
      "DJ Services",
      "Mixology Bar Setup",
      "Invitations Management",
    ],
  },
  {
    id: "e5",
    title: "Luxury Floral Decor",
    category: "decoration",
    shortDescription:
      "Transforming empty spaces into breathtaking lush environments with premium florals.",
    fullDescription:
      "Our signature floral styling utilizes imported and exotic blooms. We design everything from ceiling installations and hanging gardens to intricate table centerpieces.",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop",
    gallery: [],
    highlights: [
      "Exotic Flower Sourcing",
      "Ceiling Installations",
      "Custom Table Runners",
    ],
    servicesIncluded: [
      "Design Consultation",
      "Floral Supply",
      "On-site Execution",
      "Post-event Teardown",
    ],
  },
  {
    id: "e6",
    title: "Elegant Kitty Party Retreat",
    category: "kitty",
    shortDescription:
      "Chic, intimate daytime gatherings with high tea, games, and elegant decor.",
    fullDescription:
      "Perfect for socializing and catching up with your closest friends. We design luxurious kitty party setups complete with high-tea catering, customized themes, engaging activities, and plush seating arrangements to ensure a relaxing and sophisticated afternoon.",
    image:
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop",
    gallery: [],
    highlights: [
      "Themed Decor",
      "High-Tea Catering",
      "Interactive Games Setup",
    ],
    servicesIncluded: [
      "Venue Selection",
      "Custom Invitations",
      "Menu Curation",
      "Entertainment",
    ],
  },
  {
    id: "e7",
    title: "VIP Club Party for Friends",
    category: "club",
    shortDescription:
      "Exclusive club-style parties with premium bottle service, DJs, and neon ambiance.",
    fullDescription:
      "Bring the club experience exclusively to your friend group. We transform venues into pulsing nightclubs with professional sound systems, intelligent lighting, VIP lounge seating, and elite bartending services for an unforgettable night.",
    image:
      "https://i.pinimg.com/736x/a4/8f/40/a48f40777b1dc22fe826659c2970b8cd.jpg",
    gallery: [],
    highlights: ["Nightclub Lighting", "Top-tier DJ", "Premium Bar Setup"],
    servicesIncluded: [
      "Venue Transformation",
      "Sound & Light Engineering",
      "Mixologists",
      "Security",
    ],
  },
  {
    id: "e8",
    title: "Teachers Funzone Event",
    category: "teachers",
    shortDescription:
      "Interactive, relaxing, and fun-filled retreat events dedicated to educators.",
    fullDescription:
      "A perfect getaway for teachers to unwind, bond, and celebrate their hard work. Our Funzone events include team-building activities, comedy shows, relaxation lounges, and interactive photo booths, tailored specifically for educational staff.",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
    gallery: [],
    highlights: [
      "Team-building Games",
      "Relaxation Lounges",
      "Award Ceremonies",
    ],
    servicesIncluded: [
      "Activity Planning",
      "Venue & Catering",
      "Prizes & Awards",
      "Entertainment",
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Priya & Rahul",
    event: "Wedding Reception",
    content:
      "Rhytm Events completely transformed our vision into reality. The attention to detail and the sheer luxury of the setup left all our guests speechless. Thank you Rahul!",
    rating: 5,
  },
  {
    id: "t2",
    name: "TechCorp India",
    event: "Annual Leadership Summit",
    content:
      "Professional, punctual, and premium. They handled an event of 500 executives flawlessly. The decor and audiovisual setups were world-class.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Anjali Sharma",
    event: "50th Birthday Party",
    content:
      "They took away all the stress of planning! The team was so responsive, and the ambient lighting they set up completely changed the mood of the venue.",
    rating: 5,
  },
];

export const GALLERY: GalleryItem[] = [
  {
    id: "g1",
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop",
    type: "image",
    category: "wedding",
    span: "col-span-1 row-span-2",
  },
  {
    id: "g2",
    url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000&auto=format&fit=crop",
    type: "image",
    category: "corporate",
    span: "col-span-1 row-span-1",
  },
  {
    id: "g3",
    url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop",
    type: "image",
    category: "wedding",
    span: "col-span-1 row-span-1",
  },
  {
    id: "g4",
    url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1000&auto=format&fit=crop",
    type: "image",
    category: "decoration",
    span: "col-span-2 row-span-1",
  },
  {
    id: "g5",
    url: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1000&auto=format&fit=crop",
    type: "image",
    category: "party",
    span: "col-span-1 row-span-1",
  },
  {
    id: "g6",
    url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1000&auto=format&fit=crop",
    type: "image",
    category: "engagement",
    span: "col-span-1 row-span-2",
  },
  {
    id: "g7",
    url: "https://images.unsplash.com/photo-1475721025505-c310b801f47c?q=80&w=1000&auto=format&fit=crop",
    type: "image",
    category: "corporate",
    span: "col-span-2 row-span-1",
  },
];
