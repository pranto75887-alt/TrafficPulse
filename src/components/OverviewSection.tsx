import React from 'react';
import {
  TrendingUp,
  Pin,
  Video,
  FileText,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Layers,
  Zap,
} from 'lucide-react';
import { ChannelType, LanguageMode } from '../types';

interface OverviewSectionProps {
  lang: LanguageMode;
  setActiveTab: (tab: ChannelType) => void;
  onOpenGenerator: () => void;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({
  lang,
  setActiveTab,
  onOpenGenerator,
}) => {
  return (
    <div className="space-y-12">
      {/* Hero Master Welcome Banner */}
      <section className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 sm:p-10">
        <div className="max-w-4xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
            <Zap className="w-4 h-4" />
            <span>
              {lang === 'bn'
                ? 'সিপিএ ও অ্যাফিলিয়েট অর্গানিক ট্রাফিক গাইডলাইন'
                : 'Zero-Ad-Spend Organic Traffic Flywheel'}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            {lang === 'bn'
              ? 'পেইড অ্যাড ছাড়াই অর্গানিক পদ্ধতিতে সিপিএ ও অ্যাফিলিয়েট থেকে নিয়মিত আয়ের কমপ্লিট সিস্টেম'
              : 'The Triple-Threat Organic Marketing Engine for CPA & Affiliate Marketers'}
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            {lang === 'bn'
              ? 'আপনি যদি পেইড বিজ্ঞাপনে টাকা নষ্ট না করে সম্পূর্ণ অর্গানিক উপায়ে আয় করতে চান, তবে Pinterest Pins, Niche TikTok Videos এবং SEO Blogging হলো বিশ্বের শীর্ষ ৩টি ট্রাফিক উৎস। এই ৩টি চ্যানেলকে বিচ্ছিন্নভাবে না চালিয়ে একটি "ফ্লাইহুইল" (Flywheel) হিসেবে ব্যবহার করলেই আপনার সাইট বা অফারে প্রতিদিন ফ্রি কাস্টমার আসতে শুরু করবে।'
              : 'Stop burning money on ad networks. By synchronizing SEO-optimized blogging (the compounding authority base), Pinterest (the evergreen visual search engine), and TikTok (the viral discovery booster) through a compliant bridge funnel, you generate continuous, passive affiliate commissions.'}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => setActiveTab('seo')}
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors shadow-sm"
            >
              <span>{lang === 'bn' ? 'এসইও ব্লগ স্ট্র্যাটেজি দেখুন' : 'Explore SEO Blog Blueprint'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onOpenGenerator}
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-md transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'bn' ? 'এআই ক্যাম্পেন তৈরি করুন' : 'Launch AI Campaign Generator'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* The 3 Organic Pillars Bento Grid */}
      <section className="space-y-6">
        <div className="border-b border-neutral-800 pb-3 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">The Organic Triad</span>
            <h2 className="text-xl font-bold text-white">
              {lang === 'bn' ? '৩টি প্রধান অর্গানিক ট্রাফিক চ্যানেলের কার্যপদ্ধতি' : 'The 3 Pillars of Organic Traffic'}
            </h2>
          </div>
          <span className="text-xs text-neutral-400 font-mono">Pinterest · TikTok · Blog</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: SEO Blog */}
          <div className="group rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 p-6 flex flex-col justify-between transition-all">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                {lang === 'bn' ? '১. এসইও অপটিমাইজড ব্লগিং' : '1. SEO-Optimized Blogging'}
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {lang === 'bn'
                  ? 'গুগলের বায়ার ইনটেন্ট কিওয়ার্ডে র‍্যাঙ্ক করে দীর্ঘমেয়াদী স্থায়ী আয়। একটি ভালো রিভিউ বা "Vs" তুলনা পোস্ট বছরের পর বছর কোনো কাজ না করেও ডলার এনে দেয়।'
                  : 'The compounding authority base. Ranks for high buyer-intent commercial searches ("review", "vs", "best for"). Delivers predictable recurring conversions.'}
              </p>
              <ul className="text-xs text-neutral-400 space-y-1.5 pt-2 border-t border-neutral-800">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>KGR Formula (&lt; 0.25) for Fast Ranks</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>4 Proven Post Scaffolds (Review, Vs, etc.)</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => setActiveTab('seo')}
              className="mt-6 flex items-center justify-between text-xs font-semibold text-amber-400 hover:text-amber-300 pt-3 border-t border-neutral-800"
            >
              <span>{lang === 'bn' ? 'ফুল এসইও গাইড পড়ুন' : 'View Full SEO Strategy'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: Pinterest Pins */}
          <div className="group rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 p-6 flex flex-col justify-between transition-all">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
                <Pin className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-rose-400 transition-colors">
                {lang === 'bn' ? '২. পিন্টারেস্ট পিন্স (Pinterest)' : '2. Pinterest Visual Search'}
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {lang === 'bn'
                  ? 'ভিজ্যুয়াল সার্চ ইঞ্জিন হিসেবে কাজ করে। পিন্টারেস্টের পিনের আয়ুষ্কাল ৪-১২ মাস। ইউএসএ ও ইউরোপের নারীদের ও বায়ারদের আকৃষ্ট করার সেরা মাধ্যম।'
                  : 'A visual search platform where pins last 4-12 months. Over 80% mobile users with high purchasing intent across fitness, home, tech, and productivity.'}
              </p>
              <ul className="text-xs text-neutral-400 space-y-1.5 pt-2 border-t border-neutral-800">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>2:3 Vertical Ratio (1000x1500) Canva Rules</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Anti-Ban Bridge Routing for CPA/Affiliates</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => setActiveTab('pinterest')}
              className="mt-6 flex items-center justify-between text-xs font-semibold text-rose-400 hover:text-rose-300 pt-3 border-t border-neutral-800"
            >
              <span>{lang === 'bn' ? 'পিন্টারেস্ট গাইড দেখুন' : 'View Pinterest Guide'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3: TikTok Videos */}
          <div className="group rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 p-6 flex flex-col justify-between transition-all">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <Video className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">
                {lang === 'bn' ? '৩. নিশ টিকটক ভিডিওস (Faceless)' : '3. Niche TikTok Faceless Video'}
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {lang === 'bn'
                  ? 'তাত্ক্ষণিক ভাইরাল হওয়ার দ্রুততম রাস্তা। মুখ না দেখিয়ে স্টক ফুটেজ, এআই ভয়েস ও ক্যাপকাট দিয়ে তৈরি ১৫-৩০ সেকেন্ডের ভিডিও থেকে বায়ো লিংকে ট্রাফিক ড্রাইভ।'
                  : 'The fastest viral trajectory. Faceless POV b-roll, dynamic kinetic captions, and 3-second psychological hooks funnel viral traffic into your link in bio.'}
              </p>
              <ul className="text-xs text-neutral-400 space-y-1.5 pt-2 border-t border-neutral-800">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>3-Second Hook Retention Architecture</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Bio Link Pre-Lander Compliance</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => setActiveTab('tiktok')}
              className="mt-6 flex items-center justify-between text-xs font-semibold text-sky-400 hover:text-sky-300 pt-3 border-t border-neutral-800"
            >
              <span>{lang === 'bn' ? 'টিকটক স্ট্র্যাটেজি দেখুন' : 'View TikTok Strategy'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* The 30-Day Organic Compounding Blueprint */}
      <section className="space-y-6">
        <div className="border-b border-neutral-800 pb-3 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">Execution Schedule</span>
            <h2 className="text-xl font-bold text-white">
              {lang === 'bn' ? '৩০ দিনের অর্গানিক ওয়ার্কফ্লো ও রুটিন' : 'The 30-Day Daily Compounding Organic Routine'}
            </h2>
          </div>
          <span className="text-xs text-neutral-400 font-mono">Daily Schedule</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-800 space-y-2">
            <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block">
              Day 01 - 03
            </span>
            <h4 className="text-sm font-bold text-white">
              {lang === 'bn' ? 'ফাউন্ডেশন ও ব্রিজ পেজ সেটআপ' : 'Foundation & Bridge Setup'}
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              {lang === 'bn'
                ? 'একটি নির্দিষ্ট নিশ বাছুন। Google Sites বা Blogger-এ ১-পেজের ফ্রি ব্রিজ পেজ বা নোশন গাইড রেডি করুন।'
                : 'Choose a specific narrow niche. Build a 1-page pre-lander on Google Sites / Blogger to insulate your affiliate links.'}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-800 space-y-2">
            <span className="text-[11px] font-mono text-rose-400 uppercase tracking-wider block">
              Daily Habit #1
            </span>
            <h4 className="text-sm font-bold text-white">
              {lang === 'bn' ? 'প্রতিদিন ৩টি পিন্টারেস্ট পিন' : 'Daily 3 Fresh Pinterest Pins'}
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              {lang === 'bn'
                ? 'ক্যানভায় একই কনটেন্টের জন্য ৩টি আলাদা টেক্সট ও কালার টেমপ্লেট দিয়ে শিডিউল করে দিন।'
                : 'Create 3 visual variations (1000x1500) per blog topic. Write keyword-dense pin descriptions.'}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-800 space-y-2">
            <span className="text-[11px] font-mono text-sky-400 uppercase tracking-wider block">
              Daily Habit #2
            </span>
            <h4 className="text-sm font-bold text-white">
              {lang === 'bn' ? 'প্রতিদিন ১-২টি টিকটক ভিডিও' : 'Daily 1-2 Faceless TikToks'}
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              {lang === 'bn'
                ? '১৫ সেকেন্ডের B-Roll + CapCut টেক্সট অ্যানিমেশন + ট্রেন্ডিং অডিও। বায়ো লিংকে কল-টু-অ্যাকশন।'
                : '15-20 sec short videos using hook formulas. Emphasize "link in bio" for the full breakdown.'}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-800 space-y-2">
            <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block">
              Weekly Habit
            </span>
            <h4 className="text-sm font-bold text-white">
              {lang === 'bn' ? 'সপ্তাহে ১টি কেজিআর এসইও পোস্ট' : 'Weekly 1 KGR Blog Post'}
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              {lang === 'bn'
                ? '১টি গভীর রিভিউ বা তুলনা পোস্ট পাবলিশ করুন যা গুগল সার্চে মাসের পর মাস ট্রাফিক জমা করবে।'
                : 'Publish 1 long-tail KGR review or comparison post. This compounds permanent search value.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
