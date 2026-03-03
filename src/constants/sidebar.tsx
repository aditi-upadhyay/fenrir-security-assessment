import { LayoutDashboard, ClipboardCheck, FileChartColumn, Calendar, Bell, Settings, Info } from "lucide-react";
import type { ReactNode } from "react";

export interface SidebarItemType {
  label: string;
  path: string;
  icon: ReactNode;
  hasNotification?: boolean;
}

const IconWrapper = ({ children, hasDot }: { children: ReactNode; hasDot?: boolean }) => (
  <div className="relative flex items-center justify-center">
    {children}
    {hasDot && (
      <span className="absolute -bottom-0.5 -left-0.5 w-2.5 h-2.5 bg-[#f97316] rounded-full border-[2px] border-white dark:border-gray-900"></span>
    )}
  </div>
);

export const SIDEBAR_ITEMS: SidebarItemType[] = [
  {
    label: "Dashboard",
    path: "/home",
    icon: <IconWrapper><LayoutDashboard size={20} /></IconWrapper>,
  },
  {
    label: "Projects",
    path: "/projects",
    icon: <IconWrapper><ClipboardCheck size={20} /></IconWrapper>,
  },
  {
    label: "Scans",
    path: "/scans",
    icon: <IconWrapper hasDot><FileChartColumn size={20} /></IconWrapper>,
  },
  {
    label: "Schedule",
    path: "/schedule",
    icon: <IconWrapper><Calendar size={20} /></IconWrapper>,
  },
  {
    label: "Notifications",
    path: "/notifications",
    icon: <IconWrapper hasDot><Bell size={20} /></IconWrapper>,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: <IconWrapper><Settings size={20} /></IconWrapper>,
  },
  {
    label: "Support",
    path: "/support",
    icon: <IconWrapper><Info size={20} /></IconWrapper>,
  },
];