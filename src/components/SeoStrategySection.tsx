import React, { useState } from 'react';
import {
  Search,
  BookOpen,
  LayoutTemplate,
  CheckCircle2,
  Copy,
  Check,
  Target,
  Sparkles,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
} from 'lucide-react';
import {
  SEO_CURATED_TITLES,
  BLOG_STRUCTURE_TEMPLATES,
  ON_PAGE_SEO_CHECKLIST,
} from '../data/organicKnowledge';
import { LanguageMode } from '../types';

interface SeoStrategySectionProps {
  lang: LanguageMode;
  onOpenAiWithPrompt?: (promptData: any) => void;
}

export const SeoStrategySection: React.FC<SeoStrategySectionProps> = ({
  lang,
  onOpenAiWithPrompt,
}) => {
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>('single-review');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const selectedTemplate =
    BLOG_STRUCTURE_TEMPLATES.find((t) => t.id === selectedTemplateId) ||
    BLOG_STRUCTURE_TEMPLATES[0];

  const handleCopyMarkdown = (content: string, id: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="space-y-12">
      {/* Hero Overview Strip with Photorealistic Generated Visual */}
      <section className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
              <TrendingUp className="w-4 h-4" />
              <span>
                {lang === 'bn'
                  ? 'অর্গানিক এসইও অ্যাফিলিয়েট ইঞ্জিন'
                  : 'Organic SEO Affiliate Blueprint'}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight text-balance">
              {lang === 'bn'
                ? 'সিপিএ ও অ্যাফিলিয়েট মার্কেটিংয়ের জন্য পূর্ণাঙ্গ এসইও ব্লগ স্ট্র্যাটেজি'
                : 'SEO-Optimized Content Engine for High-Ticket Affiliate & CPA'}
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {lang === 'bn'
                ? 'অর্গানিক সার্চ ট্রাফিক হলো সবচেয়ে বিশ্বস্ত ও দীর্ঘমেয়াদী আয়ের উৎস। পেইড অ্যাডে টাকা না পুড়িয়ে কীভাবে কম প্রতিযোগিতাপূর্ণ Buyer-Intent কিওয়ার্ডে র‍্যাঙ্ক করবেন, পিলার-ক্লাস্টার তৈরি করবেন এবং ভিজিটরদের বায়ারে রূপান্তর করবেন তার ধাপে ধাপে গাইডলাইন নিচে তুলে ধরা হলো।'
                : 'Organic search traffic delivers the highest converting buyers with compounding longevity. Learn how to identify untapped low-competition keywords, architect topic clusters, structure high-converting review templates, and optimize every on-page element.'}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5 text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {lang === 'bn' ? 'কেজিআর (KGR) টেকনিক' : 'KGR Formula (< 0.25)'}
              </span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="flex items-center gap-1.5 text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {lang === 'bn' ? '৪টি হাই-কনভার্টিং স্ট্রাকচার' : '4 Battle-Tested Post Formats'}
              </span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="flex items-center gap-1.5 text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {lang === 'bn' ? 'গুগল ফ্রেন্ডলি কমপ্লায়েন্স' : 'FTC & Google Safe Linking'}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-lg overflow-hidden border border-neutral-700 shadow-xl bg-neutral-950 aspect-[16/9]">
              <img
                src="/src/assets/images/seo_organic_growth_1793528805070.jpg"
                alt="Clean workspace showing steady organic search traffic growth curve and keyword research notepad"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-mono text-emerald-400 bg-neutral-900/80 px-2.5 py-1 rounded border border-emerald-500/30">
                  {lang === 'bn' ? 'কম্পাউন্ডিং অর্গানিক ট্রাফিক গ্রোথ' : 'Compounding Organic Search Curve'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 1: Keyword Research System */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
          <div>
            <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">01. Strategy</span>
            <h2 className="text-xl font-bold text-white">
              {lang === 'bn'
                ? '১. কিওয়ার্ড রিসার্চ ও বায়ার ইনটেন্ট নির্বাচন কৌশল'
                : '1. Low-Competition Keyword Research & Search Intent Mastery'}
            </h2>
          </div>
          <span className="text-xs text-neutral-400 font-mono">KGR / PAA / Intent</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-5 space-y-3">
            <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-mono text-sm">
              01
            </div>
            <h3 className="text-base font-semibold text-white">
              {lang === 'bn' ? 'কেজিআর মেথড (Keyword Golden Ratio)' : 'The KGR Formula (< 0.25)'}
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {lang === 'bn'
                ? 'সূত্র: Google-এ "allintitle:your keyword" দিয়ে সার্চ করুন। ফলাফলের সংখ্যাকে মাসিক সার্চ ভলিউম (Under 250) দিয়ে ভাগ করুন। মান ০.২৫-এর কম হলে নতুন সাইট দিয়েও ২৪-৪৮ ঘণ্টার মধ্যে সেরা ৫০ বা শীর্ষ ১০-এ র‍্যাঙ্ক করা সম্ভব।'
                : 'Formula: Allintitle Google Results ÷ Monthly Search Volume (< 250). If the ratio is below 0.25, brand-new websites can rank in the top 50 or top 10 within days without backlinks.'}
            </p>
            <div className="p-2.5 bg-neutral-950 rounded border border-neutral-800 text-[11px] font-mono text-amber-300">
              allintitle:&quot;best [product] for [problem]&quot;
            </div>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-5 space-y-3">
            <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-mono text-sm">
              02
            </div>
            <h3 className="text-base font-semibold text-white">
              {lang === 'bn' ? '৪ ধরনের সার্চ ইনটেন্ট ও মনোটাইজেশন' : '4 Search Intent Categories'}
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {lang === 'bn'
                ? '১. Informational ("how to", "what is") - ট্রাফিক আনে, লিড ম্যাগনেটে কাজে লাগে। ২. Commercial ("best", "review", "vs") - সর্বোচ্চ অ্যাফিলিয়েট কনভার্সন। ৩. Transactional ("discount", "coupon") - সরাসরি কেনার মুহূর্ত।'
                : '1. Informational: High volume, best for capturing emails & CPA checklists. 2. Commercial Investigation: ("review", "vs", "alternatives") - where 80% of affiliate revenue is generated. 3. Transactional: ("buy", "promo code").'}
            </p>
            <div className="p-2.5 bg-neutral-950 rounded border border-neutral-800 text-[11px] font-mono text-emerald-300">
              Commercial: &quot;[Brand] vs [Competitor] 2026&quot;
            </div>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-5 space-y-3">
            <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-mono text-sm">
              03
            </div>
            <h3 className="text-base font-semibold text-white">
              {lang === 'bn' ? 'ফ্রি রিসার্চ সোর্স (Zero Budget)' : 'Free Data Mining Sources'}
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {lang === 'bn'
                ? 'দামী টুলের দরকার নেই। Google Autocomplete-এ ওয়াইল্ডকার্ড (*) ব্যবহার করুন: "best * for [niche]". এছাড়া Google People Also Ask (PAA), Reddit সাবরেডিট এবং Quora-র বাস্তব ফ্রাস্ট্রেশন থেকে লং-টেইল কিওয়ার্ড বের করুন।'
                : 'Use Google Autocomplete with wildcard: "best * for [niche]". Extract goldmine user pain points from Reddit (r/affiliatemarketing, niche subreddits) and Quora discussions where commercial intent is evident.'}
            </p>
            <div className="p-2.5 bg-neutral-950 rounded border border-neutral-800 text-[11px] font-mono text-sky-300">
              Google PAA &amp; Reddit discussions
            </div>
          </div>
        </div>
      </section>

      {/* Part 2: Content Pillars & Topic Clusters */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
          <div>
            <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">02. Architecture</span>
            <h2 className="text-xl font-bold text-white">
              {lang === 'bn'
                ? '২. কনটেন্ট পিলার ও টপিক ক্লাস্টার আর্কিটেকচার'
                : '2. Content Pillars & Topic Cluster Authority Blueprint'}
            </h2>
          </div>
          <span className="text-xs text-neutral-400 font-mono">Hub &amp; Spoke</span>
        </div>

        <div className="bg-neutral-900/40 border border-neutral-800 rounded-xl p-6 space-y-6">
          <p className="text-sm text-neutral-300 leading-relaxed">
            {lang === 'bn'
              ? 'গুগল এখন সিঙ্গেল ব্লগকে র‍্যাঙ্ক করে না; গুগল "টপিক্যাল অথরিটি" (Topical Authority) খোঁজে। আপনার নিশ নিয়ে একটি প্রধান পিলার পেজ (Hub) এবং তার সাথে সম্পর্কিত ৩-৫টি ক্লাস্টার পেজ (Spokes) তৈরি করতে হবে, যা একে অপরের সাথে ইন্টারনাল লিংক দিয়ে যুক্ত থাকবে।'
              : 'Google prioritizes topical depth over isolated articles. By building 1 comprehensive Pillar Post (Hub) surrounded by 4 targeted Cluster Posts (Spokes) interlinked with descriptive anchor text, you funnel SEO ranking signals directly into your high-converting money pages.'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-neutral-950 border border-amber-500/40 space-y-2">
              <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block">
                {lang === 'bn' ? 'কোর পিলার পোস্ট (The Hub)' : 'Core Pillar Post (The Hub)'}
              </span>
              <h4 className="text-sm font-bold text-white">
                {lang === 'bn'
                  ? 'আলটিমেট বিগিনার্স গাইড (৩,০০০+ শব্দ)'
                  : 'The Ultimate Guide to [Niche] (3,000+ words)'}
              </h4>
              <p className="text-xs text-neutral-400">
                {lang === 'bn'
                  ? 'নিশের সমস্ত প্রাথমিক বিষয় কভার করে এবং প্রতিটি ক্লাস্টার আর্টিকেলে লিঙ্ক দেয়।'
                  : 'Broad, authoritative overview linking down into each specific sub-problem cluster.'}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800 space-y-2">
              <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block">
                Cluster Spoke #1
              </span>
              <h4 className="text-sm font-bold text-white">
                {lang === 'bn'
                  ? 'সিঙ্গেল প্রোডাক্ট রিভিউ (Money Page)'
                  : 'In-Depth Product Review (Money Page)'}
              </h4>
              <p className="text-xs text-neutral-400">
                {lang === 'bn'
                  ? 'নির্দিষ্ট প্রধান অ্যাফিলিয়েট অফারের সৎ রিভিউ ও ডিসকাউন্ট লিঙ্ক।'
                  : 'Targets "[Brand] Review 2026" with quick verdict box and discount links.'}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800 space-y-2">
              <span className="text-[11px] font-mono text-sky-400 uppercase tracking-wider block">
                Cluster Spoke #2
              </span>
              <h4 className="text-sm font-bold text-white">
                {lang === 'bn'
                  ? 'বনাম তুলনা (Vs Comparison Battle)'
                  : 'Head-to-Head Comparison Battle'}
              </h4>
              <p className="text-xs text-neutral-400">
                {lang === 'bn'
                  ? 'মার্কেটের ২টি সেরা টুলের পাশাপাশি তুলনা, যেকোনো একটি কিনলেই কমিশন।'
                  : 'Targets "[Product A] vs [Product B]". Converts undecided buyers.'}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800 space-y-2">
              <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider block">
                Cluster Spoke #3 &amp; #4
              </span>
              <h4 className="text-sm font-bold text-white">
                {lang === 'bn'
                  ? 'সমস্যা সমাধানের টিউটোরিয়াল + রাউন্ডআপ'
                  : 'Problem-Solving How-To + Top 7 List'}
              </h4>
              <p className="text-xs text-neutral-400">
                {lang === 'bn'
                  ? 'কাজের শর্টকাট হিসেবে অফারকে রেফার করে এবং টপ ৭ লিস্ট দিয়ে বায়ারদের চয়েস দেয়।'
                  : 'Targets "How to fix [issue]" & "Best 7 tools for [target audience]".'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Part 3: Blog Post Structures with Live Markdown Copy */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
          <div>
            <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">03. Templates</span>
            <h2 className="text-xl font-bold text-white">
              {lang === 'bn'
                ? '৩. চারটি প্রমাণিত ব্লগ পোস্ট স্ট্রাকচার ও রেডি টেমপ্লেট'
                : '3. Four Proven Blog Post Structures & Plug-and-Play Templates'}
            </h2>
          </div>
          <span className="text-xs text-neutral-400 font-mono">Ready to Copy</span>
        </div>

        {/* Structure Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-neutral-800 pb-2">
          {BLOG_STRUCTURE_TEMPLATES.map((tmpl) => (
            <button
              key={tmpl.id}
              onClick={() => setSelectedTemplateId(tmpl.id)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                selectedTemplateId === tmpl.id
                  ? 'bg-amber-400 text-neutral-950 shadow'
                  : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {tmpl.name}
            </button>
          ))}
        </div>

        {/* Template Detail Card */}
        <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">{selectedTemplate.name}</h3>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  {selectedTemplate.badge}
                </span>
              </div>
              <p className="text-xs text-neutral-300 mt-1">{selectedTemplate.description}</p>
            </div>

            <button
              onClick={() => handleCopyMarkdown(selectedTemplate.markdownTemplate, selectedTemplate.id)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-200 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-md transition-colors shrink-0 self-start sm:self-auto"
            >
              {copiedId === selectedTemplate.id ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">কপি হয়েছে! / Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{lang === 'bn' ? 'মার্কডাউন টেমপ্লেট কপি করুন' : 'Copy Markdown Template'}</span>
                </>
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Section-by-Section Anatomy */}
            <div className="lg:col-span-5 space-y-3">
              <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                {lang === 'bn' ? 'পোস্ট অ্যানাটমি ও কনভার্সন ফোকাস' : 'Post Anatomy & Section Blueprint'}
              </h4>
              <div className="space-y-3">
                {selectedTemplate.sections.map((sec, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-neutral-950 border border-neutral-800 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-amber-400">0{idx + 1}.</span>
                      <span className="text-xs font-semibold text-white">{sec.heading}</span>
                    </div>
                    <p className="text-[11px] text-neutral-300 leading-relaxed">{sec.description}</p>
                    <div className="text-[10px] font-mono text-neutral-400 pt-1">
                      💡 Tip: {sec.tips}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Live Markdown Template Preview */}
            <div className="lg:col-span-7 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider font-mono">
                  Markdown Scaffold Preview
                </span>
                <span className="text-[11px] text-neutral-400">
                  {lang === 'bn' ? 'ওয়ার্ডপ্রেস বা মিডিয়ামে পেস্ট করুন' : 'Ready to paste in WP / Ghost / Notion'}
                </span>
              </div>
              <pre className="p-4 bg-neutral-950 rounded-lg border border-neutral-800 text-xs font-mono text-neutral-300 overflow-x-auto max-h-[380px] leading-relaxed whitespace-pre-wrap">
                {selectedTemplate.markdownTemplate}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Part 4: 3 Curated Blog Post Title Ideas with Target Keywords */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
          <div>
            <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">04. Titles &amp; Angles</span>
            <h2 className="text-xl font-bold text-white">
              {lang === 'bn'
                ? '৪. তিনটি প্রস্তুত ব্লগ পোস্ট টাইটেল ও টার্গেট কিওয়ার্ড আইডিয়া'
                : '4. Three High-Converting Blog Post Title Ideas & Target Keywords'}
            </h2>
          </div>
          <span className="text-xs text-neutral-400 font-mono">Target Keywords</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SEO_CURATED_TITLES.map((item, idx) => (
            <div
              key={item.id}
              className="bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 rounded-xl p-5 flex flex-col justify-between space-y-4 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    Idea #0{idx + 1} · {item.format}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400">
                    {item.searchIntent}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white leading-snug">
                  {lang === 'bn' && item.bnTitle ? item.bnTitle : item.title}
                </h3>

                {lang === 'bn' && (
                  <p className="text-xs text-neutral-400 italic">
                    EN: &quot;{item.title}&quot;
                  </p>
                )}

                <div className="space-y-1.5 pt-2 border-t border-neutral-800 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">{lang === 'bn' ? 'টার্গেট কিওয়ার্ড:' : 'Target Keyword:'}</span>
                    <span className="font-mono text-amber-300 font-medium">{item.targetKeyword}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">{lang === 'bn' ? 'কম্পিটিশন:' : 'Competition:'}</span>
                    <span className="font-mono text-emerald-400">{item.competitionLevel}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">{lang === 'bn' ? 'সার্চ ভলিউম:' : 'Est. Volume:'}</span>
                    <span className="font-mono text-neutral-300">{item.searchVolumeEstimate}</span>
                  </div>
                </div>

                <div className="space-y-1 pt-2">
                  <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider block">
                    {lang === 'bn' ? 'কনটেন্ট আউটলাইন:' : 'Content Outline:'}
                  </span>
                  <ul className="space-y-1 text-xs text-neutral-300">
                    {item.outline.slice(0, 4).map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-1.5">
                        <span className="text-neutral-500 font-mono text-[10px]">›</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                    {item.outline.length > 4 && (
                      <li className="text-[11px] text-neutral-500 italic pl-3">
                        + {item.outline.length - 4} {lang === 'bn' ? 'টি আরও ধাপ...' : 'more outline sections...'}
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-800">
                <button
                  onClick={() =>
                    onOpenAiWithPrompt?.({
                      channel: 'seo',
                      offerName: item.targetKeyword,
                      offerType: item.format,
                      niche: 'Selected SEO Blueprint',
                    })
                  }
                  className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-neutral-900 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>
                    {lang === 'bn'
                      ? 'এই টাইটেলে সম্পূর্ণ আর্টিকেল ড্রাফট বানান'
                      : 'Generate Full Article with AI'}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Part 5: On-Page SEO Best Practices Checklist */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
          <div>
            <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">05. Checklist</span>
            <h2 className="text-xl font-bold text-white">
              {lang === 'bn'
                ? '৫. অন-পেজ এসইও ও কনভার্সন অপটিমাইজেশন চেকলিস্ট'
                : '5. On-Page SEO & Affiliate Conversion Best Practices'}
            </h2>
          </div>
          <span className="text-xs text-neutral-400 font-mono">8 Crucial Rules</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ON_PAGE_SEO_CHECKLIST.map((rule, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg bg-neutral-900/40 border border-neutral-800 flex items-start gap-3.5"
            >
              <div className="w-6 h-6 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-white">{rule.item}</span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                      rule.importance === 'Critical' || rule.importance === 'Mandatory'
                        ? 'text-rose-400 bg-rose-500/10 border border-rose-500/20'
                        : 'text-amber-400 bg-amber-500/10 border border-amber-500/20'
                    }`}
                  >
                    {rule.importance}
                  </span>
                </div>
                <p className="text-neutral-300 leading-relaxed">{rule.detail}</p>
                <span className="text-[10px] text-neutral-400 font-mono block pt-0.5">
                  Category: {rule.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
