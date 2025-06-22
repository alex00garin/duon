export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: string;
  backgroundImage: string;
  mockImage: string;
}

export const products: Product[] = [
  // DŪON House Beans - using existing mock images
  {
    id: 1,
    title: "Guatemala",
    description: "Floral & Cocoa",
    category: "DŪON House Beans",
    price: "250g",
    backgroundImage: "/assets/bg-1.png",
    mockImage: "/assets/mock-1.png",
  },
  {
    id: 2,
    title: "Colombia",
    description: "Chocolate & Orange",
    category: "DŪON House Beans",
    price: "250g",
    backgroundImage: "/assets/bg-2.png",
    mockImage: "/assets/mock-2.png",
  },
  {
    id: 3,
    title: "Ethiopia",
    description: "Berry & Floral",
    category: "DŪON House Beans",
    price: "250g",
    backgroundImage: "/assets/bg-3.png",
    mockImage: "/assets/mock-3.png",
  },
  {
    id: 4,
    title: "Brazil",
    description: "Nutty & Caramel",
    category: "DŪON House Beans",
    price: "250g",
    backgroundImage: "/assets/bg-4.png",
    mockImage: "/assets/mock-4.png",
  },
  // Reusable Cups
  {
    id: 5,
    title: "Reusable Cup",
    description: "Double-walled, matte finish",
    category: "Reusable Cups",
    price: "$24",
    backgroundImage: "/assets/bg-1.png",
    mockImage: "/assets/mock-1.png", // Will be replaced with cup design
  },
  {
    id: 6,
    title: "Cork Grip Cup",
    description: "Double-walled with cork grip",
    category: "Reusable Cups",
    price: "$28",
    backgroundImage: "/assets/bg-2.png",
    mockImage: "/assets/mock-2.png",
  },
  {
    id: 7,
    title: "Silicone Grip Cup",
    description: "Double-walled with silicone grip",
    category: "Reusable Cups",
    price: "$26",
    backgroundImage: "/assets/bg-3.png",
    mockImage: "/assets/mock-3.png",
  },
  // Oversized Tees
  {
    id: 8,
    title: "Washed Black Tee",
    description: "Heavy cotton, dropped shoulders",
    category: "Oversized Tees",
    price: "$32",
    backgroundImage: "/assets/bg-4.png",
    mockImage: "/assets/mock-4.png",
  },
  {
    id: 9,
    title: "Cream Tee",
    description: "Heavy cotton, logo centre",
    category: "Oversized Tees",
    price: "$32",
    backgroundImage: "/assets/bg-1.png",
    mockImage: "/assets/mock-1.png",
  },
  {
    id: 10,
    title: "Faded Clay Tee",
    description: "Heavy cotton, tiny left chest logo",
    category: "Oversized Tees",
    price: "$32",
    backgroundImage: "/assets/bg-2.png",
    mockImage: "/assets/mock-2.png",
  },
  // Crewnecks
  {
    id: 11,
    title: "Premium Crewneck",
    description: "Tonal embroidery, premium fleece",
    category: "Crewnecks",
    price: "$58",
    backgroundImage: "/assets/bg-3.png",
    mockImage: "/assets/mock-3.png",
  },
  {
    id: 12,
    title: "Stitched Tag Crewneck",
    description: "Premium fleece, zero text except logo",
    category: "Crewnecks",
    price: "$58",
    backgroundImage: "/assets/bg-4.png",
    mockImage: "/assets/mock-4.png",
  },
  // Dad Caps / Beanies
  {
    id: 13,
    title: "Charcoal Dad Cap",
    description: "Embroidered Colombia symbol",
    category: "Dad Caps / Beanies",
    price: "$28",
    backgroundImage: "/assets/bg-1.png",
    mockImage: "/assets/mock-1.png",
  },
  {
    id: 14,
    title: "Sand Beanie",
    description: "Embroidered logo, neutral tones",
    category: "Dad Caps / Beanies",
    price: "$24",
    backgroundImage: "/assets/bg-2.png",
    mockImage: "/assets/mock-2.png",
  },
  {
    id: 15,
    title: "Sage Dad Cap",
    description: "Embroidered Guatemala symbol",
    category: "Dad Caps / Beanies",
    price: "$28",
    backgroundImage: "/assets/bg-3.png",
    mockImage: "/assets/mock-3.png",
  },
  // Posters / Art Prints
  {
    id: 16,
    title: "Brew Methods Print",
    description: "Hand-drawn vintage sketch style",
    category: "Posters / Art Prints",
    price: "$18",
    backgroundImage: "/assets/bg-4.png",
    mockImage: "/assets/mock-4.png",
  },
  {
    id: 17,
    title: "Bean Types Print",
    description: "Black & white, no branding",
    category: "Posters / Art Prints",
    price: "$18",
    backgroundImage: "/assets/bg-1.png",
    mockImage: "/assets/mock-1.png",
  },
  {
    id: 18,
    title: "Framed Brew Guide",
    description: "Hand-drawn, framed ready",
    category: "Posters / Art Prints",
    price: "$35",
    backgroundImage: "/assets/bg-2.png",
    mockImage: "/assets/mock-2.png",
  },
  // Stickers
  {
    id: 19,
    title: "Logo Sticker Pack",
    description: "Matte finish, tasteful designs",
    category: "Stickers",
    price: "$8",
    backgroundImage: "/assets/bg-3.png",
    mockImage: "/assets/mock-3.png",
  },
  {
    id: 20,
    title: "Bean & Gear Stickers",
    description: "Kraft-textured, brewing gear designs",
    category: "Stickers",
    price: "$12",
    backgroundImage: "/assets/bg-4.png",
    mockImage: "/assets/mock-4.png",
  },
];

export const productCategories = [
  "All",
  "DŪON House Beans",
  "Reusable Cups",
  "Oversized Tees",
  "Crewnecks",
  "Dad Caps / Beanies",
  "Posters / Art Prints",
  "Stickers",
];
