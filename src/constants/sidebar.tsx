import { Home, FileText, Shield, Settings } from "lucide-react";
import type { ReactNode } from "react";

export interface SidebarItemType {
  label: string;
  path: string;
  icon: ReactNode;
}

export const SIDEBAR_ITEMS: SidebarItemType[] = [
  {
    label: "Dashboard",
    path: "/home",
    icon: <Home size={20} />,
  },
  {
    label: "Projects",
    path: "/projects",
    icon: <FileText size={20} />,
  },
  {
    label: "Scans",
    path: "/scans",
    icon: <Shield size={20} />,
  },
  {
    label: "Schedule",
    path: "/schedule",
    icon: <Settings size={20} />,
  },
  {
    label: "Notifications",
    path: "/notifications",
    icon: <Settings size={20} />,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: <Settings size={20} />,
  }, {
    label: "Support",
    path: "/support",
    icon: <Settings size={20} />,
  },
];