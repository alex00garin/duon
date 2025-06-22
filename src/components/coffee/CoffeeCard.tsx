import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import type { CoffeeTopicDetailed } from "@/lib/coffee-data";

interface CoffeeCardProps {
  title: string;
  description: string;
  content: CoffeeTopicDetailed[];
  isActive: boolean;
  isHeaderVisible: boolean;
  onClick: () => void;
}

export function CoffeeCard({
  title,
  description,
  content,
  isActive,
  isHeaderVisible,
  onClick,
}: CoffeeCardProps) {
  const [scrollState, setScrollState] = useState({
    canScrollUp: false,
    canScrollDown: false,
  });
  const scrollRef = useRef<HTMLDivElement>(null);

  // Calculate sticky position based on header visibility
  const stickyTop = isHeaderVisible
    ? "top-[var(--header-height-mobile)] sm:top-[var(--header-height-sm)] md:top-[var(--header-height-md)] lg:top-[var(--header-height-lg)]"
    : "top-0";

  const handleScroll = () => {
    if (!scrollRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    const canScrollUp = scrollTop > 10;
    const canScrollDown = scrollTop < scrollHeight - clientHeight - 10;

    setScrollState({ canScrollUp, canScrollDown });
  };

  useEffect(() => {
    if (isActive && scrollRef.current) {
      // Check initial scroll state
      handleScroll();
    }
  }, [isActive]);

  return (
    <div className="border border-border bg-background">
      {/* Card Header - Sticky when active */}
      <button
        onClick={onClick}
        className={`w-full p-4 sm:p-6 text-left hover:bg-muted/50 transition-colors duration-200 flex items-center justify-between bg-background border-b border-border/50 ${
          isActive ? `sticky ${stickyTop} z-10` : ""
        }`}
      >
        <div>
          <h3 className="sm:text-lg font-semibold uppercase tracking-wide mb-2">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground">
            {description}
          </p>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
            isActive ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Expandable Content */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-muted/30 relative"
          >
            {/* Top scroll indicator */}
            <div
              className={`absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-background/90 via-background/60 to-transparent pointer-events-none z-10 transition-opacity duration-200 ${
                scrollState.canScrollUp ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* Scrollable content */}
            <div
              ref={scrollRef}
              className="max-h-[80vh] overflow-y-auto"
              onScroll={handleScroll}
            >
              <div className="p-6 space-y-6">
                {content.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row gap-4 pb-6 border-b border-border/30 last:border-0 last:pb-0"
                  >
                    <div className="flex-1">
                      <h4 className="text-base font-semibold mb-3">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed text-sm whitespace-pre-line">
                        {item.description}
                      </p>
                    </div>
                    <div className="md:w-32 md:h-32 w-full h-auto bg-muted/50 border border-border/50 flex items-center justify-center overflow-hidden flex-shrink-0">
                      {item.illustration ? (
                        <img
                          src={item.illustration}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-center text-muted-foreground">
                          <div className="text-2xl mb-1">☕</div>
                          <p className="text-xs">{item.title}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom scroll indicator */}
            <div
              className={`absolute bottom-0 left-0 right-0 h-12 sm:h-38 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none z-10 transition-opacity duration-200 ${
                scrollState.canScrollDown ? "opacity-100" : "opacity-0"
              }`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
