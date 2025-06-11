'use client'

import { useAuth } from "@/context/AuthContext";
import { Menu } from "lucide-react";

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const { user, logout } = useAuth();

  return (
    <div className="px-3 py-3 shadow-lg w-full flex items-center justify-between bg-white sticky top-0 z-20">
      <div className="flex items-center gap-3">
        <button onClick={onMenuClick} className="lg:hidden">
          <Menu size={24} />
        </button>
        <h1 className="font-semibold text-lg">Header</h1>
      </div>

      <div className="flex items-center justify-between text-sm">
        <span>{user?.email}</span>
        <button onClick={logout} className="bg-red-500 text-white px-2 py-1 rounded ml-4">
          Logout
        </button>
      </div>
    </div>
  );
}
