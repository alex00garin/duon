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
  detailedDescription: {
    en: string;
    cy: string;
  };
  category: {
    en: string;
    cy: string;
  };
  backgroundImage: string;
  mockImage: string;
  specifications?: {
    en: string[];
    cy: string[];
  };
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
    detailedDescription: {
      en: "Sourced from the volcanic highlands of Antigua, Guatemala, this single-origin coffee offers a complex cup with bright floral notes complemented by rich cocoa undertones. Grown at 1,400-1,800 meters above sea level, these beans develop exceptional density and flavor complexity. The careful wet processing method preserves the bean's natural sweetness while highlighting its distinctive terroir. Perfect for both espresso and filter brewing methods, this coffee delivers a balanced acidity with a lingering chocolate finish that reflects the region's rich volcanic soil.",
      cy: "Wedi'i gyrchu o ucheldir folcanig Antigua, Guatemala, mae'r coffi un-darddiad hwn yn cynnig cwpan cymhleth gyda nodyn blodeuol llachar wedi'u hategu gan is-donau coco cyfoethog. Wedi'i dyfu ar 1,400-1,800 metr uwchben lefel y môr, mae'r ffa hyn yn datblygu dwysedd eithriadol a chymhlethdod blas. Mae'r dull prosesu gwlyb gofalus yn cadw melyster naturiol y ffeuyn tra'n tynnu sylw at ei terroir nodedig. Yn berffaith ar gyfer dulliau bragu espresso a hidlo, mae'r coffi hwn yn cyflawni asidredd cytbwys gyda gorffeniad siocled hirhoedlog sy'n adlewyrchu pridd folcanig cyfoethog y rhanbarth.",
    },
    category: {
      en: "DŪON House Beans",
      cy: "Ffa Tŷ DŪON",
    },
    backgroundImage: "/assets/beans/bg-1.png",
    mockImage: "/assets/beans/mock-1.png",
    specifications: {
      en: [
        "Origin: Antigua, Guatemala",
        "Altitude: 1,400-1,800m",
        "Process: Washed",
        "Variety: Bourbon, Caturra",
        "Roast Level: Medium",
        "Tasting Notes: Floral, Cocoa, Citrus",
        "Best For: Espresso, Pour Over, French Press",
      ],
      cy: [
        "Tarddiad: Antigua, Guatemala",
        "Uchder: 1,400-1,800m",
        "Proses: Golchedig",
        "Math: Bourbon, Caturra",
        "Lefel Rhostio: Canolig",
        "Nodiadau Blasu: Blodeuol, Coco, Citrws",
        "Gorau Ar Gyfer: Espresso, Pour Over, French Press",
      ],
    },
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
    detailedDescription: {
      en: "From the renowned coffee region of Huila, Colombia, this exceptional single-origin showcases the perfect harmony between rich chocolate sweetness and bright citrus acidity. Cultivated by small-scale farmers at altitudes reaching 1,600-2,000 meters, these beans benefit from the region's ideal climate conditions and volcanic soil. The careful honey processing method creates a unique flavor profile that balances the natural fruit-forward characteristics with deep, chocolatey body. Each cup delivers notes of dark chocolate, orange zest, and subtle caramel, making it equally enjoyable as a morning espresso or afternoon filter coffee.",
      cy: "O ardal goffi enwog Huila, Colombia, mae'r un-darddiad eithriadol hwn yn arddangos yr harmoni perffaith rhwng melyster siocled cyfoethog ac asidredd citrws llachar. Wedi'i feithrin gan ffermwyr graddfa fach ar uchderau'n cyrraedd 1,600-2,000 metr, mae'r ffa hyn yn elwa o amodau hinsawdd delfrydol y rhanbarth a phridd folcanig. Mae'r dull prosesu mêl gofalus yn creu proffil blas unigryw sy'n cydbwyso'r nodweddion ffrwyth-flaen naturiol gyda chorff dwfn, siocoaidd. Mae pob cwpan yn cflawni nodyn o siocled tywyll, croen oren, a charamel cynnil, gan ei wneud yr un mor fwynhaol fel espresso bore neu goffi hidlo prynhawn.",
    },
    category: {
      en: "DŪON House Beans",
      cy: "Ffa Tŷ DŪON",
    },
    backgroundImage: "/assets/beans/bg-2.png",
    mockImage: "/assets/beans/mock-2.png",
    specifications: {
      en: [
        "Origin: Huila, Colombia",
        "Altitude: 1,600-2,000m",
        "Process: Honey",
        "Variety: Castillo, Colombia",
        "Roast Level: Medium-Dark",
        "Tasting Notes: Dark Chocolate, Orange, Caramel",
        "Best For: Espresso, Aeropress, Cold Brew",
      ],
      cy: [
        "Tarddiad: Huila, Colombia",
        "Uchder: 1,600-2,000m",
        "Proses: Mêl",
        "Math: Castillo, Colombia",
        "Lefel Rhostio: Canolig-Tywyll",
        "Nodiadau Blasu: Siocled Tywyll, Oren, Caramel",
        "Gorau Ar Gyfer: Espresso, Aeropress, Cold Brew",
      ],
    },
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
    detailedDescription: {
      en: "Experience the birthplace of coffee with this extraordinary Ethiopian single-origin from the Sidamo region. Known for its wine-like complexity and vibrant fruit-forward profile, this naturally processed coffee showcases the unique terroir of high-altitude African cultivation. Grown at 1,700-2,200 meters by indigenous varietals, these beans develop intense aromatics and exceptional clarity. The natural sun-drying process intensifies the fruit characteristics, creating a cup that bursts with blueberry, jasmine, and wine-like notes. This coffee represents the pure essence of Ethiopian coffee tradition, offering a transcendent experience for those seeking something truly extraordinary.",
      cy: "Profwch fan geni coffi gyda'r un-darddiad Ethiopaidd eithriadol hwn o ardal Sidamo. Yn adnabyddus am ei gymhlethdod tebyg i win a'i broffil ffrwyth-flaen bywiog, mae'r coffi wedi'i brosesu'n naturiol hwn yn arddangos terroir unigryw meithriniad Affricanaidd uchel-uchder. Wedi'i dyfu ar 1,700-2,200 metr gan amrywogaethau brodorol, mae'r ffa hyn yn datblygu arogleuon dwys ac eglurder eithriadol. Mae'r broses sychu haul naturiol yn dwysáu'r nodweddion ffrwyth, gan greu cwpan sy'n byrstio gyda glasfwyar, jasmin, a nodyn tebyg i win. Mae'r coffi hwn yn cynrychioli hanfod pur traddodiad coffi Ethiopaidd, gan gynnig profiad trawsgynnol i'r rhai sy'n chwilio am rywbeth gwirioneddol eithriadol.",
    },
    category: {
      en: "DŪON House Beans",
      cy: "Ffa Tŷ DŪON",
    },
    backgroundImage: "/assets/beans/bg-3.png",
    mockImage: "/assets/beans/mock-3.png",
    specifications: {
      en: [
        "Origin: Sidamo, Ethiopia",
        "Altitude: 1,700-2,200m",
        "Process: Natural",
        "Variety: Indigenous Heirloom",
        "Roast Level: Light-Medium",
        "Tasting Notes: Blueberry, Jasmine, Wine",
        "Best For: Pour Over, V60, Chemex",
      ],
      cy: [
        "Tarddiad: Sidamo, Ethiopia",
        "Uchder: 1,700-2,200m",
        "Proses: Naturiol",
        "Math: Etifeddol Brodorol",
        "Lefel Rhostio: Ysgafn-Canolig",
        "Nodiadau Blasu: Glasfwyar, Jasmin, Gwin",
        "Gorau Ar Gyfer: Pour Over, V60, Chemex",
      ],
    },
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
    detailedDescription: {
      en: "From the renowned Cerrado region of Brazil, this pulped natural processed coffee exemplifies Brazilian coffee excellence. Grown at 1,000-1,300 meters in the mineral-rich soils of Minas Gerais, these beans develop a distinctive nutty sweetness with caramel complexity. The pulped natural process creates the perfect balance between clean acidity and full body, resulting in a coffee that's both approachable and sophisticated. With notes of roasted hazelnuts, brown sugar, and dark caramel, this Brazilian single-origin offers exceptional versatility across all brewing methods. It's the perfect introduction to specialty coffee while satisfying even the most discerning palates.",
      cy: "O ardal enwog Cerrado Brasil, mae'r coffi wedi'i brosesu'n naturiol bwlpaidd hwn yn arddangos rhagoriaeth coffi Brasil. Wedi'i dyfu ar 1,000-1,300 metr ym mhriddoedd cyfoethog mwynol Minas Gerais, mae'r ffa hyn yn datblygu melyster cneuog nodedig gyda chymhlethdod caramel. Mae'r broses naturiol bwlpaidd yn creu'r cydbwysedd perffaith rhwng asidredd glân a chorff llawn, gan arwain at goffi sy'n hygyrch a soffistigedig. Gyda nodyn o gnau cyll wedi'u rhostio, siwgr brown, a charamel tywyll, mae'r un-darddiad Brasil hwn yn cynnig hyblygrwydd eithriadol ar draws pob dull bragu. Mae'n gyflwyniad perffaith i goffi arbenigol tra'n bodloni hyd yn oed y palediaid mwyaf craff.",
    },
    category: {
      en: "DŪON House Beans",
      cy: "Ffa Tŷ DŪON",
    },
    backgroundImage: "/assets/beans/bg-4.png",
    mockImage: "/assets/beans/mock-4.png",
    specifications: {
      en: [
        "Origin: Cerrado, Brazil",
        "Altitude: 1,000-1,300m",
        "Process: Pulped Natural",
        "Variety: Red Catuaí, Mundo Novo",
        "Roast Level: Medium-Dark",
        "Tasting Notes: Hazelnut, Brown Sugar, Caramel",
        "Best For: Espresso, Moka Pot, French Press",
      ],
      cy: [
        "Tarddiad: Cerrado, Brasil",
        "Uchder: 1,000-1,300m",
        "Proses: Naturiol Bwlpaidd",
        "Math: Red Catuaí, Mundo Novo",
        "Lefel Rhostio: Canolig-Tywyll",
        "Nodiadau Blasu: Cneuen Gyll, Siwgr Brown, Caramel",
        "Gorau Ar Gyfer: Espresso, Moka Pot, French Press",
      ],
    },
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
    detailedDescription: {
      en: "Crafted from premium borosilicate glass with a sophisticated matte exterior coating, this double-walled reusable cup represents the perfect fusion of form and function. The innovative double-wall construction provides exceptional thermal insulation, keeping your coffee at the perfect temperature while remaining comfortable to hold. The sleek matte finish not only feels luxurious but also provides enhanced grip and resistance to fingerprints. At 350ml capacity, it's perfectly sized for your daily coffee ritual. The lead-free, BPA-free construction ensures pure taste while the dishwasher-safe design makes maintenance effortless. This cup embodies DŪON's commitment to sustainable luxury and mindful consumption.",
      cy: "Wedi'i grefftio o wydr borosilicad premiwm gyda gorchudd allanol mat soffistigedig, mae'r cwpan aildefnyddiadwy dwy-wal hwn yn cynrychioli'r cyfuniad perffaith o ffurf a swyddogaeth. Mae'r adeiledd dwy-wal arloesol yn darparu ynyswedd thermol eithriadol, gan gadw eich coffi ar y tymheredd perffaith tra'n aros yn gyfforddus i'w dal. Mae'r gorffeniad mat llyfn nid yn unig yn teimlo'n foethus ond hefyd yn darparu gafael gwell a gwrthwynebiad i ôl bysedd. Ar gapasiti 350ml, mae wedi'i feintio'n berffaith ar gyfer eich defod coffi ddyddiol. Mae'r adeiledd heb blwm, heb BPA yn sicrhau blas pur tra bod y dyluniad sy'n ddiogel i'r peiriant golchi llestri yn gwneud cynnal a chadw'n ddiymdrech. Mae'r cwpan hwn yn ymgorffori ymrwymiad DŪON i foethusrwydd cynaliadwy a defnydd ystyriol.",
    },
    category: {
      en: "Reusable Cups",
      cy: "Cwpanau Aildefnyddiadwy",
    },
    backgroundImage: "/assets/cups/bg-5.png",
    mockImage: "/assets/cups/cup-1.png",
    specifications: {
      en: [
        "Material: Borosilicate Glass",
        "Capacity: 350ml (12oz)",
        "Construction: Double-walled",
        "Finish: Matte exterior coating",
        "Temperature: Heat-resistant up to 120°C",
        "Care: Dishwasher safe",
        "Certifications: BPA-free, Lead-free",
      ],
      cy: [
        "Deunydd: Gwydr Borosilicad",
        "Capasiti: 350ml (12oz)",
        "Adeiledd: Wal ddwbl",
        "Gorffeniad: Gorchudd allanol mat",
        "Tymheredd: Gwrthsefyll gwres hyd at 120°C",
        "Gofal: Diogel i'r peiriant golchi llestri",
        "Tystysgrifau: Heb BPA, Heb blwm",
      ],
    },
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
    detailedDescription: {
      en: "Elevate your coffee experience with this exceptional double-walled cup featuring a natural cork grip sleeve. The premium borosilicate glass construction provides superior thermal properties while the sustainably harvested cork sleeve offers unparalleled grip comfort and natural insulation. The cork's unique cellular structure provides additional thermal protection and develops a beautiful patina over time, making each cup uniquely yours. The seamless integration of glass and cork creates a tactile experience that connects you to the natural elements. Perfect for those who appreciate both functionality and environmental consciousness, this 400ml cup is designed for the modern coffee connoisseur who values sustainability without compromising on style.",
      cy: "Codwch eich profiad coffi gyda'r cwpan dwy-wal eithriadol hwn sy'n cynnwys llawes gafael corc naturiol. Mae'r adeiledd gwydr borosilicad premiwm yn darparu priodweddau thermol rhagori tra bod y llawes corc wedi'i gynaeafu'n gynaliadwy yn cynnig cysur gafael digymar ac ynyswedd naturiol. Mae strwythur cellog unigryw y corc yn darparu amddiffyniad thermol ychwanegol ac yn datblygu patina hardd dros amser, gan wneud pob cwpan yn unigryw i chi. Mae'r integreiddio di-dor o wydr a chorc yn creu profiad cyffyrddol sy'n eich cysylltu â'r elfennau naturiol. Yn berffaith i'r rhai sy'n gwerthfawrogi swyddogaethedd ac ymwybyddiaeth amgylcheddol, mae'r cwpan 400ml hwn wedi'i ddylunio ar gyfer yr arbenigwr coffi modern sy'n gwerthfawrogi cynaliadwyedd heb gyfaddawdu ar arddull.",
    },
    category: {
      en: "Reusable Cups",
      cy: "Cwpanau Aildefnyddiadwy",
    },
    backgroundImage: "/assets/cups/bg-6.png",
    mockImage: "/assets/cups/cup-2.png",
    specifications: {
      en: [
        "Material: Borosilicate Glass + Natural Cork",
        "Capacity: 400ml (13.5oz)",
        "Construction: Double-walled glass",
        "Grip: Natural cork sleeve",
        "Sustainability: Cork sustainably harvested",
        "Care: Hand wash recommended",
        "Features: Develops unique patina over time",
      ],
      cy: [
        "Deunydd: Gwydr Borosilicad + Corc Naturiol",
        "Capasiti: 400ml (13.5oz)",
        "Adeiledd: Gwydr wal ddwbl",
        "Gafael: Llawes corc naturiol",
        "Cynaliadwyedd: Corc wedi'i gynaeafu'n gynaliadwy",
        "Gofal: Argymhellir golchi â llaw",
        "Nodweddion: Yn datblygu patina unigryw dros amser",
      ],
    },
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
    detailedDescription: {
      en: "Engineered for the modern lifestyle, this double-walled cup features a precision-molded food-grade silicone grip that provides exceptional handling comfort and thermal protection. The medical-grade silicone sleeve is designed with an ergonomic profile that fits naturally in your hand, while its non-slip surface ensures secure grip even when wet. The premium borosilicate glass maintains pure flavor integrity while the silicone component is completely taste-neutral and odor-resistant. Available in carefully curated colors that complement the DŪON aesthetic, this 380ml cup bridges the gap between performance and style. The silicone sleeve is removable for thorough cleaning and is designed to withstand daily use while maintaining its original appearance and tactile quality.",
      cy: "Wedi'i beiriannu ar gyfer y ffordd fodern o fyw, mae'r cwpan dwy-wal hwn yn cynnwys gafael silicone gradd bwyd wedi'i fowldio'n fanwl gywir sy'n darparu cysur trin eithriadol ac amddiffyniad thermol. Mae'r llawes silicone gradd feddygol wedi'i ddylunio gyda phroffil ergonomig sy'n ffitio'n naturiol yn eich llaw, tra bod ei arwyneb gwrth-lithro yn sicrhau gafael diogel hyd yn oed pan fo'n wlyb. Mae'r gwydr borosilicad premiwm yn cynnal uniondeb blas pur tra bod y cydran silicone yn gwbl niwtral o ran blas ac yn gwrthsefyll arogl. Ar gael mewn lliwiau wedi'u curadu'n ofalus sy'n ategu esthetig DŪON, mae'r cwpan 380ml hwn yn pontio'r bwlch rhwng perfformiad ac arddull. Mae'r llawes silicone yn dynnadwy ar gyfer glanhau trylwyr ac wedi'i ddylunio i wrthsefyll defnydd dyddiol tra'n cynnal ei ymddangosiad gwreiddiol ac ansawdd cyffyrddol.",
    },
    category: {
      en: "Reusable Cups",
      cy: "Cwpanau Aildefnyddiadwy",
    },
    backgroundImage: "/assets/cups/bg-7.png",
    mockImage: "/assets/cups/cup-3.png",
    specifications: {
      en: [
        "Material: Borosilicate Glass + Medical-grade Silicone",
        "Capacity: 380ml (12.8oz)",
        "Construction: Double-walled glass",
        "Grip: Ergonomic silicone sleeve",
        "Safety: Food-grade, BPA-free silicone",
        "Care: Dishwasher safe (sleeve removable)",
        "Features: Non-slip grip, odor-resistant",
      ],
      cy: [
        "Deunydd: Gwydr Borosilicad + Silicone Gradd Feddygol",
        "Capasiti: 380ml (12.8oz)",
        "Adeiledd: Gwydr wal ddwbl",
        "Gafael: Llawes silicone ergonomig",
        "Diogelwch: Silicone gradd bwyd, heb BPA",
        "Gofal: Diogel i'r peiriant golchi llestri (llawes dynnadwy)",
        "Nodweddion: Gafael gwrth-lithro, gwrthsefyll arogl",
      ],
    },
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
    detailedDescription: {
      en: "The ultimate expression of modern cup design, this double-walled masterpiece combines cutting-edge materials with timeless aesthetics. The precision-engineered borosilicate glass construction provides exceptional clarity and thermal performance, while the specially formulated silicone grip offers unmatched tactile comfort. The grip features subtle texturing that enhances handling while maintaining the cup's minimalist visual appeal. This 380ml cup represents the evolution of drinkware design, where every element serves both functional and aesthetic purposes. The removable silicone sleeve allows for personalization and easy maintenance, while the thermal efficiency ensures your beverage maintains optimal temperature throughout your drinking experience. A testament to DŪON's commitment to thoughtful design and exceptional user experience.",
      cy: "Mynegiant eithaf dylunio cwpan modern, mae'r campwaith dwy-wal hwn yn cyfuno deunyddiau blaenllaw gydag estheteg di-amser. Mae'r adeiledd gwydr borosilicad wedi'i beiriangu'n fanwl gywir yn darparu eglurder ac addasrwydd thermol eithriadol, tra bod y gafael silicone wedi'i fformiwleiddio'n arbennig yn cynnig cysur cyffyrddol digymar. Mae'r gafael yn cynnwys gwead cynnil sy'n gwella'r trin tra'n cynnal apêl weledol minimaliaidd y cwpan. Mae'r cwpan 380ml hwn yn cynrychioli esblygiad dylunio offer yfed, lle mae pob elfen yn gwasanaethu dibenion swyddogaethol ac esthetig. Mae'r llawes silicone dynnadwy yn caniatáu personoleiddio a chynnal a chadw hawdd, tra bod yr effeithlonrwydd thermol yn sicrhau bod eich diod yn cynnal tymheredd optimwm trwy gydol eich profiad yfed. Tystiolaeth i ymrwymiad DŪON i ddylunio ystyriol a phrofiad defnyddiwr eithriadol.",
    },
    category: {
      en: "Reusable Cups",
      cy: "Cwpanau Aildefnyddiadwy",
    },
    backgroundImage: "/assets/cups/bg-8.png",
    mockImage: "/assets/cups/cup-4.png",
    specifications: {
      en: [
        "Material: Borosilicate Glass + Premium Silicone",
        "Capacity: 380ml (12.8oz)",
        "Construction: Double-walled glass",
        "Grip: Textured silicone sleeve",
        "Design: Minimalist aesthetic",
        "Care: Dishwasher safe (sleeve removable)",
        "Features: Enhanced tactile comfort, optimal thermal retention",
      ],
      cy: [
        "Deunydd: Gwydr Borosilicad + Silicone Premiwm",
        "Capasiti: 380ml (12.8oz)",
        "Adeiledd: Gwydr wal ddwbl",
        "Gafael: Llawes silicone gwead",
        "Dyluniad: Esthetig minimaliaidd",
        "Gofal: Diogel i'r peiriant golchi llestri (llawes dynnadwy)",
        "Nodweddion: Cysur cyffyrddol gwell, cadw thermol optimwm",
      ],
    },
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
