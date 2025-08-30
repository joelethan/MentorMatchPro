import { cn } from "@/lib/utils";

interface SkillTagProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function SkillTag({ children, className, onClick }: SkillTagProps) {
  return (
    <span
      className={cn(
        "bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium skill-tag cursor-default",
        onClick && "cursor-pointer hover:bg-primary/20",
        className
      )}
      onClick={onClick}
      data-testid={`skill-tag-${children}`}
    >
      {children}
    </span>
  );
}
