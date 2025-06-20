import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import { BlurIn } from "@/components/blur-in";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/shop",
  component: Shop,
});

function Shop() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-5xl mb-4 uppercase">Shop</h1>
      <BlurIn>
        <p className="text-2xl">Coming soon.</p>
      </BlurIn>
    </div>
  );
}
