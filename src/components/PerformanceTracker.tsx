import React, { useState, useEffect } from 'react';
import {
  TrendingUp,
  DollarSign,
  MousePointerClick,
  Percent,
  Plus,
  Trash2,
  Download,
  Filter,
  Search,
  CheckCircle2,
  BarChart3,
  RotateCcw,
  Sparkles,
  Info,
} from 'lucide-react';
import { PerformanceLogEntry, LanguageMode } from '../types';

interface PerformanceTrackerProps {
  lang: LanguageMode;
}

const STORAGE_KEY = 'affilorganic_performance_logs_v1';

const INITIAL_DEMO_LOGS: PerformanceLogEntry[] = [
  {
    id: 'log-1',
    campaignName: 'TikTok Faceless #12 (AI SaaS Shortcut)',
    channel: 'TikTok',
    date: '2026-10-28',
    clicks: 580,
    conversions: 24,
    revenue: 72.0,
    cost: 0,
    notes: '3-second hook with CapCut kinetic captions',
  },
  {
    id: 'log-2',
    campaignName: 'Pinterest 2:3 Pin Batch (Keto Recipe Diet)',
    channel: 'Pinterest',
    date: '2026-10-29',
    clicks: 840,
    conversions: 38,
    revenue: 114.0,
    cost: 0,
    notes: 'Split layout photo with bold sans headline',
  },
  {
    id: 'log-3',
    campaignName: 'SEO In-Depth Review: Best Remote Tools 2026',
    channel: 'SEO Blog',
    date: '2026-10-30',
    clicks: 1420,
    conversions: 62,
    revenue: 434.0,
    cost: 15.0,
    notes: 'KGR target keyword ranked #4 on Google',
  },
  {
    id: 'log-4',
    campaignName: 'Bridge Quiz Pre-Lander: Gift Card CPA Offer',
    channel: 'Bridge Page',
    date: '2026-10-31',
    clicks: 720,
    conversions: 94,
    revenue: 188.0,
    cost: 0,
    notes: '2-question quiz filter before CPA locker',
  },
];

export const PerformanceTracker: React.FC<PerformanceTrackerProps> = ({ lang }) => {
  const [logs, setLogs] = useState<PerformanceLogEntry[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error(e);
    }
    return INITIAL_DEMO_LOGS;
  });

  const [showAddForm, setShowAddForm] = useState<boolean>(false);
  const [filterChannel, setFilterChannel] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Form states
  const [formCampaign, setFormCampaign] = useState<string>('');
  const [formChannel, setFormChannel] = useState<PerformanceLogEntry['channel']>('TikTok');
  const [formDate, setFormDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [formClicks, setFormClicks] = useState<number>(100);
  const [formConversions, setFormConversions] = useState<number>(5);
  const [formRevenue, setFormRevenue] = useState<number>(25.0);
  const [formCost, setFormCost] = useState<number>(0);
  const [formNotes, setFormNotes] = useState<string>('');

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));
    } catch (e) {
      console.error(e);
    }
  }, [logs]);

  const handleAddLog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formCampaign.trim()) return;

    const newEntry: PerformanceLogEntry = {
      id: `log-${Date.now()}`,
      campaignName: formCampaign.trim(),
      channel: formChannel,
      date: formDate,
      clicks: Math.max(1, formClicks),
      conversions: Math.max(0, formConversions),
      revenue: Math.max(0, formRevenue),
      cost: Math.max(0, formCost),
      notes: formNotes.trim(),
    };

    setLogs([newEntry, ...logs]);
    setFormCampaign('');
    setFormClicks(100);
    setFormConversions(5);
    setFormRevenue(25.0);
    setFormCost(0);
    setFormNotes('');
    setShowAddForm(false);
  };

  const handleDeleteLog = (id: string) => {
    setLogs(logs.filter((l) => l.id !== id));
  };

  const handleResetDemo = () => {
    setLogs(INITIAL_DEMO_LOGS);
  };

  const handleClearAll = () => {
    if (confirm(lang === 'bn' ? 'সবগুলো ডাটা মুছে ফেলতে চান?' : 'Clear all logged campaign data?')) {
      setLogs([]);
    }
  };

  // Filtered logs
  const filteredLogs = logs.filter((item) => {
    const matchesChannel =
      filterChannel === 'all' || item.channel.toLowerCase() === filterChannel.toLowerCase();
    const matchesSearch =
      item.campaignName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.notes && item.notes.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesChannel && matchesSearch;
  });

  // Global calculations
  const totalClicks = logs.reduce((acc, cur) => acc + cur.clicks, 0);
  const totalConversions = logs.reduce((acc, cur) => acc + cur.conversions, 0);
  const totalRevenue = logs.reduce((acc, cur) => acc + cur.revenue, 0);
  const totalCost = logs.reduce((acc, cur) => acc + cur.cost, 0);
  const netProfit = totalRevenue - totalCost;

  const avgCvr = totalClicks > 0 ? (totalConversions / totalClicks) * 100 : 0;
  const globalEpc = totalClicks > 0 ? totalRevenue / totalClicks : 0;
  const globalRoi = totalCost > 0 ? ((totalRevenue - totalCost) / totalCost) * 100 : totalRevenue > 0 ? 100 : 0;

  // Export CSV
  const handleExportCsv = () => {
    if (logs.length === 0) return;
    const headers = ['ID', 'Campaign Name', 'Channel', 'Date', 'Clicks', 'Conversions', 'CVR (%)', 'Revenue ($)', 'Cost ($)', 'EPC ($)', 'Net Profit ($)', 'Notes'];
    const rows = logs.map((l) => [
      l.id,
      `"${l.campaignName.replace(/"/g, '""')}"`,
      l.channel,
      l.date,
      l.clicks,
      l.conversions,
      l.clicks > 0 ? ((l.conversions / l.clicks) * 100).toFixed(2) : '0',
      l.revenue.toFixed(2),
      l.cost.toFixed(2),
      l.clicks > 0 ? (l.revenue / l.clicks).toFixed(2) : '0',
      (l.revenue - l.cost).toFixed(2),
      `"${(l.notes || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `affilorganic_performance_report_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-10">
      {/* Header Banner */}
      <section className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 sm:p-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
              <BarChart3 className="w-4 h-4" />
              <span>
                {lang === 'bn' ? 'ক্যাম্পেন পারফরম্যান্স ড্যাশবোর্ড' : 'Organic ROI & EPC Performance Dashboard'}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {lang === 'bn'
                ? 'অর্গানিক ক্লিক, কনভার্সন, ইপিবি (EPC) ও আরওআই (ROI) ট্র্যাকার'
                : 'Track Organic Clicks, Conversions, Real-Time EPC & Net Profit'}
            </h1>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-3xl leading-relaxed">
              {lang === 'bn'
                ? 'আপনার পিন্টারেস্ট পিন, টিকটক ভিডিও এবং এসইও ব্লগের অর্গানিক ক্লিক ও লিড ম্যানুয়ালি ট্র্যাক করুন। কোন চ্যানেল থেকে কত EPC (Earnings Per Click) এবং নিট প্রফিট আসছে তা সরাসরি দেখুন।'
                : 'Manually record clicks and conversions from Pinterest, TikTok, and SEO campaigns to monitor your Earnings Per Click (EPC), Conversion Rate, and organic ROI margins.'}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto">
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors shadow-sm"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{lang === 'bn' ? 'নতুন এন্ট্রি যোগ করুন' : 'Log New Campaign'}</span>
            </button>
            <button
              onClick={handleExportCsv}
              disabled={logs.length === 0}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-neutral-300 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 disabled:opacity-50 rounded-md transition-colors"
              title="Export Report to CSV"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">CSV</span>
            </button>
          </div>
        </div>

        {/* Concept Pill-Free Explanation */}
        <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-neutral-800 text-xs text-neutral-400">
          <div className="flex items-center gap-1">
            <span className="text-neutral-200 font-semibold">EPC (Earnings Per Click):</span>
            <span className="font-mono text-emerald-400">Total Revenue ÷ Total Clicks</span>
          </div>
          <span aria-hidden="true" className="text-neutral-700">·</span>
          <div className="flex items-center gap-1">
            <span className="text-neutral-200 font-semibold">CVR (Conversion Rate):</span>
            <span className="font-mono text-amber-400">(Conversions ÷ Clicks) × 100</span>
          </div>
          <span aria-hidden="true" className="text-neutral-700">·</span>
          <div className="flex items-center gap-1">
            <span className="text-neutral-200 font-semibold">Zero-Ad Margin:</span>
            <span className="font-mono text-sky-400">100% Pure Organic Profit</span>
          </div>
        </div>
      </section>

      {/* Summary KPI Strip */}
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {/* KPI 1 */}
        <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-1">
          <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 block">
            {lang === 'bn' ? 'মোট ক্লিক' : 'Total Clicks'}
          </span>
          <div className="text-xl font-extrabold text-white font-mono tabular-nums">
            {totalClicks.toLocaleString()}
          </div>
          <span className="text-[10px] text-neutral-500 font-mono">Organic Traffic</span>
        </div>

        {/* KPI 2 */}
        <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-1">
          <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 block">
            {lang === 'bn' ? 'কনভার্সন (Leads)' : 'Conversions'}
          </span>
          <div className="text-xl font-extrabold text-emerald-400 font-mono tabular-nums">
            {totalConversions.toLocaleString()}
          </div>
          <span className="text-[10px] text-neutral-500 font-mono">Completed Actions</span>
        </div>

        {/* KPI 3 */}
        <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-1">
          <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 block">
            {lang === 'bn' ? 'গড় কনভার্সন রেট' : 'Conversion Rate'}
          </span>
          <div className="text-xl font-extrabold text-amber-400 font-mono tabular-nums">
            {avgCvr.toFixed(2)}%
          </div>
          <span className="text-[10px] text-neutral-500 font-mono">CVR Benchmark</span>
        </div>

        {/* KPI 4: EPC */}
        <div className="p-4 rounded-xl bg-neutral-900/60 border border-emerald-500/30 space-y-1">
          <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-400 block">
            {lang === 'bn' ? 'গড় ইপিবি (EPC)' : 'Earnings Per Click'}
          </span>
          <div className="text-xl font-extrabold text-emerald-300 font-mono tabular-nums">
            ${globalEpc.toFixed(2)}
          </div>
          <span className="text-[10px] text-emerald-500/80 font-mono">Revenue per Click</span>
        </div>

        {/* KPI 5: Revenue */}
        <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-1">
          <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 block">
            {lang === 'bn' ? 'মোট আয়' : 'Total Revenue'}
          </span>
          <div className="text-xl font-extrabold text-white font-mono tabular-nums">
            ${totalRevenue.toFixed(2)}
          </div>
          <span className="text-[10px] text-neutral-500 font-mono">Gross Commissions</span>
        </div>

        {/* KPI 6: Net Profit */}
        <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-1">
          <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 block">
            {lang === 'bn' ? 'নিট লাভ (ROI)' : 'Net Profit'}
          </span>
          <div className="text-xl font-extrabold text-amber-400 font-mono tabular-nums">
            ${netProfit.toFixed(2)}
          </div>
          <span className="text-[10px] text-neutral-500 font-mono">
            ROI: {globalRoi >= 1000 ? '>999%' : `${globalRoi.toFixed(0)}%`}
          </span>
        </div>
      </section>

      {/* Add New Entry Form (Conditional) */}
      {showAddForm && (
        <form
          onSubmit={handleAddLog}
          className="p-6 rounded-xl bg-neutral-900 border border-amber-500/40 shadow-xl space-y-4 animate-in fade-in duration-200"
        >
          <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Plus className="w-4 h-4 text-amber-400" />
              <span>{lang === 'bn' ? 'নতুন ক্যাম্পেন এন্ট্রি যুক্ত করুন' : 'Log Campaign Performance Entry'}</span>
            </h3>
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="text-xs text-neutral-400 hover:text-white"
            >
              Cancel
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                {lang === 'bn' ? 'ক্যাম্পেন বা কনটেন্টের নাম:' : 'Campaign / Content Name:'}
              </label>
              <input
                type="text"
                required
                value={formCampaign}
                onChange={(e) => setFormCampaign(e.target.value)}
                placeholder="e.g. TikTok Video #15 (Weight Loss Tea) or SEO Post"
                className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-md text-white text-xs focus:border-amber-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">Channel</label>
              <select
                value={formChannel}
                onChange={(e) => setFormChannel(e.target.value as any)}
                className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-md text-white text-xs"
              >
                <option value="Pinterest">Pinterest</option>
                <option value="TikTok">TikTok</option>
                <option value="SEO Blog">SEO Blog</option>
                <option value="Bridge Page">Bridge Page</option>
                <option value="YouTube Shorts">YouTube Shorts</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">Date</label>
              <input
                type="date"
                required
                value={formDate}
                onChange={(e) => setFormDate(e.target.value)}
                className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-md text-white text-xs font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                {lang === 'bn' ? 'মোট ক্লিক (Clicks):' : 'Clicks:'}
              </label>
              <input
                type="number"
                min="1"
                required
                value={formClicks}
                onChange={(e) => setFormClicks(parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-md text-white text-xs font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                {lang === 'bn' ? 'কনভার্সন (Leads / Sales):' : 'Conversions:'}
              </label>
              <input
                type="number"
                min="0"
                required
                value={formConversions}
                onChange={(e) => setFormConversions(parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-md text-white text-xs font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                {lang === 'bn' ? 'আয় / কমিশন ($):' : 'Revenue ($):'}
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                required
                value={formRevenue}
                onChange={(e) => setFormRevenue(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-md text-white text-xs font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                {lang === 'bn' ? 'খরচ ($ - অর্গানিক হলে ০):' : 'Cost ($ - 0 for Organic):'}
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={formCost}
                onChange={(e) => setFormCost(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-md text-white text-xs font-mono"
              />
            </div>

            <div className="sm:col-span-2 lg:col-span-4">
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                {lang === 'bn' ? 'নোট / ব্যবহৃত হুক বা স্ট্র্যাটেজি:' : 'Notes / Hook details:'}
              </label>
              <input
                type="text"
                value={formNotes}
                onChange={(e) => setFormNotes(e.target.value)}
                placeholder="e.g. Used Hook #2, reached 14k views, 60% retention"
                className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-md text-white text-xs"
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="px-3 py-1.5 text-xs text-neutral-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
            >
              {lang === 'bn' ? 'সেভ করুন' : 'Save Entry'}
            </button>
          </div>
        </form>
      )}

      {/* Filter and Search Bar */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-3">
          {/* Channel Filters */}
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 'all', label: 'All Channels' },
              { id: 'pinterest', label: 'Pinterest' },
              { id: 'tiktok', label: 'TikTok' },
              { id: 'seo blog', label: 'SEO Blog' },
              { id: 'bridge page', label: 'Bridge Page' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterChannel(tab.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  filterChannel === tab.id
                    ? 'bg-neutral-800 text-white border border-neutral-700'
                    : 'text-neutral-400 hover:text-white bg-transparent'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input & Reset Demo Controls */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search campaigns..."
                className="pl-8 pr-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-md text-white text-xs focus:border-amber-400 focus:outline-none w-44 sm:w-56"
              />
              <Search className="w-3.5 h-3.5 text-neutral-500 absolute left-2.5 top-2.5" />
            </div>

            <button
              onClick={handleResetDemo}
              className="px-2.5 py-1.5 text-xs text-neutral-400 hover:text-white border border-neutral-800 rounded-md transition-colors flex items-center gap-1"
              title="Reset Sample Data"
            >
              <RotateCcw className="w-3 h-3" />
              <span className="hidden sm:inline">Reset</span>
            </button>

            <button
              onClick={handleClearAll}
              className="px-2.5 py-1.5 text-xs text-rose-400/80 hover:text-rose-300 border border-neutral-800 rounded-md transition-colors flex items-center gap-1"
              title="Clear All"
            >
              <Trash2 className="w-3 h-3" />
              <span className="hidden sm:inline">Clear</span>
            </button>
          </div>
        </div>

        {/* High Density Table */}
        <div className="overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-900/40">
          <table className="w-full text-left text-xs text-neutral-300 border-collapse">
            <thead className="bg-neutral-950/80 text-[11px] font-mono uppercase tracking-wider text-neutral-400 border-b border-neutral-800">
              <tr>
                <th className="py-3 px-4 font-semibold">Campaign &amp; Channel</th>
                <th className="py-3 px-4 font-semibold">Date</th>
                <th className="py-3 px-4 font-semibold text-right">Clicks</th>
                <th className="py-3 px-4 font-semibold text-right">Conversions</th>
                <th className="py-3 px-4 font-semibold text-right">CVR</th>
                <th className="py-3 px-4 font-semibold text-right">Revenue</th>
                <th className="py-3 px-4 font-semibold text-right text-emerald-400">EPC</th>
                <th className="py-3 px-4 font-semibold text-right">Net Profit</th>
                <th className="py-3 px-4 font-semibold text-center w-12">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/80 font-sans">
              {filteredLogs.length > 0 ? (
                filteredLogs.map((log) => {
                  const cvr = log.clicks > 0 ? (log.conversions / log.clicks) * 100 : 0;
                  const epc = log.clicks > 0 ? log.revenue / log.clicks : 0;
                  const net = log.revenue - log.cost;

                  return (
                    <tr
                      key={log.id}
                      className="hover:bg-neutral-800/30 transition-colors h-11"
                    >
                      <td className="py-2.5 px-4">
                        <div className="font-semibold text-white leading-tight">
                          {log.campaignName}
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 mt-0.5">
                          <span className="font-mono text-amber-400/90">{log.channel}</span>
                          {log.notes && (
                            <>
                              <span aria-hidden="true">·</span>
                              <span className="italic truncate max-w-[220px]">{log.notes}</span>
                            </>
                          )}
                        </div>
                      </td>

                      <td className="py-2.5 px-4 font-mono text-[11px] text-neutral-400 whitespace-nowrap">
                        {log.date}
                      </td>

                      <td className="py-2.5 px-4 text-right font-mono tabular-nums text-neutral-200">
                        {log.clicks.toLocaleString()}
                      </td>

                      <td className="py-2.5 px-4 text-right font-mono tabular-nums text-emerald-400 font-semibold">
                        {log.conversions.toLocaleString()}
                      </td>

                      <td className="py-2.5 px-4 text-right font-mono tabular-nums text-amber-300">
                        {cvr.toFixed(2)}%
                      </td>

                      <td className="py-2.5 px-4 text-right font-mono tabular-nums text-white">
                        ${log.revenue.toFixed(2)}
                      </td>

                      <td className="py-2.5 px-4 text-right font-mono tabular-nums text-emerald-400 font-bold">
                        ${epc.toFixed(2)}
                      </td>

                      <td className="py-2.5 px-4 text-right font-mono tabular-nums font-semibold text-white">
                        ${net.toFixed(2)}
                      </td>

                      <td className="py-2.5 px-4 text-center">
                        <button
                          onClick={() => handleDeleteLog(log.id)}
                          className="p-1 rounded text-neutral-500 hover:text-rose-400 hover:bg-neutral-800 transition-colors"
                          title="Delete entry"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={9} className="py-12 text-center text-neutral-500 text-xs">
                    {lang === 'bn'
                      ? 'কোনো ক্যাম্পেন ডাটা পাওয়া যায়নি। ওপরের "নতুন এন্ট্রি যোগ করুন" বাটনে ক্লিক করে তথ্য লিখুন।'
                      : 'No campaign logs match your filters. Click "Log New Campaign" to record your first clicks.'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
