import { createRoute, Link } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/language/useLanguage";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

const translations = {
  en: {
    hero: {
      title: "DŪON",
      subtitle:
        "This isn't a brand. It's a statement about choosing better, designing differently, and refusing to settle for ordinary.",
      location: "Cardiff, 2025",
      philosophy: "01 Philosophy",
      possibilities: "∞ Possibilities",
    },
    philosophy: {
      title: "Our Philosophy",
      intro:
        "Born in Cardiff, inspired by the intersection of design and ritual. We believe in the power of thoughtful curation over mass production.",
      content1:
        "Every product we create is a meditation on material, form, and function. We obsess over details that others overlook because we understand that excellence lives in the subtleties.",
      content2:
        "This is for the discerning few who recognize that true luxury isn't about price tags or logos — it's about the quiet confidence that comes from choosing better.",
    },
    values: {
      title: "What Drives Us",
      subtitle: "Four principles that guide everything we create",
      items: [
        {
          title: "Craft",
          description:
            "Meticulous attention to detail and uncompromising quality in every product we create.",
        },
        {
          title: "Authenticity",
          description:
            "No artificial personas. Just honest design and genuine passion for what we create.",
        },
        {
          title: "Rebellion",
          description:
            "Against the mundane, the mass-produced, the forgettable. We choose to stand apart.",
        },
        {
          title: "Ritual",
          description:
            "Understanding that the best experiences are found in the quiet moments of daily practice.",
        },
      ],
    },
    journey: {
      title: "Our Journey",
      items: [
        {
          year: "2025",
          phase: "Foundation",
          title: "The Beginning",
          description:
            "Born from a simple frustration with bland coffee culture and uninspired design. We set out to create something different.",
        },
        {
          year: "Now",
          phase: "Growth",
          title: "Building Community",
          description:
            "Curating exceptional experiences while building a community of design-conscious individuals who appreciate the finer details.",
        },
        {
          year: "Future",
          phase: "Vision",
          title: "Beyond Coffee",
          description:
            "Expanding our philosophy into every aspect of considered living. Design as a way of being, not just consuming.",
        },
      ],
    },
    cta: {
      title: "Join Our Community",
      subtitle: "For those who refuse to settle for ordinary. Welcome to DŪON.",
      button: "Explore Our Products",
    },
  },
  cy: {
    hero: {
      title: "DŪON",
      subtitle:
        "Nid brand yw hwn. Datganiad yw am ddewis gwell, dylunio'n wahanol, a gwrthod bodloni ar yr cyffredin.",
      location: "Caerdydd, 2025",
      philosophy: "01 Athroniaeth",
      possibilities: "∞ Posibiliadau",
    },
    philosophy: {
      title: "Ein Hathroniaeth",
      intro:
        "Wedi'i eni yng Nghaerdydd, wedi'i ysbrydoli gan groestoriad dylunio a defod. Rydym yn credu yn nerth curadu ystyriol dros gynhyrchu torfol.",
      content1:
        "Mae pob cynnyrch a grëwn yn fyfyrdod ar ddeunydd, ffurf, a swyddogaeth. Rydym yn obsesiynol am fanylion mae eraill yn eu hanwybyddu oherwydd ein bod yn deall bod rhagoriaeth yn byw yn y manylion.",
      content2:
        "Mae hyn ar gyfer yr ychydig craff sy'n cydnabod nad yw moethusrwydd gwir am dagiau pris neu logos — mae'n ymwneud â'r hyder tawel sy'n dod o ddewis gwell.",
    },
    values: {
      title: "Beth sy'n Ein Gyrru",
      subtitle: "Pedwar egwyddor sy'n arwain popeth a grëwn",
      items: [
        {
          title: "Crefft",
          description:
            "Sylw manwl gofalus a ansawdd digyfaddawd ym mhob cynnyrch a grëwn.",
        },
        {
          title: "Dilysrwydd",
          description:
            "Dim personoliaethau ffug. Dim ond dylunio gonest ac angerdd gwirioneddol am yr hyn a grëwn.",
        },
        {
          title: "Gwrthryfel",
          description:
            "Yn erbyn y cyffredin, y cynhyrchiant torfol, yr anghofiadwy. Rydym yn dewis sefyll ar wahân.",
        },
        {
          title: "Defod",
          description:
            "Deall bod y profiadau gorau i'w canfod yn y fomentau tawel o ymarfer bob dydd.",
        },
      ],
    },
    journey: {
      title: "Ein Taith",
      items: [
        {
          year: "2025",
          phase: "Sylfaen",
          title: "Y Dechrau",
          description:
            "Wedi'i eni o rwystredigaeth syml gyda diwylliant coffi di-flas a dylunio di-ysbryd. Rydym wedi penderfynu creu rhywbeth gwahanol.",
        },
        {
          year: "Nawr",
          phase: "Twf",
          title: "Adeiladu Cymuned",
          description:
            "Curadu profiadau eithriadol tra'n adeiladu cymuned o unigolion ymwybodol o ddylunio sy'n gwerthfawrogi'r manylion mwyn.",
        },
        {
          year: "Dyfodol",
          phase: "Gweledigaeth",
          title: "Tu Hwnt i Goffi",
          description:
            "Ehangu ein hathroniaeth i bob agwedd o fyw ystyriol. Dylunio fel ffordd o fod, nid dim ond defnyddio.",
        },
      ],
    },
    cta: {
      title: "Ymunwch â'n Cymuned",
      subtitle: "I'r rhai sy'n gwrthod bodloni ar yr cyffredin. Croeso i DŪON.",
      button: "Archwilio Ein Cynhyrchion",
    },
  },
};

function About() {
  const { language } = useLanguage();
  const t = translations[language];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Sophisticated typography focus */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center min-h-screen">
            {/* Main Title */}
            <motion.div
              className="lg:col-span-7 order-2 lg:order-1"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                >
                  <h1 className="text-7xl sm:text-8xl lg:text-9xl font-bold text-foreground leading-[0.85] tracking-tighter">
                    {t.hero.title}
                  </h1>
                </motion.div>

                <motion.div
                  className="space-y-6 max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                  <p className="text-2xl lg:text-3xl text-muted-foreground font-light leading-relaxed">
                    {t.hero.subtitle}
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-px bg-primary"></div>
                    <span className="text-sm text-muted-foreground uppercase tracking-wider">
                      {t.hero.location}
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Side Stats */}
            <motion.div
              className="lg:col-span-5 order-1 lg:order-2 flex lg:justify-end"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-8 lg:gap-12 text-right lg:text-left">
                <div>
                  <div className="text-6xl lg:text-7xl font-bold text-primary mb-2">
                    01
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">
                    {t.hero.philosophy.split(" ")[1]}
                  </div>
                </div>
                <div>
                  <div className="text-6xl lg:text-7xl font-bold text-foreground mb-2">
                    ∞
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">
                    {t.hero.possibilities.split(" ")[1]}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Subtle background element */}
        <motion.div
          className="absolute top-1/2 right-0 w-1/3 h-1/3 bg-gradient-to-l from-primary/5 to-transparent rounded-l-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 1, ease: "easeOut" }}
        />
      </section>

      {/* Philosophy Section - Clean typography */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <motion.div
              className="lg:col-span-4"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {t.philosophy.title.split(" ")[0]}
                <br />
                {t.philosophy.title.split(" ").slice(1).join(" ")}
              </h2>
            </motion.div>

            <motion.div
              className="lg:col-span-8 space-y-12"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp} className="space-y-6">
                <p className="text-xl lg:text-2xl text-foreground font-light leading-relaxed">
                  {t.philosophy.intro}
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  {t.philosophy.content1}
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  {t.philosophy.content2}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - Clean numbered layout */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <motion.div
            className="mb-24"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {t.values.title}
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl">
              {t.values.subtitle}
            </p>
          </motion.div>

          <div className="space-y-16 lg:space-y-20">
            {t.values.items.map((value, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <div className="lg:col-span-2">
                  <div className="text-7xl lg:text-8xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-500">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="lg:col-span-10 space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section - Timeline with elegant spacing */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground">
              {t.journey.title}
            </h2>
          </motion.div>

          <div className="space-y-24">
            {t.journey.items.map((item, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
              >
                <div className="lg:col-span-3">
                  <div className="space-y-2">
                    <div className="text-4xl lg:text-5xl font-bold text-primary">
                      {item.year}
                    </div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider">
                      {item.phase}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-9 space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Minimal and elegant */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <motion.div
            className="text-center space-y-12"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {t.cta.title}
              </h2>
              <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
                {t.cta.subtitle}
              </p>
            </div>

            <Link to="/shop">
              <motion.button
                className="inline-flex items-center space-x-3 bg-foreground text-background px-8 py-4 text-lg font-medium hover:bg-foreground/90 transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{t.cta.button}</span>
                <motion.span
                  className="text-xl"
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                >
                  →
                </motion.span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
