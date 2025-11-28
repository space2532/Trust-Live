interface CategoryPillProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function CategoryPill({ label, isActive, onClick }: CategoryPillProps) {
  return (
    <button 
      onClick={onClick}
      className={`px-6 py-2 rounded-full whitespace-nowrap transition-all shadow-[0_2px_8px_rgba(0,0,0,0.08)] ${
        isActive 
          ? 'bg-primary text-primary-foreground' 
          : 'bg-white text-foreground hover:bg-muted'
      }`}
    >
      {label}
    </button>
  );
}
