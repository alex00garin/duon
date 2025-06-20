import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import { BlurIn } from "@/components/blur-in";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-5xl mb-4 uppercase">About DŪON</h1>
      <BlurIn>
        <p className="text-2xl">
          A Cardiff-based project exploring coffee, design, and clean utility.
        </p>
      </BlurIn>
    </div>
  );
}
