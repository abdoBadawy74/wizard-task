import { Menu, Bell, Settings, Search } from "lucide-react";
import avatar from "../../assets/images/avatar.jpg";

interface HeaderProps {
  onMenuToggle: () => void;
}

export function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-border-subtle bg-background/80 px-6 backdrop-blur-md">
      {/* Brand & Hamburger Toggle */}
      <div className="flex items-center gap-3">
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle hover:bg-card-hover text-text-secondary hover:text-text-primary transition-colors lg:hidden"
          onClick={onMenuToggle}
          aria-label="Toggle Sidebar"
        >
          <Menu className="h-5 w-5" />
        </button>

        <h1 className="text-xl font-bold tracking-tight text-accent-amber font-sans">
          Wizarding Registry
        </h1>
      </div>

      {/* Center Search - Aesthetic Global Search */}
      <div className="hidden md:block w-full max-w-md px-4">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            placeholder="Scrying records..."
            className="h-10 w-full rounded-lg border border-border-subtle bg-card/50 pl-10 pr-4 text-sm text-text-primary placeholder-text-muted focus:border-accent-purple/50 focus:bg-card focus:outline-none focus:ring-1 focus:ring-accent-lavender transition-all"
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-2">
        {/* Notifications */}
        <button
          className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle text-text-secondary hover:bg-card-hover hover:text-text-primary transition-all"
          aria-label="Notifications"
        >
          <Bell className="h-4.5 w-4.5" />
          {/* Notification dot indicator */}
          <span className="absolute top-2 right-2.5 h-2 w-2 rounded-full bg-accent-orange animate-pulse" />
        </button>

        {/* Settings */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle text-text-secondary hover:bg-card-hover hover:text-text-primary transition-all"
          aria-label="Settings"
        >
          <Settings className="h-4.5 w-4.5" />
        </button>

        {/* Avatar / Profile */}
        <div className="ml-2 h-9 w-9 overflow-hidden rounded-full border border-accent-purple/50 bg-accent-purple/10 flex items-center justify-center shadow-inner cursor-pointer hover:border-accent-purple transition-all">
          <img src={avatar} className="h-full w-full object-cover" alt="Avatar" />
        </div>
      </div>
    </header>
  );
}
