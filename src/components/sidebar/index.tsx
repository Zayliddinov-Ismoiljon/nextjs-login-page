'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/assets/images/next-logo.png";
import { X } from "lucide-react";

export default function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  const menuItems = [
    { href: "/dashboard", label: "Bos sahifa", icon: "🏠" },
    { href: "/user", label: "User", icon: "👤" },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed z-40 top-0 left-0 h-full w-64 bg-white shadow-lg px-2 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:static lg:translate-x-0`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
          <Image src={Logo} alt="Logo" width={100} height={100} className="h-24 mx-auto" />
          <button onClick={onClose} className="lg:hidden text-gray-700">
            <X size={24} />
          </button>
        </div>

        <ul className="mt-4 space-y-2 min-h-screen">
          {menuItems.map(({ href, label, icon }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={onClose}
                  className={`flex items-center p-2 rounded-md transition-colors ${
                    isActive
                      ? "bg-green-100 text-green-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span className="mr-2">{icon}</span>
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
