export type ChannelType = 'overview' | 'seo' | 'pinterest' | 'tiktok' | 'youtube-shorts' | 'facebook' | 'bridge' | 'email-sequence' | 'video-to-script' | 'market-insights' | 'site-spy' | 'tracker' | 'tools' | 'generator' | 'launch-checklist';

export type LanguageMode = 'bn' | 'en' | 'hi' | 'es';

export interface PerformanceLogEntry {
  id: string;
  campaignName: string;
  channel: 'Pinterest' | 'TikTok' | 'SEO Blog' | 'Bridge Page' | 'YouTube Shorts';
  date: string;
  clicks: number;
  conversions: number;
  revenue: number;
  cost: number;
  notes?: string;
}

export interface SeoTitleIdea {
  id: string;
  title: string;
  bnTitle?: string;
  targetKeyword: string;
  searchIntent: 'Commercial' | 'Transactional' | 'Informational';
  competitionLevel: 'Very Low (KGR < 0.25)' | 'Low' | 'Medium';
  format: 'Product Review' | 'Vs Comparison' | 'Step-by-Step Tutorial' | 'Buyer Roundup';
  searchVolumeEstimate: string;
  monetizationAngle: string;
  outline: string[];
}

export interface ContentPillar {
  title: string;
  description: string;
  clusters: string[];
}

export interface BlogStructureTemplate {
  id: string;
  name: string;
  description: string;
  badge: string;
  conversionFocus: string;
  sections: {
    heading: string;
    description: string;
    tips: string;
  }[];
  markdownTemplate: string;
}

export interface PinterestTemplate {
  title: string;
  overlayText: string;
  category: string;
  ctrTrigger: string;
  descriptionPrompt: string;
  designRule: string;
}

export interface TikTokFramework {
  name: string;
  duration: string;
  hookType: string;
  hookExample: string;
  bodyFormula: string;
  ctaText: string;
  bRollIdea: string;
}
