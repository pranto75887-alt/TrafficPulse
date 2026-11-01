import React, { useState } from 'react';
import {
  Youtube,
  Sparkles,
  RefreshCw,
  Copy,
  Check,
  Play,
  RotateCcw,
  SlidersHorizontal,
  Flame,
  MessageSquare,
  ArrowRight,
  Zap,
  Clock,
  Film,
  Layers,
} from 'lucide-react';
import { LanguageMode } from '../types';
import { getApiLanguage } from '../utils/langHelper';

interface YouTubeShortsSectionProps {
  lang: LanguageMode;
  onSendToCampaign?: (topic: string, niche: string, offerType: string) => void;
}

interface ShortsPreset {
  title: string;
  topic: string;
  niche: string;
  duration: '15s' | '30s' | '45s' | '60s';
  hookStyle: string;
  affiliateOffer: string;
}

const PRESETS: ShortsPreset[] = [
  {
    title: 'Top 3 Secret AI Websites (Illegal to Know)',
    topic: '3 secret AI websites that feel illegal to know for students and freelancers',
    niche: 'AI Tools & Productivity',
    duration: '30s',
    hookStyle: 'curiosity-loop',
    affiliateOffer: 'SaaS Tool Affiliate (Recurring Commissions)',
  },
  {
    title: 'How I Make $50/Day with Simple Micro-Tasks',
    topic: 'Legit websites that pay daily for testing apps and taking quick 2-minute surveys',
    niche: 'Make Money Online & Side Hustles',
    duration: '30s',
    hookStyle: 'secret-reveal',
    affiliateOffer: 'CPA Lead Locker / Gift Card Survey Offer',
  },
  {
    title: 'Stop Drinking Morning Coffee on an Empty Stomach',
    topic: 'The real cortisol crash mistake everyone makes at 8 AM and the 30-second fix',
    niche: 'Health, Wellness & Biohacking',
    duration: '45s',
    hookStyle: 'contrarian',
    affiliateOffer: 'ClickBank Health & Mineral Supplement',
  },
  {
    title: 'Do NOT Buy This Viral Tech Gadget Until You See This',
    topic: 'Honest test of the viral viral noise-cancelling setup vs the budget alternative',
    niche: 'Consumer Tech & Gadgets',
    duration: '30s',
    hookStyle: 'transformation',
    affiliateOffer: 'Amazon Associates / Direct Brand Affiliate',
  },
];

export const YouTubeShortsSection: React.FC<YouTubeShortsSectionProps> = ({
  lang,
  onSendToCampaign,
}) => {
  const [topic, setTopic] = useState<string>(
    '3 underground websites that feel illegal to know for remote income'
  );
  const [niche, setNiche] = useState<string>('Make Money Online & AI Productivity');
  const [duration, setDuration] = useState<'15s' | '30s' | '45s' | '60s'>('30s');
  const [hookStyle, setHookStyle] = useState<string>('curiosity-loop');
  const [affiliateOffer, setAffiliateOffer] = useState<string>(
    'CPA Survey Locker / SaaS Tool Free Trial'
  );

  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/youtube-shorts-script', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic,
          niche,
          duration,
          hookStyle,
          affiliateOffer,
          language: getApiLanguage(lang),
        }),
      });

      const data = await res.json();
      if (data.success && data.content) {
        setResult(data.content);
      } else {
        setError(data.error || 'Failed to generate YouTube Shorts script');
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

  const handleLoadPreset = (preset: ShortsPreset) => {
    setTopic(preset.topic);
    setNiche(preset.niche);
    setDuration(preset.duration);
    setHookStyle(preset.hookStyle);
    setAffiliateOffer(preset.affiliateOffer);
  };

  return (
    <div className="space-y-10">
      {/* Hero Header */}
      <section className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-8 space-y-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-red-400 uppercase">
          <Youtube className="w-4 h-4 text-red-500" />
          <span>
            {lang === 'bn'
              ? 'ইউটিউব শর্টস অ্যালগরিদম ও ভাইরাল স্ক্রিপ্ট ইঞ্জিন'
              : lang === 'hi'
              ? 'यूट्यूब शॉर्ट्स वायरल स्क्रिप्ट और लूप इंजन'
              : lang === 'es'
              ? 'Guiones Virales para YouTube Shorts con Bucle Infinito'
              : 'YouTube Shorts Viral Script & Infinite Loop Engine'}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {lang === 'bn'
            ? 'ভাইরাল ইউটিউব শর্টস স্ক্রিপ্ট ও এআই প্রম্পট জেনারেটর'
            : lang === 'hi'
            ? 'यूट्यूब शॉर्ट्स स्क्रिप्ट और एआई विज़ुअल प्रॉम्प्ट जेनरेटर'
            : lang === 'es'
            ? 'Generador de Guiones y Prompts para YouTube Shorts'
            : 'Viral YouTube Shorts Script & Infinite Loop Generator'}
        </h1>

        <p className="text-neutral-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          {lang === 'bn'
            ? 'ইউটিউব শর্টসে ১০০%+ অ্যাভারেজ পারসেন্টেজ ভিউড (APV) পেতে সিমলেস লুপ (Infinite Loop), প্রথম ২.৫ সেকেন্ডের হুক, টাইমকোডেড ভয়েসওভার এবং পিনড কমেন্ট ফানেল সহ রেডি-টু-রেকর্ড স্ক্রিপ্ট তৈরি করুন।'
            : lang === 'hi'
            ? 'यूट्यूब शॉर्ट्स में 100%+ व्यू ड्यूरेशन पाने के लिए सीमलेस लूप, पहले 2.5 सेकंड का हुक और पिन किए गए कमेंट फ़नल के साथ तैयार स्क्रिप्ट बनाएं।'
            : lang === 'es'
            ? 'Crea guiones diseñados para retención >100% con bucles infinitos, ganchos de 2.5 segundos, subtítulos cinéticos de CapCut y monetización por comentario fijado.'
            : 'Craft high-retention YouTube Shorts with seamless audio loops, 2.5-second visual pattern interrupts, timecoded voiceovers, and pinned-comment affiliate funnels.'}
        </p>

        {/* Algorithm Rules Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="p-3 rounded-lg bg-neutral-950/80 border border-neutral-800 flex items-start gap-3">
            <RotateCcw className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-bold text-white block">
                {lang === 'bn' ? 'সিমলেস ইনফিনিট লুপ' : lang === 'hi' ? 'सीमलेस इनफिनिट लूप' : 'Infinite Seamless Loop'}
              </span>
              <span className="text-neutral-400 text-[11px]">
                {lang === 'bn' ? 'শেষ বাক্য ১ম শব্দের সাথে মিলে ১০৫%+ ভিউ টাইম দেয়' : 'End loops to start for 110%+ APV retention'}
              </span>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-neutral-950/80 border border-neutral-800 flex items-start gap-3">
            <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-bold text-white block">
                {lang === 'bn' ? '২.৫ সেকেন্ড প্যাটার্ন ইন্টারাপ্ট' : lang === 'hi' ? '2.5 सेकंड का हुक' : '2.5s Retention Hook'}
              </span>
              <span className="text-neutral-400 text-[11px]">
                {lang === 'bn' ? 'কোনো ইন্ট্রো নেই, সরাসরি চমক ও অন-স্ক্রিন কাইনেটিক টেক্সট' : 'Zero fluff, instant visual shock & curiosity'}
              </span>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-neutral-950/80 border border-neutral-800 flex items-start gap-3">
            <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-bold text-white block">
                {lang === 'bn' ? 'পিনড কমেন্ট ফানেল' : lang === 'hi' ? 'पिन्ड कमेंट फ़नल' : 'Pinned Comment Funnel'}
              </span>
              <span className="text-neutral-400 text-[11px]">
                {lang === 'bn' ? 'অ্যালগরিদম পেনাল্টি ছাড়া সেইফ ব্রিজ পেজে ট্রাফিক ড্রাইভ' : 'Safe affiliate routing without shadowbans'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Preset Inspirations */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            {lang === 'bn'
              ? 'জনপ্রিয় ইউটিউব শর্টস ফরম্যাট (১-ক্লিকে লোড করুন)'
              : lang === 'hi'
              ? 'प्रसिद्ध यूट्यूब शॉर्ट्स फॉर्मेट (1-क्लिक में लोड करें)'
              : lang === 'es'
              ? 'Formatos Virales Populares (Cargar con 1 clic)'
              : 'Proven Viral Shorts Templates (1-Click Load)'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {PRESETS.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleLoadPreset(p)}
              className="p-3.5 rounded-xl text-left bg-neutral-900/60 hover:bg-neutral-800 border border-neutral-800 hover:border-red-500/40 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-red-500/10 text-red-300 border border-red-500/30">
                    {p.duration}
                  </span>
                  <span className="text-[10px] text-neutral-500">{p.niche}</span>
                </div>
                <h4 className="text-xs font-bold text-white group-hover:text-red-300 transition-colors line-clamp-2">
                  {p.title}
                </h4>
              </div>
              <span className="text-[11px] text-amber-400/90 flex items-center gap-1 mt-3 font-medium">
                <span>{lang === 'bn' ? 'ব্যবহার করুন' : 'Load Preset'}</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Generator Form */}
      <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 space-y-6">
        <div className="flex items-center gap-2 border-b border-neutral-800 pb-3">
          <SlidersHorizontal className="w-4 h-4 text-red-400" />
          <h2 className="text-sm font-bold text-white uppercase tracking-wider">
            {lang === 'bn' ? 'স্ক্রিপ্ট প্যারামিটার ও নিশ সেটিং' : 'Shorts Script Parameters'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Topic / Concept */}
          <div className="space-y-2 md:col-span-2">
            <label className="text-xs font-bold text-neutral-200 flex items-center gap-2">
              <Film className="w-3.5 h-3.5 text-red-400" />
              <span>
                {lang === 'bn' ? 'ভিডিও টপিক বা কনসেপ্ট' : lang === 'hi' ? 'वीडियो टॉपिक या कॉन्सेप्ट' : 'Shorts Topic or Concept'}
              </span>
            </label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g. 3 secret AI tools that save 10 hours a week"
              className="w-full px-4 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-sm text-neutral-100 focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Niche */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-neutral-200">
              {lang === 'bn' ? 'মার্কেটিং নিশ' : 'Niche'}
            </label>
            <input
              type="text"
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              placeholder="e.g. AI Tools & Software, MMO, Health"
              className="w-full px-4 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-sm text-neutral-100 focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Affiliate / CPA Offer */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-neutral-200">
              {lang === 'bn' ? 'মনিটাইজেশন অফার / প্রি-ল্যান্ডার' : 'Target Offer / Pre-Lander'}
            </label>
            <input
              type="text"
              value={affiliateOffer}
              onChange={(e) => setAffiliateOffer(e.target.value)}
              placeholder="e.g. SaaS Recurring Affiliate, CPA Lead Locker"
              className="w-full px-4 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-sm text-neutral-100 focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Duration Selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-neutral-200 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-neutral-400" />
              <span>{lang === 'bn' ? 'ভিডিও ডিউরেশন' : 'Duration'}</span>
            </label>
            <div className="grid grid-cols-4 gap-2">
              {(['15s', '30s', '45s', '60s'] as const).map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setDuration(d)}
                  className={`py-2 rounded-lg text-xs font-bold transition-all border ${
                    duration === d
                      ? 'bg-red-500 text-neutral-950 border-red-500'
                      : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Hook Style */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-neutral-200">
              {lang === 'bn' ? 'ভাইরাল হুক স্টাইল' : 'Hook Style'}
            </label>
            <select
              value={hookStyle}
              onChange={(e) => setHookStyle(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-sm text-neutral-100 focus:outline-none focus:border-red-500"
            >
              <option value="curiosity-loop">🔄 Infinite Seamless Loop (Maximum APV)</option>
              <option value="secret-reveal">🕵️ Secret Discovery / "Illegal to Know"</option>
              <option value="contrarian">⚠️ Warning / "Stop Doing This Immediately"</option>
              <option value="transformation">📈 Step-by-Step Proof / Transformation</option>
            </select>
          </div>
        </div>

        {/* Generate Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400">
            {lang === 'bn'
              ? '🤖 জেমিনি ৩.৮ ফ্ল্যাশ দ্বারা ভয়েসওভার স্ক্রিপ্ট, সিন প্রম্পট ও পিনড কমেন্ট তৈরি হবে'
              : 'Generates word-for-word voiceover, seamless loop ending, CapCut text, and AI b-roll prompts.'}
          </p>

          <button
            onClick={handleGenerate}
            disabled={loading || !topic.trim()}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-neutral-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-red-500/20 disabled:opacity-50"
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>{lang === 'bn' ? 'স্ক্রিপ্ট তৈরি হচ্ছে...' : 'Generating Script...'}</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>
                  {lang === 'bn' ? 'ইউটিউব শর্টস স্ক্রিপ্ট জেনারেট করুন' : 'Generate Viral Shorts Script'}
                </span>
              </>
            )}
          </button>
        </div>

        {error && (
          <div className="p-4 rounded-lg bg-red-950/40 border border-red-800 text-xs text-red-300">
            {error}
          </div>
        )}
      </div>

      {/* Generated Result Display */}
      {result && (
        <section className="rounded-xl border border-red-500/30 bg-neutral-900/80 p-6 space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                {lang === 'bn' ? 'রেডি-টু-রেকর্ড ইউটিউব শর্টস প্যাকেজ' : 'Ready-to-Record YouTube Shorts Package'}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="px-3.5 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{lang === 'bn' ? 'কপি হয়েছে' : 'Copied!'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{lang === 'bn' ? 'স্ক্রিপ্ট কপি করুন' : 'Copy Package'}</span>
                  </>
                )}
              </button>

              {onSendToCampaign && (
                <button
                  onClick={() => onSendToCampaign(topic, niche, affiliateOffer)}
                  className="px-3.5 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{lang === 'bn' ? 'সম্পূর্ণ ফানেল বানান' : 'Launch Full Funnel'}</span>
                </button>
              )}
            </div>
          </div>

          <div className="prose prose-invert prose-xs sm:prose-sm max-w-none bg-neutral-950 p-5 rounded-lg border border-neutral-800/80 overflow-x-auto whitespace-pre-wrap font-sans leading-relaxed text-neutral-200">
            {result}
          </div>
        </section>
      )}

      {/* Evergreen Shorts Framework Guide */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase">
            <Layers className="w-4 h-4" />
            <span>{lang === 'bn' ? 'কাইনেটিক ক্যাপশন ও টেক্সট আর্কিটেকচার' : 'CapCut Retention Captions'}</span>
          </div>
          <p className="text-xs text-neutral-300 leading-relaxed">
            {lang === 'bn'
              ? 'মোবাইল স্ক্রিনে প্রতি ১.৫ সেকেন্ডে কী-ওয়ার্ড হাইলাইট (Yellow & Red text) পরিবর্তন করুন। ক্যাপশনের ফন্ট সাইজ বড় এবং মাঝখানে রাখুন, যাতে সাউন্ড ছাড়া দেখলেও ভিউয়ার ১০০% এনগেজ থাকে।'
              : 'Switch key-phrase highlights every 1.5 seconds using bold yellow and red accent colors. Over 60% of Shorts viewers start without headphones; screen text is mandatory for high retention.'}
          </p>
        </div>

        <div className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase">
            <Flame className="w-4 h-4" />
            <span>{lang === 'bn' ? 'অ্যালগরিদম কমেন্ট লিঙ্ক পলিসি' : 'Safe Pinned Link Strategy'}</span>
          </div>
          <p className="text-xs text-neutral-300 leading-relaxed">
            {lang === 'bn'
              ? 'ভিডিওর ভেতরে ডিরেক্ট অ্যাফিলিয়েট লিংক বলবেন না। স্ক্রিপ্টে বলুন: "I left the free link in the pinned comment 👇"। পিনড কমেন্টে আপনার সেইফ ব্রিজ পেজ লিংক ব্যবহার করুন।'
              : 'Never paste direct raw CPA links. State verbal call-to-action: "Link pinned in the comments below 👇", and direct to your custom bridge page to protect your YouTube channel.'}
          </p>
        </div>
      </div>
    </div>
  );
};
