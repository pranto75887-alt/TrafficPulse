import React, { useState } from 'react';
import { Sparkles, Zap, Flame, CheckCircle, ArrowRight, RefreshCw, Copy, Check } from 'lucide-react';
import { LanguageMode } from '../types';

interface HookAnalyzerProps {
  lang: LanguageMode;
}

export const HookAnalyzer: React.FC<HookAnalyzerProps> = ({ lang }) => {
  const [hookText, setHookText] = useState<string>(
    '3 common mistakes everyone makes when starting affiliate marketing'
  );
  const [platform, setPlatform] = useState<string>('tiktok');
  const [niche, setNiche] = useState<string>('Make Money Online / Affiliate');
  const [loading, setLoading] = useState<boolean>(false);
  const [analysis, setAnalysis] = useState<any>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleAnalyze = async () => {
    if (!hookText.trim()) return;
    setLoading(true);
    try {
      const res = await fetch('/api/analyze-hook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          hookText,
          platform,
          niche,
          language: lang === 'bn' ? 'bengali' : 'english',
        }),
      });
      const data = await res.json();
      if (data.success && data.analysis) {
        setAnalysis(data.analysis);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCopyVariation = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-6">
      <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 uppercase tracking-wider">
            <Zap className="w-4 h-4" />
            <span>{lang === 'bn' ? 'এআই হুক স্কোর মিটার' : 'Viral Hook & Scroll-Stop Meter'}</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
            {lang === 'bn'
              ? 'আপনার টিকটক বা পিন্টারেস্ট হুকের স্ক্রল-স্টপ রেট টেস্ট করুন'
              : 'Test Your 3-Second Hook Curiosity & Conversion Strength'}
          </h3>
        </div>
        <span className="text-xs font-mono text-neutral-400">Powered by Gemini</span>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-neutral-300 mb-1">
            {lang === 'bn' ? 'আপনার হুক বা হেডলাইনটি লিখুন:' : 'Your Hook or Headline Text:'}
          </label>
          <input
            type="text"
            value={hookText}
            onChange={(e) => setHookText(e.target.value)}
            placeholder="e.g. Stop wasting hours trying to get traffic..."
            className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 rounded-lg text-white text-sm focus:border-amber-400 focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-neutral-400 mb-1">Platform</label>
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-md text-white text-xs"
            >
              <option value="tiktok">TikTok Video (3-Second Hook)</option>
              <option value="pinterest">Pinterest Pin (Text Overlay)</option>
              <option value="seo">SEO Blog Post Title (CTR Trigger)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-400 mb-1">Niche Category</label>
            <input
              type="text"
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-md text-white text-xs"
            />
          </div>
        </div>

        <button
          onClick={handleAnalyze}
          disabled={loading || !hookText.trim()}
          className="w-full py-2.5 px-4 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 rounded-md transition-colors flex items-center justify-center gap-2 shadow"
        >
          {loading ? (
            <>
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>{lang === 'bn' ? 'বিশ্লেষণ হচ্ছে...' : 'Analyzing Hook Psychology...'}</span>
            </>
          ) : (
            <>
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'bn' ? 'হুক টেস্ট ও ৩টি ভাইরাল অল্টারনেটিভ বের করুন' : 'Analyze & Generate 3 Viral Rewrites'}</span>
            </>
          )}
        </button>
      </div>

      {analysis && (
        <div className="p-5 rounded-lg bg-neutral-950 border border-neutral-800 space-y-4 animate-in fade-in duration-300">
          <div className="grid grid-cols-3 gap-3 text-center border-b border-neutral-800 pb-4">
            <div className="p-2.5 rounded bg-neutral-900 border border-neutral-800">
              <span className="text-[10px] text-neutral-400 font-mono block">Virality Score</span>
              <span className="text-xl font-extrabold text-amber-400 font-mono tabular-nums">
                {analysis.score || 82}/100
              </span>
            </div>
            <div className="p-2.5 rounded bg-neutral-900 border border-neutral-800">
              <span className="text-[10px] text-neutral-400 font-mono block">Curiosity Gap</span>
              <span className="text-sm font-bold text-emerald-400 mt-1 block">
                {analysis.curiosityGap || 'High'}
              </span>
            </div>
            <div className="p-2.5 rounded bg-neutral-900 border border-neutral-800">
              <span className="text-[10px] text-neutral-400 font-mono block">Est. Stop-Scroll</span>
              <span className="text-sm font-bold text-sky-400 mt-1 block">
                {analysis.stopScrollRate || '74%'}
              </span>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold text-neutral-300 block mb-1">
              {lang === 'bn' ? 'মনস্তাত্ত্বিক ফিডব্যাক:' : 'Psychological Analysis:'}
            </span>
            <p className="text-xs text-neutral-300 leading-relaxed">{analysis.feedback}</p>
          </div>

          {analysis.improvedVariations && analysis.improvedVariations.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-neutral-800">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                {lang === 'bn' ? '৩টি হাই-সিটিআর ভাইরাল বিকল্প:' : '3 High-Converting Viral Rewrites:'}
              </span>
              <div className="space-y-2">
                {analysis.improvedVariations.map((v: string, idx: number) => (
                  <div
                    key={idx}
                    className="p-3 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-between gap-3 text-xs"
                  >
                    <span className="text-neutral-200 font-medium">{v}</span>
                    <button
                      onClick={() => handleCopyVariation(v, idx)}
                      className="px-2.5 py-1 text-[11px] font-mono text-neutral-300 bg-neutral-800 hover:bg-neutral-700 rounded transition-colors shrink-0 flex items-center gap-1"
                    >
                      {copiedIndex === idx ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
