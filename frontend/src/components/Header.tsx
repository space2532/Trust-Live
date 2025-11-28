import { Bell, Search } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-border">
      <div className="px-4 py-3 flex items-center justify-between max-w-md mx-auto">
        <h1 className="text-primary">Trust-Live</h1>
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-muted rounded-[20px] transition-colors">
            <Search className="w-5 h-5 text-foreground" />
          </button>
          <button className="p-2 hover:bg-muted rounded-[20px] transition-colors relative">
            <Bell className="w-5 h-5 text-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-secondary rounded-full" />
          </button>
        </div>
      </div>
    </header>
  );
}
