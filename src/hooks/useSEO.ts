import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";
import { defaultSEOConfig, mergeSEOConfig, generateMetaTags } from "@/lib/seo";

interface UseSEOOptions {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article" | "product";
  noIndex?: boolean;
  noFollow?: boolean;
  structuredData?: object[];
  publishedTime?: string;
  modifiedTime?: string;
}

export function useSEO(options: UseSEOOptions = {}) {
  const router = useRouter();

  useEffect(() => {
    const currentUrl = window.location.href;

    const seoConfig = mergeSEOConfig(defaultSEOConfig, {
      ...options,
      url: currentUrl,
      canonical: currentUrl,
    });

    const metaTags = generateMetaTags(seoConfig);

    if (seoConfig.title) {
      document.title = seoConfig.title;
    }

    const existingTags = document.querySelectorAll(
      'meta[data-seo="true"], link[data-seo="true"]'
    );
    existingTags.forEach(tag => tag.remove());

    const existingStructuredData = document.querySelectorAll(
      'script[type="application/ld+json"][data-seo="true"]'
    );
    existingStructuredData.forEach(script => script.remove());

    Object.entries(metaTags).forEach(([key, value]) => {
      if (key === "title") return;

      if (key === "canonical") {
        const link = document.createElement("link");
        link.rel = "canonical";
        link.href = value;
        link.setAttribute("data-seo", "true");
        document.head.appendChild(link);
      } else if (
        key.startsWith("og:") ||
        key.startsWith("twitter:") ||
        key.startsWith("article:")
      ) {
        const meta = document.createElement("meta");
        meta.setAttribute("property", key);
        meta.setAttribute("content", value);
        meta.setAttribute("data-seo", "true");
        document.head.appendChild(meta);
      } else {
        const meta = document.createElement("meta");
        meta.setAttribute("name", key);
        meta.setAttribute("content", value);
        meta.setAttribute("data-seo", "true");
        document.head.appendChild(meta);
      }
    });

    if (options.structuredData && options.structuredData.length > 0) {
      options.structuredData.forEach(data => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo", "true");
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
      });
    }

    const currentPath = window.location.pathname;

    const existingHreflang = document.querySelectorAll("link[hreflang]");
    existingHreflang.forEach(link => link.remove());

    const hreflangs = [
      { lang: "en", url: `https://duon.coffee${currentPath}` },
      { lang: "cy", url: `https://duon.coffee${currentPath}` },
      { lang: "x-default", url: `https://duon.coffee${currentPath}` },
    ];

    hreflangs.forEach(({ lang, url }) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = lang;
      link.href = url;
      document.head.appendChild(link);
    });
  }, [options, router]);

  return {};
}

export function usePageSEO(
  title: string,
  description: string,
  keywords?: string[]
) {
  return useSEO({
    title: `${title} | DŪON`,
    description,
    keywords,
    type: "website",
  });
}

export function useProductSEO(
  product: {
    title: { en: string; cy: string };
    description: { en: string; cy: string };
    image: string;
    category: { en: string; cy: string };
  },
  language: "en" | "cy"
) {
  return useSEO({
    title: `${product.title[language]} | DŪON Coffee`,
    description: product.description[language],
    keywords: ["coffee", product.category[language].toLowerCase(), "DŪON"],
    image: product.image,
    type: "product",
  });
}

export function useArticleSEO(
  title: string,
  description: string,
  publishedTime?: string,
  modifiedTime?: string
) {
  return useSEO({
    title: `${title} | DŪON`,
    description,
    type: "article",
    publishedTime,
    modifiedTime,
    keywords: ["coffee", "design", "Cardiff", "DŪON"],
  });
}
