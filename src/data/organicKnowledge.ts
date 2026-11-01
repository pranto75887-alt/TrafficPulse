import { SeoTitleIdea, BlogStructureTemplate, PinterestTemplate, TikTokFramework } from '../types';

export const SEO_CURATED_TITLES: SeoTitleIdea[] = [
  {
    id: 'seo-title-1',
    title: 'Is [Product Name] Actually Worth It? 60-Day Real Test & Brutal Honest Review (2026)',
    bnTitle: '[প্রোডাক্টের নাম] কি সত্যিই কার্যকর? ৬০ দিনের বাস্তব টেস্ট ও নিরপেক্ষ রিভিউ (২০২৬)',
    targetKeyword: '[product name] review 2026',
    searchIntent: 'Commercial',
    competitionLevel: 'Low',
    format: 'Product Review',
    searchVolumeEstimate: '1,200 - 4,500 / month',
    monetizationAngle: 'Affiliate commission via direct discount link + bonus PDF guide to boost conversion.',
    outline: [
      'The Big Dilemma: Why everyone is talking about this product right now',
      'Quick Verdict Box: 4.8/5 Rating, Best For, Pricing, Bottom Line',
      'What is [Product] & How Does It Actually Work under the hood?',
      'My 60-Day Testing Experience & Quantifiable Results',
      'Brutal Pros vs Cons (Including 2 things I disliked)',
      'Hidden Pricing, Refund Guarantee & Exclusive Discount Link',
      'Final Recommendation: Who Should Buy It vs Who Should Skip',
    ],
  },
  {
    id: 'seo-title-2',
    title: '[Tool A] vs [Tool B]: Which One Gives You 2X Better Results Without Breaking the Bank?',
    bnTitle: '[টুল এ] বনাম [টুল বি]: কোনটি আপনার কাজের জন্য সেরা এবং সাশ্রয়ী? পূর্ণ তুলনা',
    targetKeyword: '[tool a] vs [tool b]',
    searchIntent: 'Commercial',
    competitionLevel: 'Very Low (KGR < 0.25)',
    format: 'Vs Comparison',
    searchVolumeEstimate: '800 - 2,400 / month',
    monetizationAngle: 'Dual affiliate monetization: earn from either tool the buyer selects, with a clear winner recommendation.',
    outline: [
      'Direct Comparison Summary Matrix (Features, Ease, Price, Winner)',
      'Core Difference #1: User Experience and Learning Curve',
      'Core Difference #2: Pricing Breakdown & Hidden Add-on Costs',
      'Core Difference #3: Customer Support & Automation Features',
      'The Ultimate Verdict: When to Pick [Tool A] vs When [Tool B] is King',
      'Special Promo Codes & Sign-up Links',
    ],
  },
  {
    id: 'seo-title-3',
    title: 'How to [Achieve Major Desired Result] in 7 Steps (Even If You Are a Total Beginner)',
    bnTitle: 'নতুনদের জন্য ধাপে ধাপে [কাঙ্ক্ষিত ফলাফল] অর্জনের ৭টি সহজ কৌশল (সম্পূর্ণ গাইড)',
    targetKeyword: 'how to [solve pain point] for beginners',
    searchIntent: 'Informational',
    competitionLevel: 'Low',
    format: 'Step-by-Step Tutorial',
    searchVolumeEstimate: '2,500 - 8,000 / month',
    monetizationAngle: 'In-content native product placement as the indispensable shortcut tool that automates step 4.',
    outline: [
      'The Common Mistake 90% of beginners make that wastes weeks of effort',
      'Step 1 to 3: The Free Fundamental Setup',
      'Step 4: The Game-Changer Automation (Natural Affiliate Tool Introduction)',
      'Step 5 to 7: Execution & Measuring Tangible Progress',
      'Free Downloadable Checklist / Action Plan (Captures Email / Lead)',
      'Frequently Asked Questions & Troubleshooting Tips',
    ],
  },
];

export const BLOG_STRUCTURE_TEMPLATES: BlogStructureTemplate[] = [
  {
    id: 'single-review',
    name: '1. In-Depth Single Product Review',
    description: 'Highest conversion rate format for high-ticket affiliates and CPA offers with brand search traffic.',
    badge: 'Conversion Rate: 8% - 14%',
    conversionFocus: 'Quick-Verdict Box above fold + Honest Negative Points to build trust.',
    sections: [
      {
        heading: 'Hook & Quick Verdict Box',
        description: 'Provide immediate answer to "Should I buy this?" with star ratings, badge, price, and affiliate CTA button.',
        tips: 'Keep above the fold so mobile users see the verdict in 3 seconds.',
      },
      {
        heading: 'What Is It & Who Made It',
        description: 'Brief origin, credibility of creator/company, and what problem it claims to solve.',
        tips: 'Avoid generic fluff; explain the core mechanism.',
      },
      {
        heading: 'Hands-on Testing & Proof',
        description: 'Include genuine screenshots, test metrics, timeline, and tangible changes.',
        tips: 'Proof adjacent to claim: Show actual dashboard or photo proof.',
      },
      {
        heading: 'Pros & Cons Table',
        description: 'List 4 concrete pros and at least 2 real, minor cons.',
        tips: 'Articles without cons look like sponsored propaganda and convert 40% worse.',
      },
      {
        heading: 'Final Call to Action with Money-Back Guarantee',
        description: 'Emphasize the risk-free refund policy with a high-contrast button.',
        tips: 'Add an affiliate disclosure: "We may earn a commission at no extra cost to you."',
      },
    ],
    markdownTemplate: `# [Product Name] Review (2026): Is It Worth Your Money?

*Affiliate Disclosure: This post contains affiliate links. If you purchase through our links, we may earn a commission at zero additional cost to you.*

---

## ⚡ Quick Verdict
- **Our Rating:** ⭐⭐⭐⭐⭐ 4.8 / 5.0
- **Best For:** [Specific Target Audience]
- **Key Benefit:** [The Single Biggest Transformation]
- **Current Price:** $[XX] (Limited-time discount)
- **Official Website:** [👉 Claim 60% Off [Product Name] Here](https://your-bridge-page.com)

---

## What Exactly Is [Product Name]?
[Explain in 2 short paragraphs what problem it tackles and who designed it.]

## My Hands-On 30-Day Testing Experience
[Share exact milestones: Week 1 setup, Week 2 breakthrough, Week 4 final outcome with numbers.]

## Pros and Cons
| Pros | Cons |
| :--- | :--- |
| ✅ Instant setup in under 5 minutes | ⚠️ Requires consistent daily use |
| ✅ Comprehensive step-by-step guidance | ⚠️ Slight learning curve on day 1 |
| ✅ 60-day money-back guarantee | ⚠️ Limited stock available |

## Who Should Buy This vs Who Should Avoid It?
- **Buy if:** You want [benefit] without spending hours on [frustrating task].
- **Avoid if:** You expect an overnight miracle without following the instructions.

## Final Thoughts & Discount Link
[Final reassuring paragraph]
[👉 Get Instant Access to [Product Name] with Guarantee](https://your-bridge-page.com)
`,
  },
  {
    id: 'vs-comparison',
    name: '2. "Tool A" vs "Tool B" Battle',
    description: 'Target prospects who have their credit card out and are debating between two options.',
    badge: 'Conversion Rate: 10% - 18%',
    conversionFocus: 'Comparison matrix table with a clear verdict for different user profiles.',
    sections: [
      {
        heading: 'Side-by-Side Comparison Matrix',
        description: 'Full spec sheet comparing pricing, core features, ease of use, support, and ideal user.',
        tips: 'Highlight the winner in each row with bold text.',
      },
      {
        heading: 'Head-to-Head Round 1: Core Features',
        description: 'Deep dive into what both tools offer and where one shines.',
        tips: 'Focus on workflow speed rather than boring technical lists.',
      },
      {
        heading: 'Head-to-Head Round 2: Pricing & True Value',
        description: 'Break down monthly vs annual cost, upgrade traps, and refund terms.',
        tips: 'Show cost-per-feature math.',
      },
      {
        heading: 'The Definitive Verdict',
        description: 'Who should choose Tool A and who should choose Tool B.',
        tips: 'Include distinct affiliate buttons for both tools so you earn either way.',
      },
    ],
    markdownTemplate: `# [Option A] vs [Option B]: The Definitive 2026 Comparison

Debating between **[Option A]** and **[Option B]**? Both are heavyweights in [niche], but they serve very different needs. Here is our direct test breakdown.

## Quick Comparison Table
| Feature | [Option A] | [Option B] | Winner |
| :--- | :--- | :--- | :--- |
| **Best For** | Beginners | Advanced Users | Tie |
| **Starting Price** | $29/mo | $49/mo | Option A |
| **Ease of Setup** | 5 Mins | 20 Mins | Option A |
| **Advanced Depth** | Moderate | Extreme | Option B |
| **Free Trial** | 14 Days | 7 Days | Option A |

## Deep Dive: Where [Option A] Wins
[Explain Option A's standout advantages]
[👉 Try [Option A] Free for 14 Days](https://your-bridge-page.com/a)

## Deep Dive: Where [Option B] Dominates
[Explain Option B's power features]
[👉 Explore [Option B] Pro](https://your-bridge-page.com/b)

## Final Recommendation
- Pick **[Option A]** if you need fast setup and high ease of use.
- Pick **[Option B]** if you need enterprise-level customization.
`,
  },
  {
    id: 'how-to-tutorial',
    name: '3. Step-by-Step Problem-Solving Tutorial',
    description: 'Captures high-volume informational search traffic and introduces the affiliate offer naturally as the essential shortcut tool.',
    badge: 'Traffic Volume: High | Passive Lead Magnet',
    conversionFocus: 'Native placement where manual work is replaced by the recommended offer.',
    sections: [
      {
        heading: 'The Frustrating Problem & False Starts',
        description: 'Agitate the pain point that brought the reader to Google.',
        tips: 'Demonstrate deep empathy so they know you understand their struggle.',
      },
      {
        heading: 'Step-by-Step Action Plan',
        description: 'Clear, actionable instructions with screenshots or numbered lists.',
        tips: 'Give genuine value first so the reader respects your expertise.',
      },
      {
        heading: 'The Automated Shortcut (The Pitch)',
        description: 'Show how doing it manually takes 4 hours, but using [Affiliate Tool] does it in 60 seconds.',
        tips: 'Present the tool as saving time and preventing costly errors.',
      },
    ],
    markdownTemplate: `# How to [Solve Problem] in 2026 (Step-by-Step Guide)

Struggling with [common pain point]? You are not alone. In this complete guide, you will learn the exact sequence to fix it in 7 simple steps.

## Step 1: Initial Diagnosis
[Actionable instruction with checklist]

## Step 2: Preparing Your Workspace
[Step details]

## Step 3: The Shortcut Tool That Saves 10+ Hours
While you can do this step manually by [tedious process], the smart way is using **[Recommended Affiliate Tool]**.
- Automatically handles [complex task]
- Eliminates human calculation errors
- Saves an average of 4.5 hours per week

[👉 Check Out [Recommended Tool] (Special Free Trial)](https://your-bridge-page.com)

## Step 4 to 7: Execution & Verification
[Remaining steps]

## Conclusion & Free Checklist
[Final action call]
`,
  },
  {
    id: 'roundup-buyers-guide',
    name: '4. "Best 7 [Products] for [Audience]" Roundup',
    description: 'Classic authority site bread-and-butter post that ranks for multi-item commercial searches.',
    badge: 'High RPM & Multi-Link Affiliate Revenue',
    conversionFocus: 'Badges like "Best Overall", "Best Budget", "Best for Pros" to help skimming buyers.',
    sections: [
      {
        heading: 'Top Picks Summary Ribbon',
        description: 'Top 3 picks placed directly at the top with thumbnail, price, and CTA.',
        tips: 'Over 60% of clicks happen in the top summary widget before reading.',
      },
      {
        heading: 'Detailed Product Cards',
        description: 'Each product gets a 3-paragraph spotlight with specs, pros, cons, and link.',
        tips: 'Use consistent headings for each item for easy scanning.',
      },
      {
        heading: 'Buyer’s Guide & FAQ',
        description: 'How we tested, key factors to consider, and FAQ schema questions.',
        tips: 'FAQ schema helps you capture Google rich snippet accordions.',
      },
    ],
    markdownTemplate: `# 7 Best [Product Category] for [Audience] (Tested & Ranked 2026)

Looking for the best [product]? We spent 40+ hours testing 15 top solutions. Here are our top 7 ranked picks for 2026.

## At a Glance: Our Top Recommendations
1. 🏆 **Best Overall:** [Product 1] - Unmatched balance of features and speed. [Check Price]
2. 💰 **Best Budget Pick:** [Product 2] - All essential features at half the price. [Check Price]
3. 🚀 **Best for Professionals:** [Product 3] - Maximum horsepower. [Check Price]

---

## 1. [Product 1] - Best Overall Choice
[In-depth review, pros/cons, and link]

## 2. [Product 2] - Best Value for Budget
[In-depth review, pros/cons, and link]

...
`,
  },
];

export const ON_PAGE_SEO_CHECKLIST = [
  {
    category: 'Search Engine Optimization',
    item: 'Target Keyword in H1, First 100 Words & Title Tag',
    detail: 'Keep the exact target keyword inside the H1 headline and in the very first sentence to lock in relevance signals.',
    importance: 'Critical',
  },
  {
    category: 'Search Engine Optimization',
    item: 'Keyword Golden Ratio (KGR) Formula Check',
    detail: 'Target long-tail queries where allintitle results / monthly search volume < 0.25 for guaranteed fast ranking.',
    importance: 'High',
  },
  {
    category: 'Search Engine Optimization',
    item: 'Schema.org JSON-LD (ProductReview & FAQPage)',
    detail: 'Include structured data for star ratings, author credentials, and FAQs to capture Google rich snippet real estate.',
    importance: 'High',
  },
  {
    category: 'User Experience & Conversion',
    item: 'Quick-Verdict Box Above the Mobile Fold',
    detail: 'Over 65% of organic traffic is mobile. Give the final verdict and CTA button within the first 400px of scrolling.',
    importance: 'Critical',
  },
  {
    category: 'User Experience & Conversion',
    item: 'Sticky Floating CTA or Comparison Table',
    detail: 'Include a high-contrast comparison table with clear "Visit Official Site" buttons that stand out.',
    importance: 'High',
  },
  {
    category: 'Compliance & Safety',
    item: 'FTC & Platform Affiliate Disclosure Banner',
    detail: 'Always state clearly: "We may earn an affiliate commission at no extra cost to you." Keeps your site compliant with Google & FTC.',
    importance: 'Mandatory',
  },
  {
    category: 'Link Architecture',
    item: 'Nofollow / Sponsored Rel Tags on Outbound Affiliate Links',
    detail: 'Always use rel="sponsored nofollow" on direct affiliate links to prevent Google penalizing your outbound link profile.',
    importance: 'Critical',
  },
  {
    category: 'Link Architecture',
    item: 'Topic Cluster Internal Links (3-5 Relevant Contextual Links)',
    detail: 'Link your review articles back to your core Pillar Guide and cross-link between complementary tutorials.',
    importance: 'High',
  },
];

export const PINTEREST_STRATEGY = {
  overview:
    'Pinterest is NOT social media; it is a visual search engine where pins have a 4-month to 1-year lifespan (compared to 24 hours on Instagram/TikTok). Ideal for high-buyer-intent niches like home, health, fitness, finance, and DIY.',
  antiBanNotice:
    'CRITICAL WARNING FOR CPA & AFFILIATE MARKETERS: Directly pinning raw CPA locker links (e.g., CPAgrip, CPALead) or direct raw affiliate links will get your Pinterest domain blacklisted within 72 hours. You MUST link to a compliant Bridge Page (a free Blogger/WordPress review page, Google Site, or Notion/Medium resource guide).',
  bestPractices: [
    'Use 2:3 vertical aspect ratio (1000 x 1500 px). Never upload horizontal photos.',
    'Use high-contrast bold typography on the top half of the pin (readable on small mobile feeds).',
    'Add a strong pattern-interrupt hook (e.g. "The 5-Minute Routine That Actually Works" or "Before You Buy [X], Read This").',
    'Write 250+ character descriptions packed with keyword variations found on Pinterest Trends.',
    'Pin 3-5 fresh pins daily (fresh image file + new text overlay, even if pointing to the same high-performing blog post).',
  ],
  templates: [
    {
      title: '7 Proven [Topic] Hacks That Transformed My [Goal]',
      overlayText: 'STOP DOING [COMMON MISTAKE]! Try This 3-Step Fix',
      category: 'How-To / Problem Agitation',
      ctrTrigger: 'Urgency + Mistake Correction',
      descriptionPrompt: 'Save this pin for later! If you want to achieve [goal] without [pain point], here are 7 proven strategies...',
      designRule: 'Split vertical layout: Upper 50% aesthetic lifestyle photo, lower 50% solid color block with bold contrasting sans font.',
    },
    {
      title: 'The Honest Truth About [Product/Method]: Real Review',
      overlayText: 'BEFORE YOU TRY [METHOD]... Read This First!',
      category: 'Product Review / Caution Hook',
      ctrTrigger: 'Curiosity Gap + Fear of Wasted Money',
      descriptionPrompt: 'Is [Product] really worth the hype in 2026? Click through to read our complete 30-day honest breakdown before you spend money.',
      designRule: 'Clean minimal card with star rating graphic and high-resolution product mockup.',
    },
    {
      title: 'Free Cheat Sheet: 10 [Niche] Shortcuts for Beginners',
      overlayText: 'FREE GUIDE: [Topic] Roadmap 2026 (Printable PDF)',
      category: 'Lead Magnet / Free Resource',
      ctrTrigger: 'High Perceived Value (Free)',
      descriptionPrompt: 'Download the complete checklist! Perfect for anyone getting started in [niche]. Click the link to grab your free copy now.',
      designRule: 'Mockup of a printed checklist or iPad screen displaying the guide page.',
    },
  ] as PinterestTemplate[],
};

export const TIKTOK_STRATEGY = {
  overview:
    'TikTok is the fastest engine for instant explosive reach. The algorithm tests your video on 250-500 people. If watch time is >65% and viewers don’t swipe away in the first 3 seconds, it pushes you into viral distribution.',
  facelessMethod:
    'You DO NOT need to show your face. Use aesthetic high-quality 4K stock b-roll (from Pexels, CapCut, or screen recording demos), dynamic auto-captions with color highlights, trending ambient sounds, and realistic AI voiceover.',
  antiBanNotice:
    'Never put a raw CPA locker or direct bit.ly link in your TikTok bio. TikTok will restrict your account for "commercial spam". Instead, use a curated bio tool like Beacons.ai, Stan Store, or a clean 1-page Notion / Google Site bridge funnel.',
  frameworks: [
    {
      name: 'The Controversial Warning Hook',
      duration: '15 - 25 seconds',
      hookType: 'Pattern Interrupt / Fear of Missing Out',
      hookExample: 'If you are still trying to [solve problem] using [traditional method], please stop. You are literally wasting your time.',
      bodyFormula: 'Show why the old method fails in 2 seconds -> Introduce the underground alternative that pros use -> Show quick screen proof.',
      ctaText: 'I put the exact step-by-step breakdown and link at the top of my bio.',
      bRollIdea: 'Person frustrated at desk or typing fast, followed by a clean screen recording of the solution.',
    },
    {
      name: 'The "Secret Tool I Wish I Knew Earlier"',
      duration: '20 - 30 seconds',
      hookType: 'Underground Discovery',
      hookExample: 'I found an insane loophole/tool for [niche] that nobody is talking about on TikTok.',
      bodyFormula: 'Show website or product packaging -> Demonstrate 1 mind-blowing feature that solves a 2-hour task in 10 seconds -> Emphasize the free trial/deal.',
      ctaText: 'Drop a comment if you want the link or grab it from the link in my profile.',
      bRollIdea: 'Cinematic point-of-view (POV) shot of laptop screen or hands holding the device.',
    },
    {
      name: 'The 3-Mistake Countdown',
      duration: '30 - 45 seconds',
      hookType: 'Listicle & High Retention Watch-Through',
      hookExample: '3 fatal mistakes that are destroying your [goal] (number 3 is why 95% fail).',
      bodyFormula: 'Mistake 1 (quick 4s) -> Mistake 2 (quick 5s) -> Mistake 3 with detailed explanation and the solution offer.',
      ctaText: 'Save this video so you don’t forget, and check the bio for the full free checklist.',
      bRollIdea: 'Fast-paced kinetic captions with sound effects (whoosh, pop) and high-contrast B-roll.',
    },
  ] as TikTokFramework[],
};
