import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface CoffeeCardProps {
  title: string;
  description: string;
  content: string;
  index: number;
  isActive: boolean;
  isCollapsed: boolean;
  onClick: () => void;
}

export function CoffeeCard({
  title,
  description,
  content,
  index,
  isActive,
  isCollapsed,
  onClick,
}: CoffeeCardProps) {
  return (
    <div>
      <motion.div
        className="relative group cursor-pointer overflow-hidden"
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.4 + index * 0.1,
          ease: "easeOut",
        }}
      >
        <div
          onClick={onClick}
          className={`block border border-border bg-background transition-all z-10 duration-200 hover:-translate-y-1 ${
            isActive ? "bg-muted border-foreground" : ""
          } ${isCollapsed ? "p-4" : "p-6"}`}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="relative overflow-hidden mb-2">
                <h3
                  className={`relative z-10 font-semibold uppercase tracking-wide transition-colors duration-500 group-hover:text-background ${
                    isCollapsed ? "text-sm" : "text-lg"
                  }`}
                >
                  {title}
                </h3>
                {/* Fill effect for title */}
                <div className="absolute left-0 right-0 bottom-0 h-0 bg-foreground transition-all duration-500 ease-out group-hover:h-full" />
              </div>
              {!isCollapsed && (
                <p className="text-sm text-muted-foreground">{description}</p>
              )}
            </div>
            <ArrowUpRight
              className={`text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0 ${
                isCollapsed ? "w-3 h-3 ml-2" : "w-4 h-4 ml-4"
              }`}
            />
          </div>
        </div>
      </motion.div>

      {/* Mobile accordion content */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-l border-r border-b border-border bg-muted/30 px-6 pb-6"
          >
            <div className="pt-4">
              <h4 className="text-lg font-semibold mb-3 uppercase">{title}</h4>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {content}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
