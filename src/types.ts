export interface EventCategory {
  id: string;
  name: string;
}

export interface EventListing {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  highlights: string[];
  servicesIncluded: string[];
}

export interface GalleryItem {
  id: string;
  url: string;
  type: "image" | "video";
  category: string;
  span?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  event: string;
  content: string;
  rating: number;
}
