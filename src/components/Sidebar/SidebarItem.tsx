import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SideBarItem } from "@/types";
import { mdScreenSize } from "../../constants";

interface Props {
  item: SideBarItem;
}

const SidebarItem = ({ item }: Props) => {
  const pathname = usePathname();
  const [screenWidth, setScreenWidth] = useState(0);
  const handleWindowResize = () => setScreenWidth(window.innerWidth);
  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

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
        {screenWidth >= mdScreenSize && item.label}
      </Link>
    </li>
  );
};

export default SidebarItem;
