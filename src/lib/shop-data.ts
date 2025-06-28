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
  // DŪON House Beans
  {
    id: 1,
    title: "Guatemala",
    description: "Floral & Cocoa",
    category: "DŪON House Beans",
    price: "250g",
    backgroundImage: "/assets/beans/bg-1.png",
    mockImage: "/assets/beans/mock-1.png",
  },
  {
    id: 2,
    title: "Colombia",
    description: "Chocolate & Orange",
    category: "DŪON House Beans",
    price: "250g",
    backgroundImage: "/assets/beans/bg-2.png",
    mockImage: "/assets/beans/mock-2.png",
  },
  {
    id: 3,
    title: "Ethiopia",
    description: "Berry & Floral",
    category: "DŪON House Beans",
    price: "250g",
    backgroundImage: "/assets/beans/bg-3.png",
    mockImage: "/assets/beans/mock-3.png",
  },
  {
    id: 4,
    title: "Brazil",
    description: "Nutty & Caramel",
    category: "DŪON House Beans",
    price: "250g",
    backgroundImage: "/assets/beans/bg-4.png",
    mockImage: "/assets/beans/mock-4.png",
  },
  // Reusable Cups
  {
    id: 5,
    title: "Reusable Cup",
    description: "Double-walled, matte finish",
    category: "Reusable Cups",
    price: "$24",
    backgroundImage: "/assets/cups/bg-5.png",
    mockImage: "/assets/cups/cup-1.png",
  },
  {
    id: 6,
    title: "Cork Grip Cup",
    description: "Double-walled with cork grip",
    category: "Reusable Cups",
    price: "$28",
    backgroundImage: "/assets/cups/bg-6.png",
    mockImage: "/assets/cups/cup-2.png",
  },
  {
    id: 7,
    title: "Silicone Grip Cup",
    description: "Double-walled with silicone grip",
    category: "Reusable Cups",
    price: "$26",
    backgroundImage: "/assets/cups/bg-7.png",
    mockImage: "/assets/cups/cup-3.png",
  },
  {
    id: 8,
    title: "Silicone Grip Cup",
    description: "Double-walled with silicone grip",
    category: "Reusable Cups",
    price: "$26",
    backgroundImage: "/assets/cups/bg-8.png",
    mockImage: "/assets/cups/cup-4.png",
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
