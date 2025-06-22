import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import { Section } from "@/components/Section";
import { useState } from "react";
import { CoffeeCard } from "@/components/coffee/CoffeeCard";
import { coffeeTopics } from "@/lib/coffee-data";
import { useScrollVisibility } from "@/hooks/useScrollVisibility";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/coffee",
  component: Coffee,
});

function Coffee() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isHeaderVisible = useScrollVisibility();

  const handleCardClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full h-full bg-background">
      <Section
        title="Coffee"
        description="Brewing methods. Bean types. Tips worth knowing. No fluff."
        animated={true}
      >
        <div className="mt-10 mx-auto">
          <div className="space-y-4">
            {coffeeTopics.map((topic, index) => (
              <CoffeeCard
                key={topic.href}
                title={topic.title}
                description={topic.description}
                content={topic.content}
                isActive={activeIndex === index}
                isHeaderVisible={isHeaderVisible}
                onClick={() => handleCardClick(index)}
              />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
