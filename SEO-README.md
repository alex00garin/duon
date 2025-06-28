# DŪON SEO System Documentation

This document explains the comprehensive SEO system implemented for the DŪON coffee brand website.

## 🎯 Overview

The SEO system provides:

- **Dynamic meta tag management** with language support
- **Structured data (JSON-LD)** for rich search results
- **Open Graph & Twitter Cards** for social sharing
- **Multilingual SEO** support (English/Welsh)
- **Easy-to-use hooks** for consistent implementation
- **Performance optimization** for Core Web Vitals

## 📁 File Structure

```
src/
├── lib/
│   ├── seo.ts              # Core SEO utilities and configurations
│   └── sitemap.ts          # Sitemap generation utilities
├── hooks/
│   └── useSEO.ts           # Main SEO hook for components
public/
├── robots.txt              # Search engine crawl instructions
└── sitemap.xml             # Static sitemap for search engines
index.html                  # Enhanced with default SEO meta tags
```

## 🚀 Quick Start

### Basic Page SEO

```tsx
import { useSEO } from "@/hooks/useSEO";

function MyPage() {
  useSEO({
    title: "Page Title | DŪON",
    description: "Page description for search engines",
    keywords: ["coffee", "specialty", "cardiff"],
    type: "website",
  });

  return <div>Your content</div>;
}
```

### Using Convenience Hooks

```tsx
import { usePageSEO, useProductSEO, useArticleSEO } from "@/hooks/useSEO";

// For standard pages
usePageSEO("About Us", "Learn about our story");

// For products (with language support)
useProductSEO(product, language);

// For articles/blog posts
useArticleSEO("Article Title", "Description", "2025-01-06");
```

## 🛠️ Configuration

### Default SEO Settings

Located in `src/lib/seo.ts`:

```typescript
export const defaultSEOConfig: SEOConfig = {
  title: 'DŪON - Exceptional Coffee & Design from Cardiff',
  description: '...',
  keywords: [...],
  image: '/assets/beans/bg-1.png',
  type: 'website',
  locale: 'en_GB',
  alternateLocales: ['cy_GB'],
};
```

### Organization Data

```typescript
export const duonOrganization: OrganizationData = {
  name: "DŪON",
  url: "https://duon.coffee",
  description: "...",
  address: {
    city: "Cardiff",
    region: "Wales",
    country: "UK",
  },
  // ...
};
```

## 📊 Structured Data

The system automatically generates JSON-LD structured data for:

### Organization

- Business information
- Contact details
- Social media links
- Address information

### Products

- Product catalog
- Individual product details
- Availability status
- Brand information

### Website

- Site navigation
- Search functionality
- Publisher information

### Pages

- Breadcrumb navigation
- Page-specific data
- Article metadata

## 🌍 Multilingual SEO

The system supports English and Welsh with:

### Automatic Language Detection

```typescript
const { language } = useLanguage();
const t = translations[language];

useSEO({
  title: t.meta.title,
  description: t.meta.description,
  // ...
});
```

### Hreflang Tags

Automatically generated for each page:

```html
<link rel="alternate" hreflang="en" href="https://duon.coffee/about" />
<link rel="alternate" hreflang="cy" href="https://duon.coffee/about" />
<link rel="alternate" hreflang="x-default" href="https://duon.coffee/about" />
```

## 🔍 Meta Tags Coverage

### Basic SEO

- Title, Description, Keywords
- Canonical URLs
- Robots directives
- Author information

### Open Graph (Facebook, LinkedIn)

- og:title, og:description
- og:image, og:url
- og:type, og:locale
- og:site_name

### Twitter Cards

- twitter:card (summary_large_image)
- twitter:title, twitter:description
- twitter:image

### Additional Meta Tags

- Theme color for mobile browsers
- Apple touch icons
- App manifest data
- Viewport optimization

## 📈 SEO Best Practices Implemented

### Technical SEO

- ✅ Semantic HTML structure
- ✅ Clean URL structure
- ✅ Mobile-first responsive design
- ✅ Fast loading times
- ✅ Proper heading hierarchy

### Content SEO

- ✅ Unique, descriptive titles
- ✅ Compelling meta descriptions
- ✅ Targeted keyword optimization
- ✅ Quality, relevant content
- ✅ Internal linking structure

### Local SEO

- ✅ Cardiff location emphasis
- ✅ Local business schema
- ✅ Welsh language support
- ✅ Regional keyword targeting

### Performance SEO

- ✅ Core Web Vitals optimization
- ✅ Image optimization
- ✅ Preloading critical resources
- ✅ Efficient bundle sizes

## 🛠️ Maintenance

### Adding New Pages

1. Create translation structure:

```typescript
const translations = {
  en: {
    meta: {
      title: "Page Title | DŪON",
      description: "Page description",
      keywords: ["relevant", "keywords"],
    },
  },
  cy: {
    meta: {
      title: "Teitl Tudalen | DŪON",
      description: "Disgrifiad tudalen",
      keywords: ["geiriau", "allweddol"],
    },
  },
};
```

2. Add SEO hook:

```typescript
useSEO({
  title: t.meta.title,
  description: t.meta.description,
  keywords: t.meta.keywords,
  structuredData: [
    /* relevant schemas */
  ],
});
```

3. Update sitemap in `src/lib/sitemap.ts`

### Adding Product Pages

```typescript
import { generateProductStructuredData } from "@/lib/seo";

useSEO({
  // ... basic meta
  structuredData: [
    generateProductStructuredData({
      id: product.id,
      title: product.title[language],
      description: product.description[language],
      image: product.image,
      category: product.category[language],
      availability: "InStock",
      brand: "DŪON",
      url: `https://duon.coffee/product/${product.id}`,
    }),
  ],
});
```

## 🔧 Advanced Usage

### Custom Structured Data

```typescript
useSEO({
  // ... meta tags
  structuredData: [
    {
      "@context": "https://schema.org",
      "@type": "Recipe",
      name: "Perfect Pour Over Coffee",
      description: "How to make the perfect cup",
      // ... recipe schema
    },
  ],
});
```

### Dynamic Sitemaps

```typescript
import { generateCompleteSitemap } from "@/lib/sitemap";

// Generate sitemap with current products
const sitemap = generateCompleteSitemap(productIds);
```

## 📊 Monitoring & Analytics

### Search Console Setup

1. Verify domain ownership
2. Submit sitemap: `https://duon.coffee/sitemap.xml`
3. Monitor performance and errors

### Key Metrics to Track

- Organic search traffic
- Keyword rankings
- Click-through rates
- Core Web Vitals
- Mobile usability

### Rich Results Testing

Use Google's Rich Results Test tool:
`https://search.google.com/test/rich-results`

## 🚨 Troubleshooting

### Common Issues

**Meta tags not updating:**

- Check if `useSEO` is called in component
- Verify translation structure
- Clear browser cache

**Structured data errors:**

- Validate with Google's testing tool
- Check JSON-LD syntax
- Ensure all required fields are present

**Sitemap not accessible:**

- Verify file exists in `/public/sitemap.xml`
- Check robots.txt references correct URL
- Ensure no server-side redirects

### Debug Mode

Enable SEO debugging by checking browser console for:

- Meta tag updates
- Structured data injection
- Hook execution logs

## 🎯 Performance Considerations

### Bundle Size Impact

- Tree-shaking removes unused SEO utilities
- Structured data is generated at runtime
- Meta tag updates are debounced

### Runtime Performance

- SEO updates happen after initial render
- No impact on Core Web Vitals
- Efficient DOM manipulation

## 📚 Resources

### Official Documentation

- [Google Search Central](https://developers.google.com/search)
- [Schema.org](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)

### Testing Tools

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

### SEO Checklists

- [Technical SEO Checklist](https://technical-seo.com/checklist/)
- [Core Web Vitals Guide](https://web.dev/vitals/)

---

**Need help?** Check the troubleshooting section above or create an issue in the repository.
