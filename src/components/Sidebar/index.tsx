"use client";
import React from "react";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import {
  AddCircleOutlineOutlined,
  HighlightOffOutlined,
  HomeOutlined,
  PendingOutlined,
} from "@mui/icons-material";
import { type SideBarItem } from "@/types";

const menuItems: SideBarItem[] = [
  {
    icon: <HomeOutlined />,
    label: "Home",
    route: "/",
  },
  {
    icon: <AddCircleOutlineOutlined />,
    label: "Create",
    route: "/create",
  },
  {
    icon: <PendingOutlined />,
    label: "Update",
    route: "/update",
  },
  {
    icon: <HighlightOffOutlined />,
    label: "Delete",
    route: "/delete",
  },
];

export const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-secondary">
      <div className="no-scrollbar flex flex-col overflow-y-auto">
        <nav className="mt-5 px-4 py-4">
          <ul className="flex flex-col gap-1">
            {menuItems.map((menuItem, index) => (
              <SidebarItem key={index} item={menuItem} />
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};
