import { useState } from "react";
import SidebarItem from "./SidebarItem";
import { SIDEBAR_ITEMS } from "../../constants/sidebar";
import { Menu, X } from "lucide-react";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const primaryItems = SIDEBAR_ITEMS.slice(0, 4);
  const secondaryItems = SIDEBAR_ITEMS.slice(4);

  return (
    <>
      <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b bg-white dark:bg-gray-900 dark:border-gray-800">
        <span className="font-bold text-lg dark:text-white">aps</span>
        <button onClick={() => setIsOpen(true)} className="dark:text-gray-400">
          <Menu size={24} />
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
          fixed lg:static top-0 left-0 z-50
          h-full lg:h-auto
          w-64
          bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-800
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
          flex flex-col py-6
        `}
      >
        <div className="lg:hidden flex justify-end px-4 mb-4">
          <button onClick={() => setIsOpen(false)} className="dark:text-gray-400">
            <X size={22} />
          </button>
        </div>

        <div className="flex items-center gap-2 px-6 mb-6">
          <div className="w-6 h-6 bg-[#00d2b4] rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <span className="text-xl font-bold tracking-tight dark:text-white">aps</span>
        </div>

        <nav className="flex flex-col flex-1">
          <div className="flex flex-col gap-3 px-6">
            {primaryItems.map((item) => (
              <SidebarItem key={item.path} {...item} />
            ))}
          </div>

          <hr className="my-6 mx-6 border-gray-200 dark:border-gray-800" />

          <div className="flex flex-col gap-3 px-6">
            {secondaryItems.map((item) => (
              <SidebarItem key={item.path} {...item} />
            ))}
          </div>
        </nav>

        <div className="mt-auto px-6 flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400">
              👤
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-400 dark:text-gray-500">
                admin@edu.in
              </span>
              <span className="text-xs font-medium dark:text-gray-300">
                Security Lead
              </span>
            </div>
          </div>
          <span className="text-gray-500 dark:text-gray-600">&gt;</span>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;