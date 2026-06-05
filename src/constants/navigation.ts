import type { NavItem } from "@/types/dashboard";
import {
  LayoutDashboard,
  Users,
  FlaskConical,
  Archive,
  Settings,
  HelpCircle,
} from "lucide-react";

export const mainNavItems: NavItem[] = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Wizards", icon: Users },
  { label: "Elixirs", icon: FlaskConical },
  { label: "Archives", icon: Archive },
];

export const footerNavItems: NavItem[] = [
  { label: "Settings", icon: Settings },
  { label: "Support", icon: HelpCircle },
];
