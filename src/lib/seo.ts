export interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article" | "product";
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  locale?: string;
  alternateLocales?: string[];
  noIndex?: boolean;
  noFollow?: boolean;
  canonical?: string;
}

export interface ProductSEO {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  availability: "InStock" | "OutOfStock" | "PreOrder";
  brand: string;
  url: string;
}

export interface OrganizationData {
  name: string;
  url: string;
  logo: string;
  description: string;
  address: {
    streetAddress: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  };
  contactPoint: {
    telephone: string;
    email: string;
    contactType: string;
  };
  sameAs: string[];
}

export const defaultSEOConfig: SEOConfig = {
  title: "DŪON - Exceptional Coffee & Design from Cardiff",
  description:
    "Born in Cardiff, inspired by the intersection of design and ritual. We believe in the power of thoughtful curation over mass production. Discover exceptional coffee and curated products.",
  keywords: [
    "coffee",
    "specialty coffee",
    "Cardiff coffee",
    "design",
    "artisan coffee",
    "coffee beans",
    "reusable cups",
    "sustainable coffee",
    "Welsh coffee",
    "DŪON",
  ],
  image: "/og-image.png",
  type: "website",
  locale: "en_GB",
  alternateLocales: ["cy_GB"],
};

export const duonOrganization: OrganizationData = {
  name: "DŪON",
  url: "https://duon.coffee",
  logo: "https://duon.coffee/og-image.png",
  description:
    "Exceptional coffee and design from Cardiff. We create thoughtfully curated products for those who refuse to settle for ordinary.",
  address: {
    streetAddress: "",
    city: "Cardiff",
    region: "Wales",
    postalCode: "",
    country: "UK",
  },
  contactPoint: {
    telephone: "",
    email: "hello@duon.coffee",
    contactType: "Customer Service",
  },
  sameAs: [
    "https://instagram.com/duon.coffee",
    "https://twitter.com/duon_coffee",
  ],
};

export const generateOrganizationStructuredData = (org: OrganizationData) => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: org.name,
    url: org.url,
    logo: org.logo,
    description: org.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: org.address.streetAddress,
      addressLocality: org.address.city,
      addressRegion: org.address.region,
      postalCode: org.address.postalCode,
      addressCountry: org.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: org.contactPoint.telephone,
      email: org.contactPoint.email,
      contactType: org.contactPoint.contactType,
    },
    sameAs: org.sameAs,
  };
};

export const generateProductStructuredData = (product: ProductSEO) => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `https://duon.coffee/product/${product.id}`,
    name: product.title,
    description: product.description,
    image: product.image,
    category: product.category,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    offers: {
      "@type": "Offer",
      availability: `https://schema.org/${product.availability}`,
      url: product.url,
      seller: {
        "@type": "Organization",
        name: "DŪON",
      },
    },
  };
};

export const generateBreadcrumbStructuredData = (
  breadcrumbs: Array<{ name: string; url: string }>
) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
};

export const generateWebsiteStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DŪON",
    url: "https://duon.coffee",
    description: "Exceptional coffee and design from Cardiff",
    publisher: {
      "@type": "Organization",
      name: "DŪON",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://duon.coffee/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
};

export const mergeSEOConfig = (
  defaultConfig: SEOConfig,
  pageConfig: Partial<SEOConfig>
): SEOConfig => {
  return {
    ...defaultConfig,
    ...pageConfig,
    keywords: pageConfig.keywords
      ? [...(defaultConfig.keywords || []), ...pageConfig.keywords]
      : defaultConfig.keywords,
  };
};

export const generateMetaTags = (config: SEOConfig) => {
  const tags: Record<string, string> = {};

  if (config.title) tags["title"] = config.title;
  if (config.description) tags["description"] = config.description;
  if (config.keywords) tags["keywords"] = config.keywords.join(", ");
  if (config.author) tags["author"] = config.author;
  if (config.canonical) tags["canonical"] = config.canonical;

  const robots: string[] = [];
  if (config.noIndex) robots.push("noindex");
  if (config.noFollow) robots.push("nofollow");
  if (robots.length === 0) robots.push("index", "follow");
  tags["robots"] = robots.join(", ");

  if (config.title) tags["og:title"] = config.title;
  if (config.description) tags["og:description"] = config.description;
  if (config.type) tags["og:type"] = config.type;
  if (config.image) tags["og:image"] = config.image;
  if (config.url) tags["og:url"] = config.url;
  if (config.locale) tags["og:locale"] = config.locale;
  if (config.alternateLocales) {
    config.alternateLocales.forEach((locale, index) => {
      tags[`og:locale:alternate${index > 0 ? `:${index}` : ""}`] = locale;
    });
  }

  tags["twitter:card"] = "summary_large_image";
  if (config.title) tags["twitter:title"] = config.title;
  if (config.description) tags["twitter:description"] = config.description;
  if (config.image) tags["twitter:image"] = config.image;

  if (config.type === "article") {
    if (config.publishedTime)
      tags["article:published_time"] = config.publishedTime;
    if (config.modifiedTime)
      tags["article:modified_time"] = config.modifiedTime;
    if (config.author) tags["article:author"] = config.author;
  }

  return tags;
};
