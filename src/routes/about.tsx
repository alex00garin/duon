import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import { Section } from "@/components/Section";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

function About() {
  return (
    <Section
      title="About"
      description="A Cardiff-based project exploring coffee, design, and clean utility."
      animated={true}
    />
  );
}
