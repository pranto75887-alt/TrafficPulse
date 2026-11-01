import React, { useState } from 'react';
import {
  Share2,
  Sparkles,
  Copy,
  Check,
  RefreshCw,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Flame,
  Layers,
  ArrowRight,
  Send,
  HelpCircle,
} from 'lucide-react';
import { LanguageMode } from '../types';
import { getApiLanguage } from '../utils/langHelper';

interface FacebookContentWriterProps {
  lang: LanguageMode;
  onSendToGenerator?: (offerName: string, niche: string, offerType: string) => void;
}

const FB_PRESET_CAMPAIGNS = [
  {
    name: 'Free Remote Work & Survey Checklist (CPA)',
    niche: 'Make Money Online & Side Hustle',
    format: 'comment-bait',
    cta: 'comment-keyword',
  },
  {
    name: '30-Day Keto Meal Plan & Fat Loss Blueprint',
    niche: 'Health & Fitness',
    format: 'story',
    cta: 'first-comment',
  },
  {
    name: 'Secret AI Tool That Edits Videos in 60s',
    niche: 'Tech & Creator Tools (SaaS)',
    format: 'case-study',
    cta: 'comment-keyword',
  },
  {
    name: 'Why 95% Fail at Credit Score Repair (Contrarian)',
    niche: 'Personal Finance & Credit',
    format: 'contrarian',
    cta: 'first-comment',
  },
];

export const FacebookContentWriter: React.FC<FacebookContentWriterProps> = ({
  lang,
  onSendToGenerator,
}) => {
  const [offerName, setOfferName] = useState<string>(
    'Free 10-Step Remote Job & Survey Cheat Sheet'
  );
  const [niche, setNiche] = useState<string>('Make Money Online / Side Hustles');
  const [postFormat, setPostFormat] = useState<string>('comment-bait');
  const [ctaStrategy, setCtaStrategy] = useState<string>('comment-keyword');
  const [targetAudience, setTargetAudience] = useState<string>(
    'Members of work from home, entrepreneur, and side hustle Facebook groups'
  );

  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!offerName.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/generate-facebook-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          offerName,
          niche,
          postFormat,
          ctaStrategy,
          targetAudience,
          language: getApiLanguage(lang),
        }),
      });

      const data = await res.json();
      if (data.success && data.content) {
        setResult(data.content);
      } else {
        setError(data.error || 'Failed to generate Facebook content');
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Network error occurred');
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

  const loadPreset = (preset: typeof FB_PRESET_CAMPAIGNS[0]) => {
    setOfferName(preset.name);
    setNiche(preset.niche);
    setPostFormat(preset.format);
    setCtaStrategy(preset.cta);
  };

  return (
    <div className="space-y-10">
      {/* Header Banner */}
      <section className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 sm:p-8 space-y-4">
        <div className="max-w-4xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
            <Share2 className="w-4 h-4" />
            <span>
              {lang === 'bn'
                ? 'অর্গানিক ফেসবুক কনটেন্ট ও গ্রুপ ভাইরাল রাইটার'
                : 'Organic Facebook Content & Viral Group Funnel Writer'}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {lang === 'bn'
              ? 'ফেসবুকে কোনো পেইড অ্যাড ছাড়াই ১০০% অর্গানিক রিচ ও লিড পাওয়ার পোস্ট রাইটার'
              : 'Write High-Engagement Facebook Posts That Bypass Link Penalties'}
          </h1>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            {lang === 'bn'
              ? 'ফেসবুকের অ্যালগরিদমে পোস্টে সরাসরি এফিলিয়েট বা সিপিএ লিংক দিলে পোস্টের রিচ ৮৫% কমে যায়। এই টুলটি "কমেন্ট-বেইট" ও "ফার্স্ট-কমেন্ট" স্ট্র্যাটেজিতে ভাইরাল পোস্ট, প্রথম কমেন্টের কপি এবং মেসেঞ্জারে লিংক পাঠানোর ফুল ফানেল স্ক্রিপ্ট তৈরি করে দেয়।'
              : 'Facebook aggressively suppresses posts with outbound affiliate links. This writer generates algorithm-friendly posts, 2-line "See More" curiosity hooks, and automated comment-to-DM funnels to maximize engagement.'}
          </p>
        </div>

        {/* Feature Badges */}
        <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-neutral-400 border-t border-neutral-800">
          <span className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Zero Link-Penalty Post Copy
          </span>
          <span aria-hidden="true" className="text-neutral-700">·</span>
          <span className="flex items-center gap-1.5 text-neutral-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            {lang === 'bn' ? '২-লাইনের "See More" হুক' : '2-Line "See More" Hook'}
          </span>
          <span aria-hidden="true" className="text-neutral-700">·</span>
          <span className="flex items-center gap-1.5 text-neutral-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            {lang === 'bn' ? 'মেসেঞ্জার ডিএম স্ক্রিপ্ট' : 'Automated Messenger DM Copy'}
          </span>
        </div>
      </section>

      {/* Preset Samples */}
      <section className="space-y-3">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
          <div className="flex items-center gap-2 text-xs font-bold text-neutral-300 uppercase tracking-wider">
            <Flame className="w-4 h-4 text-rose-400" />
            <span>{lang === 'bn' ? 'জনপ্রিয় ফেসবুক পোস্ট প্রিসেট' : 'Proven Facebook Campaign Presets'}</span>
          </div>
          <span className="text-[11px] text-neutral-400">
            {lang === 'bn' ? 'ক্লিক করে ফিল করুন' : 'Click to autofill'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {FB_PRESET_CAMPAIGNS.map((p, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => loadPreset(p)}
              className="p-3 rounded-lg bg-neutral-900/50 hover:bg-neutral-900 border border-neutral-800 hover:border-amber-400/50 text-left transition-all space-y-1 group"
            >
              <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded">
                {p.niche}
              </span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                {p.name}
              </h4>
              <div className="text-[10px] text-neutral-500 font-mono">
                Format: {p.format} · CTA: {p.cta}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Generator Controls & Output View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Form */}
        <div className="lg:col-span-5 space-y-4 bg-neutral-900/60 border border-neutral-800 p-6 rounded-xl">
          <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-3">
            <MessageCircle className="w-4 h-4 text-amber-400" />
            <span>{lang === 'bn' ? 'ফেসবুক পোস্ট কনফিগারেশন' : 'Facebook Post Parameters'}</span>
          </h3>

          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">
              {lang === 'bn' ? 'অফারের নাম / ফ্রি রিসোর্স:' : 'Offer / Free Lead Magnet Name:'}
            </label>
            <input
              type="text"
              value={offerName}
              onChange={(e) => setOfferName(e.target.value)}
              placeholder="e.g. Free 10-Step Remote Job Cheat Sheet"
              className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-md text-white text-xs focus:border-amber-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">
              {lang === 'bn' ? 'মার্কেটিং নিশ:' : 'Niche Category:'}
            </label>
            <input
              type="text"
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              placeholder="e.g. Health & Fitness, Make Money Online, SaaS"
              className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-md text-white text-xs"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                {lang === 'bn' ? 'পোস্ট ফরম্যাট:' : 'Post Format:'}
              </label>
              <select
                value={postFormat}
                onChange={(e) => setPostFormat(e.target.value)}
                className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-md text-white text-xs"
              >
                <option value="comment-bait">Comment-Bait Giveaway (Highest Reach)</option>
                <option value="story">Transformation Story (High Trust)</option>
                <option value="case-study">Case Study &amp; Teardown</option>
                <option value="contrarian">Contrarian Unpopular Opinion</option>
                <option value="group-value">Group High-Value Master Drop</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                {lang === 'bn' ? 'সিটিএ কৌশল:' : 'CTA Funnel Route:'}
              </label>
              <select
                value={ctaStrategy}
                onChange={(e) => setCtaStrategy(e.target.value)}
                className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-md text-white text-xs"
              >
                <option value="comment-keyword">Comment Keyword (Send in DM)</option>
                <option value="first-comment">Link in First Comment 👇</option>
                <option value="dm-messenger">Direct Message Me</option>
                <option value="bridge-link">1-Page Compliant Bridge</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">
              {lang === 'bn' ? 'টার্গেট অডিয়েন্স / গ্রুপ টাইপ:' : 'Target Facebook Groups / Audience:'}
            </label>
            <input
              type="text"
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
              placeholder="e.g. Remote work and freelancing groups"
              className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-md text-white text-xs"
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading || !offerName.trim()}
            className="w-full py-3 px-4 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 rounded-md transition-colors flex items-center justify-center gap-2 shadow-lg mt-3"
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>{lang === 'bn' ? 'ফেসবুক পোস্ট তৈরি হচ্ছে...' : 'Generating High-Converting Copy...'}</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>{lang === 'bn' ? 'ভাইরাল ফেসবুক পোস্ট ও ডিএম স্ক্রিপ্ট তৈরি করুন' : 'Generate Full Post & DM Funnel'}</span>
              </>
            )}
          </button>
        </div>

        {/* Right Output View */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
            <span className="text-xs font-bold text-neutral-300 uppercase tracking-wider font-mono">
              Ready-to-Publish Facebook Copy &amp; Funnel
            </span>
            {result && (
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-neutral-200 bg-neutral-800 hover:bg-neutral-700 rounded border border-neutral-700 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">কপি হয়েছে! / Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Post &amp; Messages</span>
                  </>
                )}
              </button>
            )}
          </div>

          {error && (
            <div className="p-4 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs">
              Error: {error}
            </div>
          )}

          {loading ? (
            <div className="flex-1 min-h-[420px] rounded-xl border border-neutral-800 bg-neutral-950/60 p-8 flex flex-col items-center justify-center text-center space-y-3">
              <RefreshCw className="w-8 h-8 text-amber-400 animate-spin" />
              <p className="text-sm font-semibold text-white">
                {lang === 'bn'
                  ? 'ফেসবুক অ্যালগরিদম ফ্রেন্ডলি পোস্ট এবং মেসেঞ্জার ডিএম স্ক্রিপ্ট তৈরি হচ্ছে...'
                  : 'Synthesizing viral Facebook hooks, zero-link post body & DM funnel...'}
              </p>
              <p className="text-xs text-neutral-400 max-w-sm">
                Formatting for mobile skimmability, comment velocity, and Facebook group safety.
              </p>
            </div>
          ) : result ? (
            <div className="flex-1 min-h-[420px] max-h-[640px] overflow-y-auto rounded-xl border border-neutral-800 bg-neutral-950 p-6 text-xs text-neutral-200 font-mono leading-relaxed whitespace-pre-wrap selection:bg-amber-500/30">
              {result}
            </div>
          ) : (
            <div className="flex-1 min-h-[420px] rounded-xl border border-dashed border-neutral-800 bg-neutral-950/30 p-8 flex flex-col items-center justify-center text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-500 border border-neutral-800">
                <Share2 className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-white">
                {lang === 'bn' ? 'কোনো ফেসবুক পোস্ট এখনো তৈরি করা হয়নি' : 'No Facebook Post Generated Yet'}
              </h4>
              <p className="text-xs text-neutral-400 max-w-md">
                {lang === 'bn'
                  ? 'বামপাশের ফর্মে অফার লিখে "পোস্ট তৈরি করুন" বাটনে চাপুন।'
                  : 'Enter your offer details on the left to write an organic Facebook post, first comment copy, and automated DM message.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
