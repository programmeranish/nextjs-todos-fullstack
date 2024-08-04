import React from "react";

export default function Loading() {
  return (
    <span className="relative flex h-20 w-20">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
    </span>
  );
}
