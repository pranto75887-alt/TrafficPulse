import React from 'react';
import {
  Video,
  Sparkles,
  AlertTriangle,
  Play,
  Volume2,
  Clock,
  CheckCircle2,
  Share2,
} from 'lucide-react';
import { TIKTOK_STRATEGY } from '../data/organicKnowledge';
import { LanguageMode } from '../types';

interface TikTokSectionProps {
  lang: LanguageMode;
  onOpenAiWithPrompt?: (promptData: any) => void;
}

export const TikTokSection: React.FC<TikTokSectionProps> = ({
  lang,
  onOpenAiWithPrompt,
}) => {
  return (
    <div className="space-y-12">
      {/* Hero Overview Strip */}
      <section className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-sky-400 uppercase">
              <Video className="w-4 h-4" />
              <span>
                {lang === 'bn' ? 'টিকটক ভাইরাল অর্গানিক সিস্টেম' : 'Niche TikTok Organic Growth Engine'}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight text-balance">
              {lang === 'bn'
                ? 'চেহারা না দেখিয়ে (Faceless) টিকটক ভিডিও দিয়ে ফ্রি অ্যাফিলিয়েট ট্রাফিক'
                : 'Faceless TikTok Organic Video Frameworks for Massive Reach'}
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {lang === 'bn'
                ? 'টিকটকের অ্যালগরিদম প্রতিটি নতুন ভিডিও ২৫০-৫০০ জন মানুষের সামনে টেস্ট করে। যদি প্রথম ৩ সেকেন্ডে মানুষ স্ক্রল না করে এবং রিটেনশন ৬০% এর বেশি থাকে, ভিডিওটি সাথে সাথে ভাইরাল হয়ে যায়। নিজের মুখ দেখানোর কোনো প্রয়োজন নেই—স্টক ভিডিও, টেক্সট অ্যানিমেশন ও এআই ভয়েস দিয়ে কীভাবে লক্ষ লক্ষ ভিউ পাবেন তার ফর্মুলা নিচে দেওয়া হলো।'
                : 'TikTok’s distribution is pure meritocracy. If your 3-second hook halts the scroll and viewer retention tops 65%, the algorithm distributes your video to tens of thousands of targeted viewers without needing a face on camera.'}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5 text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {lang === 'bn' ? '৩ সেকেন্ডের হুক ফর্মুলা' : '3-Second Scroll Stopping Hook'}
              </span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="flex items-center gap-1.5 text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {lang === 'bn' ? 'ফেসলেস বি-রোল ও ক্যাপকাট' : 'Faceless B-Roll + CapCut Captions'}
              </span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="flex items-center gap-1.5 text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {lang === 'bn' ? 'বায়ো লিংক সেফ ফানেল' : 'Bio Link Compliance (Anti-Shadowban)'}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-lg overflow-hidden border border-neutral-700 shadow-xl bg-neutral-950 aspect-[16/9]">
              <img
                src="/src/assets/images/tiktok_creator_workspace_1793528806302.jpg"
                alt="Creator workspace with vertical smartphone on tripod, ring light, storyboard notebook with hook cards"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-mono text-sky-400 bg-neutral-900/80 px-2.5 py-1 rounded border border-sky-500/30">
                  {lang === 'bn' ? 'ভাইরাল ভিডিও স্টোরিবোর্ড ও স্ক্রিপ্ট' : 'Vertical Video Storyboard Desk'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Bio Link Notice Banner */}
      <section className="p-5 rounded-xl border border-amber-500/40 bg-amber-500/10 space-y-2">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
          <AlertTriangle className="w-5 h-5 shrink-0" />
          <span>{lang === 'bn' ? 'টিকটক শ্যাডোব্যান (Shadowban) সতর্কতা' : 'TikTok Commercial Shadowban Warning'}</span>
        </div>
        <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
          {lang === 'bn'
            ? 'টিকটকের বায়োতে সরাসরি সিপিএ লকার বা এফিলিয়েট লিংক বসালে টিকটক সেটিকে "বাণিজ্যিক স্প্যাম" হিসেবে চিহ্নিত করে ভিউ ০ করে দেয় (Shadowban)। এর বদলে Beacons.ai, Stan Store, Linktree অথবা আপনার নিজস্ব ১-পেজের ব্রিজের লিংক দিন। ভিডিওর শেষে সবসময় বলুন: "চেক দ্য লিংক ইন বায়ো ফর দ্য ফ্রি গাইড"।'
            : 'Never put naked CPA locker or direct affiliate referral links into your TikTok bio URL field. Use an intermediary bridge (Beacons.ai, Linktree, or an SEO blog post pre-lander) to keep account trust high and prevent automated shadowbans.'}
        </p>
      </section>

      {/* 3 Step Faceless Engine */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
          <div>
            <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">Workflow</span>
            <h2 className="text-xl font-bold text-white">
              {lang === 'bn' ? 'চেহারা ছাড়া ভিডিও বানানোর ৩টি সহজ ধাপ' : 'The 3-Step Faceless Video Production Pipeline'}
            </h2>
          </div>
          <span className="text-xs text-neutral-400 font-mono">100% Free Tools</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-neutral-900/40 border border-neutral-800 rounded-lg space-y-3">
            <div className="text-xs font-mono text-sky-400 font-semibold">STEP 01</div>
            <h3 className="text-sm font-bold text-white">
              {lang === 'bn' ? 'হাই-কোয়ালিটি বি-রোল (B-Roll)' : 'Aesthetic B-Roll Footage'}
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {lang === 'bn'
                ? 'Pexels, Pixabay বা CapCut লাইব্রেরি থেকে সুন্দর কফি শপ, ল্যাপটপ টাইপিং, গাড়ির ড্রাইভ বা সন্তোষজনক ভিডিও ক্লিপ ডাউনলোড করুন (৯:১৬ রেশিও)।'
                : 'Source aesthetic POV clips from Pexels/Pixabay (minimalist desks, typing, satisfying kinetic motions). Vertical 9:16 ratio.'}
            </p>
          </div>

          <div className="p-5 bg-neutral-900/40 border border-neutral-800 rounded-lg space-y-3">
            <div className="text-xs font-mono text-sky-400 font-semibold">STEP 02</div>
            <h3 className="text-sm font-bold text-white">
              {lang === 'bn' ? 'ক্যাপকাটে অটো-ক্যাপশন ও কালার হাইলাইট' : 'Dynamic Kinetic Captions'}
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {lang === 'bn'
                ? 'CapCut-এ ভিডিও নিয়ে Auto Captions দিন। গুরুত্বপূর্ণ শব্দগুলোকে হলুদ বা সবুজ রঙে হাইলাইট করুন। স্ক্রিনে সবসময় কোনো না কোনো গতিশীল টেক্সট থাকতে হবে।'
                : 'Generate animated auto-captions with 1-2 words per frame. Highlight keywords in neon yellow/green to keep eyes locked on screen.'}
            </p>
          </div>

          <div className="p-5 bg-neutral-900/40 border border-neutral-800 rounded-lg space-y-3">
            <div className="text-xs font-mono text-sky-400 font-semibold">STEP 03</div>
            <h3 className="text-sm font-bold text-white">
              {lang === 'bn' ? 'ন্যাচারাল এআই ভয়েসওভার বা ট্রেন্ডিং সাউন্ড' : 'Voiceover & Background Audio'}
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {lang === 'bn'
                ? 'CapCut-এর内置 আমেরিকান ইংলিশ ভয়েস (যেমন "Jessie" বা "Chill Guy") ব্যবহার করুন। ব্যাকগ্রাউন্ডে একটি লো-ভলিউম ট্রেন্ডিং টিকটক মিউজিক দিন।'
                : 'Use native CapCut TTS voice models or ElevenLabs. Layer a low-volume ambient viral sound beneath to ride audio algorithm trends.'}
            </p>
          </div>
        </div>
      </section>

      {/* Proven Frameworks */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
          <div>
            <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">Scripts</span>
            <h2 className="text-xl font-bold text-white">
              {lang === 'bn' ? '৩টি ভাইরাল টিকটক স্ক্রিপ্ট ও হুক ফর্মুলা' : 'Three Viral TikTok Script Scaffolds'}
            </h2>
          </div>
          <span className="text-xs text-neutral-400 font-mono">15-30 Sec Formats</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TIKTOK_STRATEGY.frameworks.map((fw, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-neutral-900/50 border border-neutral-800 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
                    Framework #0{idx + 1}
                  </span>
                  <span className="text-[11px] text-neutral-400 font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {fw.duration}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white">{fw.name}</h3>

                <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 space-y-1">
                  <span className="text-[10px] text-amber-400 uppercase tracking-wider font-mono">
                    3-Second Hook (First Words)
                  </span>
                  <p className="text-xs font-semibold text-neutral-200 leading-relaxed italic">
                    &quot;{fw.hookExample}&quot;
                  </p>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div>
                    <span className="font-semibold text-neutral-400 block mb-0.5">🎬 Body Sequence:</span>
                    <p className="text-neutral-300 leading-relaxed">{fw.bodyFormula}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-neutral-400 block mb-0.5">📢 Bio CTA:</span>
                    <p className="text-amber-300 font-mono">{fw.ctaText}</p>
                  </div>
                  <div className="text-[11px] text-neutral-400 pt-1">
                    <span className="font-semibold text-neutral-300">Footage Angle:</span> {fw.bRollIdea}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-800">
                <button
                  onClick={() =>
                    onOpenAiWithPrompt?.({
                      channel: 'tiktok',
                      offerName: fw.name,
                      offerType: 'TikTok Viral Script',
                      niche: 'TikTok Strategy',
                    })
                  }
                  className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-neutral-900 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{lang === 'bn' ? 'এই ফর্মুলায় স্ক্রিপ্ট লিখুন' : 'Generate Full Script with AI'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
