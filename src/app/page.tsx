"use client";
import Sidebar from "@/components/Sidebar";
import React, { type ReactNode } from "react";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <div className="flex flex-col h-full">
        <Sidebar />
        <main className="h-full">
          <div className="ml-12 px-16 py-8 md:ml-32">HELLO!</div>
        </main>
      </div>
    </div>
  );
}
