import React, { useState } from 'react';
import {
  Link2,
  Video,
  FileText,
  Sparkles,
  Copy,
  Check,
  RefreshCw,
  Clock,
  Layers,
  ArrowRight,
  Flame,
  Volume2,
  Image as ImageIcon,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { LanguageMode } from '../types';
import { getApiLanguage } from '../utils/langHelper';

interface VideoToScriptGeneratorProps {
  lang: LanguageMode;
  onSendToCampaign?: (topic: string, niche: string, offerType: string) => void;
}

const SAMPLE_VIRAL_LINKS = [
  {
    title: 'Secret Tool That Automates 4 Hours of Work',
    url: 'https://www.tiktok.com/@growthhacks/video/73918291029',
    description: 'Creator shows screen recording of a free tool, zooming into the breakthrough feature with fast ambient music.',
    niche: 'AI Tools & SaaS Affiliate',
    offerType: 'SaaS Affiliate (Recurring Commission)',
  },
  {
    title: 'The Real Reason You Wake Up Tired Every Day',
    url: 'https://youtube.com/shorts/k9Z82j1X9L0',
    description: 'Doctor or wellness creator holding a coffee cup, warning people about a common morning mistake and revealing a mineral solution.',
    niche: 'Health & Supplements',
    offerType: 'ClickBank Health Affiliate',
  },
  {
    title: '3 Underground Websites Paying Daily Remote Workers',
    url: 'https://www.tiktok.com/@sidehustlezone/video/7402918291',
    description: 'POV typing on MacBook in an aesthetic cafe, counting down 3 websites that pay $20-$40/hr for simple tasks.',
    niche: 'Make Money Online & Side Hustles',
    offerType: 'CPA Lead Locker / Survey Offer',
  },
];

export const VideoToScriptGenerator: React.FC<VideoToScriptGeneratorProps> = ({
  lang,
  onSendToCampaign,
}) => {
  const [videoUrl, setVideoUrl] = useState<string>(
    'https://www.tiktok.com/@creators/video/738291829'
  );
  const [videoDescription, setVideoDescription] = useState<string>(
    'Viral video showing a smart tool shortcut that saves 10 hours a week, ending with link in bio for the free template'
  );
  const [targetNiche, setTargetNiche] = useState<string>('Make Money Online & SaaS');
  const [offerType, setOfferType] = useState<string>('CPA Lead Locker / Software Affiliate');
  const [platform, setPlatform] = useState<string>('tiktok');
  const [scriptLength, setScriptLength] = useState<string>('30s');

  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<string | null>(null);
  const [sources, setSources] = useState<{ title: string; url: string }[]>([]);
  const [copied, setCopied] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!videoUrl.trim() && !videoDescription.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/video-to-script', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          videoUrl,
          videoDescription,
          targetNiche,
          offerType,
          platform,
          scriptLength,
          language: getApiLanguage(lang),
        }),
      });

      const data = await res.json();
      if (data.success && data.content) {
        setResult(data.content);
        setSources(data.sources || []);
      } else {
        setError(data.error || 'Failed to reverse-engineer video into script');
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

  const loadPreset = (sample: typeof SAMPLE_VIRAL_LINKS[0]) => {
    setVideoUrl(sample.url);
    setVideoDescription(sample.description);
    setTargetNiche(sample.niche);
    setOfferType(sample.offerType);
  };

  return (
    <div className="space-y-10">
      {/* Header Banner */}
      <section className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 sm:p-8 space-y-4">
        <div className="max-w-4xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
            <Link2 className="w-4 h-4" />
            <span>
              {lang === 'bn'
                ? 'ভিডিও লিংক টু প্রম্পট ও স্ক্রিপ্ট জেনারেটর'
                : 'Video Link to AI Prompts & Voiceover Script'}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {lang === 'bn'
              ? 'যেকোনো ভাইরাল ভিডিও লিংক দিয়ে সম্পূর্ণ স্ক্রিপ্ট ও এআই প্রম্পট তৈরি করুন'
              : 'Reverse-Engineer Any Viral Video Link into High-Converting Scripts & Prompts'}
          </h1>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            {lang === 'bn'
              ? 'টিকটক, ইউটিউব শর্টস বা রিলসের যেকোনো সফল ভিডিও লিংক বা কনসেপ্ট দিন। আমাদের এআই সিস্টেম ভিডিওটির সাইকোলজিক্যাল হুক বিশ্লেষণ করে আপনার সিপিএ বা অ্যাফিলিয়েট অফারের জন্য টাইমকোডেড ভয়েসওভার স্ক্রিপ্ট, ক্যাপকাট টেক্সট এবং এআই ইমেজ/ভিডিও প্রম্পট তৈরি করে দেবে।'
              : 'Paste any TikTok, YouTube Short, or Reel link or describe a viral topic. Gemini analyzes the hook psychology, timing, and retention pacing, delivering a word-for-word voiceover script, scene-by-scene AI generation prompts, and safe bio link CTAs.'}
          </p>
        </div>

        {/* Feature Badges */}
        <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-neutral-400 border-t border-neutral-800">
          <span className="flex items-center gap-1.5 text-neutral-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            {lang === 'bn' ? 'টাইমকোডেড ভয়েসওভার স্ক্রিপ্ট' : 'Timecoded Voiceover & TTS'}
          </span>
          <span aria-hidden="true" className="text-neutral-700">·</span>
          <span className="flex items-center gap-1.5 text-neutral-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            {lang === 'bn' ? 'সিন বাই সিন এআই প্রম্পটস' : 'Scene-by-Scene AI Prompts'}
          </span>
          <span aria-hidden="true" className="text-neutral-700">·</span>
          <span className="flex items-center gap-1.5 text-neutral-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            {lang === 'bn' ? 'ক্যাপকাট কাইনেটিক টেক্সট' : 'CapCut Kinetic Captions'}
          </span>
        </div>
      </section>

      {/* Preset Samples Strip */}
      <section className="space-y-3">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
          <div className="flex items-center gap-2 text-xs font-bold text-neutral-300 uppercase tracking-wider">
            <Flame className="w-4 h-4 text-rose-400" />
            <span>{lang === 'bn' ? 'দ্রুত টেস্ট করার জন্য স্যাম্পল ভাইরাল ভিডিও' : 'Quick Test Viral Samples'}</span>
          </div>
          <span className="text-[11px] text-neutral-400">
            {lang === 'bn' ? 'ক্লিক করে লোড করুন' : 'Click to autofill'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {SAMPLE_VIRAL_LINKS.map((sample, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => loadPreset(sample)}
              className="p-3 rounded-lg bg-neutral-900/50 hover:bg-neutral-900 border border-neutral-800 hover:border-amber-400/50 text-left transition-all space-y-1.5 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded">
                  {sample.niche}
                </span>
                <span className="text-[10px] text-neutral-500 font-mono">Sample #{idx + 1}</span>
              </div>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                {sample.title}
              </h4>
              <p className="text-[11px] text-neutral-400 line-clamp-2 leading-relaxed">
                {sample.description}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* Interactive Conversion Studio */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Input Form Controls */}
        <div className="lg:col-span-5 space-y-4 bg-neutral-900/60 border border-neutral-800 p-6 rounded-xl">
          <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-3">
            <Video className="w-4 h-4 text-amber-400" />
            <span>{lang === 'bn' ? 'ভিডিও লিংক ও অফার ডিটেইলস' : 'Video Input & Offer Framing'}</span>
          </h3>

          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">
              {lang === 'bn' ? 'ভিডিও লিংক (TikTok / Shorts / Reels):' : 'Video Link URL:'}
            </label>
            <div className="relative">
              <input
                type="text"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="https://www.tiktok.com/@creator/video/..."
                className="w-full pl-9 pr-3 py-2.5 bg-neutral-950 border border-neutral-800 rounded-md text-white text-xs font-mono focus:border-amber-400 focus:outline-none"
              />
              <Link2 className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
            </div>
            <span className="text-[10px] text-neutral-400 block mt-1">
              {lang === 'bn' ? 'যেকোনো টিকটক, ইউটিউব শর্ট বা ইনস্টাগ্রাম রিলের লিংক দিন' : 'Paste link or leave empty and describe topic below'}
            </span>
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">
              {lang === 'bn' ? 'ভিডিও কনসেপ্ট বা সংক্ষিপ্ত বর্ণনা:' : 'Video Context & Visual Concept:'}
            </label>
            <textarea
              rows={3}
              value={videoDescription}
              onChange={(e) => setVideoDescription(e.target.value)}
              placeholder="e.g. Creator shows 3 simple steps to fix posture, showing before and after..."
              className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-md text-white text-xs leading-relaxed focus:border-amber-400 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">Platform</label>
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-md text-white text-xs"
              >
                <option value="tiktok">TikTok (9:16 Vertical)</option>
                <option value="youtube-shorts">YouTube Shorts (9:16)</option>
                <option value="pinterest-idea-pin">Pinterest Idea Pin</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                {lang === 'bn' ? 'স্ক্রিপ্ট দৈর্ঘ্য:' : 'Desired Duration:'}
              </label>
              <select
                value={scriptLength}
                onChange={(e) => setScriptLength(e.target.value)}
                className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-md text-white text-xs"
              >
                <option value="15s">15 Seconds (Ultra Viral Hook)</option>
                <option value="30s">30 Seconds (Recommended)</option>
                <option value="60s">60 Seconds (Deep Value / Review)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                {lang === 'bn' ? 'টার্গেট নিশ:' : 'Target Niche:'}
              </label>
              <input
                type="text"
                value={targetNiche}
                onChange={(e) => setTargetNiche(e.target.value)}
                placeholder="e.g. Weight Loss, SaaS, Finance"
                className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-md text-white text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                {lang === 'bn' ? 'অফার মডেল:' : 'Offer Model:'}
              </label>
              <input
                type="text"
                value={offerType}
                onChange={(e) => setOfferType(e.target.value)}
                placeholder="e.g. CPA Locker, ClickBank"
                className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-md text-white text-xs"
              />
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading || (!videoUrl.trim() && !videoDescription.trim())}
            className="w-full py-3 px-4 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 rounded-md transition-colors flex items-center justify-center gap-2 shadow-lg mt-3"
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>{lang === 'bn' ? 'ভিডিও বিশ্লেষণ ও স্ক্রিপ্ট তৈরি হচ্ছে...' : 'Reverse-Engineering Video to Script...'}</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>{lang === 'bn' ? 'প্রম্পট ও ভয়েসওভার স্ক্রিপ্ট তৈরি করুন' : 'Generate Full Prompts & Timed Script'}</span>
              </>
            )}
          </button>
        </div>

        {/* Right: Output Screen */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold text-neutral-300 uppercase tracking-wider font-mono">
                Script &amp; AI Prompt Blueprint
              </span>
            </div>

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
                    <span>Copy Script &amp; Prompts</span>
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
                  ? 'ভিডিওর ভাইরাল হুক ও টাইমিং বিশ্লেষণ করা হচ্ছে...'
                  : 'Analyzing viral pacing, visual prompts, and script timing with Gemini...'}
              </p>
              <p className="text-xs text-neutral-400 max-w-sm">
                Generating 3 hook variations, word-for-word voiceover script, and CapCut visual cues.
              </p>
            </div>
          ) : result ? (
            <div className="flex-1 min-h-[440px] max-h-[680px] overflow-y-auto rounded-xl border border-neutral-800 bg-neutral-950 p-6 text-xs text-neutral-200 font-mono leading-relaxed whitespace-pre-wrap selection:bg-amber-500/30">
              {result}
            </div>
          ) : (
            <div className="flex-1 min-h-[440px] rounded-xl border border-dashed border-neutral-800 bg-neutral-950/30 p-8 flex flex-col items-center justify-center text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-500 border border-neutral-800">
                <Video className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-white">
                {lang === 'bn' ? 'কোনো স্ক্রিপ্ট এখনো জেনারেট করা হয়নি' : 'No Script Generated Yet'}
              </h4>
              <p className="text-xs text-neutral-400 max-w-md">
                {lang === 'bn'
                  ? 'উপরে যেকোনো ভাইরাল ভিডিও লিংক পেস্ট করুন অথবা বামপাশের স্যাম্পল থেকে যেকোনো একটি ক্লিক করে "তৈরি করুন" বাটনে চাপুন।'
                  : 'Paste any video link above or pick one of the sample presets to reverse-engineer into a ready-to-record voiceover script and AI video prompt.'}
              </p>
            </div>
          )}

          {/* Grounded Web Sources if available */}
          {sources.length > 0 && (
            <div className="p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800 space-y-1.5 text-xs">
              <span className="font-semibold text-neutral-300 block">
                {lang === 'bn' ? 'ভিডিও রেফারেন্স ও ট্রেন্ড ডাটা:' : 'Video Context & Trend Signals:'}
              </span>
              <div className="flex flex-wrap gap-2">
                {sources.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-neutral-950 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white transition-colors text-[11px]"
                  >
                    <span>{s.title}</span>
                    <ExternalLink className="w-3 h-3 text-neutral-500" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
