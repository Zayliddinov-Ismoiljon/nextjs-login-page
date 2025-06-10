"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/assets/images/next-logo.png";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { href: "/dashboard", label: "Bos sahifa", icon: "🏠" },
    { href: "/user", label: "User", icon: "👤" },
  ];

  return (
    <div className="w-64 h-screen bg-white shadow-lg px-2">
      <div className="flex justify-center items-center p-4 border-b border-gray-300">
        <Image src={Logo} alt="Logo" width={100} height={100} className="h-24" />
      </div>

      <ul className="mt-4 space-y-2">
        {menuItems.map(({ href, label, icon }) => {
          const isActive = pathname === href;
          return (
            <li key={href}>
              <Link href={href} className={`flex items-center p-2 rounded-md transition-colors ${ isActive ? "bg-green-100 text-green-600" : "text-gray-700 hover:bg-gray-100" }`} >
                <span className="mr-2">{icon}</span>{label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
