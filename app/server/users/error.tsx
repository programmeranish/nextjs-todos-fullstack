"use client";
import React, { useEffect } from "react";

export default function error({ error }: { error: Error }) {
  return <div className="text-red-500">error occured</div>;
}
