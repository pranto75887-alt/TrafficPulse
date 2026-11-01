import React, { useState } from 'react';
import {
  Mail,
  Send,
  Sparkles,
  Copy,
  Check,
  RefreshCw,
  Clock,
  Layers,
  CheckCircle2,
  AlertCircle,
  Flame,
  ArrowRight,
  ShieldCheck,
  Inbox,
} from 'lucide-react';
import { LanguageMode } from '../types';
import { getApiLanguage } from '../utils/langHelper';

interface EmailSequenceGeneratorProps {
  lang: LanguageMode;
  onSendToCampaign?: (offerName: string, niche: string, offerType: string) => void;
}

const EMAIL_SEQUENCE_PRESETS = [
  {
    offerName: 'Alpilean Metabolism & Weight Loss Formula',
    niche: 'Health & Weight Loss',
    leadMagnet: 'Free 7-Day Ice-Hack Smoothie Recipe Guide',
    tone: 'Conversational, empathetic & personal story',
  },
  {
    offerName: 'Free Remote Job & Paid Survey Locker',
    niche: 'Make Money Online & Side Hustle',
    leadMagnet: '10-Step Daily $50 Side Hustle Checklist',
    tone: 'Direct, encouraging & action-oriented',
  },
  {
    offerName: 'Semrush Complete SEO & Growth Suite',
    niche: 'SaaS Software & Digital Marketing',
    leadMagnet: 'Free 15-Point On-Page SEO Checklist PDF',
    tone: 'Professional authority with case study breakdown',
  },
];

const SEQUENCE_TIMELINE_STEPS = [
  {
    day: 'Day 0',
    title: 'Email 1: Asset Delivery',
    goal: 'Deliver lead magnet, set expectations, whitelisting request',
    badge: 'Open Rate: ~65%',
  },
  {
    day: 'Day 1',
    title: 'Email 2: The Shared Struggle',
    goal: 'Root problem, why 90% fail, build deep empathy',
    badge: 'Open Rate: ~45%',
  },
  {
    day: 'Day 2',
    title: 'Email 3: The Epiphany & Pitch',
    goal: 'The shortcut revelation, introducing the affiliate offer',
    badge: 'Click Rate: Highest',
  },
  {
    day: 'Day 3',
    title: 'Email 4: Proof & Objection Crushing',
    goal: 'Results, case study, overcoming skepticism & guarantee',
    badge: 'Trust Booster',
  },
  {
    day: 'Day 4/5',
    title: 'Email 5: The Final Urgency Call',
    goal: 'Two paths analogy, bonus/discount expiration warning',
    badge: 'Conversion Closer',
  },
];

export const EmailSequenceGenerator: React.FC<EmailSequenceGeneratorProps> = ({
  lang,
  onSendToCampaign,
}) => {
  const [offerName, setOfferName] = useState<string>(
    'Alpilean Metabolism & Weight Loss Formula'
  );
  const [niche, setNiche] = useState<string>('Health & Weight Loss');
  const [leadMagnetName, setLeadMagnetName] = useState<string>(
    'Free 7-Day Healthy Routine & Recipe PDF'
  );
  const [tone, setTone] = useState<string>(
    'Conversational, empathetic & high-trust'
  );

  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!offerName.trim() || !leadMagnetName.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/generate-email-sequence', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          offerName,
          niche,
          leadMagnetName,
          tone,
          language: getApiLanguage(lang),
        }),
      });

      const data = await res.json();
      if (data.success && data.content) {
        setResult(data.content);
      } else {
        setError(data.error || 'Failed to generate email sequence');
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

  const loadPreset = (preset: typeof EMAIL_SEQUENCE_PRESETS[0]) => {
    setOfferName(preset.offerName);
    setNiche(preset.niche);
    setLeadMagnetName(preset.leadMagnet);
    setTone(preset.tone);
  };

  return (
    <div className="space-y-10">
      {/* Header Banner */}
      <section className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 sm:p-8 space-y-4">
        <div className="max-w-4xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
            <Mail className="w-4 h-4" />
            <span>
              {lang === 'bn'
                ? '৫ দিনের অটোরেসপন্ডার ইমেইল সিকোয়েন্স ইঞ্জিন'
                : '5-Day High-Converting Email Autoresponder Sequence'}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {lang === 'bn'
              ? 'ব্রিজ পেজের লিডগুলোকে বায়ারে রূপান্তর করার জন্য ইমেইল সিকোয়েন্স'
              : 'Turn Cold Bridge Page Leads into Repeat Buyers on Autopilot'}
          </h1>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            {lang === 'bn'
              ? 'ব্রিজ পেজে আসা ৯৫% মানুষ প্রথম দিনেই কেনাকাটা করে না। আপনি যদি একটি ফ্রি চেকলিস্ট দিয়ে তাদের ইমেইল সংগ্রহ করেন এবং এই ৫ দিনের সোপ-অপেরা সিকোয়েন্স পাঠিয়ে দেন, তবে আপনার কনভার্সন রেট ২% থেকে বেড়ে ১৫% পর্যন্ত পৌঁছাবে।'
              : '95% of traffic will not buy on the first touchpoint. Capturing their email on your bridge page with a lead magnet and following up with this battle-tested 5-day soap opera email sequence increases lifetime affiliate EPC by up to 500%.'}
          </p>
        </div>

        {/* Feature Signals */}
        <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-neutral-400 border-t border-neutral-800">
          <span className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Tested Soap Opera Sequence Formula
          </span>
          <span aria-hidden="true" className="text-neutral-700">·</span>
          <span className="flex items-center gap-1.5 text-neutral-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            {lang === 'bn' ? 'হাই ওপেন-রেট সাবজেক্ট লাইন' : 'A/B Test Subject Lines'}
          </span>
          <span aria-hidden="true" className="text-neutral-700">·</span>
          <span className="flex items-center gap-1.5 text-neutral-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            {lang === 'bn' ? 'কনভার্টকিট ও মেইলচিম্প রেডি' : 'Ready for ConvertKit, Brevo & System.io'}
          </span>
        </div>
      </section>

      {/* The 5-Day Roadmap Visual */}
      <section className="space-y-3">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
          <span className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
            {lang === 'bn' ? '৫ দিনের সিকোয়েন্সের রোডম্যাপ' : '5-Day Nurture & Conversion Flow'}
          </span>
          <span className="text-[11px] text-neutral-500 font-mono">Day 0 to Day 5</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {SEQUENCE_TIMELINE_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-lg bg-neutral-900/50 border border-neutral-800 space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded">
                  {step.day}
                </span>
                <span className="text-[10px] font-mono text-emerald-400">{step.badge}</span>
              </div>
              <h4 className="text-xs font-bold text-white leading-tight">{step.title}</h4>
              <p className="text-[11px] text-neutral-400 leading-snug">{step.goal}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Clickable Presets */}
      <section className="space-y-3">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
          <div className="flex items-center gap-2 text-xs font-bold text-neutral-300 uppercase tracking-wider">
            <Flame className="w-4 h-4 text-rose-400" />
            <span>{lang === 'bn' ? 'জনপ্রিয় নিশ প্রিসেট' : 'Popular Lead Magnet Presets'}</span>
          </div>
          <span className="text-[11px] text-neutral-400">
            {lang === 'bn' ? 'ক্লিক করে অটোফিল করুন' : 'Click to autofill'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {EMAIL_SEQUENCE_PRESETS.map((preset, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => loadPreset(preset)}
              className="p-3 rounded-lg bg-neutral-900/50 hover:bg-neutral-900 border border-neutral-800 hover:border-amber-400/50 text-left transition-all space-y-1 group"
            >
              <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded">
                {preset.niche}
              </span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                {preset.offerName}
              </h4>
              <p className="text-[11px] text-neutral-400 truncate">
                Gift: {preset.leadMagnet}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* Main Form and Output Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Form */}
        <div className="lg:col-span-5 space-y-4 bg-neutral-900/60 border border-neutral-800 p-6 rounded-xl">
          <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-3">
            <Inbox className="w-4 h-4 text-amber-400" />
            <span>{lang === 'bn' ? 'ইমেইল ফানেল প্যারামিটার' : 'Email Campaign Settings'}</span>
          </h3>

          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">
              {lang === 'bn' ? 'অ্যাফিলিয়েট / সিপিএ অফারের নাম:' : 'Target Offer Name:'}
            </label>
            <input
              type="text"
              value={offerName}
              onChange={(e) => setOfferName(e.target.value)}
              placeholder="e.g. Alpilean, Semrush, Free Gift Card Locker"
              className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-md text-white text-xs focus:border-amber-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">
              {lang === 'bn' ? 'মার্কেটিং নিশ (Niche):' : 'Niche Category:'}
            </label>
            <input
              type="text"
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              placeholder="e.g. Health & Fitness, MMO, Tech SaaS"
              className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-md text-white text-xs"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">
              {lang === 'bn' ? 'ফ্রি লিড ম্যাগনেট / গিফটের নাম:' : 'Free Lead Magnet / Freebie Name:'}
            </label>
            <input
              type="text"
              value={leadMagnetName}
              onChange={(e) => setLeadMagnetName(e.target.value)}
              placeholder="e.g. Free 7-Day Starter Checklist PDF"
              className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-md text-white text-xs focus:border-amber-400 focus:outline-none"
            />
            <span className="text-[10px] text-neutral-400 block mt-1">
              {lang === 'bn' ? 'যা পাওয়ার জন্য ইউজার ব্রিজ পেজে ইমেইল দিয়েছে' : 'The free asset they opted-in to receive'}
            </span>
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">
              {lang === 'bn' ? 'ইমেইলের টোন ও স্টাইল:' : 'Tone of Voice:'}
            </label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-md text-white text-xs"
            >
              <option value="Conversational, empathetic & high-trust">Conversational, Empathetic &amp; Story-Driven</option>
              <option value="Direct response, punchy & high urgency">Direct Response &amp; High Urgency</option>
              <option value="Professional expert & case study driven">Professional Authority &amp; Case Study</option>
            </select>
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading || !offerName.trim() || !leadMagnetName.trim()}
            className="w-full py-3 px-4 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 rounded-md transition-colors flex items-center justify-center gap-2 shadow-lg mt-3"
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>{lang === 'bn' ? '৫টি ইমেইল তৈরি হচ্ছে...' : 'Architecting 5-Day Sequence...'}</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>{lang === 'bn' ? 'সম্পূর্ণ ৫-দিনের ইমেইল সিকোয়েন্স তৈরি করুন' : 'Generate Full 5-Day Email Sequence'}</span>
              </>
            )}
          </button>
        </div>

        {/* Right Output View */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
            <span className="text-xs font-bold text-neutral-300 uppercase tracking-wider font-mono">
              Ready-to-Use 5-Day Autoresponder Copy
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
                    <span>Copy All 5 Emails</span>
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
            <div className="flex-1 min-h-[440px] rounded-xl border border-neutral-800 bg-neutral-950/60 p-8 flex flex-col items-center justify-center text-center space-y-3">
              <RefreshCw className="w-8 h-8 text-amber-400 animate-spin" />
              <p className="text-sm font-semibold text-white">
                {lang === 'bn'
                  ? 'উচ্চ ওপেন-রেট সাবজেক্ট লাইন ও ৫ দিনের ফলো-আপ ড্রাফট তৈরি হচ্ছে...'
                  : 'Synthesizing 5 high-converting emails, curiosity hooks, and affiliate CTAs...'}
              </p>
              <p className="text-xs text-neutral-400 max-w-sm">
                Formatting with personalization tags, delivery links, and deliverability whitelisting cues.
              </p>
            </div>
          ) : result ? (
            <div className="flex-1 min-h-[440px] max-h-[660px] overflow-y-auto rounded-xl border border-neutral-800 bg-neutral-950 p-6 text-xs text-neutral-200 font-mono leading-relaxed whitespace-pre-wrap selection:bg-amber-500/30">
              {result}
            </div>
          ) : (
            <div className="flex-1 min-h-[440px] rounded-xl border border-dashed border-neutral-800 bg-neutral-950/30 p-8 flex flex-col items-center justify-center text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-500 border border-neutral-800">
                <Mail className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-white">
                {lang === 'bn' ? 'কোনো ইমেইল সিকোয়েন্স এখনো তৈরি করা হয়নি' : 'No Email Sequence Generated Yet'}
              </h4>
              <p className="text-xs text-neutral-400 max-w-md">
                {lang === 'bn'
                  ? 'বামপাশের ফর্মে আপনার অফার ও লিড ম্যাগনেটের নাম লিখে "তৈরি করুন" বাটনে চাপুন।'
                  : 'Configure your offer and lead magnet details on the left, then click Generate to craft all 5 follow-up emails.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
