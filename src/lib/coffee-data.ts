export interface CoffeeTopic {
  title: string;
  description: string;
  href: string;
  content: string;
}

export const coffeeTopics: CoffeeTopic[] = [
  {
    title: "BREWING METHODS",
    description: "Explore different ways to brew coffee",
    href: "/coffee/brewing-methods",
    content:
      "French press, pour-over, AeroPress, moka pot, siphon, espresso — each method influences flavour, texture, and body differently.",
  },
  {
    title: "BEAN TYPES",
    description: "Know your Arabica from your Robusta",
    href: "/coffee/bean-types",
    content:
      "Arabica beans are smooth and acidic. Robusta is bolder, earthier, and higher in caffeine. Liberica and Excelsa are niche but unique.",
  },
  {
    title: "ROAST LEVELS",
    description: "Light, medium, dark — what it means",
    href: "/coffee/roast-levels",
    content:
      "Light roasts preserve origin flavours. Medium roasts balance acidity and body. Dark roasts emphasise bitterness and oiliness.",
  },
  {
    title: "GRIND SIZE GUIDE",
    description: "How to grind for each brew",
    href: "/coffee/grind-size",
    content:
      "Espresso needs fine grind. French press loves coarse. Pour-over works best with medium-fine. Wrong grind = wrong extraction.",
  },
  {
    title: "WATER MATTERS",
    description: "Temps, ratios, and brewing clarity",
    href: "/coffee/water-matters",
    content:
      "Use filtered water at 92–96°C. Ideal ratio is 1:15–1:17 coffee to water. Don't underestimate your H₂O.",
  },
  {
    title: "DECAF TRUTH",
    description: "How decaf is made and what to expect",
    href: "/coffee/decaf-truth",
    content:
      "Swiss Water Process is clean and chemical-free. Most decafs have 2–3% caffeine. Taste suffers a bit, but technology is improving.",
  },
  {
    title: "ESPRESSO VS FILTER",
    description: "Taste, texture, and what suits you best",
    href: "/coffee/espresso-vs-filter",
    content:
      "Espresso is intense, syrupy, and concentrated. Filter is clean, aromatic, and subtle. Choose your weapon.",
  },
  {
    title: "HOW TO STORE COFFEE",
    description: "Keep it fresh — do it right",
    href: "/coffee/storage",
    content:
      "Use airtight containers. Avoid light, air, and moisture. Freeze if needed, but only in sealed bags.",
  },
  {
    title: "MILK & TEXTURE",
    description: "Froth types, ratios, and mouthfeel",
    href: "/coffee/milk-texture",
    content:
      "Microfoam for flat whites. Dry foam for cappuccinos. Whole milk = creamy. Oat milk = good structure. Skim = meh.",
  },
  {
    title: "TASTING NOTES",
    description: "Understand flavour profiles and how to identify them",
    href: "/coffee/tasting-notes",
    content:
      "Notes range from chocolate, nutty, citrus to floral and boozy. Slurp, swish, and note what lingers.",
  },
];
