import { Sparkles, Plus } from "lucide-react";
import { mainNavItems, footerNavItems } from "@/constants/navigation";
import { SidebarNavItem } from "./SidebarNavItem";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed bottom-0 top-16 left-0 z-40 flex w-64 flex-col border-r border-border-subtle bg-card px-4 py-6 transition-transform duration-300 lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Brand/Logo */}
        <div className="mb-8 flex flex-col items-center px-2 text-center">

          {/* <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl border border-accent-amber  shadow-lg shadow-accent-amber/5">
            <Sparkles className="h-7 w-7 text-accent-amber" />
          </div> */}

          <div className="rounded-xl bg-gradient-to-br from-accent-lavender to-accent-peach p-[1px]">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-card shadow-lg shadow-accent-amber/5">
              <Sparkles className="h-7 w-7 text-accent-amber" />
            </div>
          </div>

          <h2 className="text-lg font-semibold text-accent-amber uppercase mt-3">
            Registry
          </h2>
          <p className="text-[10px] text-text-secondary">
            Ministry of Alchemical Records
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 space-y-1.5 px-1">
          {mainNavItems.map((item) => (
            <SidebarNavItem key={item.label} item={item} />
          ))}
        </nav>

        {/* Footer Actions */}
        <div className="mt-auto space-y-5 px-1">
          {/* New Elixir Button */}
          <Button className="w-full justify-center gap-2 bg-accent-lavender font-semibold text-accent-purple shadow-lg shadow-accent-purple/20 hover:bg-accent-lavender/80 py-5 transition-all duration-300">
            <Plus className="h-4 w-4" />
            <span>New Elixir</span>
          </Button>

          {/* Footer Navigation */}
          <div className="space-y-1.5 pt-4 border-t border-border-subtle/50">
            {footerNavItems.map((item) => (
              <SidebarNavItem key={item.label} item={item} />
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
