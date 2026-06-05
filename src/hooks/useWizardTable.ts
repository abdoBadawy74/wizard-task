import { useState, useMemo, useEffect } from "react";
import type { Wizard } from "@/types/wizard";

export function useWizardTable(wizards: Wizard[], pageSize = 4) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedWizard, setSelectedWizard] = useState<Wizard | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Reset to first page when search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // Filtered wizards list based on query (first name, last name, specialty, or elixirs)
  const filteredWizards = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return wizards;

    return wizards.filter((wizard) => {
      const firstNameMatch = wizard.firstName?.toLowerCase().includes(query) ?? false;
      const lastNameMatch = wizard.lastName.toLowerCase().includes(query);
      const specialtyMatch = wizard.specialty.toLowerCase().includes(query);
      const elixirMatch = wizard.associatedElixirs.some((elixir) =>
        elixir.name.toLowerCase().includes(query)
      );
      const idMatch = wizard.id.toLowerCase().includes(query);
      const regIdMatch = wizard.registryId.toLowerCase().includes(query);

      return firstNameMatch || lastNameMatch || specialtyMatch || elixirMatch || idMatch || regIdMatch;
    });
  }, [wizards, searchQuery]);

  // Paginated subset of filtered list
  const paginatedWizards = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredWizards.slice(startIndex, startIndex + pageSize);
  }, [filteredWizards, currentPage, pageSize]);

  const totalPages = Math.ceil(filteredWizards.length / pageSize) || 1;

  const openDetailsModal = (wizard: Wizard) => {
    setSelectedWizard(wizard);
    setIsModalOpen(true);
  };

  const closeDetailsModal = () => {
    setIsModalOpen(false);
    setSelectedWizard(null);
  };

  return {
    searchQuery,
    setSearchQuery,
    currentPage,
    setCurrentPage,
    totalPages,
    filteredWizards,
    paginatedWizards,
    totalResults: filteredWizards.length,
    selectedWizard,
    setSelectedWizard,
    isModalOpen,
    setIsModalOpen,
    openDetailsModal,
    closeDetailsModal,
  };
}
