import React, { useState } from 'react';
import {
  Sparkles,
  RefreshCw,
  Copy,
  Check,
  Send,
  SlidersHorizontal,
  Layers,
  ArrowRight,
  FileText,
  Pin,
  Video,
  ShieldCheck,
} from 'lucide-react';
import { LanguageMode } from '../types';

interface AiCampaignGeneratorProps {
  lang: LanguageMode;
  initialPromptData?: {
    channel?: string;
    offerName?: string;
    offerType?: string;
    niche?: string;
  } | null;
  onClose?: () => void;
}

export const AiCampaignGenerator: React.FC<AiCampaignGeneratorProps> = ({
  lang,
  initialPromptData,
  onClose,
}) => {
  const [channel, setChannel] = useState<string>(initialPromptData?.channel || 'seo');
  const [niche, setNiche] = useState<string>(
    initialPromptData?.niche || 'Make Money Online & Affiliate Marketing'
  );
  const [offerName, setOfferName] = useState<string>(
    initialPromptData?.offerName || 'Email Submit CPA Offer / High-Ticket Software'
  );
  const [offerType, setOfferType] = useState<string>(
    initialPromptData?.offerType || 'CPA Lead Offer'
  );
  const [targetAudience, setTargetAudience] = useState<string>(
    'Tier-1 USA/UK audience seeking fast real solutions'
  );
  const [outputLanguage, setOutputLanguage] = useState<'bengali' | 'english' | 'hindi' | 'spanish'>(
    lang === 'bn' ? 'bengali' : lang === 'hi' ? 'hindi' : lang === 'es' ? 'spanish' : 'english'
  );

  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/generate-strategy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          channel,
          niche,
          offerName,
          offerType,
          targetAudience,
          language: outputLanguage,
        }),
      });

      const data = await response.json();
      if (data.success && data.content) {
        setResult(data.content);
      } else {
        setError(data.error || 'Failed to generate campaign content');
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

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>{lang === 'bn' ? 'এআই ক্যাম্পেন আর্কিটেক্ট' : 'AI Organic Campaign Architect'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            {lang === 'bn'
              ? 'আপনার নির্দিষ্ট সিপিএ/অ্যাফিলিয়েট অফারের জন্য স্ট্র্যাটেজি ও কনটেন্ট জেনারেটর'
              : 'Generate Complete Organic Campaigns for Any CPA or Affiliate Offer'}
          </h2>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="px-3 py-1.5 text-xs text-neutral-400 hover:text-white border border-neutral-800 rounded self-start sm:self-auto"
          >
            Close
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Input Form Controls */}
        <div className="lg:col-span-5 space-y-4 bg-neutral-900/60 border border-neutral-800 p-6 rounded-xl">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-amber-400" />
            <span>{lang === 'bn' ? 'অফার ও অডিয়েন্স কনফিগারেশন' : 'Campaign Parameters'}</span>
          </h3>

          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">
              {lang === 'bn' ? 'টার্গেট চ্যানেল নির্বাচন করুন:' : 'Target Organic Channel:'}
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'seo', label: 'SEO Blog Post', icon: FileText },
                { id: 'pinterest', label: 'Pinterest Pins Set', icon: Pin },
                { id: 'tiktok', label: 'TikTok Video Scripts', icon: Video },
                { id: 'bridge', label: 'Bridge Funnel Copy', icon: ShieldCheck },
              ].map((c) => {
                const Icon = c.icon;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setChannel(c.id)}
                    className={`flex items-center gap-2 p-2.5 rounded-lg border text-xs font-semibold transition-colors text-left ${
                      channel === c.id
                        ? 'bg-amber-400 text-neutral-950 border-amber-400 shadow-sm'
                        : 'bg-neutral-950 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 shrink-0" />
                    <span>{c.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">
              {lang === 'bn' ? 'মার্কেটিং নিশ (Niche):' : 'Niche Category:'}
            </label>
            <input
              type="text"
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              placeholder="e.g. Weight Loss, Personal Finance, Gaming, SaaS"
              className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-md text-white text-xs focus:border-amber-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">
              {lang === 'bn' ? 'অফারের নাম / টপিক:' : 'Offer Name / Focus Topic:'}
            </label>
            <input
              type="text"
              value={offerName}
              onChange={(e) => setOfferName(e.target.value)}
              placeholder="e.g. Amazon Gift Card CPA, Alpilean Weight Loss, Semrush SEO Tool"
              className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-md text-white text-xs focus:border-amber-400 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                {lang === 'bn' ? 'অফারের ধরন:' : 'Offer Model:'}
              </label>
              <select
                value={offerType}
                onChange={(e) => setOfferType(e.target.value)}
                className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-md text-white text-xs"
              >
                <option value="CPA Lead Offer">CPA Lead / Survey Locker</option>
                <option value="ClickBank / Digistore">ClickBank / Physical Product</option>
                <option value="SaaS Affiliate">Software / Recurring SaaS</option>
                <option value="Amazon Associates">Amazon Physical Affiliate</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                {lang === 'bn' ? 'আউটপুট ভাষা:' : 'Language Output:'}
              </label>
              <select
                value={outputLanguage}
                onChange={(e) => setOutputLanguage(e.target.value as any)}
                className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-md text-white text-xs"
              >
                <option value="bengali">🇧🇩 বাংলা (Bangla Guidance + Ready Copy)</option>
                <option value="hindi">🇮🇳 हिन्दी (Hindi Guidance + Ready Copy)</option>
                <option value="spanish">🇪🇸 Español (Spanish Strategy & Copy)</option>
                <option value="english">🇺🇸 English (Tier-1 Ready Copy)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">
              {lang === 'bn' ? 'টার্গেট অডিয়েন্স প্রোফাইল:' : 'Target Audience:'}
            </label>
            <input
              type="text"
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
              className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-md text-white text-xs focus:border-amber-400 focus:outline-none"
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full py-3 px-4 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 rounded-md transition-colors flex items-center justify-center gap-2 shadow-lg mt-2"
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>{lang === 'bn' ? 'ক্যাম্পেন কনটেন্ট তৈরি হচ্ছে...' : 'Architecting Campaign with Gemini...'}</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>{lang === 'bn' ? 'সম্পূর্ণ স্ট্র্যাটেজি ও কনটেন্ট জেনারেট করুন' : 'Generate Full Campaign Package'}</span>
              </>
            )}
          </button>
        </div>

        {/* Right: Output Screen */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
            <span className="text-xs font-bold text-neutral-300 uppercase tracking-wider font-mono">
              Campaign Blueprint Output
            </span>
            {result && (
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
                    <span>Copy Full Markdown</span>
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
                  ? 'জেমিনাই এআই আপনার জন্য অর্গানিক মার্কেটিং ব্লুপ্রিন্ট তৈরি করছে...'
                  : 'Synthesizing organic SEO keywords, Pin designs & viral TikTok hooks...'}
              </p>
              <p className="text-xs text-neutral-400 max-w-sm">
                Analyzing search intent, competitive gaps, and compliant bridge routing.
              </p>
            </div>
          ) : result ? (
            <div className="flex-1 min-h-[420px] max-h-[680px] overflow-y-auto rounded-xl border border-neutral-800 bg-neutral-950 p-6 text-xs text-neutral-200 font-mono leading-relaxed whitespace-pre-wrap selection:bg-amber-500/30">
              {result}
            </div>
          ) : (
            <div className="flex-1 min-h-[420px] rounded-xl border border-dashed border-neutral-800 bg-neutral-950/30 p-8 flex flex-col items-center justify-center text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-500 border border-neutral-800">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-white">
                {lang === 'bn' ? 'কোনো ক্যাম্পেন এখনো জেনারেট করা হয়নি' : 'No Campaign Generated Yet'}
              </h4>
              <p className="text-xs text-neutral-400 max-w-md">
                {lang === 'bn'
                  ? 'বামপাশের ফর্মে আপনার সিপিএ বা অ্যাফিলিয়েট অফারের তথ্য পূরণ করে "জেনারেট করুন" বাটনে ক্লিক করুন।'
                  : 'Select your channel, niche, and offer model on the left, then click Generate to produce complete title sets, video scripts, and pins.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
