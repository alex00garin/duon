import { Heart, Info } from "lucide-react";
import { ActionButton } from "./ActionButton";
import { useLanguage } from "@/components/language/useLanguage";

interface ActionButtonsProps {
  isActive: boolean;
  onInfo?: () => void;
  onInterest?: () => void;
  interestCount?: number;
  isInterested?: boolean;
}

const translations = {
  en: {
    moreInfo: "More info",
    interested: "I want this",
    interestedActive: "I want this!",
  },
  cy: {
    moreInfo: "Mwy o wybodaeth",
    interested: "Rwy'n eisiau hwn",
    interestedActive: "Rwy'n eisiau hwn!",
  },
};

export function ActionButtons({
  isActive,
  onInfo,
  onInterest,
  interestCount = 0,
  isInterested = false,
}: ActionButtonsProps) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div
      className={`
      absolute bottom-2 right-4 
      flex flex-row gap-2
      transition-opacity duration-300 ease-in-out
      z-10
      ${isActive ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"}
    `}
    >
      <ActionButton icon={Info} title={t.moreInfo} onClick={onInfo} />

      {/* Interest Button with Heart Icon and Count */}
      <div className="relative">
        <ActionButton
          icon={Heart}
          title={isInterested ? t.interestedActive : t.interested}
          onClick={onInterest}
          variant={isInterested ? "active" : "default"}
        />
        {interestCount > 0 && (
          <div className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {interestCount > 99 ? "99+" : interestCount}
          </div>
        )}
      </div>
    </div>
  );
}
