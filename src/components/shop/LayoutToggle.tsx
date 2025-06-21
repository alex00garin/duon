import { Grid, List } from "lucide-react";

interface LayoutToggleProps {
  isTwoColumns: boolean;
  onToggle: () => void;
}

export function LayoutToggle({ isTwoColumns, onToggle }: LayoutToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="
        md:hidden
        flex items-center gap-2 p-2
        border border-border bg-background
        hover:bg-muted/50 transition-colors
        text-sm font-medium uppercase tracking-wide
      "
    >
      {isTwoColumns ? (
        <>
          <Grid className="w-4 h-4" />
        </>
      ) : (
        <>
          <List className="w-4 h-4" />
        </>
      )}
    </button>
  );
}
