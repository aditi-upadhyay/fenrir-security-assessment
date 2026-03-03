import { NavLink } from "react-router-dom";
import type { SidebarItemType } from "../../constants/sidebar";

const SidebarItem: React.FC<SidebarItemType> = ({
  label,
  path,
  icon,
}) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `flex flex-row items-center gap-2 px-3 py-3 rounded-full transition-all duration-200
        ${
          isActive
            ? "bg-teal-50 text-teal-500 dark:bg-teal-500/10 dark:text-teal-400"
            : "text-gray-400 hover:text-gray-600 dark:text-gray-500 "
        }`
      }
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </NavLink>
  );
};

export default SidebarItem;