import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SideBarItem } from "@/types";

interface Props {
  item: SideBarItem;
}

const SidebarItem = ({ item }: Props) => {
  const pathname = usePathname();
  const isActive = (item: any) => {
    if (item.route === pathname) return true;
    return false;
  };
  const isItemActive = isActive(item);
  return (
    <li>
      <Link
        href={item.route}
        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium ${isItemActive ? "text-primary" : " text-white"}`}
      >
        {item.icon}
        {item.label}
      </Link>
    </li>
  );
};

export default SidebarItem;
