import { motion } from "framer-motion";
import { BlurIn } from "./blur-in";
import { type ReactNode } from "react";

interface SectionProps {
  title: string;
  description?: string;
  children?: ReactNode;
  animated?: boolean;
  className?: string;
}

export function Section({
  title,
  description,
  children,
  animated = false,
  className = "",
}: SectionProps) {
  const titleElement = animated ? (
    <motion.h1
      className="text-4xl sm:text-5xl font-bold uppercase tracking-tight mb-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {title}
    </motion.h1>
  ) : (
    <h1 className="text-4xl sm:text-5xl font-bold uppercase tracking-tight mb-4">
      {title}
    </h1>
  );

  return (
    <div className={`flex flex-col items-center mt-10 text-left ${className}`}>
      <div className="max-w-7xl mx-auto w-full">
        {titleElement}
        {description && (
          <BlurIn>
            <p className="text-lg text-muted-foreground mb-4">{description}</p>
          </BlurIn>
        )}
        {children}
      </div>
    </div>
  );
}
