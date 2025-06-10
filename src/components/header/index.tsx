'use client'
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();

  return(
    <div className="px-3 py-3 shadow-lg w-full flex items-center justify-between mb-5">
      Header
      <div className="flex items-center justify-between">
        <span>{user?.email}</span>
        <button onClick={logout} className="bg-red-500 text-white px-2 py-1 rounded ml-4">
          Logout
        </button>
      </div>
    </div>
  )
}