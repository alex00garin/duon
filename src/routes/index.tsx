import { createRoute, Link } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import { BlurIn } from "@/components/blur-in";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Index,
});

function Index() {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center h-[calc(100vh-var(--header-height-lg))]`}
    >
      <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-10xlfont-light uppercase tracking-widest leading-none mb-8">
        DŪON
      </h1>

      <BlurIn>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-16 max-w-2xl leading-tight tracking-wide">
          Minimal coffee. Everyday wear. Made with intent.
        </p>
      </BlurIn>
      <Link
        to="/shop"
        className="
          inline-block px-8 py-4 
          border-2 border-foreground 
          text-foreground bg-transparent
          uppercase tracking-widest font-medium text-sm
          transition-colors duration-200 ease-in-out
          hover:bg-foreground hover:text-background
          focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background
        "
      >
        Enter Shop
      </Link>
    </div>
  );
}
