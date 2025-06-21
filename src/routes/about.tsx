import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import { CONTENT_MIN_HEIGHT } from "@/lib/constants";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

function About() {
  return (
    <div
      className={`flex flex-col items-center justify-center ${CONTENT_MIN_HEIGHT} text-center`}
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">About DŪON</h1>
        <p className="text-lg text-muted-foreground">
          DŪON is a modern web application showcase built with React,
          TypeScript, and modern web technologies.
        </p>
      </div>
    </div>
  );
}
