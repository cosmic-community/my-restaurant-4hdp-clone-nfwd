// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export interface SiteSettings extends CosmicObject {
  type: 'site-settings';
  metadata: {
    brand_name?: string;
    hero_tagline?: string;
    hero_intro?: string;
    hero_cta_label?: string;
    hero_background?: CosmicImage;
    mission_statement?: string;
    bold_statements?: string[];
    partner_note?: string;
    contact_email?: string;
    contact_phone?: string;
    address?: string;
    hours?: string;
    instagram_url?: string;
  };
}

export interface MenuCategory extends CosmicObject {
  type: 'menu-categories';
  metadata: {
    name?: string;
    description?: string;
  };
}

export interface MenuItem extends CosmicObject {
  type: 'menu-items';
  metadata: {
    name?: string;
    story?: string;
    price?: string;
    featured_image?: CosmicImage;
    dietary_info?: string[];
    category?: MenuCategory;
    featured?: boolean;
  };
}

export interface Location extends CosmicObject {
  type: 'locations';
  metadata: {
    name?: string;
    address?: string;
    hours?: string;
    photo?: CosmicImage;
    maps_link?: string;
  };
}

export type ReviewType = 'Review' | 'Press';

export interface ReviewPress extends CosmicObject {
  type: 'reviews-press';
  metadata: {
    quote?: string;
    author_source?: string;
    type?: ReviewType;
    source_link?: string;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}