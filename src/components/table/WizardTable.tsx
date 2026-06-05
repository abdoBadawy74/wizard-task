import { Filter } from "lucide-react";
import type { Wizard } from "@/types/wizard";
import { SearchInput } from "@/components/common/SearchInput";
import { Pagination } from "@/components/common/Pagination";
import { EmptyState } from "./EmptyState";
import { WizardRow } from "./WizardRow";

interface WizardTableProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  currentPage: number;
  totalPages: number;
  totalResults: number;
  paginatedWizards: Wizard[];
  onPageChange: (page: number) => void;
  onViewDetails: (wizard: Wizard) => void;
}

export function WizardTable({
  searchQuery,
  onSearchChange,
  currentPage,
  totalPages,
  totalResults,
  paginatedWizards,
  onPageChange,
  onViewDetails,
}: WizardTableProps) {
  const handleClearSearch = () => {
    onSearchChange("");
  };

  return (
    <div className="rounded-xl border border-border-subtle bg-card shadow-md shadow-black/10 overflow-hidden">
      {/* Table Title Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 border-b border-border-subtle/80">
        <h3 className="font-semibold tracking-wider text-text-primary text-base">
          Master Wizard Registry
        </h3>

        {/* Search & Filter Header controls */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <SearchInput
            placeholder="Search wizards..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="sm:w-64"
          />
          <button
            className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border-subtle bg-card/60 px-3 text-xs font-semibold text-text-secondary hover:bg-card-hover hover:text-text-primary transition-all shrink-0"
            aria-label="Filter Registry"
          >
            <Filter className="h-3.5 w-3.5" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Table Content */}
      {totalResults === 0 ? (
        <EmptyState onClear={handleClearSearch} />
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border-subtle bg-card-hover/20 text-[10px] font-bold uppercase tracking-wider text-text-muted select-none">
                  <th scope="col" className="px-6 py-4">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-4">
                    First Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Last Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Associated Elixirs
                  </th>
                  <th scope="col" className="px-6 py-4 text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedWizards.map((wizard) => (
                  <WizardRow
                    key={wizard.id}
                    wizard={wizard}
                    onViewDetails={onViewDetails}
                  />
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer / Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalResults={totalResults}
            pageSize={4}
            onPageChange={onPageChange}
          />
        </>
      )}
    </div>
  );
}
