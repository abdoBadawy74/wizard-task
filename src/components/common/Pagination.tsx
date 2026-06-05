import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalResults: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  totalResults,
  pageSize,
  onPageChange,
}: PaginationProps) {
  const startResult = Math.min((currentPage - 1) * pageSize + 1, totalResults);
  const endResult = Math.min(currentPage * pageSize, totalResults);

  // Generate page numbers to display
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border-subtle/80 bg-card/10 px-6 py-4">
      {/* Total records text */}
      <span className="text-xs text-text-secondary">
        Showing{" "}
        <span className="font-semibold text-text-primary">
          {totalResults === 0 ? 0 : startResult}-{endResult}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-text-primary">
          {totalResults.toLocaleString()}
        </span>{" "}
        Records
      </span>

      {/* Page Navigation */}
      <div className="flex items-center gap-1.5">
        {/* Previous page */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-text-secondary hover:bg-card-hover hover:text-text-primary disabled:pointer-events-none disabled:opacity-30 transition-all"
          aria-label="Previous Page"
        >
          <ChevronLeft className="h-4.5 w-4.5" />
        </button>

        {/* Page buttons */}
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-lg text-xs font-semibold transition-all",
              currentPage === page
                ? "bg-accent-lavender text-white shadow-md shadow-accent-lavender/20"
                : "text-text-secondary hover:bg-card-hover hover:text-text-primary"
            )}
            aria-label={`Page ${page}`}
            aria-current={currentPage === page ? "page" : undefined}
          >
            {page}
          </button>
        ))}

        {/* Next page */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-text-secondary hover:bg-card-hover hover:text-text-primary disabled:pointer-events-none disabled:opacity-30 transition-all"
          aria-label="Next Page"
        >
          <ChevronRight className="h-4.5 w-4.5" />
        </button>
      </div>
    </div>
  );
}
