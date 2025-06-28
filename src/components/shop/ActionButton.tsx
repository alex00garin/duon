import type { LucideIcon } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

interface ActionButtonProps {
  icon: LucideIcon;
  title: string;
  onClick?: () => void;
  variant?: "default" | "active";
}

export function ActionButton({
  icon: Icon,
  title,
  onClick,
  variant = "default",
}: ActionButtonProps) {
  const isActive = variant === "active";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={e => {
            e.stopPropagation();
            onClick?.();
          }}
          className={`
            w-9 h-9 backdrop-blur-sm
            flex items-center justify-center
            transition-colors duration-200
            cursor-pointer
            ${
              isActive
                ? "bg-primary/80 hover:bg-primary"
                : "bg-black/20 hover:bg-black/80"
            }
          `}
        >
          <Icon
            size={16}
            className={isActive ? "text-primary-foreground" : "text-zinc-200"}
          />
        </button>
      </TooltipTrigger>
      <TooltipContent side="top" sideOffset={8}>
        <span>{title}</span>
      </TooltipContent>
    </Tooltip>
  );
}
