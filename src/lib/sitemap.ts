export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
}

export const generateSitemap = (urls: SitemapUrl[]): string => {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen =
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const urlsetClose = "</urlset>";

  const urlEntries = urls
    .map(url => {
      let entry = `  <url>\n    <loc>${url.loc}</loc>`;

      if (url.lastmod) {
        entry += `\n    <lastmod>${url.lastmod}</lastmod>`;
      }

      if (url.changefreq) {
        entry += `\n    <changefreq>${url.changefreq}</changefreq>`;
      }

      if (url.priority !== undefined) {
        entry += `\n    <priority>${url.priority}</priority>`;
      }

      entry += "\n  </url>";
      return entry;
    })
    .join("\n");

  return [xmlHeader, urlsetOpen, urlEntries, urlsetClose].join("\n");
};

// DŪON sitemap configuration
export const duonSitemapUrls: SitemapUrl[] = [
  {
    loc: "https://duon.coffee",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "weekly",
    priority: 1.0,
  },
  {
    loc: "https://duon.coffee/about",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    loc: "https://duon.coffee/shop",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "weekly",
    priority: 0.9,
  },
  {
    loc: "https://duon.coffee/coffee",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "monthly",
    priority: 0.7,
  },
];

// Generate the sitemap for DŪON
export const duonSitemap = generateSitemap(duonSitemapUrls);

// Helper to add product URLs dynamically
export const addProductUrls = (productIds: string[]): SitemapUrl[] => {
  return productIds.map(id => ({
    loc: `https://duon.coffee/product/${id}`,
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "weekly" as const,
    priority: 0.8,
  }));
};

// Helper to add multilingual URLs
export const addMultilingualUrls = (
  baseUrls: SitemapUrl[],
  languages: string[]
): SitemapUrl[] => {
  const multilingualUrls: SitemapUrl[] = [];

  baseUrls.forEach(url => {
    languages.forEach(lang => {
      if (lang !== "en") {
        // Skip English as it's the default
        multilingualUrls.push({
          ...url,
          loc: url.loc.replace(
            "https://duon.coffee",
            `https://duon.coffee/${lang}`
          ),
        });
      }
    });
  });

  return multilingualUrls;
};

// Generate complete sitemap with products and languages
export const generateCompleteSitemap = (productIds: string[] = []): string => {
  const baseUrls = duonSitemapUrls;
  const productUrls = addProductUrls(productIds);
  // For now, we're using the same URL for both languages
  // const multilingualUrls = addMultilingualUrls(baseUrls, ['cy']);

  const allUrls = [...baseUrls, ...productUrls];
  return generateSitemap(allUrls);
};
