export interface Product {
  id: number;
  title: {
    en: string;
    cy: string;
  };
  description: {
    en: string;
    cy: string;
  };
  category: {
    en: string;
    cy: string;
  };
  price: string;
  backgroundImage: string;
  mockImage: string;
}

export const products: Product[] = [
  // DŪON House Beans
  {
    id: 1,
    title: {
      en: "Guatemala",
      cy: "Guatemala",
    },
    description: {
      en: "Floral & Cocoa",
      cy: "Blodeuol & Coco",
    },
    category: {
      en: "DŪON House Beans",
      cy: "Ffa Tŷ DŪON",
    },
    price: "250g",
    backgroundImage: "/assets/beans/bg-1.png",
    mockImage: "/assets/beans/mock-1.png",
  },
  {
    id: 2,
    title: {
      en: "Colombia",
      cy: "Colombia",
    },
    description: {
      en: "Chocolate & Orange",
      cy: "Siocled & Oren",
    },
    category: {
      en: "DŪON House Beans",
      cy: "Ffa Tŷ DŪON",
    },
    price: "250g",
    backgroundImage: "/assets/beans/bg-2.png",
    mockImage: "/assets/beans/mock-2.png",
  },
  {
    id: 3,
    title: {
      en: "Ethiopia",
      cy: "Ethiopia",
    },
    description: {
      en: "Berry & Floral",
      cy: "Aeron & Blodeuol",
    },
    category: {
      en: "DŪON House Beans",
      cy: "Ffa Tŷ DŪON",
    },
    price: "250g",
    backgroundImage: "/assets/beans/bg-3.png",
    mockImage: "/assets/beans/mock-3.png",
  },
  {
    id: 4,
    title: {
      en: "Brazil",
      cy: "Brasil",
    },
    description: {
      en: "Nutty & Caramel",
      cy: "Cneuog & Caramel",
    },
    category: {
      en: "DŪON House Beans",
      cy: "Ffa Tŷ DŪON",
    },
    price: "250g",
    backgroundImage: "/assets/beans/bg-4.png",
    mockImage: "/assets/beans/mock-4.png",
  },
  // Reusable Cups
  {
    id: 5,
    title: {
      en: "Reusable Cup",
      cy: "Cwpan Aildefnyddiadwy",
    },
    description: {
      en: "Double-walled, matte finish",
      cy: "Wal ddwbl, gorffen mat",
    },
    category: {
      en: "Reusable Cups",
      cy: "Cwpanau Aildefnyddiadwy",
    },
    price: "$24",
    backgroundImage: "/assets/cups/bg-5.png",
    mockImage: "/assets/cups/cup-1.png",
  },
  {
    id: 6,
    title: {
      en: "Cork Grip Cup",
      cy: "Cwpan Gafael Corc",
    },
    description: {
      en: "Double-walled with cork grip",
      cy: "Wal ddwbl gyda gafael corc",
    },
    category: {
      en: "Reusable Cups",
      cy: "Cwpanau Aildefnyddiadwy",
    },
    price: "$28",
    backgroundImage: "/assets/cups/bg-6.png",
    mockImage: "/assets/cups/cup-2.png",
  },
  {
    id: 7,
    title: {
      en: "Silicone Grip Cup",
      cy: "Cwpan Gafael Silicone",
    },
    description: {
      en: "Double-walled with silicone grip",
      cy: "Wal ddwbl gyda gafael silicone",
    },
    category: {
      en: "Reusable Cups",
      cy: "Cwpanau Aildefnyddiadwy",
    },
    price: "$26",
    backgroundImage: "/assets/cups/bg-7.png",
    mockImage: "/assets/cups/cup-3.png",
  },
  {
    id: 8,
    title: {
      en: "Silicone Grip Cup",
      cy: "Cwpan Gafael Silicone",
    },
    description: {
      en: "Double-walled with silicone grip",
      cy: "Wal ddwbl gyda gafael silicone",
    },
    category: {
      en: "Reusable Cups",
      cy: "Cwpanau Aildefnyddiadwy",
    },
    price: "$26",
    backgroundImage: "/assets/cups/bg-8.png",
    mockImage: "/assets/cups/cup-4.png",
  },
];

export const productCategories = {
  en: [
    "All",
    "DŪON House Beans",
    "Reusable Cups",
    "Oversized Tees",
    "Crewnecks",
    "Dad Caps / Beanies",
    "Posters / Art Prints",
    "Stickers",
  ],
  cy: [
    "Popeth",
    "Ffa Tŷ DŪON",
    "Cwpanau Aildefnyddiadwy",
    "Crysau-T Mawr",
    "Crewnecks",
    "Capiau Tad / Beanies",
    "Posteri / Printiau Celf",
    "Sticeri",
  ],
};
