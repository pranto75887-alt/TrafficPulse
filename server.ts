import express, { Request, Response } from 'express';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize Gemini Client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || '',
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

function getLangInstruction(
  language: string = 'english',
  context: 'strategy' | 'market' | 'video' | 'competitor' | 'facebook' | 'email' | 'shorts'
): string {
  const lang = (language || '').toLowerCase();
  const isBn = lang === 'bengali' || lang === 'bn';
  const isHi = lang === 'hindi' || lang === 'hi';
  const isEs = lang === 'spanish' || lang === 'es' || lang === 'spanice';

  if (isBn) {
    switch (context) {
      case 'strategy':
        return 'IMPORTANT: Provide your strategic guidance, explanations, and instructions in natural, highly actionable Bengali (বাংলা), keeping marketing terms (e.g. CPA, Affiliate, KGR, Hook, Bridge Page, CTA, Pin, Search Intent) clear. For content copy (like blog titles, keywords, Pin text overlays, and TikTok scripts), provide both English versions (ready to publish to Tier-1 USA/UK/CA audiences) and clear Bengali explanations/translations.';
      case 'market':
        return 'Explain the market trends, rationale, and campaign angles in natural, inspiring Bengali (বাংলা), keeping niche names, brand names, and search terms in English. Provide clear, highly actionable takeaways for an affiliate/CPA marketer.';
      case 'video':
        return 'Provide directions, explanations, and advice in natural Bengali (বাংলা). Provide the actual voiceover script and AI video generation prompts in high-converting English (with Bengali translations/cues so the user can easily record or copy to AI TTS tools).';
      case 'shorts':
        return 'Provide strategic YouTube Shorts algorithm advice, retention pacing, and loop tactics in natural Bengali (বাংলা). Provide the actual voiceover script, viral hook, seamless loop line, on-screen text, and AI visual prompts in high-converting English with Bengali translations and pacing cues.';
      case 'competitor':
        return 'Explain the competitor analysis, content gaps, and ranking tactics in natural Bengali (বাংলা), keeping website URLs, domain names, keywords, and English search terms clear and uncorrupted.';
      case 'facebook':
        return 'Provide instructions, posting advice, and algorithm tips in natural Bengali (বাংলা). Provide the actual Facebook post copy, first comment copy, and DM messenger response in high-converting English (with Bengali translations/cues so the user can easily copy and paste to Facebook).';
      case 'email':
        return 'Provide strategic explanations, timing advice, and deliverability tips in natural Bengali (বাংলা). Provide the actual email subject lines, preview text, email body copy, and CTA links in high-converting, professional English (ready to paste directly into autoresponders like ConvertKit, GetResponse, Brevo, or System.io).';
    }
  }

  if (isHi) {
    switch (context) {
      case 'strategy':
        return 'IMPORTANT: Provide your strategic guidance, explanations, and instructions in natural, actionable Hindi (हिन्दी), keeping marketing terms (CPA, Affiliate, KGR, Hook, Bridge Page, CTA, Pin, Search Intent) clear. Provide both ready-to-publish English copies for Tier-1 audiences and clear Hindi explanations/translations.';
      case 'market':
        return 'Explain the market trends, rationale, and campaign angles in natural, actionable Hindi (हिन्दी), keeping niche names and search terms in English. Provide practical takeaways for affiliate/CPA marketers.';
      case 'video':
        return 'Provide directions and advice in natural Hindi (हिन्दी). Provide the actual voiceover script and visual AI prompts in high-converting English with Hindi translations and voiceover pacing.';
      case 'shorts':
        return 'Provide strategic YouTube Shorts algorithm advice, retention pacing, and seamless loop tactics in natural Hindi (हिन्दी). Provide the actual voiceover script, hook, and visual AI prompts in English with Hindi explanations.';
      case 'competitor':
        return 'Explain competitor analysis, ranking factors, and content gaps in clear Hindi (हिन्दी), keeping URLs, domains, and target keywords exact.';
      case 'facebook':
        return 'Provide instructions and algorithm tips in natural Hindi (हिन्दी). Provide ready-to-use Facebook post copy, first comment copy, and DM responses in English with Hindi explanations.';
      case 'email':
        return 'Provide strategic email marketing advice and deliverability tips in natural Hindi (हिन्दी). Provide high-converting email subject lines, preview text, and email body copy in English with Hindi cues.';
    }
  }

  if (isEs) {
    switch (context) {
      case 'strategy':
        return 'IMPORTANT: Provide your strategic guidance, explanations, and instructions in natural, highly actionable Spanish (Español), keeping marketing terms clear. Provide content copy in both Spanish and English for international affiliate and CPA campaigns.';
      case 'market':
        return 'Explain the market trends, consumer drivers, and campaign opportunities in natural, professional Spanish (Español), keeping niche names and search keywords clear.';
      case 'video':
        return 'Provide directions and scene breakdowns in natural Spanish (Español). Provide high-converting voiceover scripts and AI visual prompts in English and Spanish.';
      case 'shorts':
        return 'Provide strategic YouTube Shorts algorithm advice, seamless loop hooks, and retention pacing in natural Spanish (Español) with high-converting voiceover and prompt copies.';
      case 'competitor':
        return 'Explain competitor SERP analysis, content gaps, and ranking tactics in professional Spanish (Español), keeping website URLs and search queries accurate.';
      case 'facebook':
        return 'Provide Facebook algorithm tips and post copies in natural Spanish (Español) with high-converting engagement hooks and automated DM templates.';
      case 'email':
        return 'Provide the complete 5-day welcome sequence, subject lines, and email copy in persuasive Spanish (Español) and English for maximum conversions.';
    }
  }

  return 'Provide your strategic guidance, content copy, titles, hooks, and frameworks in professional, highly tactical English for Tier-1 audience conversion.';
}

// API Route: Generate Channel-Specific Organic Marketing Blueprint & Content
app.post('/api/generate-strategy', async (req: Request, res: Response) => {
  try {
    const {
      channel, // 'seo' | 'pinterest' | 'tiktok' | 'bridge' | 'all'
      niche = 'Health & Weight Loss',
      offerName = 'Custom Affiliate/CPA Offer',
      offerType = 'Affiliate Product', // 'CPA Lead Locker' | 'ClickBank/Digistore' | 'Amazon Affiliate' | 'SaaS Affiliate'
      targetAudience = 'Tier-1 English or Global audience looking for fast real solutions',
      language = 'english', // 'bengali' | 'hindi' | 'spanish' | 'english'
    } = req.body;

    const langInstruction = getLangInstruction(language, 'strategy');

    let prompt = '';

    if (channel === 'seo') {
      prompt = `You are a world-class Affiliate SEO & CPA Marketing Strategist.
The user wants a complete, high-converting organic SEO-optimized content strategy for affiliate marketing.

Context:
- Niche: ${niche}
- Offer Name: ${offerName}
- Offer Type: ${offerType}
- Target Audience: ${targetAudience}

Instructions:
${langInstruction}

You must generate a comprehensive SEO Content Strategy with the following 5 distinct sections:

1. KEYWORD RESEARCH STRATEGY:
- How to find low-competition, high buyer-intent affiliate keywords using free methods (Google Autocomplete, People Also Ask, KGR - Keyword Golden Ratio: Allintitle results / search volume < 0.25, Reddit/Quora mining).
- 4 Keyword Categories (Informational, Commercial Investigation, Direct Buyer Intent, Problem-Agitation).
- Exactly how to avoid competing against massive authority domains (Forbes, Wirecutter, Healthline).

2. CONTENT PILLARS & TOPIC CLUSTER ARCHITECTURE:
- 1 Core Pillar Topic.
- 4 Supporting Cluster Articles that link back to the pillar to build topical authority and pass link juice.
- Internal linking blueprint with exact anchor text guidelines.

3. 4 BATTLE-TESTED BLOG POST STRUCTURES:
- Structure A: Single Product In-Depth Review (Hook, Quick Verdict Box, Pros & Cons, Feature breakdown, Who it is for / not for, Value comparison, Verdict + Sticky CTA).
- Structure B: "Vs" Comparison Battle (e.g., Tool A vs Tool B: Which is best in 2026?).
- Structure C: Step-by-Step Problem-Solving Tutorial (How-To guide featuring the offer as the optimal shortcut).
- Structure D: Top 5 / Top 7 Roundup Buyer's Guide (Comparison table, Winner badges, In-depth picks, Buyer advice).

4. ON-PAGE SEO & CONVERSION BEST PRACTICES:
- High-converting affiliate elements (Table of Contents, Sticky Floating CTA, FTC compliant affiliate disclaimer banner, Comparison quick-verdict box, Product badges).
- Technical On-Page SEO (H1/H2 hierarchy, primary keyword placement in first 100 words, Schema.org Review/FAQ markup, Image alt-tags, Core Web Vitals optimization).
- How to route traffic safely to affiliate/CPA links (Direct nofollow/sponsored links vs Pre-lander bridge pages).

5. 3 CURATED BLOG POST TITLE IDEAS WITH TARGET KEYWORDS:
- For each title provide:
  * Catchy Title (with high CTR click-triggers like year, honest truth, test results).
  * Target Primary Keyword & Search Intent (Informational, Transactional, Commercial).
  * Estimated Search Difficulty / Competition level.
  * Recommended Post Structure (Review, Comparison, or Tutorial).
  * Content Outline & Angle that converts readers into buyers.

Deliver a structured, detailed, practical guide with clear markdown headings and bullet points.`;
    } else if (channel === 'pinterest') {
      prompt = `You are a Pinterest Organic Traffic Specialist for Affiliate & CPA Marketing.
The user wants an organic Pinterest Pin strategy to drive traffic to affiliate/CPA offers.

Context:
- Niche: ${niche}
- Offer Name: ${offerName}
- Offer Type: ${offerType}
- Target Audience: ${targetAudience}

Instructions:
${langInstruction}

Generate a comprehensive Pinterest Organic Marketing Plan:
1. PINTEREST ALGORITHM & SEO RULES (Visual Search Engine logic, keyword optimization in Pin Titles, Descriptions, Board Names, and Pin Text overlays).
2. ANTI-BAN CRITICAL WARNING: Why Pinterest marks direct CPA locker / raw affiliate links as spam, and the exact Safe Bridge Funnel (Medium, Google Sites, Notion, or 1-page WordPress/Blogger bridge) to use.
3. 5 HIGH-CTR PIN CONCEPTS:
For each Pin:
- Catchy Pin Title (with SEO keywords).
- Eye-catching Text Overlay (for Canva design, 2:3 ratio 1000x1500).
- Pin Description (rich in Pinterest search keywords + natural CTA + 3-5 hashtags).
- Target Board Name & Category.
- Recommended visual style & background aesthetic.
4. DAILY PINNING WORKFLOW & COMPOUNDING SCHEDULE (How many fresh pins/day, repinning rules, Tailwind or native scheduler).`;
    } else if (channel === 'tiktok') {
      prompt = `You are a Viral Organic TikTok & Short-Form Video Growth Hacker for Affiliate & CPA Marketing.
The user wants to generate income organically through niche TikTok videos.

Context:
- Niche: ${niche}
- Offer Name: ${offerName}
- Offer Type: ${offerType}
- Target Audience: ${targetAudience}

Instructions:
${langInstruction}

Generate a comprehensive TikTok Organic Marketing System:
1. THE VIRAL ALGORITHM FORMULA (The 3-second hook rule, retention rate over 70%, average watch time, comment baiting).
2. FACELESS TIKTOK STRATEGY (How to create videos without showing your face: B-roll libraries, CapCut kinetic text animations, AI voiceover, split-screen satisfaction b-roll).
3. 3 VIRAL VIDEO SCRIPTS (15-30 seconds each):
For each script:
- 3 Hook Variations (Curiosity gap, Contrarian statement, Problem-agitation).
- Visual Direction & B-roll footage idea.
- Word-for-word Voiceover / Caption script.
- Call to Action (CTA) pointing to Bio Link.
- Recommended Trending Sound vibe and 4-5 High-Retention Hashtags.
4. BIO LINK & CPA COMPLIANCE (How to set up the link in bio without getting banned or shadowbanned; why raw CPA links get restricted, and how to use Beacons/Stan/Blogger bridge page).`;
    } else if (channel === 'bridge') {
      prompt = `You are an expert Direct Response Copywriter and CPA Conversion Specialist.
Create a complete high-converting, compliant 1-Page Bridge Page (Pre-Lander) for this CPA / Affiliate offer.

Context:
- Niche: ${niche}
- Offer Name: ${offerName}
- Offer Type: ${offerType}
- Target Audience: ${targetAudience}

Instructions:
${langInstruction}

Generate:
1. BRIDGE PAGE CONCEPT & ANGLE (Quiz Pre-lander vs Free Cheat Sheet vs Honest Review Summary).
2. COMPLETE WIREFRAME & COPY:
- Attention-Grabbing Headline & Sub-headline.
- 3 Key Bullet Points (Pain point eradication, benefits, social proof).
- Interactive element idea (e.g. 2-question quiz or checklist).
- Trust Badges & Disclaimer.
- Primary CTA Button text and psychological urgency trigger.
3. COMPLIANCE & ACCOUNT PROTECTION CHECKLIST (Rules for Pinterest, TikTok, and Facebook organic algorithms so your domain never gets flagged).`;
    } else {
      // General comprehensive masterplan
      prompt = `You are an elite CPA and Affiliate Organic Growth Architect.
The user is struggling to get good organic traffic sources to make money with CPA and affiliate marketing.
Explain the exact synergy between Pinterest, TikTok, and SEO Blogging.

Context:
- Niche: ${niche}
- Offer Name: ${offerName}
- Offer Type: ${offerType}
- Target Audience: ${targetAudience}

Instructions:
${langInstruction}

Provide an actionable Master Blueprint showing how to integrate all 3 channels into a single traffic flywheel where content is repurposed across TikTok, Pinterest, and Blog.`;
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
    });

    const content = response.text || '';
    res.json({ success: true, content });
  } catch (error: any) {
    console.error('Error generating strategy:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to generate strategy from Gemini API',
    });
  }
});

// API Route: Analyze and Sharpen Viral Hooks
app.post('/api/analyze-hook', async (req: Request, res: Response) => {
  try {
    const { hookText, platform = 'tiktok', niche = 'general', language = 'bengali' } = req.body;

    const prompt = `You are a viral copywriting scientist analyzing short-form hooks for ${platform} in the ${niche} niche.
The user's submitted hook is: "${hookText}"

Language context: ${language === 'bengali' ? 'Explain analysis and advice in natural Bengali (বাংলা) while giving the rewritten hook variations in crisp high-converting English (and Bengali translations).' : 'Explain analysis and rewrites in English.'}

Provide your analysis in JSON format with:
1. "score": number between 1 and 100 based on psychological curiosity gap, pattern interruption, and clarity.
2. "feedback": brief 2-3 sentence analysis of why it works or fails.
3. "curiosityGap": rating from 'Low', 'Medium', 'High', or 'Extreme'.
4. "stopScrollRate": estimated percentage (e.g. "68%").
5. "improvedVariations": array of 3 enhanced, punchy hook rewrites with different angles (e.g. Negative Hook, Curiosity Loop, Social Proof).`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    res.json({ success: true, analysis: parsed });
  } catch (error: any) {
    console.error('Error analyzing hook:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to analyze hook',
    });
  }
});

// API Route: Market Insight with Google Search Grounding
app.post('/api/market-insights', async (req: Request, res: Response) => {
  try {
    const { category = 'all', language = 'bengali' } = req.body;

    const categoryFocus =
      category === 'tiktok'
        ? 'viral TikTok consumer products, impulse buys, and trending TikTok Shop/affiliate items'
        : category === 'pinterest'
        ? 'trending Pinterest visual search niches, home aesthetic, fitness, fashion, DIY, and lifestyle buyer trends'
        : category === 'cpa'
        ? 'high-converting CPA offers, lead generation, sweepstakes, gift cards, finance surveys, and software trials'
        : category === 'saas'
        ? 'high-paying B2B/B2C SaaS tools, AI productivity software, creator tools, and recurring affiliate subscriptions'
        : 'breakout affiliate marketing niches, viral product demands, CPA offers, and rising organic search queries';

    const langInstruction = getLangInstruction(language, 'market');

    const prompt = `You are a real-time Market Intelligence & Affiliate Trend Analyst.
Use Google Search Grounding to search the live web for the latest trending affiliate and CPA marketing niches, breakout products, and consumer search surges in 2026.

Focus area: ${categoryFocus}
Language instructions: ${langInstruction}

Search for current real-world trends, rising Google searches, trending TikTok hashtags/products, and Pinterest search volume surges.

Format your response in clean Markdown with:
1. 🌟 TOP 5 BREAKOUT NICHES & PRODUCTS (Provide the exact niche, why search interest is spiking right now, and real-world consumer drivers).
2. 💰 SPECIFIC HIGH-CONVERTING CPA & AFFILIATE OFFER ANGLES (Give concrete offer types, e.g. Free Trial, Quiz Lead, High-Ticket Course, Physical Subscription, Software Recurring).
3. 🎯 CHANNEL-SPECIFIC STRATEGY BREAKDOWN:
   - Why this works for Pinterest Pins (Visual angle & text hook)
   - Why this works for Faceless TikTok (Visual B-roll & 3-second hook)
   - Why this works for SEO Blogging (Buyer keyword target & review format)
4. ⚡ 3 READY-TO-TEST CAMPAIGN INSPIRATIONS (Fast ideas the user can launch today).

Be specific, authoritative, and ground your insights with current real-world trends.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text || '';
    const groundingChunks =
      response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];

    // Filter and format web sources
    const sources = groundingChunks
      .map((c: any) => {
        if (c.web?.uri) {
          return {
            title: c.web.title || 'Market Source',
            url: c.web.uri,
          };
        }
        return null;
      })
      .filter(Boolean);

    res.json({
      success: true,
      category,
      content: text,
      sources,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('Error fetching market insights with search grounding:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to fetch search-grounded market insights',
    });
  }
});

// API Route: Video Link to Prompt & Script Text Generator
app.post('/api/video-to-script', async (req: Request, res: Response) => {
  try {
    const {
      videoUrl = '',
      videoDescription = '',
      targetNiche = 'Make Money Online / Affiliate',
      offerType = 'CPA Locker / Affiliate Offer',
      scriptLength = '30s',
      platform = 'tiktok', // 'tiktok' | 'youtube-shorts' | 'pinterest-idea-pin'
      language = 'bengali',
    } = req.body;

    const langInstruction = getLangInstruction(language, 'video');

    const prompt = `You are an elite Viral Short-Form Video Producer and Affiliate Growth Hacker.
The user wants to reverse-engineer a video link or video concept and turn it into a high-converting short-form video script and AI visual prompts.

Input Video Link / Concept: "${videoUrl}"
Additional Video Details / Context: "${videoDescription}"
Target Niche: ${targetNiche}
Monetization Offer Type: ${offerType}
Target Platform: ${platform}
Desired Duration: ${scriptLength}

Language Instruction: ${langInstruction}

Search the web if needed to identify the context, trending sound, or visual style associated with this video link or topic.

Deliver a structured breakdown with the following 5 parts:

1. ⚡ VIRAL MECHANISM & HOOK ANALYSIS:
- What makes this video concept stop the scroll in the first 3 seconds?
- Pacing, audio vibe, and pattern interruption.

2. 🎣 3 VIRAL HOOK VARIATIONS (First 3 Seconds):
- Hook A: Curiosity Gap ("The one thing nobody told you about...")
- Hook B: Contrarian Warning ("Stop doing [mistake] immediately...")
- Hook C: Shock Secret Discovery ("I found an insane workaround...")

3. 🎙️ WORD-FOR-WORD TIMED VOICEOVER SCRIPT (${scriptLength}):
- Divide clearly into timecoded blocks (e.g. [0:00 - 0:03], [0:03 - 0:15], [0:15 - 0:25], [0:25 - 0:30]).
- Include tone instructions (e.g. [Whispering/Confident], [Excited], [Direct]).
- The script must smoothly transition into recommending the affiliate/CPA shortcut.

4. 🖼️ AI VIDEO & B-ROLL GENERATION PROMPTS (Scene by Scene):
- For each scene, provide a copyable prompt for AI video/image generators (or search query for Pexels/CapCut free footage).
- Example: "Cinematic close-up of hands typing rapidly on illuminated laptop in dark aesthetic desk, 9:16 vertical, soft rim light".

5. 📱 ON-SCREEN KINETIC TEXT PROMPTS & CAPCUT HIGHLIGHTS:
- Exact words to display on screen with capitalized keywords for high viewer retention.

6. 💰 BIO LINK CTA & ANTI-BAN ROUTING:
- Exact call-to-action line for the video and caption.
- Compliant bridge link text for TikTok/Pinterest bio.

Provide clean, copy-ready Markdown formatting with emoji headings.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const content = response.text || '';
    const groundingChunks =
      response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];

    const sources = groundingChunks
      .map((c: any) => {
        if (c.web?.uri) {
          return {
            title: c.web.title || 'Video Reference',
            url: c.web.uri,
          };
        }
        return null;
      })
      .filter(Boolean);

    res.json({
      success: true,
      content,
      sources,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('Error generating script from video link:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to generate prompt and script from video link',
    });
  }
});

// API Route: Top Ranking Competitor Sites Search & SERP Spy Tool
app.post('/api/competitor-search', async (req: Request, res: Response) => {
  try {
    const {
      productOffer = '',
      searchRegion = 'United States (US)',
      language = 'bengali',
    } = req.body;

    if (!productOffer.trim()) {
      return res.status(400).json({ success: false, error: 'Product or offer name is required' });
    }

    const langInstruction = getLangInstruction(language, 'competitor');

    const prompt = `You are a world-class Organic SEO Competitor Analyst & Affiliate SERP Spy.
The user wants to find and analyze all the top-ranking websites and blogs on Google for this specific product or CPA offer: "${productOffer}".

Target Market / Region: ${searchRegion}
Language Instructions: ${langInstruction}

Search Google for "${productOffer} review", "best ${productOffer}", and commercial search queries to identify currently ranking sites.

Structure your response in clean Markdown with:
1. 🏆 TOP RANKING SITES ON GOOGLE FOR THIS OFFER:
   - Identify the primary websites dominating Page 1 (niche blogs, review portals, comparison hubs).
   - For each player provide: Site Domain / URL, Site Type (Independent Niche Blog, Media Publisher, or Community Forum), their main Title/Angle, and why Google is ranking them.
2. 🕵️ HOW THEY ARE MONETIZING & FUNNELING TRAFFIC:
   - Breakdown of their affiliate call-to-actions, bridge landers, comparison boxes, and coupon widgets.
3. 🎯 CONTENT GAPS & VULNERABILITIES (HOW TO BEAT THEM):
   - Identify what they missed (e.g. outdated year, no mobile verdict box, missing negative proof, lack of video proof).
   - Low-competition long-tail angles a new site can use to rank above or alongside them.
4. ⚡ READY-TO-PUBLISH OUTRANK TITLE & POST BLUEPRINT:
   - Recommended Title, Post Format, and internal linking structure.

Ground your answer with real, active websites and verifiable search information.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const content = response.text || '';
    const groundingChunks =
      response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];

    const sources = groundingChunks
      .map((c: any) => {
        if (c.web?.uri) {
          return {
            title: c.web.title || 'Ranked Webpage',
            url: c.web.uri,
          };
        }
        return null;
      })
      .filter(Boolean);

    res.json({
      success: true,
      productOffer,
      content,
      sources,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('Error analyzing competitor sites with search grounding:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to search top-ranking competitor sites',
    });
  }
});

// API Route: Organic Facebook Content Writer for Affiliate & CPA
app.post('/api/generate-facebook-content', async (req: Request, res: Response) => {
  try {
    const {
      offerName = 'Custom Offer',
      niche = 'Make Money Online / Affiliate Marketing',
      postFormat = 'comment-bait', // 'comment-bait' | 'story' | 'case-study' | 'contrarian' | 'group-value'
      targetAudience = 'Members of targeted niche Facebook groups and feed followers',
      ctaStrategy = 'comment-keyword', // 'comment-keyword' | 'first-comment' | 'dm-messenger' | 'bridge-link'
      language = 'bengali',
    } = req.body;

    const langInstruction = getLangInstruction(language, 'facebook');

    const formatDescriptions: Record<string, string> = {
      'comment-bait':
        'High-velocity "Comment a Keyword to Get the Free Resource" post. Generates 50-200+ comments triggering Facebook organic distribution.',
      story:
        'Personal Epiphany & Transformation Story (Problem -> False starts -> Breakthrough -> Results -> Helpful offer takeaway).',
      'case-study':
        'Step-by-Step Breakdown / Teardown ("How I / someone achieved [X result] in [Y days] without [Z frustration]").',
      contrarian:
        'Unpopular Opinion / Myth-Busting Post ("Stop doing [popular tactic]. Here is why it is keeping you broke").',
      'group-value':
        'Massive Value Drop specifically written for niche Facebook Groups to provide immense value without looking like spam.',
    };

    const prompt = `You are a world-class Facebook Organic Growth Hacker and Direct-Response Copywriter for Affiliate & CPA Marketers.
The user wants to generate high-converting Facebook content for their offer without triggering Facebook's link-penalty or getting banned in Facebook Groups.

Parameters:
- Offer Name: "${offerName}"
- Niche: "${niche}"
- Post Format: "${postFormat}" (${formatDescriptions[postFormat] || 'High converting post'})
- Target Audience: "${targetAudience}"
- CTA Strategy: "${ctaStrategy}"
- Language Instruction: ${langInstruction}

Facebook Organic Algorithm Rules to Enforce:
1. THE 2-LINE "SEE MORE" HOOK: The first two lines must provoke intense curiosity so mobile users tap "...See more".
2. NO SPAM LINKS IN POST BODY: Putting external affiliate links in the main text drops post reach by 85%. Never put links in the post body.
3. COMMENT-DRIVEN REACH ENGINE: Use a call-to-action like "Drop a comment '[KEYWORD]' below and I'll send it over" or "Link placed in the first comment 👇".
4. MOBILE WHITESPACE: 1-2 sentences per paragraph with clean line breaks.

Generate a complete, ready-to-publish package formatted in clean Markdown with:
1. 🎣 3 VIRAL OPENING HOOKS (The first 1-2 lines before the "See More" cut-off).
2. 📝 FULL READY-TO-PASTE FACEBOOK POST:
   - Full post text with emojis, line spacing, and bullet points.
3. 💬 FIRST COMMENT COPY (If using First Comment link strategy).
4. 📨 AUTOMATED MESSENGER / DM TEMPLATE (What to send to people who comment the keyword, containing the compliant bridge page link).
5. 🛡️ FACEBOOK GROUP POSTING RULES & ANTI-BAN GUIDELINES (How to post in groups without getting deleted by admins).

Deliver a clean, high-impact copy package.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
    });

    const content = response.text || '';
    res.json({
      success: true,
      content,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('Error generating Facebook content:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to generate Facebook content',
    });
  }
});

// API Route: 5-Part High-Converting Email Autoresponder Sequence Generator
app.post('/api/generate-email-sequence', async (req: Request, res: Response) => {
  try {
    const {
      offerName = 'Affiliate Product / CPA Offer',
      niche = 'Make Money Online / Affiliate Marketing',
      leadMagnetName = 'Free Step-by-Step Starter Blueprint',
      tone = 'Conversational, empathetic & high-trust',
      language = 'bengali',
    } = req.body;

    const langInstruction = getLangInstruction(language, 'email');

    const prompt = `You are a legendary Email Copywriter and Direct-Response Affiliate Strategist (specializing in Russell Brunson Soap Opera Sequences & Andre Chaperon Autoresponders).
The user needs a high-converting 5-day welcome & follow-up email sequence for their affiliate bridge page.

Campaign Context:
- Affiliate Offer: "${offerName}"
- Niche: "${niche}"
- Lead Magnet / Freebie Opt-in: "${leadMagnetName}"
- Tone of Voice: "${tone}"
- Language Instruction: ${langInstruction}

Structure the 5-day email sequence as follows:

📧 EMAIL 1 (Day 0 - Send Immediately upon Opt-in):
- Theme: "Asset Delivery + Expectation Setting + Whitelisting"
- 2 High-Open Subject Line Options (curiosity + delivery tag like [Download])
- Pre-header text
- Email Body: Instant link to access ${leadMagnetName}, introduction of who you are, what to expect over the next few days, and a micro-question asking them to reply to boost email inboxing.

📧 EMAIL 2 (Day 1 - Send 24 hours later):
- Theme: "The Problem Nobody Talks About (Shared Pain & Empathy)"
- 2 Subject Line Options
- Pre-header text
- Email Body: The common trap that keeps 90% of people stuck in ${niche}, a relatable story of struggling, and teasing the breakthrough coming tomorrow.

📧 EMAIL 3 (Day 2 - Send 48 hours later):
- Theme: "The Epiphany & The Automated Shortcut (The Pitch)"
- 2 Subject Line Options
- Pre-header text
- Email Body: The 'Aha!' breakthrough moment, why manual methods take too long, and introducing ${offerName} as the exact shortcut used. Includes strong contextual affiliate CTA links and a high-retention P.S.

📧 EMAIL 4 (Day 3 - Send 72 hours later):
- Theme: "Proof, Results & Overcoming the #1 Objection"
- 2 Subject Line Options
- Pre-header text
- Email Body: Concrete test results, handling skepticism ("Is this too complicated for beginners?"), money-back guarantee reminder, and clear affiliate button.

📧 EMAIL 5 (Day 4/5 - The Final Push):
- Theme: "Urgency, Scarcity & The Two Choices"
- 2 Subject Line Options
- Pre-header text
- Email Body: The fork in the road analogy (keep doing what isn't working vs take the proven path), special bonus/discount expiration warning, final CTA.

Provide clean Markdown formatting with clear separators between each email.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
    });

    const content = response.text || '';
    res.json({
      success: true,
      content,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('Error generating email sequence:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to generate email sequence',
    });
  }
});

// API Route: Viral YouTube Shorts Script & AI Prompts Generator
app.post('/api/youtube-shorts-script', async (req: Request, res: Response) => {
  try {
    const {
      topic = 'Secret AI Websites That Feel Illegal to Know',
      niche = 'Make Money Online & AI Productivity',
      duration = '30s', // '15s' | '30s' | '45s' | '60s'
      hookStyle = 'curiosity-loop', // 'curiosity-loop' | 'contrarian' | 'secret-reveal' | 'transformation'
      affiliateOffer = 'SaaS Affiliate / CPA Gift Card / Free Trial Locker',
      targetAudience = 'Shorts viewers looking for quick life hacks and money tools',
      language = 'english',
    } = req.body;

    const langInstruction = getLangInstruction(language, 'shorts');

    const prompt = `You are a YouTube Shorts Algorithm Master and Viral Scriptwriter with multiple 10M+ view Shorts in the affiliate and tech niches.
The user wants a viral, high-retention YouTube Short script specifically designed for maximum View Duration (>100%), high Click-Through-Rate, and seamless affiliate/CPA funnel monetization.

Input Parameters:
- Topic / Concept: "${topic}"
- Niche: "${niche}"
- Video Duration: ${duration}
- Hook Style: ${hookStyle}
- Target Affiliate / CPA Offer: "${affiliateOffer}"
- Target Audience: "${targetAudience}"
- Language Instruction: ${langInstruction}

YouTube Shorts Algorithm Rules to Apply:
1. THE 2.5-SECOND CRITICAL RETENTION HOOK: No "Hey guys", no intros. Instant visual and verbal hook.
2. THE INFINITE SEAMLESS LOOP: The last sentence of the script must link seamlessly back into the very first word of the hook, so when YouTube auto-loops the video, the viewer re-watches without noticing, driving Average Percentage Viewed (APV) over 110%.
3. MICRO-PACING: New visual stimulus or cut every 2.0 to 2.8 seconds.
4. PINNED COMMENT & BIO MONETIZATION: Directing viewers to the pinned comment / channel link safely without YouTube flagging the Short as spam.

Deliver a complete production package formatted in clean Markdown with:
1. 🎣 3 VIRAL HOOK CHOICES (0:00 - 0:03):
   - Hook 1: Curiosity & Urgency
   - Hook 2: "Stop Doing This" Warning
   - Hook 3: The Unfair Advantage Secret
2. 🔄 THE SEAMLESS LOOP MECHANIC:
   - Provide the exact final closing sentence and show how it loops into Hook 1 so the short replays infinitely.
3. 🎙️ WORD-FOR-WORD TIMED VOICEOVER SCRIPT (${duration}):
   - Format with exact timestamp markers: [0:00 - 0:03], [0:03 - 0:12], etc.
   - Include tone cues (e.g., [Fast/Confident], [Shocked], [Deadpan], [Urgent]).
4. 🎬 SCENE-BY-SCENE AI VISUAL & B-ROLL PROMPTS:
   - For each 3-second block, provide a high-retention AI image/video prompt (for Midjourney, Runway Gen-3, or Pexels b-roll search).
5. 🔤 CAPCUT KINETIC ON-SCREEN CAPTIONS:
   - Specific animated text cues, highlighted yellow/red keywords, and sound effect triggers (whoosh, pop, cash register).
6. 📌 PINNED COMMENT & TITLE FORMULA:
   - Clicky Title with 2-3 viral hashtags (#Shorts, #Niche, #Trending).
   - Word-for-word Pinned Comment copy directing viewers to your bridge link or offer.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
    });

    const content = response.text || '';
    res.json({
      success: true,
      content,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('Error generating YouTube Shorts script:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to generate YouTube Shorts script',
    });
  }
});

// Setup Vite or static serving
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
