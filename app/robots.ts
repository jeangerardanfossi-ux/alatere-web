import type { MetadataRoute } from 'next';

const BASE = 'https://www.alatere-web.com';

/**
 * Autorise explicitement les robots des moteurs IA (citation dans les réponses
 * génératives) + les moteurs classiques. Seules les routes techniques sont bloquées.
 */
export default function robots(): MetadataRoute.Robots {
  const aiBots = [
    'GPTBot', // OpenAI / ChatGPT
    'OAI-SearchBot', // ChatGPT Search
    'ChatGPT-User', // navigation ChatGPT
    'ClaudeBot', // Anthropic / Claude
    'anthropic-ai',
    'Claude-Web',
    'PerplexityBot', // Perplexity
    'Perplexity-User',
    'Google-Extended', // Gemini & AI Overviews
    'Applebot-Extended', // Apple Intelligence
    'Bingbot', // Microsoft Copilot
  ];

  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/'] },
      ...aiBots.map((userAgent) => ({ userAgent, allow: '/', disallow: ['/api/'] })),
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
