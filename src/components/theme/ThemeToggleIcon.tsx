interface ThemeToggleIconProps {
  theme: string;
}

export function ThemeToggleIcon({ theme }: ThemeToggleIconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 20 20"
      className="
        w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-5 lg:h-5
        transition-transform duration-500 group-hover:rotate-180
      "
    >
      <defs>
        <clipPath id="leftHalf">
          <rect x="0" y="0" width="10" height="20" />
        </clipPath>
        <clipPath id="rightHalf">
          <rect x="10" y="0" width="10" height="20" />
        </clipPath>
      </defs>

      {/* Left half - Black */}
      <circle
        cx="10"
        cy="10"
        r="9"
        fill="currentColor"
        clipPath="url(#leftHalf)"
        className="text-foreground"
      />

      {/* Right half - White */}
      <circle
        cx="10"
        cy="10"
        r="9"
        fill="currentColor"
        clipPath="url(#rightHalf)"
        className="text-background"
      />

      {/* Border - Contrasts with both normal and hover states */}
      <circle
        cx="10"
        cy="10"
        r="9"
        fill="none"
        stroke={theme === "dark" ? "#ffffff" : "#000000"}
        strokeWidth="0.5"
        className={
          theme === "dark"
            ? "group-hover:stroke-black"
            : "group-hover:stroke-white"
        }
        style={{ transition: "stroke 500ms ease-out" }}
      />
    </svg>
  );
}
