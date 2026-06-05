import { PageTitle } from "@/components/dashboard/PageTitle";
import { StatsGrid } from "@/components/dashboard/StatsGrid";
import { ChartsGrid } from "@/components/dashboard/ChartsGrid";
import { WizardTable } from "@/components/table/WizardTable";
import { WizardDetailsModal } from "@/components/modal/WizardDetailsModal";
import { useWizardTable } from "@/hooks/useWizardTable";
import { mockWizards } from "@/data/mockWizards";

export function DashboardPage() {
  const {
    searchQuery,
    setSearchQuery,
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedWizards,
    totalResults,
    selectedWizard,
    isModalOpen,
    openDetailsModal,
    closeDetailsModal,
  } = useWizardTable(mockWizards, 4);

  return (
    <>
      {/* Title section */}
      <PageTitle
        title="Wizarding Registry Dashboard"
        subtitle="Overseeing the mystical equilibrium across all magical realms."
      />

      {/* Metric Cards Row */}
      <StatsGrid />

      {/* Recharts Activity and Specialty Row */}
      <ChartsGrid />

      {/* Main Table Registry Search and pagination */}
      <WizardTable
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        currentPage={currentPage}
        totalPages={totalPages}
        totalResults={totalResults}
        paginatedWizards={paginatedWizards}
        onPageChange={setCurrentPage}
        onViewDetails={openDetailsModal}
      />

      {/* Details Dialog overlay */}
      <WizardDetailsModal
        wizard={selectedWizard}
        isOpen={isModalOpen}
        onClose={closeDetailsModal}
      />
    </>
  );
}
export default DashboardPage;
