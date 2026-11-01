import React, { useState, useEffect } from 'react';
import {
  Compass,
  Search,
  ExternalLink,
  Sparkles,
  TrendingUp,
  RefreshCw,
  Globe2,
  Zap,
  ArrowRight,
  Flame,
  CheckCircle2,
} from 'lucide-react';
import { LanguageMode } from '../types';
import { getApiLanguage } from '../utils/langHelper';

interface MarketInsightPanelProps {
  lang: LanguageMode;
  onLaunchCampaignWithTopic: (topic: string, niche: string, offerType: string) => void;
}

const TRENDING_RADAR_PRESETS = [
  {
    niche: 'AI Productivity & Workflow Automation',
    offerType: 'SaaS Affiliate (Recurring 30-40%)',
    signal: 'Rising Search Volume +180%',
    platform: 'TikTok & SEO Blog',
    tag: 'Tech & SaaS',
  },
  {
    niche: 'Biohacking & Cellular Longevity (NMN/Creatine)',
    offerType: 'ClickBank / Physical Health Supplement',
    signal: 'Pinterest Trends Spike',
    platform: 'Pinterest & SEO Review',
    tag: 'Health & Wellness',
  },
  {
    niche: 'Remote Micro-Tasks & Paid Survey Apps',
    offerType: 'CPA Lead Locker ($1.50 - $4.00 per submit)',
    signal: 'TikTok Viral Search Spike',
    platform: 'TikTok Faceless Video',
    tag: 'CPA Leads',
  },
  {
    niche: 'Smart Home Energy & Solar Cost Calculators',
    offerType: 'High-Ticket Pay-Per-Call / CPA ($35 - $80)',
    signal: 'High Buyer Intent KGR',
    platform: 'SEO Long-Tail Blog',
    tag: 'Home & Finance',
  },
  {
    niche: 'Aesthetic Coffee & Minimalist Desk Setup Gear',
    offerType: 'Amazon Associates / Direct Brand Collabs',
    signal: 'Pinterest High Save-Rate',
    platform: 'Pinterest 2:3 Pins',
    tag: 'Lifestyle Aesthetic',
  },
];

export const MarketInsightPanel: React.FC<MarketInsightPanelProps> = ({
  lang,
  onLaunchCampaignWithTopic,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState<boolean>(false);
  const [insightData, setInsightData] = useState<{
    content: string;
    sources: { title: string; url: string }[];
    timestamp?: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchInsights = async (category: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/market-insights', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category,
          language: getApiLanguage(lang),
        }),
      });
      const data = await res.json();
      if (data.success) {
        setInsightData({
          content: data.content,
          sources: data.sources || [],
          timestamp: data.timestamp,
        });
      } else {
        setError(data.error || 'Failed to fetch grounded market trends');
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Network error fetching trends');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInsights(selectedCategory);
  }, [selectedCategory, lang]);

  return (
    <div className="space-y-10">
      {/* Header Banner */}
      <section className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 sm:p-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
              <Compass className="w-4 h-4" />
              <span>
                {lang === 'bn'
                  ? 'লাইভ গুগল সার্চ গ্রাউন্ডেড মার্কেট ইনসাইটস'
                  : 'Live Search-Grounded Market Insights'}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {lang === 'bn'
                ? 'বর্তমানে ট্রেন্ডিং নিশ ও হাই-কনভার্টিং অফার আইডিয়া'
                : 'Real-Time Trending Affiliate & CPA Market Opportunities'}
            </h1>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-3xl leading-relaxed">
              {lang === 'bn'
                ? 'গুগল সার্চ গ্রাউন্ডিংয়ের সাহায্যে লাইভ ওয়েবের সাম্প্রতিক সার্চ ট্রেন্ড, টিকটক ভাইরাল ট্রেন্ড এবং পিন্টারেস্টের বায়ার ডিমান্ড বিশ্লেষণ করে রিয়েল-টাইম ক্যাম্পেন আইডিয়া সংগ্রহ করুন।'
                : 'Powered by live Google Search Grounding to uncover real-time search volume spikes, trending TikTok product demands, and high-converting CPA buyer signals.'}
            </p>
          </div>

          <button
            onClick={() => fetchInsights(selectedCategory)}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 rounded-md transition-colors shrink-0 self-start sm:self-auto shadow-sm"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>{lang === 'bn' ? 'ট্রেন্ড রিফ্রেশ করুন' : 'Refresh Live Trends'}</span>
          </button>
        </div>

        {/* Search Grounding Live Badge */}
        <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-neutral-400 border-t border-neutral-800">
          <span className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
            <Search className="w-3.5 h-3.5" />
            Google Search Grounding: Active
          </span>
          <span aria-hidden="true" className="text-neutral-700">·</span>
          <span className="text-neutral-400 text-[11px]">
            {lang === 'bn'
              ? 'লাইভ ওয়েব থেকে ট্রেন্ডিং কিওয়ার্ড ও অফার স্ক্যান হচ্ছে'
              : 'Scanning live web for breakout keyword demand & CPA offers'}
          </span>
        </div>
      </section>

      {/* Preset Radar Tiles: Instant Action */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
          <div className="flex items-center gap-2 text-xs font-bold text-neutral-300 uppercase tracking-wider">
            <Flame className="w-4 h-4 text-rose-400" />
            <span>{lang === 'bn' ? 'তাত্ক্ষণিক হাই-পটেনশিয়াল নিশ রাডার' : 'Instant Opportunity Radar'}</span>
          </div>
          <span className="text-[11px] text-neutral-400">
            {lang === 'bn' ? '১-ক্লিকে ক্যাম্পেন তৈরি করুন' : 'Click to launch campaign'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {TRENDING_RADAR_PRESETS.map((preset, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-lg bg-neutral-900/50 border border-neutral-800 hover:border-amber-400/50 transition-all flex flex-col justify-between space-y-3 group"
            >
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20 block w-fit">
                  {preset.tag}
                </span>
                <h4 className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                  {preset.niche}
                </h4>
                <p className="text-[11px] text-neutral-400 font-mono">{preset.offerType}</p>
                <div className="text-[10px] text-emerald-400 font-mono">⚡ {preset.signal}</div>
              </div>

              <button
                onClick={() =>
                  onLaunchCampaignWithTopic(
                    preset.niche,
                    preset.tag,
                    preset.offerType
                  )
                }
                className="w-full py-1.5 px-2 rounded bg-neutral-800 hover:bg-amber-400 hover:text-neutral-950 text-neutral-200 text-[11px] font-semibold transition-colors flex items-center justify-center gap-1"
              >
                <span>{lang === 'bn' ? 'ক্যাম্পেন বানান' : 'Create Campaign'}</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Main Grounded Intelligence Feed */}
      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-800 pb-3">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: lang === 'bn' ? 'সকল ট্রেন্ড' : 'All Niches' },
              { id: 'tiktok', label: lang === 'bn' ? 'টিকটক ভাইরাল' : 'TikTok Viral' },
              { id: 'pinterest', label: lang === 'bn' ? 'পিন্টারেস্ট ভিজ্যুয়াল' : 'Pinterest Trends' },
              { id: 'cpa', label: lang === 'bn' ? 'সিপিএ অফার' : 'CPA Leads & Lockers' },
              { id: 'saas', label: lang === 'bn' ? 'সফটওয়্যার ও এআই' : 'SaaS & Recurring' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === tab.id
                    ? 'bg-amber-400 text-neutral-950 shadow-sm'
                    : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {insightData?.timestamp && (
            <span className="text-[11px] font-mono text-neutral-400">
              Updated: {new Date(insightData.timestamp).toLocaleTimeString()}
            </span>
          )}
        </div>

        {error && (
          <div className="p-4 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs">
            {error}
          </div>
        )}

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Main Grounded Report */}
          <div className="lg:col-span-8 bg-neutral-900/60 border border-neutral-800 rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>
                  {lang === 'bn'
                    ? 'সার্চ-গ্রাউন্ডেড মার্কেট অ্যানালাইসিস'
                    : 'Search-Grounded Market Analysis'}
                </span>
              </h3>
              <span className="text-xs font-mono text-neutral-400">
                Gemini 3.8 Flash + Live Search
              </span>
            </div>

            {loading ? (
              <div className="min-h-[380px] flex flex-col items-center justify-center space-y-3 text-center">
                <RefreshCw className="w-7 h-7 text-amber-400 animate-spin" />
                <p className="text-sm font-semibold text-white">
                  {lang === 'bn'
                    ? 'লাইভ গুগল সার্চ করে ট্রেন্ডিং নিশ বিশ্লেষণ করা হচ্ছে...'
                    : 'Grounding real-time affiliate & CPA trend data across Google, TikTok & Pinterest...'}
                </p>
                <p className="text-xs text-neutral-400 max-w-sm">
                  Querying live search spikes, consumer interest breakouts, and organic keyword gaps.
                </p>
              </div>
            ) : insightData ? (
              <div className="text-xs text-neutral-200 font-mono leading-relaxed whitespace-pre-wrap max-h-[600px] overflow-y-auto pr-2 selection:bg-amber-500/30">
                {insightData.content}
              </div>
            ) : (
              <div className="min-h-[250px] flex items-center justify-center text-xs text-neutral-500">
                Click refresh to load trending insights.
              </div>
            )}
          </div>

          {/* Right: Verified Web Grounding Sources & Action */}
          <div className="lg:col-span-4 space-y-6">
            {/* Grounding Web Sources Box */}
            <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                <h4 className="text-xs font-bold text-neutral-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Globe2 className="w-3.5 h-3.5 text-sky-400" />
                  <span>
                    {lang === 'bn'
                      ? 'যাচাইকৃত গুগল সার্চ রেফারেন্স'
                      : 'Verified Grounding Sources'}
                  </span>
                </h4>
                <span className="text-[10px] font-mono text-neutral-400">
                  {insightData?.sources?.length || 0} Sources
                </span>
              </div>

              {insightData && insightData.sources.length > 0 ? (
                <div className="space-y-2 max-h-[320px] overflow-y-auto pr-1">
                  {insightData.sources.map((src, i) => (
                    <a
                      key={i}
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 hover:border-neutral-700 flex items-start justify-between gap-2 text-xs transition-colors block"
                    >
                      <div className="space-y-0.5">
                        <span className="font-medium text-neutral-200 group-hover:text-amber-400 transition-colors line-clamp-1">
                          {src.title}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-500 block truncate max-w-[200px]">
                          {src.url}
                        </span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-neutral-300 shrink-0 mt-0.5" />
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-neutral-400 italic">
                  {lang === 'bn'
                    ? 'সার্চ সোর্স স্বয়ংক্রিয়ভাবে এখানে তালিকাভুক্ত হবে।'
                    : 'Grounded sources extracted from live search will appear here.'}
                </p>
              )}
            </div>

            {/* Direct AI Campaign Launcher Box */}
            <div className="p-5 rounded-xl bg-neutral-900/40 border border-amber-500/30 space-y-3">
              <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block">
                Next Step: Take Action
              </span>
              <h4 className="text-sm font-bold text-white">
                {lang === 'bn'
                  ? 'পছন্দের ট্রেন্ড দিয়ে এখনই কনটেন্ট তৈরি করুন'
                  : 'Turn Trends into Traffic Right Now'}
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {lang === 'bn'
                  ? 'উপরে পাওয়া যেকোনো ট্রেন্ডিং টপিক বা অফারের জন্য মুহূর্তেই ৫টি পিন্টারেস্ট পিন, ৩টি ভাইরাল টিকটক স্ক্রিপ্ট অথবা সম্পূর্ণ এসইও রিভিউ আর্টিকেল জেনারেট করুন।'
                  : 'Send any trending topic directly to the AI Campaign Generator to draft Pins, TikTok scripts, and SEO blog reviews.'}
              </p>
              <button
                onClick={() =>
                  onLaunchCampaignWithTopic(
                    'Trending Opportunity from Market Insight',
                    selectedCategory,
                    'Affiliate / CPA Offer'
                  )
                }
                className="w-full py-2.5 px-3 rounded-md bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {lang === 'bn'
                    ? 'এআই জেনারেটরে ক্যাম্পেন ওপেন করুন'
                    : 'Open in Campaign Generator'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
