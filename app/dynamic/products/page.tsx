"use client";
import { getCurrentTime } from "@/app/utils/client-utils";
import React from "react";

export default function DynamicProductsPage() {
  console.log("this is in server");
  const currentTime = getCurrentTime();
  return <div>{currentTime}this is in dynamic products page</div>;
}
