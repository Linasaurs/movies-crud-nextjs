"use client";
import Sidebar from "@/components/Sidebar";
import React, { useState, type ReactNode } from "react";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex">
      <div className="relative flex flex-1 flex-col mx-16">
        <Sidebar />
        <main>
          <div className="ml-16 px-12 py-8">HELLO!</div>
        </main>
      </div>
    </div>
  );
}
