"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/assets/images/next-logo.png";

const MainLoading = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      <div className="relative w-32 h-32 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-4 border-dashed border-blue-500 animate-spin" />
        <Image src={Logo} alt="Logo" width={64} height={64} className="z-10" />
      </div>
    </div>
  );
};

export default MainLoading;
