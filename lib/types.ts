import type { StaticImageData } from "next/image";

export interface Advice {
  id: string;
  title: string;
  summary: string;
  category:
    | "health"
    | "cleaning"
    | "cooking"
    | "secrets"
    | "memories"
    | "beauty"
    | "gardening"
    | "herbal"
    | "crafts"
    | "hospitality"
    | "baking"
    | "preservation"
    | "sewing"
    | "childcare"
    | "astronomy"
    | "beekeeping"
    | "carpentry"
    | "basketry"
    | "leatherwork"
    | "soap_making"
    | "candles"
    | "jewelry"
    | "perfumes"
    | "calligraphy"
    | "weddings"
    | "games"
    | "fishing"
    | "embroidery"
    | "pottery"
    | "travel"
    | "music"
    | "heritage"
    | "weaving"
    | "spices"
    | "home_decor"
    | "storytelling"
    | "natural_dyes"
    | "festivals"
    | "festive_foods"
    | "natural_remedies"
    | "architecture"
    | "folklore"
    | "bedouin_life"
    | "camel_racing"
    | "falconry"
    | "markets"
    | "dance"
    | "poetry"
    | "poetry"
    | "navigation"
    | "remedies"
  content: string;
  tips?: string[];
  ingredients?: string[];
  steps: string[];
  warnings?: string[];
  imageUrl: string | StaticImageData; 
  source?: string;
  region?: string;
  createdAt: string;
  viewCount: number;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string | StaticImageData;
}