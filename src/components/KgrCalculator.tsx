import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import { LanguageMode } from '../types';

interface KgrCalculatorProps {
  lang: LanguageMode;
}

export const KgrCalculator: React.FC<KgrCalculatorProps> = ({ lang }) => {
  // KGR state
  const [allInTitle, setAllInTitle] = useState<number>(12);
  const [monthlyVolume, setMonthlyVolume] = useState<number>(180);

  // Income Projection state
  const [visitors, setVisitors] = useState<number>(5000);
  const [clickRate, setClickRate] = useState<number>(15); // %
  const [conversionRate, setConversionRate] = useState<number>(4); // %
  const [payout, setPayout] = useState<number>(25); // $

  const kgrValue = monthlyVolume > 0 ? (allInTitle / monthlyVolume) : 0;

  const getKgrBadge = (val: number) => {
    if (val === 0) return { label: 'Enter valid values', color: 'text-neutral-400 bg-neutral-800' };
    if (val < 0.25) {
      return {
        label: lang === 'bn' ? 'অসাধারণ! কেজিআর গোল্ডেন রেশিও (< ০.২৫)' : 'Golden Opportunity (< 0.25)',
        desc: lang === 'bn' ? 'নতুন সাইট দিয়েও খুব দ্রুত গুগল ১ম পেজে র‍্যাঙ্ক করার সম্ভাবনা ৯০%!' : 'High probability of ranking in Google Top 10 in days without backlinks.',
        color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
        icon: CheckCircle,
      };
    }
    if (val <= 1.0) {
      return {
        label: lang === 'bn' ? 'মাঝারি প্রতিযোগিতা (০.২৫ - ১.০০)' : 'Moderate Competition (0.25 - 1.00)',
        desc: lang === 'bn' ? 'ভালো অন-পেজ এসইও ও কিছুটা সময়ের মধ্যে র‍্যাঙ্ক করা সম্ভব।' : 'Will rank as topical authority builds over 4-8 weeks.',
        color: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
        icon: AlertTriangle,
      };
    }
    return {
      label: lang === 'bn' ? 'উচ্চ প্রতিযোগিতা (> ১.০০)' : 'High Competition (> 1.00)',
      desc: lang === 'bn' ? 'নতুন সাইটের জন্য এই কিওয়ার্ড এড়িয়ে চলাই বুদ্ধিমানের কাজ।' : 'Skip for young domains; focus on more specific long-tail queries.',
      color: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
      icon: XCircle,
    };
  };

  const badge = getKgrBadge(kgrValue);
  const BadgeIcon = badge.icon || CheckCircle;

  // Earnings calculations
  const offerClicks = Math.round(visitors * (clickRate / 100));
  const conversions = Math.round(offerClicks * (conversionRate / 100));
  const projectedIncome = conversions * payout;

  return (
    <div className="space-y-12">
      <div className="border-b border-neutral-800 pb-4">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
          <Calculator className="w-4 h-4" />
          <span>{lang === 'bn' ? 'ইন্টারেক্টিভ মার্কেটিং ক্যালকুলেটর' : 'Interactive Math & Projections'}</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
          {lang === 'bn'
            ? 'কেজিআর (KGR) ও অর্গানিক সিপিএ ইনকাম প্রজেকশন ক্যালকুলেটর'
            : 'KGR Keyword & Organic Traffic Revenue Estimator'}
        </h2>
        <p className="text-xs sm:text-sm text-neutral-300 mt-1">
          {lang === 'bn'
            ? 'অনুমান নয়, ডেটা দিয়ে কাজ করুন। আপনার কিওয়ার্ডের সুযোগ যাচাই করুন এবং ট্রাফিকের ভিত্তিতে সম্ভাব্য মাসিক আয় বের করুন।'
            : 'Make data-backed decisions. Check keyword competition ratio and forecast monthly earnings from Pinterest, TikTok, and SEO.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* KGR Tool */}
        <div className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span>{lang === 'bn' ? 'কেজিআর (KGR) স্কোর চেকার' : 'Keyword Golden Ratio (KGR)'}</span>
            </h3>
            <span className="text-xs font-mono text-neutral-400">Formula: AllInTitle ÷ Volume</span>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                {lang === 'bn' ? 'Google "allintitle:" রেজাল্ট সংখ্যা' : 'Google "allintitle:" Result Count'}
              </label>
              <input
                type="number"
                min="0"
                value={allInTitle}
                onChange={(e) => setAllInTitle(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-md text-white text-sm font-mono focus:border-amber-400 focus:outline-none"
              />
              <span className="text-[11px] text-neutral-400 block mt-1">
                {lang === 'bn' ? 'গুগলে লিখুন: allintitle:"your keyword"' : 'Search Google: allintitle:"your exact long tail phrase"'}
              </span>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                {lang === 'bn' ? 'মাসিক সার্চ ভলিউম (Under 250 রিকমেন্ডেড)' : 'Monthly Search Volume (Ideally < 250)'}
              </label>
              <input
                type="number"
                min="1"
                value={monthlyVolume}
                onChange={(e) => setMonthlyVolume(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-md text-white text-sm font-mono focus:border-amber-400 focus:outline-none"
              />
            </div>

            {/* Result Box */}
            <div className={`p-4 rounded-lg border space-y-2 ${badge.color}`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider">Calculated KGR Score:</span>
                <span className="text-xl font-extrabold font-mono tabular-nums">
                  {kgrValue.toFixed(3)}
                </span>
              </div>
              <div className="flex items-center gap-2 font-bold text-sm">
                <BadgeIcon className="w-4 h-4 shrink-0" />
                <span>{badge.label}</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">{badge.desc}</p>
            </div>
          </div>
        </div>

        {/* Organic Revenue Forecaster */}
        <div className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'bn' ? 'অর্গানিক আয় প্রজেকশন' : 'Organic Traffic Revenue Forecaster'}</span>
            </h3>
            <span className="text-xs font-mono text-emerald-400 font-semibold">
              ${projectedIncome.toLocaleString()} / mo
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs text-neutral-300 mb-1">
                <span>{lang === 'bn' ? 'মাসিক অর্গানিক ভিজিটর (Pinterest + TikTok + Blog)' : 'Monthly Organic Visitors'}</span>
                <span className="font-mono text-amber-300">{visitors.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="500"
                max="50000"
                step="500"
                value={visitors}
                onChange={(e) => setVisitors(parseInt(e.target.value))}
                className="w-full accent-amber-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  {lang === 'bn' ? 'অফার ক্লিক রেট (CTR %)' : 'Offer Click-Through (CTR %)'}
                </label>
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={clickRate}
                  onChange={(e) => setClickRate(parseInt(e.target.value) || 1)}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-md text-white text-sm font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  {lang === 'bn' ? 'কনভার্সন রেট (%)' : 'Lead / Sale Conversion (%)'}
                </label>
                <input
                  type="number"
                  min="0.5"
                  max="20"
                  step="0.5"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(parseFloat(e.target.value) || 1)}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-md text-white text-sm font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                {lang === 'bn' ? 'গড় পে-আউট প্রতি লিড / সেল ($)' : 'Average Payout per Lead / Sale ($)'}
              </label>
              <input
                type="number"
                min="1"
                max="500"
                value={payout}
                onChange={(e) => setPayout(parseFloat(e.target.value) || 1)}
                className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-md text-white text-sm font-mono"
              />
            </div>

            {/* Breakdown box */}
            <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800 space-y-2 text-xs">
              <div className="flex justify-between text-neutral-400">
                <span>{lang === 'bn' ? 'ব্রিজ পেজে ক্লিক:' : 'Offer Clicks via Bridge:'}</span>
                <span className="font-mono text-white">{offerClicks.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>{lang === 'bn' ? 'সফল কনভার্সন (Leads / Sales):' : 'Estimated Conversions:'}</span>
                <span className="font-mono text-emerald-400 font-bold">{conversions.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-neutral-300 pt-2 border-t border-neutral-800 font-bold">
                <span>{lang === 'bn' ? 'সম্ভাব্য মাসিক অর্গানিক আয়:' : 'Estimated Monthly Income:'}</span>
                <span className="font-mono text-amber-400 text-sm">${projectedIncome.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
