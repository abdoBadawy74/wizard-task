import { FlaskConical, Edit3 } from "lucide-react";
import type { Wizard } from "@/types/wizard";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ElixirListItem } from "./ElixirListItem";
import profileImg from "@/assets/images/model.jpg";

interface WizardDetailsModalProps {
  wizard: Wizard | null;
  isOpen: boolean;
  onClose: () => void;
}

export function WizardDetailsModal({
  wizard,
  isOpen,
  onClose,
}: WizardDetailsModalProps) {
  if (!wizard) return null;

  // Status color config helper
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-accent-green";
      case "pending":
        return "bg-accent-amber animate-pulse";
      default:
        return "bg-text-muted";
    }
  };

  // Render class badge styles
  const getClassBadgeStyle = (classification: string) => {
    switch (classification) {
      case "Class A Citizen":
        return "border border-border-subtle text-text-secondary bg-transparent";
      case "High Council":
        return "bg-accent-amber/15 text-accent-amber border border-accent-amber/30";
      case "Order of Merlin":
        return "bg-accent-lavender/15 text-accent-lavender border border-accent-lavender/30";
      default:
        return "bg-accent-orange/15 text-accent-orange border border-accent-orange/30";
    }
  };

  const fullName = `${wizard.firstName || ""} ${wizard.lastName}`.trim();

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[620px] bg-card border-border-subtle p-6 overflow-hidden">
        {/* Top Header Section */}
        <DialogHeader className="mb-6">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-accent-amber uppercase">
                Member Profile
              </span>
              <DialogTitle className="text-2xl font-extrabold text-text-primary mt-1">
                {wizard.firstName ? fullName : `${wizard.lastName}`}
              </DialogTitle>
            </div>
            {/* Registry ID badge */}
            <div className="text-right">
              <span className="text-[10px] font-bold tracking-wider text-text-muted uppercase">
                Registry ID
              </span>
              <p className="text-sm font-bold text-accent-amber font-mono mt-0.5">
                {wizard.registryId}
              </p>
            </div>
          </div>
        </DialogHeader>

        {/* Profile Card & Bio Grid */}
        <div className="grid gap-6 sm:grid-cols-12 mb-6">
          {/* Left column */}
          <div className="sm:col-span-4 flex flex-col items-center gap-4 text-center">
            <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-b from-accent-amber/20 to-card-hover/40 p-1 border-2 border-accent-amber/40 shadow-xl shadow-accent-amber/5">
              <div className="h-full w-full rounded-full bg-gradient-to-tr from-card to-card-hover/90 flex items-center justify-center overflow-hidden border border-border-subtle">
                <img src={profileImg} alt="profile" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-1.5 w-full">
              {wizard.classification.map((cls) => (
                <span
                  key={cls}
                  className={`rounded-full px-2.5 py-0.5 text-[9px] font-semibold tracking-wide ${getClassBadgeStyle(
                    cls
                  )}`}
                >
                  {cls}
                </span>
              ))}
            </div>
          </div>

          {/* Right Bio Fields Grid */}
          <div className="sm:col-span-8 rounded-xl border border-border-subtle bg-card-hover/20 p-5 flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-y-4 gap-x-6">
              {/* First Name */}
              <div>
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block">
                  First Name
                </span>
                <span className="text-xs font-semibold text-text-primary block mt-1">
                  {wizard.firstName || <span className="text-text-muted italic">Unknown</span>}
                </span>
              </div>

              {/* Last Name */}
              <div>
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block">
                  Last Name
                </span>
                <span className="text-xs font-semibold text-text-primary block mt-1">
                  {wizard.lastName}
                </span>
              </div>

              {/* Registry Status */}
              <div>
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block">
                  Registry Status
                </span>
                <div className="flex items-center gap-1.5 mt-1">
                  <span
                    className={`h-2 w-2 rounded-full ${getStatusColor(
                      wizard.status
                    )}`}
                  />
                  <span className="text-xs font-semibold text-text-primary capitalize">
                    {wizard.status}
                  </span>
                </div>
              </div>

              {/* Primary Specialty */}
              <div>
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block">
                  Primary Specialty
                </span>
                <span className="text-xs font-semibold text-text-primary block mt-1 line-clamp-2" title={wizard.specialty}>
                  {wizard.specialty}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Associated Elixirs Sub-Section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3 border-b border-border-subtle pb-2">
            <FlaskConical className="h-4.5 w-4.5 text-accent-lavender" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-text-secondary">
              Associated Elixirs
            </h4>
          </div>

          {wizard.associatedElixirs.length > 0 ? (
            <div className="grid gap-2 max-h-48 overflow-y-auto pr-1">
              {wizard.associatedElixirs.map((elixir) => (
                <ElixirListItem key={elixir.id} elixir={elixir} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-border-subtle py-8 text-center bg-card/20 select-none">
              <span className="text-xs text-text-muted italic">
                No magical formulas or elixirs registered under this member profile.
              </span>
            </div>
          )}
        </div>

        {/* Footer controls */}
        <DialogFooter className="mt-8 border-t border-border-subtle/50 pt-4 flex sm:items-center sm:justify-end gap-2">
          <Button variant="ghost" onClick={onClose} className="px-5 text-xs font-semibold border border-border-subtle">
            Close
          </Button>
          <Button className="gap-2 bg-accent-lavender text-xs font-semibold text-accent-purple shadow-lg hover:bg-accent-lavender/80 px-5">
            <Edit3 className="h-3.5 w-3.5" />
            <span>Edit Record</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
