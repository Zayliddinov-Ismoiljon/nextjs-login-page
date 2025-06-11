'use client'

import Header from "../header";
import MainLoading from "../main_loading";
import Sidebar from "../sidebar";
import { useState } from "react";

export default function PriviteLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen relative">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="flex flex-col w-full bg-[#F5F6FA] min-h-screen">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <div className="flex-1 p-3">
          <MainLoading />
          {children}
        </div>
      </div>
    </div>
  );
}
