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
}

export function ActionButton({
  icon: Icon,
  title,
  onClick,
}: ActionButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={onClick}
          className="
            w-9 h-9  bg-black/20 backdrop-blur-sm
            flex items-center justify-center
            transition-colors duration-200
            hover:bg-black/80
            cursor-pointer
          "
        >
          <Icon size={16} className="text-zinc-200" />
        </button>
      </TooltipTrigger>
      <TooltipContent side="top" sideOffset={8}>
        <span>{title}</span>
      </TooltipContent>
    </Tooltip>
  );
}
