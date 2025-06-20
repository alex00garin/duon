import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link
      to="/"
      className="
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
        font-extralight hover:opacity-80 transition-opacity
        flex-shrink-0
      "
    >
      DŪON
    </Link>
  );
}
