import React, { useState } from 'react';
import {
  ShieldAlert,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Clock,
  Award,
  Check,
} from 'lucide-react';
import { LanguageMode } from '../types';
import { AdBanner } from './AdBanner';

interface BridgePageSectionProps {
  lang: LanguageMode;
  onOpenAiWithPrompt?: (promptData: any) => void;
}

export const BridgePageSection: React.FC<BridgePageSectionProps> = ({
  lang,
  onOpenAiWithPrompt,
}) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const DEFAULT_SMARTLINK =
    'https://www.profitableratecpmnetwork.com/v3x4017tb?key=a2578c78d8015217e5986c0f9014445e';

  const [smartlinkUrl, setSmartlinkUrl] = useState<string>(() => {
    try {
      return localStorage.getItem('trafficpulse_smartlink') || DEFAULT_SMARTLINK;
    } catch {
      return DEFAULT_SMARTLINK;
    }
  });
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const handleSaveSmartlink = (newUrl: string) => {
    setSmartlinkUrl(newUrl);
    try {
      localStorage.setItem('trafficpulse_smartlink', newUrl);
    } catch (e) {
      console.error(e);
    }
  };

  const handleCopySmartlink = () => {
    navigator.clipboard.writeText(smartlinkUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="space-y-12">
      {/* Hero Overview */}
      <section className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-400 uppercase">
          <ShieldCheck className="w-4 h-4" />
          <span>
            {lang === 'bn' ? 'অ্যাকাউন্ট প্রটেকশন ও কনভার্সন ফানেল' : 'Anti-Ban Pre-Lander Architecture'}
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {lang === 'bn'
            ? 'ব্রিজ পেজ (Bridge Page) কী এবং কেন এটি ছাড়া সিপিএ মার্কেটিং অসম্ভব?'
            : 'The 1-Page Bridge Funnel: Why Direct Linking Guarantees Account Bans'}
        </h1>
        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-4xl">
          {lang === 'bn'
            ? 'CPAgrip, CPALead, MaxBounty বা CPM Smartlink-এর ডিরেক্ট লিংক পিন্টারেস্ট, টিকটক বা গুগলে পোস্ট করলে অ্যাকাউন্ট নিমিষেই ব্যান হয়ে যায়। একটি সাধারণ ১-পেজের "ব্রিজ পেজ" বা কুইজ প্রি-ল্যান্ডার আপনার অ্যাকাউন্ট সুরক্ষিত রাখে এবং কোল্ড ভিজিটরদের গরম করে কনভার্সন রেট ৩ গুণ পর্যন্ত বাড়িয়ে দেয়।'
            : 'Organic algorithms strictly flag raw redirect URLs and CPA locker scripts. A high-converting 1-page bridge page (pre-lander) warms up cold visual traffic, filters tire-kickers, and ensures 100% platform policy compliance.'}
        </p>
      </section>

      {/* Active Smartlink Configuration Panel */}
      <section className="p-5 rounded-xl bg-neutral-900/70 border border-emerald-500/30 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
            <h3 className="text-sm font-bold text-white">
              {lang === 'bn' ? 'অ্যাক্টিভ সিপিএম / সিপিএ স্মার্টলিংক (Active Smartlink)' : 'Active CPM / CPA Smartlink'}
            </h3>
          </div>
          <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            Live Monitization Target
          </span>
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-medium text-neutral-300">
            {lang === 'bn' ? 'ব্রিজ পেজের ডেস্টিনেশন স্মার্টলিংক ইউআরএল:' : 'Destination Smartlink URL:'}
          </label>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={smartlinkUrl}
              onChange={(e) => handleSaveSmartlink(e.target.value)}
              className="flex-1 px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-md text-white text-xs font-mono focus:border-amber-400 focus:outline-none"
            />
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopySmartlink}
                className="px-3 py-2 text-xs font-medium text-neutral-200 bg-neutral-800 hover:bg-neutral-700 rounded-md border border-neutral-700 transition-colors whitespace-nowrap"
              >
                {copiedLink ? 'Copied!' : 'Copy Link'}
              </button>
              <a
                href={smartlinkUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="px-4 py-2 text-xs font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors whitespace-nowrap flex items-center gap-1.5"
              >
                <span>{lang === 'bn' ? 'টেস্ট করুন' : 'Test Live'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
          <p className="text-[11px] text-neutral-400 leading-relaxed">
            {lang === 'bn'
              ? '💡 ভিজিটররা যখন নিচের ব্রিজ পেজের কুইজ পূরণ করে "অফারটি আনলক করুন" বাটনে ক্লিক করবে, তারা স্বয়ংক্রিয়ভাবে আপনার এই স্মার্টলিংকে রিডাইরেক্ট হবে।'
              : '💡 Visitors completing the bridge page quiz below will be seamlessly routed through to this smartlink upon clicking unlock.'}
          </p>
        </div>
      </section>

      {/* Direct Linking vs Bridge Funnel Comparison */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* The Fatal Mistake */}
        <div className="p-6 rounded-xl bg-rose-500/5 border border-rose-500/30 space-y-4">
          <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
            <ShieldAlert className="w-5 h-5 shrink-0" />
            <span>{lang === 'bn' ? '❌ ভুল পদ্ধতি: সরাসরি লিংক (Direct Linking)' : '❌ Fatal Mistake: Direct Affiliate Linking'}</span>
          </div>
          <div className="space-y-2 text-xs text-neutral-300">
            <p className="p-2.5 bg-neutral-950/80 rounded border border-rose-500/20 font-mono text-[11px] text-rose-300">
              TikTok / Pinterest Pin ➔ Raw CPA Offer / Locker Link ➔ ❌ BANNED!
            </p>
            <ul className="space-y-1.5 list-disc pl-4 text-neutral-400">
              <li>{lang === 'bn' ? 'সোশ্যাল মিডিয়ার বট স্প্যাম লিংক সাথে সাথে শনাক্ত করে' : 'Platform security crawlers flag raw locker domains as malware/spam.'}</li>
              <li>{lang === 'bn' ? 'ভিজিটররা হঠাৎ অফার দেখে ভয় পেয়ে ব্যাক বাটন চেপে চলে যায়' : 'Cold viewers bounce instantly without proper context.'}</li>
              <li>{lang === 'bn' ? 'কোনো ইমেইল বা রিটার্গেটিং ডাটা সংগ্রহ করা যায় না' : 'Zero audience asset building or email capture.'}</li>
            </ul>
          </div>
        </div>

        {/* The Professional Flow */}
        <div className="p-6 rounded-xl bg-emerald-500/5 border border-emerald-500/30 space-y-4">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <ShieldCheck className="w-5 h-5 shrink-0" />
            <span>{lang === 'bn' ? '✅ প্রফেশনাল পদ্ধতি: নিরাপদ ১-পেজ ব্রিজ ফানেল' : '✅ Compliant Flow: 1-Page Pre-Lander Funnel'}</span>
          </div>
          <div className="space-y-2 text-xs text-neutral-300">
            <p className="p-2.5 bg-neutral-950/80 rounded border border-emerald-500/20 font-mono text-[11px] text-emerald-300">
              Social Pin / Video ➔ Clean Bridge Page / Quiz ➔ Official Offer ➔ 💰 PROFIT!
            </p>
            <ul className="space-y-1.5 list-disc pl-4 text-neutral-400">
              <li>{lang === 'bn' ? 'পিন্টারেস্ট ও টিকটক এটিকে ভ্যালুয়েবল কনটেন্ট পেজ মনে করে' : '100% compliant with Pinterest, TikTok, and Meta link policies.'}</li>
              <li>{lang === 'bn' ? 'কুইজ বা বুলেট পয়েন্ট দিয়ে ভিজিটরকে মানসিকভাবে প্রস্তুত করা হয়' : 'Pre-frames the offer with honest pros, cons, and urgency.'}</li>
              <li>{lang === 'bn' ? 'ফ্রি ব্লগার (Blogger), গুগল সাইটস বা নোশনে একদম বিনামূল্যে বানানো যায়' : 'Can be hosted 100% free on Google Sites, Blogger, or Notion.'}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Interactive Bridge Page Pre-Lander Simulator */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
          <div>
            <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">Interactive Simulator</span>
            <h2 className="text-xl font-bold text-white">
              {lang === 'bn' ? 'হাই-কনভার্টিং ব্রিজ পেজের লাইভ ডেমো ও ওয়্যারফ্রেম' : 'Live High-Converting Bridge Page Wireframe Preview'}
            </h2>
          </div>
          <span className="text-xs text-neutral-400 font-mono">Mobile Responsive</span>
        </div>

        <div className="max-w-xl mx-auto rounded-xl border border-neutral-700 bg-neutral-900 p-6 sm:p-8 shadow-2xl space-y-6">
          {/* Header badges */}
          <div className="flex items-center justify-between text-xs text-neutral-400 border-b border-neutral-800 pb-3">
            <span className="flex items-center gap-1 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Safe Pre-Lander
            </span>
            <span className="flex items-center gap-1 text-amber-400 font-mono">
              <Clock className="w-3.5 h-3.5" />
              Limited Special Offer
            </span>
          </div>

          {/* Headline */}
          <div className="text-center space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400">
              Special Community Survey 2026
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-white leading-snug">
              Answer 2 Quick Questions to Unlock Your Exclusive [Niche Bonus / Discount]
            </h3>
            <p className="text-xs text-neutral-300">
              Takes less than 15 seconds. No credit card required.
            </p>
          </div>

          {/* Quiz Question Box */}
          <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white">
                Step 1 of 2: What is your primary goal right now?
              </span>
              <span className="text-[10px] font-mono text-neutral-400">Question 01</span>
            </div>

            <div className="space-y-2">
              {[
                'A) Generate reliable online income without paid ads',
                'B) Scale my existing affiliate offers with Pinterest',
                'C) Learn faceless short-form video creation',
              ].map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedAnswer(opt)}
                  className={`w-full text-left p-3 rounded-md text-xs font-medium transition-colors border ${
                    selectedAnswer === opt
                      ? 'bg-amber-500/10 border-amber-400 text-amber-300'
                      : 'bg-neutral-900 hover:bg-neutral-800 border-neutral-800 text-neutral-200'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="space-y-3 text-center">
            <a
              href={smartlinkUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="w-full py-3.5 px-4 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors shadow-lg flex items-center justify-center gap-2 group block"
            >
              <span>{lang === 'bn' ? 'অফারটি আনলক করে প্রবেশ করুন (Open Smartlink)' : 'Unlock Exclusive Offer & Access Smartlink'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <p className="text-[10px] text-neutral-400">
              🔒 100% Privacy Protected · Direct Redirect to Verified Network Offer
            </p>
          </div>
        </div>

        {/* Live CPM Ad Unit & Smartlink Sponsor Banner */}
        <AdBanner lang={lang} variant="in-feed" />

        <div className="text-center pt-2">
          <button
            onClick={() =>
              onOpenAiWithPrompt?.({
                channel: 'bridge',
                offerName: 'High Converting Bridge Page Copy',
                offerType: 'Bridge Pre-Lander Funnel',
                niche: 'Anti-Ban Pre-Lander',
              })
            }
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            <span>
              {lang === 'bn'
                ? 'আপনার অফারের জন্য সম্পূর্ণ ব্রিজ পেজ কপি তৈরি করুন (AI)'
                : 'Generate Custom Bridge Page Copy with AI'}
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};
