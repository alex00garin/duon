import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import { Section } from "@/components/Section";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CoffeeCard } from "@/components/coffee/CoffeeCard";
import { coffeeTopics } from "@/lib/coffee-data";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/coffee",
  component: Coffee,
});

function Coffee() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <Section
      title="Coffee"
      description="Brewing methods. Bean types. Tips worth knowing. No fluff."
      animated={true}
    >
      <motion.div
        layout
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`flex flex-col md:flex-row gap-6 mt-10`}
      >
        <motion.div
          layout
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`${
            activeIndex !== null
              ? "md:w-[30%] flex flex-col gap-3"
              : "w-full grid grid-cols-1 md:grid-cols-2 gap-6"
          }`}
        >
          {coffeeTopics.map((topic, index) => (
            <CoffeeCard
              key={topic.href}
              title={topic.title}
              description={topic.description}
              content={topic.content}
              index={index}
              isActive={activeIndex === index}
              isCollapsed={activeIndex !== null}
              onClick={() =>
                setActiveIndex(index === activeIndex ? null : index)
              }
            />
          ))}
        </motion.div>

        {/* Desktop content panel */}
        <AnimatePresence mode="wait">
          {activeIndex !== null && (
            <motion.div
              key={activeIndex}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
                layout: { duration: 0.5 },
              }}
              className="hidden md:block md:w-[70%] border border-border p-6 bg-muted/30 relative"
            >
              <button
                onClick={() => setActiveIndex(null)}
                className="absolute cursor-pointer top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <h3 className="text-xl font-semibold mb-4 uppercase">
                {coffeeTopics[activeIndex].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {coffeeTopics[activeIndex].content}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
