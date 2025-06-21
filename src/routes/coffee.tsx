import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import { CONTENT_MIN_HEIGHT } from "@/lib/constants";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/coffee",
  component: Coffee,
});

function Coffee() {
  return (
    <div
      className={`flex flex-col items-center justify-center ${CONTENT_MIN_HEIGHT} text-center`}
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Coffee</h1>
        <p className="text-lg text-muted-foreground">Coming soon.</p>
      </div>
    </div>
  );
}
