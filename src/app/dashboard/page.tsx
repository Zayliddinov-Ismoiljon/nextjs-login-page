"use client";

import PriviteLayout from "@/components/layout/privite_layout";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const token = Cookies.get("token");
  const router = useRouter()

  useEffect(() => {
    if(!token){
      router.push('/login')
    }
  }, [token, router])


  return (
    <PriviteLayout>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12 lg:col-span-8 grid grid-cols-12 gap-3">
          <div className="col-span-12 md:col-span-6 rounded p-2 bg-white h-[150px]">col-span-6</div>
          <div className="col-span-12 md:col-span-6 rounded p-2 bg-white h-[150px]">col-span-6</div>
          <div className="col-span-12 rounded p-2 bg-white h-[300px]">col-span-12</div>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-4 rounded p-2 bg-white">col-span-4</div>

        <div className="col-span-12 md:col-span-4 rounded p-2 bg-white h-[250px]">col-span-4</div>
        <div className="col-span-12 md:col-span-4 rounded p-2 bg-white h-[250px]">col-span-4</div>
        <div className="col-span-12 md:col-span-4 rounded p-2 bg-white h-[250px]">col-span-4</div>
      </div>

    </PriviteLayout>
  );
}
