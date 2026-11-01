import React, { useState } from 'react';
import {
  Search,
  ExternalLink,
  Globe2,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  RefreshCw,
  Award,
  ArrowRight,
  TrendingUp,
  FileText,
  Flame,
  Copy,
  Check,
} from 'lucide-react';
import { LanguageMode } from '../types';
import { getApiLanguage } from '../utils/langHelper';

interface SiteRankSpyToolProps {
  lang: LanguageMode;
  onSendToGenerator?: (offerName: string, niche: string, offerType: string) => void;
}

const SAMPLE_SEARCH_OFFERS = [
  {
    name: 'Alpilean Weight Loss Supplement',
    category: 'ClickBank Health',
    searchQuery: 'Alpilean review 2026',
  },
  {
    name: 'Free Cash App & PayPal Gift Card Surveys',
    category: 'CPA Lead Locker',
    searchQuery: 'Cash app rewards survey legit',
  },
  {
    name: 'Semrush SEO & Competitor Analysis Tool',
    category: 'SaaS Software (Recurring)',
    searchQuery: 'Semrush vs Ahrefs review',
  },
  {
    name: 'ProDentim Dental Health Formula',
    category: 'ClickBank High-Ticket',
    searchQuery: 'ProDentim real user results',
  },
  {
    name: 'Standing Desk Converter for Home Office',
    category: 'Amazon Associates',
    searchQuery: 'Best standing desk converter small desk',
  },
];

export const SiteRankSpyTool: React.FC<SiteRankSpyToolProps> = ({
  lang,
  onSendToGenerator,
}) => {
  const [productOffer, setProductOffer] = useState<string>(
    'Alpilean weight loss supplement review'
  );
  const [searchRegion, setSearchRegion] = useState<string>('United States (US)');
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<string | null>(null);
  const [rankedSites, setRankedSites] = useState<{ title: string; url: string }[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const handleSearch = async (queryToSearch?: string) => {
    const q = queryToSearch || productOffer;
    if (!q.trim()) return;

    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/competitor-search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productOffer: q.trim(),
          searchRegion,
          language: getApiLanguage(lang),
        }),
      });

      const data = await res.json();
      if (data.success && data.content) {
        setResult(data.content);
        setRankedSites(data.sources || []);
      } else {
        setError(data.error || 'Failed to search ranking competitor sites');
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Network error searching competitor sites');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const loadPreset = (preset: typeof SAMPLE_SEARCH_OFFERS[0]) => {
    setProductOffer(preset.searchQuery);
    handleSearch(preset.searchQuery);
  };

  return (
    <div className="space-y-10">
      {/* Header Banner */}
      <section className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 sm:p-8 space-y-4">
        <div className="max-w-4xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
            <Search className="w-4 h-4" />
            <span>
              {lang === 'bn'
                ? 'গুগল টপ র‍্যাঙ্কিং সাইট ও কম্পিটিটর স্পাই ইঞ্জিন'
                : 'Google Top-Ranking Competitor Sites & SERP Spy'}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {lang === 'bn'
              ? 'আপনার অফারের সাথে সম্পর্কিত গুগল ১ম পেজের সেরা সাইটগুলো খুঁজুন'
              : 'Discover & Analyze Top-Ranking Affiliate Sites on Google Page 1'}
          </h1>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            {lang === 'bn'
              ? 'যেকোনো সিপিএ বা অ্যাফিলিয়েট অফার/প্রোডাক্টের নাম লিখুন। গুগল সার্চ গ্রাউন্ডিংয়ের মাধ্যমে এই টুলটি বর্তমানে গুগলের টপ ১০-এ র‍্যাঙ্ক করা সব ব্লগ ও ওয়েবসাইট স্ক্যান করবে, তাদের লিংকিং ও ফানেল পদ্ধতি দেখাবে এবং কীভাবে তাদের ছাড়িয়ে যাবেন (Outrank) তার ব্লুপ্রিন্ট দেবে।'
              : 'Enter any CPA or affiliate offer name. Powered by live Google Search Grounding, this tool uncovers active Page-1 ranking blogs, reverse-engineers their affiliate funnels, spots content weaknesses, and gives you a blueprint to outrank them.'}
          </p>
        </div>

        {/* Feature Signals */}
        <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-neutral-400 border-t border-neutral-800">
          <span className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
            <Globe2 className="w-3.5 h-3.5" />
            Live Google SERP Grounding
          </span>
          <span aria-hidden="true" className="text-neutral-700">·</span>
          <span className="flex items-center gap-1.5 text-neutral-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            {lang === 'bn' ? 'আসল র‍্যাঙ্কিং ডোমেইন ও ইউআরএল' : 'Live Verified URLs & Domains'}
          </span>
          <span aria-hidden="true" className="text-neutral-700">·</span>
          <span className="flex items-center gap-1.5 text-neutral-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            {lang === 'bn' ? 'কনটেন্ট গ্যাপ ও আউটর‍্যাঙ্ক টেকনিক' : 'Content Gaps & Outrank Angles'}
          </span>
        </div>
      </section>

      {/* Main Search Input Form */}
      <section className="bg-neutral-900/60 border border-neutral-800 p-6 rounded-xl space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={productOffer}
              onChange={(e) => setProductOffer(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="e.g. Alpilean review, Semrush vs Ahrefs, Cash app survey legit..."
              className="w-full pl-10 pr-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-white text-sm focus:border-amber-400 focus:outline-none"
            />
            <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5" />
          </div>

          <div className="sm:w-48">
            <select
              value={searchRegion}
              onChange={(e) => setSearchRegion(e.target.value)}
              className="w-full py-3 px-3 bg-neutral-950 border border-neutral-800 rounded-lg text-white text-xs"
            >
              <option value="United States (US)">Target: USA (Tier 1)</option>
              <option value="United Kingdom (UK)">Target: United Kingdom</option>
              <option value="Canada (CA)">Target: Canada</option>
              <option value="Global">Target: Global English</option>
            </select>
          </div>

          <button
            onClick={() => handleSearch()}
            disabled={loading || !productOffer.trim()}
            className="px-6 py-3 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 rounded-lg transition-colors flex items-center justify-center gap-2 shrink-0 shadow-sm"
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>{lang === 'bn' ? 'গুগল স্ক্যান হচ্ছে...' : 'Scanning Google SERP...'}</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>{lang === 'bn' ? 'র‍্যাঙ্কিং সাইট খুঁজুন' : 'Search Ranking Sites'}</span>
              </>
            )}
          </button>
        </div>

        {/* Quick Clickable Presets */}
        <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
          <span className="text-neutral-500 font-mono text-[11px] mr-1">
            {lang === 'bn' ? 'জনপ্রিয় অফার টেস্ট করুন:' : 'Try Popular Offers:'}
          </span>
          {SAMPLE_SEARCH_OFFERS.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => loadPreset(item)}
              className="px-2.5 py-1 rounded bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 text-[11px] text-neutral-300 hover:text-amber-400 transition-colors"
            >
              {item.name}
            </button>
          ))}
        </div>
      </section>

      {/* Results Display */}
      {error && (
        <div className="p-4 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs">
          Error: {error}
        </div>
      )}

      {loading ? (
        <div className="min-h-[400px] rounded-xl border border-neutral-800 bg-neutral-950/60 p-8 flex flex-col items-center justify-center text-center space-y-3">
          <RefreshCw className="w-8 h-8 text-amber-400 animate-spin" />
          <p className="text-sm font-semibold text-white">
            {lang === 'bn'
              ? `গুগলে "${productOffer}" এর জন্য শীর্ষ ওয়েবসাইট ও ব্লগগুলো স্ক্যান করা হচ্ছে...`
              : `Scanning Google Page 1 for "${productOffer}" affiliate competitors...`}
          </p>
          <p className="text-xs text-neutral-400 max-w-md">
            Analyzing ranking positions, content formats, monetization funnels, and missing keyword gaps.
          </p>
        </div>
      ) : result ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Competitor Analysis & Outrank Strategy */}
          <div className="lg:col-span-8 bg-neutral-900/60 border border-neutral-800 rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <h3 className="text-base font-bold text-white">
                  {lang === 'bn' ? 'এসইও কম্পিটিটর ও আউটর‍্যাঙ্ক অ্যানালাইসিস' : 'SERP Competitor & Outrank Intelligence'}
                </h3>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-neutral-200 bg-neutral-800 hover:bg-neutral-700 rounded border border-neutral-700 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Report</span>
                  </>
                )}
              </button>
            </div>

            <div className="text-xs text-neutral-200 font-mono leading-relaxed whitespace-pre-wrap max-h-[640px] overflow-y-auto pr-2 selection:bg-amber-500/30">
              {result}
            </div>
          </div>

          {/* Right: Live Verified Ranking Websites List & Quick Action */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                <h4 className="text-xs font-bold text-neutral-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>
                    {lang === 'bn' ? 'গুগলে পাওয়া টপ সাইটগুলো' : 'Live Google Ranking Sites'}
                  </span>
                </h4>
                <span className="text-[10px] font-mono text-neutral-400">
                  {rankedSites.length} Verified
                </span>
              </div>

              {rankedSites.length > 0 ? (
                <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
                  {rankedSites.map((site, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-neutral-950 border border-neutral-800 space-y-1.5 group"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-xs font-semibold text-neutral-200 group-hover:text-amber-400 transition-colors line-clamp-2">
                          {site.title}
                        </span>
                        <a
                          href={site.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-500 hover:text-white shrink-0 mt-0.5"
                          title="Open live ranking page in new tab"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                      <span className="text-[10px] font-mono text-neutral-500 block truncate">
                        {site.url}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-neutral-400 italic">
                  {lang === 'bn'
                    ? 'র‍্যাঙ্কিং সাইটগুলো স্বয়ংক্রিয়ভাবে এখানে তালিকাভুক্ত হবে।'
                    : 'Verified ranking domains will appear here once searched.'}
                </p>
              )}
            </div>

            {/* Outrank Action Box */}
            <div className="p-5 rounded-xl bg-neutral-900/40 border border-amber-500/30 space-y-3">
              <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block">
                Next Move: Outrank Them
              </span>
              <h4 className="text-sm font-bold text-white">
                {lang === 'bn'
                  ? 'এই সাইটগুলোকে টপকাতে সম্পূর্ণ পোস্ট লিখুন'
                  : 'Draft an Outranking Article with AI'}
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {lang === 'bn'
                  ? 'এই সাইটগুলোর দুর্বলতা ও মিসিং কিওয়ার্ড কাজে লাগিয়ে নিমেষেই সম্পূর্ণ এসইও রিভিউ বা তুলনা আর্টিকেল জেনারেট করুন।'
                  : 'Use competitor weaknesses to create a superior 2026 update article with quick verdict box and schema.'}
              </p>
              <button
                onClick={() =>
                  onSendToGenerator?.(
                    productOffer,
                    'Organic Competitor Target',
                    'Product Review / Comparison'
                  )
                }
                className="w-full py-2.5 px-3 rounded-md bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {lang === 'bn' ? 'আউটর‍্যাঙ্ক পোস্ট জেনারেট করুন' : 'Launch Outrank Article Generator'}
                </span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[350px] rounded-xl border border-dashed border-neutral-800 bg-neutral-950/30 p-8 flex flex-col items-center justify-center text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-500 border border-neutral-800">
            <Search className="w-6 h-6" />
          </div>
          <h4 className="text-sm font-bold text-white">
            {lang === 'bn'
              ? 'আপনার কাঙ্ক্ষিত অফার বা প্রোডাক্ট লিখে সার্চ করুন'
              : 'Enter an Offer or Product to Spy on Google Rankers'}
          </h4>
          <p className="text-xs text-neutral-400 max-w-md">
            {lang === 'bn'
              ? 'সার্চ বক্সে যেকোনো প্রোডাক্টের নাম লিখে "র‍্যাঙ্কিং সাইট খুঁজুন" বাটনে ক্লিক করলে গুগল ১ম পেজের সব প্রতিযোগী সাইট ও তাদের ফানেল দেখতে পাবেন।'
              : 'Type any affiliate or CPA product into the search bar above to see live Google Page-1 ranking blogs, how they place links, and how to beat them.'}
          </p>
        </div>
      )}
    </div>
  );
};
