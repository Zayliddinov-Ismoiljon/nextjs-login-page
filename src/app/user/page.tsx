"use client";

import PriviteLayout from "@/components/layout/privite_layout";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function User() {
  const token = Cookies.get("token");
  const router = useRouter()

  useEffect(() => {
    if(!token){
      router.push('/login')
    }
  }, [token])

  return (
    <PriviteLayout>
      User
    </PriviteLayout>
  );
}