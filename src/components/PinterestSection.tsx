import React from 'react';
import {
  Sparkles,
  AlertTriangle,
  Pin,
  Calendar,
  CheckCircle2,
  Copy,
  ExternalLink,
  Layers,
} from 'lucide-react';
import { PINTEREST_STRATEGY } from '../data/organicKnowledge';
import { LanguageMode } from '../types';

interface PinterestSectionProps {
  lang: LanguageMode;
  onOpenAiWithPrompt?: (promptData: any) => void;
}

export const PinterestSection: React.FC<PinterestSectionProps> = ({
  lang,
  onOpenAiWithPrompt,
}) => {
  return (
    <div className="space-y-12">
      {/* Hero Overview Strip */}
      <section className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-rose-400 uppercase">
              <Pin className="w-4 h-4" />
              <span>
                {lang === 'bn' ? 'পিন্টারেস্ট অর্গানিক ট্রাফিক সিস্টেম' : 'Pinterest Organic Visual Search Engine'}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight text-balance">
              {lang === 'bn'
                ? 'পিন্টারেস্ট পিন দিয়ে সিপিএ ও অ্যাফিলিয়েট ট্রাফিক আনার পূর্ণাঙ্গ গাইডলাইন'
                : 'Turn Pinterest Visual Search Into Nonstop Passive Affiliate Traffic'}
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {lang === 'bn'
                ? 'পিন্টারেস্ট ফেসবুক বা ইনস্টাগ্রামের মতো সাধারণ সোশ্যাল মিডিয়া নয়—এটি একটি ভিজ্যুয়াল সার্চ ইঞ্জিন! এখানে একটি পিন ৪ মাস থেকে ১ বছর পর্যন্ত ক্রমাগত ট্রাফিক দেয়। সঠিক কিওয়ার্ড, হাই-সিটিআর পিন ডিজাইন এবং একটি নিরাপদ ব্রিজ পেজের মাধ্যমে আপনি কোনো বিজ্ঞাপন ছাড়াই প্রতিদিন শত শত টার্গেটেড ইউএসএ ভিজিটর পেতে পারেন।'
                : 'Pinterest is a visual discovery engine where pins compound in search for months. Master high-converting 2:3 vertical pin aesthetics, search-driven board architecture, and compliant bridge pre-landers to capture high-intent USA buyers.'}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5 text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {lang === 'bn' ? '২:৩ রেশিও (১০০০x১৫০০ px)' : '2:3 Vertical Ratio (1000x1500)'}
              </span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="flex items-center gap-1.5 text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {lang === 'bn' ? 'পিন্টারেস্ট এসইও কিওয়ার্ডস' : 'Pinterest Trends Keyword SEO'}
              </span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="flex items-center gap-1.5 text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {lang === 'bn' ? 'সেফ ব্রিজ পেজ লিংক' : 'Anti-Ban Pre-Lander Funnel'}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-lg overflow-hidden border border-neutral-700 shadow-xl bg-neutral-950 aspect-[16/9]">
              <img
                src="/src/assets/images/pinterest_traffic_visual_1793528804881.jpg"
                alt="Modern creator workspace with Pinterest moodboard notebook, iPad displaying pin visual strategy, coffee and clean natural light"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-mono text-rose-400 bg-neutral-900/80 px-2.5 py-1 rounded border border-rose-500/30">
                  {lang === 'bn' ? 'ভিজ্যুয়াল কিওয়ার্ড আর্কিটেকচার' : 'High-CTR Pin Strategy Desk'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Anti-Ban Notice Banner */}
      <section className="p-5 rounded-xl border border-rose-500/40 bg-rose-500/10 space-y-2">
        <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
          <AlertTriangle className="w-5 h-5 shrink-0" />
          <span>{lang === 'bn' ? 'জরুরি সতর্কতা: সরাসরি সিপিএ/অ্যাফিলিয়েট লিংক দিলে একাউন্ট ব্যান হবে!' : 'CRITICAL WARNING: Direct CPA Locker / Affiliate Links Cause Instant Bans'}</span>
        </div>
        <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
          {lang === 'bn'
            ? 'পিন্টারেস্টে সরাসরি CPAgrip, CPALead বা বিটলির (bit.ly) মতো শর্ট লিংক দিলে পিন্টারেস্টের স্প্যাম ফিল্টার ৪৮ থেকে ৭২ ঘণ্টার মধ্যে একাউন্ট ব্লক করে দেয়। সবসময় একটি "ব্রিজ পেজ" (একটি ফ্রি Blogger বা WordPress রিভিউ ব্লগ পোস্ট, Google Site বা Notion পেজ) ব্যবহার করুন। পিন থেকে ট্রাফিক আসবে ব্রিজ পেজে, আর ব্রিজ পেজ থেকে তারা আপনার অফারে যাবে।'
            : 'Pinterest algorithm strictly penalizes direct raw affiliate URLs and CPA content lockers. Always route traffic to a compliant bridge page (e.g. an informational review article, Google Site, or Notion document) where the affiliate link is contextually placed.'}
        </p>
      </section>

      {/* Pin Anatomy & Visual Rules */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
          <div>
            <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">Design &amp; Algorithm</span>
            <h2 className="text-xl font-bold text-white">
              {lang === 'bn' ? 'হাই-সিটিআর পিন তৈরির গোল্ডেন রুলস' : 'Golden Rules for High-CTR Viral Pins'}
            </h2>
          </div>
          <span className="text-xs text-neutral-400 font-mono">1000 x 1500 px</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-neutral-900/40 border border-neutral-800 rounded-lg space-y-3">
            <div className="text-xs font-mono text-amber-400 font-semibold">RULE 01</div>
            <h3 className="text-sm font-bold text-white">
              {lang === 'bn' ? 'বোল্ড টেক্সট ওভারলে (Bold Text Overlay)' : 'High-Contrast Text Overlay'}
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {lang === 'bn'
                ? 'পিন্টারেস্ট ব্যবহারকারীদের ৮৫% মোবাইল ব্যবহার করে। পিনের উপরিভাগে বা মাঝে বড়, সহজে পড়া যায় এমন ফন্ট দিয়ে সমস্যা বা আকর্ষণীয় প্রতিশ্রুতি লিখুন।'
                : 'Mobile feeds shrink images. Ensure your headline is readable on a 3-inch screen using clean sans-serif typography on a solid background band.'}
            </p>
          </div>

          <div className="p-5 bg-neutral-900/40 border border-neutral-800 rounded-lg space-y-3">
            <div className="text-xs font-mono text-amber-400 font-semibold">RULE 02</div>
            <h3 className="text-sm font-bold text-white">
              {lang === 'bn' ? 'প্যাটার্ন ইন্টারাপ্ট হুক (Curiosity Gap)' : 'Curiosity Gap & Pattern Interrupt'}
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {lang === 'bn'
                ? '"আগে এই ভুলটি বন্ধ করুন" অথবা "৭টি গোপন ট্রিকস যা সবাই লুকিয়ে রাখে"—এই ধরনের কথা স্ক্রল থামিয়ে ক্লিক রেট (CTR) দ্বিগুণ করে দেয়।'
                : 'Use negative hooks ("Stop Doing This") or discovery frames ("The 5-Minute Habit That Changed My Morning") to disrupt passive scrolling.'}
            </p>
          </div>

          <div className="p-5 bg-neutral-900/40 border border-neutral-800 rounded-lg space-y-3">
            <div className="text-xs font-mono text-amber-400 font-semibold">RULE 03</div>
            <h3 className="text-sm font-bold text-white">
              {lang === 'bn' ? 'প্রতিদিন ৩-৫টি ফ্রেশ পিন শিডিউল' : 'Daily 3-5 Fresh Pins Workflow'}
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {lang === 'bn'
                ? 'একই ছবি বারবার পিন করবেন না। ক্যানভাতে একই ব্লগের জন্য ৫টি আলাদা কালার/টেক্সট ওভারলে বানিয়ে প্রতিদিন ৩টি করে ফ্রেশ পিন আপলোড করুন।'
                : 'Pinterest favors "Fresh Pins" (new image file + new overlay text). Create 5 visual variations for each blog post and schedule them across 5 days.'}
            </p>
          </div>
        </div>
      </section>

      {/* Pre-Crafted Pin Templates */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
          <div>
            <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">Templates</span>
            <h2 className="text-xl font-bold text-white">
              {lang === 'bn' ? 'প্রমাণিত পিন্টারেস্ট পিন কপি ও ডিজাইন ফর্মুলা' : 'Battle-Tested Pinterest Pin Blueprints'}
            </h2>
          </div>
          <span className="text-xs text-neutral-400 font-mono">3 Core Templates</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PINTEREST_STRATEGY.templates.map((pin, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-neutral-900/50 border border-neutral-800 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                    {pin.category}
                  </span>
                  <span className="text-[11px] text-neutral-400 font-mono">{pin.ctrTrigger}</span>
                </div>

                <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 text-center space-y-1">
                  <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-mono">
                    Canva Text Overlay
                  </span>
                  <p className="text-sm font-extrabold text-amber-300 tracking-tight leading-snug">
                    {pin.overlayText}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider block">
                    {lang === 'bn' ? 'পিন টাইটেল ও এসইও ডেসক্রিপশন:' : 'SEO Pin Title & Description:'}
                  </span>
                  <h4 className="text-xs font-bold text-white">{pin.title}</h4>
                  <p className="text-xs text-neutral-300 leading-relaxed italic">{pin.descriptionPrompt}</p>
                </div>

                <div className="p-2.5 bg-neutral-950 rounded border border-neutral-800/80 text-[11px] text-neutral-400">
                  <span className="font-semibold text-neutral-300 block mb-0.5">🎨 Design Blueprint:</span>
                  {pin.designRule}
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-800">
                <button
                  onClick={() =>
                    onOpenAiWithPrompt?.({
                      channel: 'pinterest',
                      offerName: pin.title,
                      offerType: 'Pinterest Pins Set',
                      niche: 'Pinterest Campaign',
                    })
                  }
                  className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-neutral-900 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{lang === 'bn' ? 'এই ফর্মুলায় ৫টি পিন তৈরি করুন' : 'Generate 5 Pin Kits with AI'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
