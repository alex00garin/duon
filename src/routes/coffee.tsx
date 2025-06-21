import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/coffee",
  component: Coffee,
});

function Coffee() {
  return (
    <div className="flex flex-col items-center justify-start h-full text-left">
      <div className="max-w-3xl w-full mx-auto space-y-10">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold uppercase tracking-tight mb-4">
            Coffee
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl">
            Brewing methods. Bean types. Tips worth knowing. No fluff.
          </p>
        </div>

        <div className="space-y-6">
          <ArticleLink href="/coffee/types-of-coffee" title="Types of Coffee" />
          <ArticleLink href="/coffee/brewing-methods" title="Brewing Methods" />
          <ArticleLink href="/coffee/grind-size" title="Grind Size Guide" />
          <ArticleLink
            href="/coffee/arabica-vs-robusta"
            title="Arabica vs Robusta"
          />
        </div>
      </div>
    </div>
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
