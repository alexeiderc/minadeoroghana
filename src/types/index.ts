export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Operation {
  id: string;
  titleKey: string;
  descriptionKey: string;
  icon: string;
  stats?: MetricItem[];
}

export interface MetricItem {
  value: number;
  suffix: string;
  labelKey: string;
}

export interface MiningAsset {
  id: string;
  nameKey: string;
  type: "mine" | "exploration" | "processing";
  lat: number;
  lng: number;
  descriptionKey: string;
}

export interface NewsArticle {
  id: string;
  slug: string;
  titleKey: string;
  excerptKey: string;
  date: string;
  category: string;
  imageGradient: string;
}

export interface Product {
  id: string;
  titleKey: string;
  descriptionKey: string;
  specs: ProductSpec[];
  icon: string;
}

export interface ProductSpec {
  labelKey: string;
  value: string;
}

export interface InvestorReport {
  id: string;
  titleKey: string;
  date: string;
  type: "annual" | "quarterly" | "presentation";
  fileSize: string;
}

export interface GalleryItem {
  id: string;
  gradient: string;
  span: "tall" | "wide" | "normal";
  titleKey: string;
}

export interface ContactInfo {
  type: string;
  value: string;
  icon: string;
}

export interface SustainabilityItem {
  id: string;
  icon: string;
  titleKey: string;
  descriptionKey: string;
  metric?: string;
}

export interface TimelineEvent {
  year: string;
  titleKey: string;
  descriptionKey: string;
}

export interface FooterLink {
  labelKey: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
