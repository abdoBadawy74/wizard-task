export type WizardStatus = "active" | "inactive" | "pending";

export type WizardClassification =
  | "Class A Citizen"
  | "High Council"
  | "Order of Merlin"
  | "Arcane Scholar";

export interface Elixir {
  id: string;
  name: string;
  inventory: number;
}

export interface Wizard {
  id: string;
  firstName: string | null;
  lastName: string;
  registryId: string;
  status: WizardStatus;
  specialty: string;
  classification: WizardClassification[];
  associatedElixirs: Elixir[];
}
