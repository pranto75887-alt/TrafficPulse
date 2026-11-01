import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Sparkles, X, Gift, Zap } from 'lucide-react';
import { LanguageMode } from '../types';

interface AdBannerProps {
  lang: LanguageMode;
  variant?: 'top-banner' | 'in-feed' | 'bridge-card';
}

export const AdBanner: React.FC<AdBannerProps> = ({ lang, variant = 'top-banner' }) => {
  const [dismissed, setDismissed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const SMARTLINK_URL =
    'https://www.profitableratecpmnetwork.com/v3x4017tb?key=a2578c78d8015217e5986c0f9014445e';

  useEffect(() => {
    // Dynamically inject the adsterra/cpm network script
    const container = containerRef.current;
    if (!container) return;

    // Check if script is already added in container
    const existingScript = container.querySelector(
      'script[src="https://pl29000614.profitableratecpmnetwork.com/ee7cc560ea8991e937d193212d558e1c/invoke.js"]'
    );

    if (!existingScript) {
      try {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.setAttribute('data-cfasync', 'false');
        script.src =
          'https://pl29000614.profitableratecpmnetwork.com/ee7cc560ea8991e937d193212d558e1c/invoke.js';
        container.appendChild(script);
      } catch (err) {
        console.warn('Ad script injection notice:', err);
      }
    }
  }, []);

  if (dismissed && variant === 'top-banner') {
    return null;
  }

  if (variant === 'top-banner') {
    return (
      <aside aria-label="Sponsored" className="relative border-b border-amber-500/30 bg-gradient-to-r from-amber-950/80 via-neutral-900 to-amber-950/80 px-4 py-2.5 text-xs text-neutral-200 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
          {/* Left badge & copy */}
          <div className="flex items-center gap-2.5 flex-wrap justify-center md:justify-start">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold text-[11px] border border-amber-500/40 uppercase tracking-wider animate-pulse">
              <Sparkles className="w-3 h-3 text-amber-400" />
              {lang === 'bn' ? 'স্পনসরড অফার' : lang === 'hi' ? 'प्रायोजित ऑफर' : lang === 'es' ? 'Oferta Patrocinada' : 'Sponsored Reward'}
            </span>
            <span className="text-neutral-300 text-center md:text-left font-medium">
              {lang === 'bn'
                ? '🔥 বিশেষ সুযোগ: ভেরিফাইড ইউজার রিওয়ার্ড, গিফট কার্ড ও এক্সক্লুসিভ অফার ক্লেইম করুন!'
                : lang === 'hi'
                ? '🔥 विशेष अवसर: सत्यापित यूजर रिवॉर्ड्स और बोनस ऑफर क्लेम करें!'
                : lang === 'es'
                ? '🔥 Acceso Especial: ¡Reclama recompensas verificadas y ofertas exclusivas ahora!'
                : '🔥 Special Access: Claim verified high-payout user rewards, gift cards & bonus offers now!'}
            </span>
          </div>

          {/* Right Action buttons */}
          <div className="flex items-center gap-2">
            <a
              href={SMARTLINK_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-bold text-xs transition-all shadow-sm hover:shadow-amber-500/20 hover:scale-[1.02] active:scale-95"
            >
              <span>{lang === 'bn' ? 'অফারটি দেখুন' : lang === 'hi' ? 'ऑफर देखें' : lang === 'es' ? 'Ver Oferta' : 'Claim Offer'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setDismissed(true)}
              className="text-neutral-400 hover:text-neutral-200 p-1 rounded-md hover:bg-neutral-800/60 transition-colors ml-1"
              title={lang === 'bn' ? 'লুকান' : 'Dismiss'}
              aria-label={lang === 'bn' ? 'ব্যানার লুকান' : 'Dismiss banner'}
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Network Ad Container for invoke.js */}
        <div ref={containerRef} className="max-w-4xl mx-auto mt-2 flex justify-center items-center min-h-[50px] overflow-hidden">
          <div id="container-ee7cc560ea8991e937d193212d558e1c" className="w-full flex justify-center items-center"></div>
        </div>
      </aside>
    );
  }

  // In-feed or Bridge card variant
  return (
    <div className="my-8 rounded-xl border border-amber-500/30 bg-gradient-to-b from-neutral-900 via-neutral-900/90 to-amber-950/30 p-5 shadow-lg relative overflow-hidden">
      <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
      
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1.5 text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30 uppercase">
              <Zap className="w-3 h-3" />
              {lang === 'bn' ? 'বিজ্ঞাপন ও পার্টনার লিংক' : lang === 'hi' ? 'विज्ञापन व पार्टनर लिंक' : lang === 'es' ? 'Socio Destacado' : 'Featured Partner'}
            </span>
            <span className="text-xs text-neutral-400">
              {lang === 'bn' ? 'CPM নেটওয়ার্ক লাইভ অ্যাড' : lang === 'hi' ? 'हाई CPM लाइव विज्ञापन' : lang === 'es' ? 'Unidad de Anuncios CPM' : 'Live High CPM Ad Unit'}
            </span>
          </div>
          <h4 className="text-base font-bold text-neutral-100 flex items-center gap-2 justify-center sm:justify-start">
            <Gift className="w-4 h-4 text-amber-400" />
            {lang === 'bn'
              ? 'এক্সক্লুসিভ গিফট কার্ড ও ইনস্ট্যান্ট রিওয়ার্ড অফার'
              : lang === 'hi'
              ? 'विशेष गिफ्ट कार्ड और तुरंत यूजर रिवॉर्ड्स'
              : lang === 'es'
              ? 'Tarjetas de Regalo Exclusivas y Recompensas CPA'
              : 'Exclusive Free Rewards & Instant CPA Bonus'}
          </h4>
          <p className="text-xs text-neutral-400 max-w-xl">
            {lang === 'bn'
              ? 'নিচের ব্যানার বা বাটনে ক্লিক করে ডিরেক্ট স্পনসরড পার্টনার অফারে জয়েন করুন। ভিজিটররা এই অফারে কনভার্ট হলে হাই-রেট সিপিএম ইনকাম জেনারেট হয়।'
              : lang === 'hi'
              ? 'नीचे दिए गए बटन पर क्लिक करके सीधे प्रायोजित पार्टनर ऑफर पर जाएं। उच्च सीपीएम कमाई सक्रिय है।'
              : lang === 'es'
              ? 'Haz clic a continuación para acceder al destino patrocinado. Monetización CPM activa.'
              : 'Click the banner below to access the sponsored destination. High CPM traffic monetization active.'}
          </p>
        </div>

        <a
          href={SMARTLINK_URL}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-sm transition-all shadow-md hover:shadow-amber-500/30 shrink-0 hover:scale-105 active:scale-95"
        >
          <span>{lang === 'bn' ? 'অফার আনলক করুন' : lang === 'hi' ? 'ऑफर अनलॉक करें' : lang === 'es' ? 'Desbloquear Oferta' : 'Unlock Offer Now'}</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Network script container */}
      <div ref={containerRef} className="mt-4 pt-4 border-t border-neutral-800/80 flex flex-col items-center justify-center min-h-[90px] w-full">
        <div id="container-ee7cc560ea8991e937d193212d558e1c" className="w-full flex justify-center items-center"></div>
      </div>
    </div>
  );
};
