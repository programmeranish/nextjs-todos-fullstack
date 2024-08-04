"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function page() {
  const pathname = usePathname();

  return <div>this is dynamic {pathname}</div>;
}
