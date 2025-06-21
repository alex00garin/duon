import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import { CONTENT_MIN_HEIGHT } from "@/lib/constants";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/shop",
  component: Shop,
});

function Shop() {
  return (
    <div
      className={`flex flex-col items-center justify-center ${CONTENT_MIN_HEIGHT} text-center`}
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Shop</h1>
        <p className="text-lg text-muted-foreground">
          Browse our collection of products and services.
        </p>
      </div>
    </div>
  );
}
