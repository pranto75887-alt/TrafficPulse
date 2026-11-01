import React, { useState } from 'react';
import { Header } from './components/Header';
import { OverviewSection } from './components/OverviewSection';
import { SeoStrategySection } from './components/SeoStrategySection';
import { PinterestSection } from './components/PinterestSection';
import { TikTokSection } from './components/TikTokSection';
import { BridgePageSection } from './components/BridgePageSection';
import { KgrCalculator } from './components/KgrCalculator';
import { HookAnalyzer } from './components/HookAnalyzer';
import { AiCampaignGenerator } from './components/AiCampaignGenerator';
import { MarketInsightPanel } from './components/MarketInsightPanel';
import { VideoToScriptGenerator } from './components/VideoToScriptGenerator';
import { PerformanceTracker } from './components/PerformanceTracker';
import { SiteRankSpyTool } from './components/SiteRankSpyTool';
import { FacebookContentWriter } from './components/FacebookContentWriter';
import { EmailSequenceGenerator } from './components/EmailSequenceGenerator';
import { YouTubeShortsSection } from './components/YouTubeShortsSection';
import { AdBanner } from './components/AdBanner';
import { ChannelType, LanguageMode } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<ChannelType>('video-to-script');
  const [lang, setLang] = useState<LanguageMode>('bn');
  const [generatorData, setGeneratorData] = useState<any>(null);

  const handleOpenGeneratorWithPrompt = (data: any) => {
    setGeneratorData(data);
    setActiveTab('generator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLaunchCampaignFromTrend = (topic: string, niche: string, offerType: string) => {
    setGeneratorData({
      offerName: topic,
      niche: niche,
      offerType: offerType,
      channel: 'seo',
    });
    setActiveTab('generator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-200">
      {/* Monetization & Live Ads Banner */}
      <AdBanner lang={lang} variant="top-banner" />

      {/* Top Bar following Top Bar Contract */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        lang={lang}
        setLang={setLang}
        onOpenGenerator={() => {
          setGeneratorData(null);
          setActiveTab('generator');
        }}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {activeTab === 'overview' && (
          <OverviewSection
            lang={lang}
            setActiveTab={setActiveTab}
            onOpenGenerator={() => setActiveTab('generator')}
          />
        )}

        {activeTab === 'market-insights' && (
          <MarketInsightPanel
            lang={lang}
            onLaunchCampaignWithTopic={handleLaunchCampaignFromTrend}
          />
        )}

        {activeTab === 'video-to-script' && (
          <VideoToScriptGenerator
            lang={lang}
            onSendToCampaign={handleLaunchCampaignFromTrend}
          />
        )}

        {activeTab === 'seo' && (
          <SeoStrategySection
            lang={lang}
            onOpenAiWithPrompt={handleOpenGeneratorWithPrompt}
          />
        )}

        {activeTab === 'pinterest' && (
          <PinterestSection
            lang={lang}
            onOpenAiWithPrompt={handleOpenGeneratorWithPrompt}
          />
        )}

        {activeTab === 'tiktok' && (
          <TikTokSection
            lang={lang}
            onOpenAiWithPrompt={handleOpenGeneratorWithPrompt}
          />
        )}

        {activeTab === 'youtube-shorts' && (
          <YouTubeShortsSection
            lang={lang}
            onSendToCampaign={handleLaunchCampaignFromTrend}
          />
        )}

        {activeTab === 'facebook' && (
          <FacebookContentWriter
            lang={lang}
            onSendToGenerator={handleLaunchCampaignFromTrend}
          />
        )}

        {activeTab === 'site-spy' && (
          <SiteRankSpyTool
            lang={lang}
            onSendToGenerator={handleLaunchCampaignFromTrend}
          />
        )}

        {activeTab === 'bridge' && (
          <BridgePageSection
            lang={lang}
            onOpenAiWithPrompt={handleOpenGeneratorWithPrompt}
          />
        )}

        {activeTab === 'email-sequence' && (
          <EmailSequenceGenerator
            lang={lang}
            onSendToCampaign={handleLaunchCampaignFromTrend}
          />
        )}

        {activeTab === 'tracker' && (
          <PerformanceTracker lang={lang} />
        )}

        {activeTab === 'tools' && (
          <div className="space-y-12">
            <KgrCalculator lang={lang} />
            <HookAnalyzer lang={lang} />
          </div>
        )}

        {activeTab === 'generator' && (
          <AiCampaignGenerator
            lang={lang}
            initialPromptData={generatorData}
            onClose={() => setActiveTab('overview')}
          />
        )}
      </main>

      {/* Clean, Quiet Footer */}
      <footer className="border-t border-neutral-800 bg-neutral-950/80 py-8 text-neutral-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-neutral-300">TrafficPulse Studio</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'bn' ? 'অর্গানিক মার্কেটিং অ্যান্ড ট্রাফিক আর্কিটেক্ট' : 'Organic Traffic & Affiliate Funnels'}</span>
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveTab('seo')}
              className="hover:text-neutral-300 transition-colors"
            >
              SEO Blueprint
            </button>
            <button
              onClick={() => setActiveTab('pinterest')}
              className="hover:text-neutral-300 transition-colors"
            >
              Pinterest Pins
            </button>
            <button
              onClick={() => setActiveTab('video-to-script')}
              className="hover:text-neutral-300 transition-colors"
            >
              Video to Script
            </button>
            <button
              onClick={() => setActiveTab('tiktok')}
              className="hover:text-neutral-300 transition-colors"
            >
              TikTok Strategy
            </button>
            <button
              onClick={() => setActiveTab('tracker')}
              className="hover:text-neutral-300 transition-colors"
            >
              Performance Tracker
            </button>
            <button
              onClick={() => setActiveTab('bridge')}
              className="hover:text-neutral-300 transition-colors"
            >
              Bridge Funnels
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
