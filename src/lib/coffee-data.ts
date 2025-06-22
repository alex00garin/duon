export interface CoffeeTopic {
  title: string;
  description: string;
  href: string;
  content: CoffeeTopicDetailed[];
}

export interface CoffeeTopicDetailed {
  title: string;
  description: string;
  illustration: string;
}

export const coffeeTopics: CoffeeTopic[] = [
  {
    title: "BREWING METHODS",
    description: "Explore different ways to brew coffee",
    href: "/coffee/brewing-methods",
    content: [
      {
        title: "French Press (Cafetière)",
        description: `Simple and bold. Steep coarse grounds in hot water, then plunge with a mesh filter. Full-bodied, oily, with some grit. Best for medium–dark roasts.
          Grind: Coarse
          Ratio: 1:15
          Temp: 94°C
          Time: 4 min steep + slow press
          Best for: body over clarity, no-fuss brewing.`,
        illustration: "/coffee/french-press.png",
      },
      {
        title: "Pour-Over (V60, Chemex)",
        description: `Clean, bright, and precise. Water is poured over coffee in a circular motion, allowing control over flow rate and extraction. Produces clarity with light to medium roasts.
          Grind: Medium-fine
          Ratio: 1:16
          Temp: 94°C
          Time: ~3 min total pour
          Best for: clarity, flavour nuance, and single-cup perfection.`,
        illustration: "/coffee/chemex.png",
      },
      {
        title: "AeroPress",
        description: `Fast, clean, and travel-friendly. Uses immersion and pressure to extract concentrated coffee in under 2 minutes. Less acidic, smooth, and easy to tweak.
          Grind: Medium-fine
          Ratio: 1:15
          Water temp: ~85–92°C
          Time: ~1–2 minutes
          Use when: you want clarity and control, or need a compact brewer.`,
        illustration: "/coffee/aero-press.png",
      },
      {
        title: "Espresso (Machine)",
        description: `Intense, short, and punchy. Forces hot water through finely ground coffee under high pressure. Thick crema, rich aroma, and full flavour in 25 seconds.
          Grind: Fine
          Ratio: 1:2
          Water temp: ~93°C
          Time: 25–30 seconds
          Use when: you want bold flavour and speed. Base for lattes, cappuccinos, flat whites.`,
        illustration: "/coffee/espresso-machine.png",
      },
      {
        title: "Moka Pot (Stovetop)",
        description: `Old-school Italian. Steam pressure pushes water through grounds. Strong, rich brew with heavy body — like espresso but rustic.
          Grind: Fine-medium
          Ratio: Fill water chamber + basket
          Water temp: Starts cold
          Time: ~5–7 minutes
          Use when: you want espresso vibes without the machine.`,
        illustration: "/coffee/moka-pot.png",
      },
      {
        title: "Siphon (Vacuum Brewer)",
        description: `Science lab meets coffee. Water boils into top chamber, steeps, then gets vacuumed back down. Clean, complex, aromatic brew.
          Grind: Medium
          Ratio: 1:15
          Water temp: Controlled by flame
          Time: ~6–8 minutes
          Use when: you're brewing to impress or nerd out.`,
        illustration: "/coffee/siphon.png",
      },
      {
        title: "Cold Brew (Immersion)",
        description: `Zero heat, all chill. Grounds steep in cold water for 12–24 hours. Low acidity, smooth and mellow. Great over ice or with milk.
          Grind: Coarse
          Ratio: 1:5 (concentrate)
          Water temp: Cold
          Time: 12–18 hours
          Use when: you want smooth coffee, iced or diluted.`,
        illustration: "/coffee/cold-brew.png",
      },
      {
        title: "Turkish Coffee",
        description: `Unfiltered, rich tradition. Extra-fine grounds simmered in a cezve with water and sugar. Served thick and sludgy, often with cardamom.
          Grind: Powder-fine
          Ratio: ~1:10
          Water temp: Simmered
          Time: ~3–4 minutes
          Use when: you want bold flavour and cultural ritual.`,
        illustration: "/coffee/turkish.png",
      },
    ],
  },
  {
    title: "BEAN TYPES",
    description: "Know your Arabica from your Robusta",
    href: "/coffee/bean-types",
    content: [
      {
        title: "Arabica",
        description: "Smooth, acidic, balanced. Best for espresso and filter.",
        illustration: "/coffee/arabica.png",
      },
    ],
  },
  {
    title: "ROAST LEVELS",
    description: "Light, medium, dark — what it means",
    href: "/coffee/roast-levels",
    content: [
      {
        title: "Light Roast",
        description: "Bright, fruity, floral. Best for espresso and filter.",
        illustration: "/coffee/light-roast.png",
      },
    ],
  },
  {
    title: "GRIND SIZE GUIDE",
    description: "How to grind for each brew",
    href: "/coffee/grind-size",
    content: [
      {
        title: "Fine Grind",
        description: "Espresso. Best for espresso and filter.",
        illustration: "/coffee/fine-grind.png",
      },
    ],
  },
  {
    title: "WATER MATTERS",
    description: "Temps, ratios, and brewing clarity",
    href: "/coffee/water-matters",
    content: [
      {
        title: "Water Temperature",
        description: "92–96°C. Ratio? 1g coffee to 15–17g water.",
        illustration: "/coffee/water-temperature.png",
      },
    ],
  },
  {
    title: "DECAF TRUTH",
    description: "How decaf is made and what to expect",
    href: "/coffee/decaf-truth",
    content: [
      {
        title: "Decaf Truth",
        description:
          "Most decaf has ~3% caffeine. Swiss Water is best. Taste varies — tech's improving.",
        illustration: "/coffee/decaf-truth.png",
      },
    ],
  },
  {
    title: "ESPRESSO VS FILTER",
    description: "Taste, texture, and what suits you best",
    href: "/coffee/espresso-vs-filter",
    content: [
      {
        title: "Espresso",
        description: "Bold and short. Best for espresso and filter.",
        illustration: "/coffee/espresso.png",
      },
    ],
  },
  {
    title: "HOW TO STORE COFFEE",
    description: "Keep it fresh — do it right",
    href: "/coffee/storage",
    content: [
      {
        title: "Storage",
        description:
          "Cool, dark, airtight. Don't freeze unless it's vacuum-sealed.",
        illustration: "/coffee/storage.png",
      },
    ],
  },
  {
    title: "MILK & TEXTURE",
    description: "Froth types, ratios, and mouthfeel",
    href: "/coffee/milk-texture",
    content: [
      {
        title: "Milk & Texture",
        description:
          "Microfoam = smooth. Whole milk = rich. Alt milks vary — oat wins.",
        illustration: "/coffee/milk-texture.png",
      },
    ],
  },
  {
    title: "TASTING NOTES",
    description: "Understand flavour profiles and how to identify them",
    href: "/coffee/tasting-notes",
    content: [
      {
        title: "Tasting Notes",
        description:
          "Flavours: chocolate, nut, citrus, floral, funky. Sip. Think. Repeat.",
        illustration: "/coffee/tasting-notes.png",
      },
    ],
  },
];
