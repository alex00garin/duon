import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import { Section } from "@/components/Section";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/coffee",
  component: Coffee,
});

function Coffee() {
  return (
    <Section
      title="Coffee"
      description="Brewing methods. Bean types. Tips worth knowing. No fluff."
      animated={true}
    >
      <div className="space-y-6 mt-10">
        <ArticleLink href="/coffee/types-of-coffee" title="Types of Coffee" />
        <ArticleLink href="/coffee/brewing-methods" title="Brewing Methods" />
        <ArticleLink href="/coffee/grind-size" title="Grind Size Guide" />
        <ArticleLink
          href="/coffee/arabica-vs-robusta"
          title="Arabica vs Robusta"
        />
      </div>
    </Section>
  );
}

// Optional reusable subcomponent
function ArticleLink({ href, title }: { href: string; title: string }) {
  return (
    <a
      href={href}
      className="block border-b border-muted-foreground pb-2 text-lg uppercase tracking-wide hover:opacity-80 transition"
    >
      {title}
    </a>
  );
}
