import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.sharemarketskills.in'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/crypto-trading-course`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/stock-market-training`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/investment`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/share-market-course-ghaziabad`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/stock-market-training-ghaziabad`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/share-market-training-near-vishnu-enclave`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/stock-market-course-near-me-ghaziabad`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/best-share-market-academy-in-ghaziabad`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/intraday-trading-course-ghaziabad`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/options-trading-course-ghaziabad`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/beginner-stock-market-course-ghaziabad`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/technical-analysis-course-ghaziabad`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/online-stock-trading-classes-ghaziabad`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/equity-trading-coaching-ghaziabad`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/financial-education-center-ghaziabad`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/stock-market-course-after-12th-ghaziabad`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/stock-market-course-for-working-professionals-ghaziabad`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/share-market-training-with-live-trading-ghaziabad`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/best-trading-cryptocurrency-course-ghaziabad-delhi-ncr`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/how-to-start-trading-in-ghaziabad`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/investment/equity-strategies`,
      lastModified: new Date(),
      priority: 0.64,
    },
    {
      url: `${baseUrl}/investment/fixed-income-strategies`,
      lastModified: new Date(),
      priority: 0.64,
    },
    {
      url: `${baseUrl}/investment/equity-strategies/shares-mcx`,
      lastModified: new Date(),
      priority: 0.51,
    },
    {
      url: `${baseUrl}/investment/equity-strategies/shares-nifty`,
      lastModified: new Date(),
      priority: 0.51,
    },
    {
      url: `${baseUrl}/investment/fixed-income-strategies/bonds-algo`,
      lastModified: new Date(),
      priority: 0.51,
    },
    {
      url: `${baseUrl}/investment/fixed-income-strategies/fd-algo`,
      lastModified: new Date(),
      priority: 0.51,
    },
  ]
}