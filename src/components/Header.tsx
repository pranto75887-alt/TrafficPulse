import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  Globe2,
  ChevronDown,
  Video,
  Search,
  Compass,
  ShieldCheck,
  Mail,
  BarChart3,
  Calculator,
  Check,
  Menu,
  X,
  Youtube,
  ClipboardCheck,
} from 'lucide-react';
import { ChannelType, LanguageMode } from '../types';
import { languages } from '../utils/langHelper';

interface HeaderProps {
  activeTab: ChannelType;
  setActiveTab: (tab: ChannelType) => void;
  lang: LanguageMode;
  setLang: (lang: LanguageMode) => void;
  onOpenGenerator: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  lang,
  setLang,
  onOpenGenerator,
}) => {
  const [isMoreOpen, setIsMoreOpen] = useState<boolean>(false);
  const [isLangOpen, setIsLangOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getSubTitle = () => {
    switch (lang) {
      case 'bn': return 'অর্গানিক গ্রোথ স্টুডিও';
      case 'hi': return 'ऑर्गेनिक ग्रोथ स्टूडियो';
      case 'es': return 'Estudio Crecimiento Orgánico';
      default: return 'Organic Growth Studio';
    }
  };

  const getNavLabel = (key: 'seo' | 'pinterest' | 'tiktok' | 'facebook' | 'more' | 'generator') => {
    const labels = {
      seo: { bn: 'এসইও ব্লগিং', hi: 'एसईओ ब्लॉग', es: 'Blog SEO', en: 'SEO Blog' },
      pinterest: { bn: 'পিন্টারেস্ট', hi: 'पिंटरेस्ट', es: 'Pinterest', en: 'Pinterest' },
      tiktok: { bn: 'টিকটক', hi: 'टिकटॉक', es: 'TikTok', en: 'TikTok' },
      facebook: { bn: 'ফেসবুক', hi: 'फेसबुक', es: 'Facebook', en: 'Facebook' },
      more: { bn: 'আরও অপশন', hi: 'अन्य टूल्स', es: 'Más Herramientas', en: 'More Tools' },
      generator: { bn: 'এআই জেনারেটর', hi: 'एआई जेनरेटर', es: 'Generador IA', en: 'AI Generator' },
    };
    return labels[key][lang] || labels[key].en;
  };

  const moreToolsList = [
    {
      id: 'youtube-shorts' as ChannelType,
      label: lang === 'bn' ? 'ইউটিউব শর্টস' : lang === 'hi' ? 'यूट्यूब शॉर्ट्स' : lang === 'es' ? 'YouTube Shorts' : 'YouTube Shorts',
      desc: lang === 'bn' ? 'ভাইরাল শর্টস স্ক্রিপ্ট ও ইনফিনিট লুপ' : lang === 'hi' ? 'वायरल शॉर्ट्स स्क्रिप्ट व इनफिनिट लूप' : lang === 'es' ? 'Guiones virales con bucle infinito' : 'Viral shorts scripts & seamless loops',
      icon: Youtube,
    },
    {
      id: 'video-to-script' as ChannelType,
      label: lang === 'bn' ? 'ভিডিও টু স্ক্রিপ্ট' : lang === 'hi' ? 'वीडियो से स्क्रिप्ट' : lang === 'es' ? 'Video a Guión' : 'Video to Script',
      desc: lang === 'bn' ? 'ভাইরাল ভিডিও থেকে স্ক্রিপ্ট ও প্রম্পট' : lang === 'hi' ? 'वायरल वीडियो से वॉइसओवर व एआई प्रॉम्प्ट' : lang === 'es' ? 'Guión y prompts para videos virales' : 'Reverse-engineer viral video links',
      icon: Video,
    },
    {
      id: 'site-spy' as ChannelType,
      label: lang === 'bn' ? 'সাইট স্পাই' : lang === 'hi' ? 'साइट स्पाई (SERP)' : lang === 'es' ? 'Espía de Sitios' : 'Site Spy (Google SERP)',
      desc: lang === 'bn' ? 'গুগল ১ম পেজের প্রতিযোগী সাইট খুঁজুন' : lang === 'hi' ? 'गूगल पेज 1 के प्रतिस्पर्धी ब्लॉग खोजें' : lang === 'es' ? 'Descubre blogs competidores en Google' : 'Top-ranking affiliate blogs spy',
      icon: Search,
    },
    {
      id: 'market-insights' as ChannelType,
      label: lang === 'bn' ? 'মার্কেট ইনসাইটস' : lang === 'hi' ? 'मार्केट इनसाइट्स' : lang === 'es' ? 'Tendencias de Mercado' : 'Market Insights',
      desc: lang === 'bn' ? 'লাইভ সার্চ গ্রাউন্ডেড ট্রেন্ডিং নিশ' : lang === 'hi' ? 'लाइव गूगल ट्रेंड्स और सीपीए नीश' : lang === 'es' ? 'Tendencias en tiempo real de afiliados' : 'Live real-time search trends',
      icon: Compass,
    },
    {
      id: 'bridge' as ChannelType,
      label: lang === 'bn' ? 'ব্রিজ পেজ ফানেল' : lang === 'hi' ? 'ब्रिज पेज फ़नल' : lang === 'es' ? 'Embudos de Puente' : 'Bridge Funnels',
      desc: lang === 'bn' ? 'ব্যান এড়াতে সেফ প্রি-ল্যান্ডার আর্কিটেকচার' : lang === 'hi' ? 'एंटी-बैन सुरक्षित प्री-लैंडर सिस्टम' : lang === 'es' ? 'Pre-landers seguros anti-baneo' : 'Anti-ban 1-page pre-landers',
      icon: ShieldCheck,
    },
    {
      id: 'email-sequence' as ChannelType,
      label: lang === 'bn' ? 'ইমেইল সিকোয়েন্স' : lang === 'hi' ? 'ईमेल अनुक्रम' : lang === 'es' ? 'Secuencia de Email' : 'Email Sequence',
      desc: lang === 'bn' ? '৫-দিনের অটোরেসপন্ডার ফানেল' : lang === 'hi' ? '5-दिवसीय ऑटोरेस्पोन्डर ईमेल फ़नल' : lang === 'es' ? 'Secuencia de 5 días de bienvenida' : '5-day soap opera follow-up copy',
      icon: Mail,
    },
    {
      id: 'tracker' as ChannelType,
      label: lang === 'bn' ? 'পারফরম্যান্স ট্র্যাকার' : lang === 'hi' ? 'परफॉर्मेंस ट्रैकर' : lang === 'es' ? 'Rastreador de Rendimiento' : 'Performance Tracker',
      desc: lang === 'bn' ? 'ক্লিক, কনভার্সন, ইপিবি (EPC) ও আরওআই' : lang === 'hi' ? 'क्लिक, कन्वर्ज़न, EPC और ROI लॉग' : lang === 'es' ? 'Registro de clics, EPC y ROI' : 'Manual click, EPC & ROI logger',
      icon: BarChart3,
    },
    {
      id: 'tools' as ChannelType,
      label: lang === 'bn' ? 'কেজিআর ও হুক টুলস' : lang === 'hi' ? 'KGR और हुक टूल्स' : lang === 'es' ? 'Herramientas KGR y Hook' : 'KGR & Hook Tools',
      desc: lang === 'bn' ? 'কেজিআর ক্যালকুলেটর ও হুক স্কোরার' : lang === 'hi' ? 'KGR कैलकुलेटर और हुक स्कोरर' : lang === 'es' ? 'Calculadora KGR y probador de ganchos' : 'KGR calculator & viral hook tester',
      icon: Calculator,
    },
    {
      id: 'launch-checklist' as ChannelType,
      label: lang === 'bn' ? 'লঞ্চ চেকলিস্ট' : lang === 'hi' ? 'लॉन्च चेकलिस्ट' : lang === 'es' ? 'Lista de Lanzamiento' : 'Launch Checklist',
      desc: lang === 'bn' ? 'ক্যাম্পেইন লাইভ করার আগে ১০০% প্রি-লঞ্চ ভেরিফিকেশন' : lang === 'hi' ? 'कैंपेन लाइव करने से पूर्व 100% सत्यापन' : lang === 'es' ? 'Verificación previa al lanzamiento 100%' : 'Pre-launch offer, pixel & safety check',
      icon: ClipboardCheck,
    },
  ];

  const isMoreActive = moreToolsList.some((t) => t.id === activeTab);
  const activeSubTool = moreToolsList.find((t) => t.id === activeTab);
  const currentLangInfo = languages.find((l) => l.code === lang) || languages[0];

  return (
    <header className="sticky top-0 z-50 bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Brand single text element */}
        <button
          onClick={() => {
            setActiveTab('overview');
            setIsMobileMenuOpen(false);
          }}
          className="text-left group flex items-center gap-2 whitespace-nowrap shrink-0"
        >
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
            TrafficPulse
          </span>
          <span className="text-xs text-neutral-400 hidden sm:inline">
            {getSubTitle()}
          </span>
        </button>

        {/* Zone 2: Clean 4 Core Links + 1 "More Options ▾" Dropdown */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-300">
          <button
            onClick={() => setActiveTab('seo')}
            className={`transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
              activeTab === 'seo'
                ? 'text-amber-400 border-amber-400 font-semibold'
                : 'text-neutral-300 hover:text-white border-transparent'
            }`}
          >
            {getNavLabel('seo')}
          </button>

          <button
            onClick={() => setActiveTab('pinterest')}
            className={`transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
              activeTab === 'pinterest'
                ? 'text-amber-400 border-amber-400 font-semibold'
                : 'text-neutral-300 hover:text-white border-transparent'
            }`}
          >
            {getNavLabel('pinterest')}
          </button>

          <button
            onClick={() => setActiveTab('tiktok')}
            className={`transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
              activeTab === 'tiktok'
                ? 'text-amber-400 border-amber-400 font-semibold'
                : 'text-neutral-300 hover:text-white border-transparent'
            }`}
          >
            {getNavLabel('tiktok')}
          </button>

          <button
            onClick={() => setActiveTab('facebook')}
            className={`transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
              activeTab === 'facebook'
                ? 'text-amber-400 border-amber-400 font-semibold'
                : 'text-neutral-300 hover:text-white border-transparent'
            }`}
          >
            {getNavLabel('facebook')}
          </button>

          {/* "More Options ▾" Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
                isMoreActive
                  ? 'text-amber-400 border-amber-400 font-semibold'
                  : 'text-neutral-300 hover:text-white border-transparent'
              }`}
            >
              <span>{isMoreActive && activeSubTool ? activeSubTool.label : getNavLabel('more')}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isMoreOpen ? 'rotate-180 text-amber-400' : 'text-neutral-400'
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isMoreOpen && (
              <div className="absolute right-0 mt-3 w-72 rounded-xl bg-neutral-900 border border-neutral-800 shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-neutral-400 border-b border-neutral-800/80">
                  {lang === 'bn' ? 'অর্গানিক মার্কেটিং টুলস' : lang === 'hi' ? 'अतिरिक्त मार्केटिंग टूल्स' : lang === 'es' ? 'Herramientas de Marketing' : 'Advanced Marketing Modules'}
                </div>
                <div className="space-y-1 pt-1.5">
                  {moreToolsList.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveTab(item.id);
                          setIsMoreOpen(false);
                        }}
                        className={`w-full text-left p-2.5 rounded-lg transition-colors flex items-start gap-2.5 group ${
                          isActive
                            ? 'bg-neutral-800 text-amber-400'
                            : 'hover:bg-neutral-800/60 text-neutral-300'
                        }`}
                      >
                        <div
                          className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
                            isActive
                              ? 'bg-amber-400/20 text-amber-400'
                              : 'bg-neutral-800 text-neutral-400 group-hover:text-amber-300'
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold block leading-tight text-white group-hover:text-amber-300 transition-colors">
                              {item.label}
                            </span>
                            {isActive && <Check className="w-3 h-3 text-amber-400 shrink-0" />}
                          </div>
                          <span className="text-[11px] text-neutral-400 block truncate mt-0.5">
                            {item.desc}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Zone 3: Multi-Language Switcher + AI Generator CTA + Mobile Menu */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Multi-Language Dropdown */}
          <div className="relative" ref={langDropdownRef}>
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-200 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 rounded-md transition-colors whitespace-nowrap shrink-0"
              title="Select Language"
            >
              <Globe2 className="w-3.5 h-3.5 text-amber-400" />
              <span>{currentLangInfo.native}</span>
              <ChevronDown className={`w-3 h-3 text-neutral-400 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-lg bg-neutral-900 border border-neutral-800 shadow-xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setIsLangOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-md text-xs font-medium transition-colors flex items-center justify-between ${
                      lang === l.code
                        ? 'bg-amber-400/10 text-amber-300 font-semibold'
                        : 'text-neutral-300 hover:bg-neutral-800'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{l.flag}</span>
                      <span>{l.native}</span>
                    </span>
                    {lang === l.code && <Check className="w-3.5 h-3.5 text-amber-400" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={onOpenGenerator}
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{getNavLabel('generator')}</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-800"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-neutral-950 p-4 space-y-3 animate-in slide-in-from-top-2 duration-150">
          {/* Mobile Language Switcher Row */}
          <div className="flex items-center gap-1.5 p-1 rounded-lg bg-neutral-900 border border-neutral-800 overflow-x-auto">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`flex-1 py-1.5 px-2 rounded text-xs font-medium whitespace-nowrap transition-colors flex items-center justify-center gap-1 ${
                  lang === l.code
                    ? 'bg-amber-400 text-neutral-950 font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <span>{l.flag}</span>
                <span>{l.native}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={() => {
                setActiveTab('seo');
                setIsMobileMenuOpen(false);
              }}
              className={`p-2.5 rounded-lg text-xs font-semibold text-left border ${
                activeTab === 'seo'
                  ? 'bg-amber-400 text-neutral-950 border-amber-400'
                  : 'bg-neutral-900 text-neutral-300 border-neutral-800'
              }`}
            >
              {getNavLabel('seo')}
            </button>
            <button
              onClick={() => {
                setActiveTab('pinterest');
                setIsMobileMenuOpen(false);
              }}
              className={`p-2.5 rounded-lg text-xs font-semibold text-left border ${
                activeTab === 'pinterest'
                  ? 'bg-amber-400 text-neutral-950 border-amber-400'
                  : 'bg-neutral-900 text-neutral-300 border-neutral-800'
              }`}
            >
              {getNavLabel('pinterest')}
            </button>
            <button
              onClick={() => {
                setActiveTab('tiktok');
                setIsMobileMenuOpen(false);
              }}
              className={`p-2.5 rounded-lg text-xs font-semibold text-left border ${
                activeTab === 'tiktok'
                  ? 'bg-amber-400 text-neutral-950 border-amber-400'
                  : 'bg-neutral-900 text-neutral-300 border-neutral-800'
              }`}
            >
              {getNavLabel('tiktok')}
            </button>
            <button
              onClick={() => {
                setActiveTab('facebook');
                setIsMobileMenuOpen(false);
              }}
              className={`p-2.5 rounded-lg text-xs font-semibold text-left border ${
                activeTab === 'facebook'
                  ? 'bg-amber-400 text-neutral-950 border-amber-400'
                  : 'bg-neutral-900 text-neutral-300 border-neutral-800'
              }`}
            >
              {getNavLabel('facebook')}
            </button>
          </div>

          <div className="space-y-1 pt-1">
            <div className="text-[10px] uppercase font-mono text-neutral-500 px-1 py-1">
              {lang === 'bn' ? 'আরও টুলস ও ফিচার' : lang === 'hi' ? 'अन्य टूल्स' : lang === 'es' ? 'Más Módulos' : 'More Tools & Features'}
            </div>
            {moreToolsList.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left p-2 rounded-md text-xs font-medium flex items-center gap-2 ${
                    activeTab === item.id
                      ? 'bg-neutral-800 text-amber-400 font-semibold'
                      : 'text-neutral-300 hover:bg-neutral-900'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-neutral-800">
            <button
              onClick={() => {
                onOpenGenerator();
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-md bg-amber-400 text-neutral-950 font-bold text-xs flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{getNavLabel('generator')}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
